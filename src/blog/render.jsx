// Monta as páginas do blog no servidor: no build (tools/prerender.js) e no `npm run dev` (plugin em vite.config.js).
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { POSTS } from '@/blog/posts';
import { prepararConteudo } from '@/blog/conteudo';
import { headDoPost, headDoBlog, SITE_URL, URL_DO_BLOG, urlDoPost } from '@/blog/seo';
import PaginaDoPost from '@/blog/PaginaDoPost';
import PaginaDoBlog from '@/blog/PaginaDoBlog';

const textos = import.meta.glob('./posts/*.html', { query: '?raw', import: 'default', eager: true });

// Mais recentes primeiro
const posts = [...POSTS].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));
const slugs = new Set(posts.map((post) => post.slug));

const conteudos = new Map(
  posts.map((post) => {
    const html = textos[`./posts/${post.slug}.html`];
    if (html === undefined) throw new Error(`blog: falta o texto src/blog/posts/${post.slug}.html`);
    return [post.slug, prepararConteudo(html, slugs)];
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

/** sitemap.xml do site inteiro: página inicial, lista do blog e cada post. */
export function gerarSitemap() {
  const maisRecente = posts.map((post) => post.atualizadoEm).sort().at(-1);
  const urls = [
    { loc: `${SITE_URL}/` },
    ...(posts.length ? [{ loc: URL_DO_BLOG, lastmod: maisRecente }] : []),
    ...posts.map((post) => ({ loc: urlDoPost(post), lastmod: post.atualizadoEm })),
  ];
  const itens = urls.map(({ loc, lastmod }) => `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${itens.join('\n')}\n</urlset>\n`;
}
