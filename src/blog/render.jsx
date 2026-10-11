// Monta as páginas do blog no servidor: no build (tools/prerender.js) e no `npm run dev` (plugin em vite.config.js).
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { POSTS } from '@/blog/posts';
import { prepararConteudo } from '@/blog/conteudo';
import { linkWhatsapp } from '@/lib/whatsapp';
import { headDoPost, headDoBlog, SITE_URL, URL_DO_BLOG, urlDoPost } from '@/blog/seo';
import PaginaDoPost from '@/blog/PaginaDoPost';
import PaginaDoBlog from '@/blog/PaginaDoBlog';
import { capaDoPost } from '@/blog/imagens';
import { montarLlmsTxt } from '@/lib/llms';

const textos = import.meta.glob('./posts/*.html', { query: '?raw', import: 'default', eager: true });

// Mais recentes primeiro; na mesma data, o último cadastrado em posts/index.js vem antes.
const posts = POSTS.map((post, ordem) => ({ post, ordem }))
  .sort((a, b) => b.post.publicadoEm.localeCompare(a.post.publicadoEm) || b.ordem - a.ordem)
  .map(({ post }) => post);
const slugs = new Set(posts.map((post) => post.slug));

const conteudos = new Map(
  posts.map((post) => {
    const html = textos[`./posts/${post.slug}.html`];
    if (html === undefined) throw new Error(`blog: falta o texto src/blog/posts/${post.slug}.html`);
    const link = post.mensagemWhatsapp ? linkWhatsapp(post.mensagemWhatsapp) : undefined;
    return [post.slug, prepararConteudo(html, slugs, link)];
  }),
);
const minutosDe = (post) => conteudos.get(post.slug).minutosDeLeitura;

export const rotasDoBlog = () => (posts.length ? ['/blog', ...posts.map((post) => `/blog/${post.slug}`)] : []);

/**
 * HTML de uma página do blog, em partes para o template blog.html; null se a rota não existe.
 * Cabeçalho e botão de WhatsApp são ilhas hidratadas no navegador (src/blog/client.jsx);
 * o resto é HTML estático.
 */
export function renderBlog(url) {
  const caminho = url.split(/[?#]/)[0].replace(/\/+$/, '');
  if (!posts.length) return null;

  let head;
  let pagina;
  if (caminho === '/blog') {
    head = headDoBlog(posts);
    pagina = <PaginaDoBlog posts={posts} minutosDe={minutosDe} />;
  } else {
    const post = posts.find((p) => `/blog/${p.slug}` === caminho);
    if (!post) return null;
    const conteudo = conteudos.get(post.slug);
    head = headDoPost(post, conteudo);
    pagina = <PaginaDoPost post={post} conteudo={conteudo} outros={posts.filter((p) => p !== post).slice(0, 3)} minutosDe={minutosDe} />;
  }

  return {
    head,
    cabecalho: renderToString(<Header blog />),
    conteudo: renderToStaticMarkup(
      <>
        {pagina}
        <Footer />
      </>,
    ),
    whatsapp: renderToString(<WhatsAppButton blog />),
  };
}

// Imagens da página inicial que valem aparecer na busca de imagens.
const IMAGENS_DA_HOME = [
  '/dra-isabela-bertoglio.jpg',
  '/dra-isabela-consultorio.webp',
  '/bioimpedancia-inbody-380.webp',
  '/unyque/unyque-pro-equipamento.webp',
  '/unyque/unyque-pro-antes-depois-coxas.webp',
  '/unyque/unyque-pro-antes-depois-gluteo-coxa.webp',
  '/unyque/unyque-pro-antes-depois-coxas-2.webp',
  '/resultados/emagrecimento-antes-depois-1.webp',
  '/resultados/emagrecimento-antes-depois-2.webp',
  '/resultados/emagrecimento-antes-depois-3.webp',
  '/resultados/emagrecimento-antes-depois-4.webp',
  '/resultados/emagrecimento-antes-depois-5.webp',
  '/clinica/clinica-belvita-recepcao.webp',
  '/clinica/clinica-belvita-sala-de-espera.webp',
  '/clinica/clinica-belvita-consultorio.webp',
  '/clinica/clinica-belvita-detalhes-consultorio.webp',
];

/** sitemap.xml do site inteiro: página inicial, lista do blog e cada post, com as imagens de cada página. */
export function gerarSitemap(hoje = new Date().toISOString().slice(0, 10)) {
  const maisRecente = posts.map((post) => post.atualizadoEm).sort().at(-1);
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: hoje, imagens: IMAGENS_DA_HOME },
    ...(posts.length ? [{ loc: URL_DO_BLOG, lastmod: maisRecente }] : []),
    ...posts.map((post) => ({ loc: urlDoPost(post), lastmod: post.atualizadoEm, imagens: [capaDoPost(post).social] })),
  ];
  const itens = urls.map(({ loc, lastmod, imagens = [] }) =>
    [
      '  <url>',
      `    <loc>${loc}</loc>`,
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      ...imagens.map((src) => `    <image:image>\n      <image:loc>${SITE_URL}${src}</image:loc>\n    </image:image>`),
      '  </url>',
    ].join('\n'),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${itens.join('\n')}\n</urlset>\n`;
}

/** llms.txt do site: resumo da página inicial e lista dos posts (src/lib/llms.js). */
export const gerarLlmsTxt = () =>
  montarLlmsTxt(posts.map((post) => ({ titulo: post.titulo, descricao: post.descricao, url: urlDoPost(post) })));
