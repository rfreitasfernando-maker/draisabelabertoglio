// Monta as páginas do blog no servidor: no build (tools/prerender.js) e no `npm run dev` (plugin em vite.config.js).
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { POSTS } from '@/blog/posts';
import { prepararConteudo } from '@/blog/conteudo';
import { linkWhatsapp } from '@/lib/whatsapp';
import { headDaCategoria, headDoPost, headDoBlog, headDaPaginaAvulsa, headDoServico, SITE_URL, URL_DO_BLOG, urlDoPost, urlDaPagina, urlDoServico } from '@/blog/seo';
import { PAGINAS } from '@/paginas';
import PaginaAvulsa from '@/paginas/PaginaAvulsa';
import { SERVICOS_PUBLICADOS, caminhosPublicados, arquivoDoServico } from '@/servicos';
import { prepararServico } from '@/servicos/conteudo';
import PaginaDeServico, { itensDaTrilha } from '@/servicos/PaginaDeServico';
import PaginaDoPost from '@/blog/PaginaDoPost';
import PaginaDoBlog from '@/blog/PaginaDoBlog';
import { capaDoPost } from '@/blog/imagens';
import { CATEGORIAS, categoriaDoPost, caminhoDaCategoria, validarCategorias } from '@/blog/categorias';
import PaginaDaCategoria from '@/blog/PaginaDaCategoria';
import { montarLlmsTxt } from '@/lib/llms';
import { HOME_REVISADA_EM } from '@/lib/schema';

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

// Toda a lista de posts precisa estar nas categorias (src/blog/categorias.js); o build falha se faltar algum.
validarCategorias(slugs);
posts.forEach(categoriaDoPost);

// "Leia também": os 3 posts mais relacionados, e não os mais recentes.
// Pontos: mesma categoria (peso maior), links entre os dois posts (nos dois sentidos) e links que os dois
// fazem para os mesmos posts. Empate: o mais recente. Posts de outras categorias só entram se faltar.
const linksDoPost = new Map(
  posts.map((post) => [post.slug, new Set([...textos[`./posts/${post.slug}.html`].matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]))]),
);
function relacionados(post, quantos = 3) {
  const categoria = categoriaDoPost(post);
  const meus = linksDoPost.get(post.slug);
  return posts
    .filter((outro) => outro !== post)
    .map((outro, recencia) => {
      const deles = linksDoPost.get(outro.slug);
      let pontos = categoriaDoPost(outro) === categoria ? 100 : 0;
      if (meus.has(outro.slug)) pontos += 6;
      if (deles.has(post.slug)) pontos += 6;
      for (const slug of meus) if (deles.has(slug)) pontos += 1;
      return { outro, pontos, recencia };
    })
    .sort((a, b) => b.pontos - a.pontos || a.recencia - b.recencia)
    .slice(0, quantos)
    .map(({ outro }) => outro);
}

// Páginas avulsas da raiz (src/paginas): mesmo modelo, mesmo tratamento do texto que os posts.
const textosDasPaginas = import.meta.glob('../paginas/*.html', { query: '?raw', import: 'default', eager: true });
const conteudosDasPaginas = new Map(
  PAGINAS.map((pagina) => {
    const html = textosDasPaginas[`../paginas/${pagina.slug}.html`];
    if (html === undefined) throw new Error(`páginas: falta o texto src/paginas/${pagina.slug}.html`);
    const link = pagina.mensagemWhatsapp ? linkWhatsapp(pagina.mensagemWhatsapp) : undefined;
    return [pagina.slug, prepararConteudo(html, slugs, link)];
  }),
);

// Páginas de serviço (src/servicos): só as publicadas. Links do texto para páginas que não existem viram texto.
const textosDosServicos = import.meta.glob('../servicos/textos/*.html', { query: '?raw', import: 'default', eager: true });
const caminhosDoSite = new Set(['/', '/blog', ...PAGINAS.map((pagina) => `/${pagina.slug}`), ...caminhosPublicados]);
const conteudosDosServicos = new Map(
  SERVICOS_PUBLICADOS.map((servico) => {
    const html = textosDosServicos[`../servicos/textos/${arquivoDoServico(servico)}`];
    if (html === undefined) throw new Error(`serviços: falta o texto src/servicos/textos/${arquivoDoServico(servico)}`);
    const conteudo = prepararServico(html, {
      slugsDoBlog: slugs,
      caminhosDoSite,
      linkWhatsapp: linkWhatsapp(servico.mensagemWhatsapp),
      cards: servico.grupo === 'hub',
    });
    return [servico.caminho, conteudo];
  }),
);

const postsDaCategoria = (categoria) => posts.filter((p) => categoriaDoPost(p) === categoria);

export const rotasDoBlog = () =>
  posts.length ? ['/blog', ...CATEGORIAS.map(caminhoDaCategoria), ...posts.map((post) => `/blog/${post.slug}`)] : [];
export const rotasDasPaginas = () => [...PAGINAS.map((pagina) => `/${pagina.slug}`), ...SERVICOS_PUBLICADOS.map((servico) => `/${servico.caminho}`)];

/** Item do menu marcado como atual na rota (o mesmo cálculo no servidor e em src/blog/client.jsx). */
export const itemAtualDoMenu = (caminho) => (caminho.startsWith('/blog') ? 'blog' : caminho.replace(/^\//, ''));

/**
 * HTML de uma página do blog ou de uma página avulsa, em partes para o template blog.html; null se a rota não existe.
 * Cabeçalho e botão de WhatsApp são ilhas hidratadas no navegador (src/blog/client.jsx);
 * o resto é HTML estático.
 */
export function renderBlog(url) {
  const caminho = url.split(/[?#]/)[0].replace(/\/+$/, '');

  let head;
  let pagina;
  const avulsa = PAGINAS.find((p) => `/${p.slug}` === caminho);
  const servico = SERVICOS_PUBLICADOS.find((s) => `/${s.caminho}` === caminho);
  if (servico) {
    const conteudo = conteudosDosServicos.get(servico.caminho);
    const tratamentos = SERVICOS_PUBLICADOS.filter((s) => s.grupo === 'tratamentos');
    head = headDoServico(servico, conteudo, itensDaTrilha(servico), tratamentos);
    pagina = <PaginaDeServico servico={servico} conteudo={conteudo} linkWhatsapp={linkWhatsapp(servico.mensagemWhatsapp)} />;
  } else if (avulsa) {
    const conteudo = conteudosDasPaginas.get(avulsa.slug);
    head = headDaPaginaAvulsa(avulsa, conteudo);
    pagina = <PaginaAvulsa pagina={avulsa} conteudo={conteudo} />;
  } else if (!posts.length) {
    return null;
  } else if (caminho.startsWith('/blog/categoria/')) {
    const categoria = CATEGORIAS.find((c) => caminhoDaCategoria(c) === caminho);
    if (!categoria) return null;
    head = headDaCategoria(categoria, postsDaCategoria(categoria));
    pagina = <PaginaDaCategoria categoria={categoria} posts={postsDaCategoria(categoria)} minutosDe={minutosDe} />;
  } else if (caminho === '/blog') {
    head = headDoBlog(posts);
    pagina = <PaginaDoBlog posts={posts} minutosDe={minutosDe} />;
  } else {
    const post = posts.find((p) => `/blog/${p.slug}` === caminho);
    if (!post) return null;
    const conteudo = conteudos.get(post.slug);
    head = headDoPost(post, conteudo);
    pagina = <PaginaDoPost post={post} conteudo={conteudo} outros={relacionados(post)} minutosDe={minutosDe} />;
  }

  // Fora do blog (páginas de serviço e do consultório), cabeçalho e botão flutuante usam a mensagem do site.
  // O mesmo cálculo é feito no navegador (src/blog/client.jsx), senão a hidratação diverge.
  const foraDoBlog = !caminho.startsWith('/blog');
  return {
    head,
    cabecalho: renderToString(<Header blog={!foraDoBlog} pagina={foraDoBlog} atual={itemAtualDoMenu(caminho)} fundoClaro />),
    conteudo: renderToStaticMarkup(
      <>
        {pagina}
        <Footer />
      </>,
    ),
    whatsapp: renderToString(<WhatsAppButton blog={!foraDoBlog} pagina={foraDoBlog} />),
  };
}

// Imagens da página inicial que valem aparecer na busca de imagens.
const IMAGENS_DA_HOME = [
  '/emagrecimento-acompanhamento-medico-sao-paulo-og.jpg',
  '/dra-isabela-bertoglio.jpg',
  '/dra-isabela-bertoglio-nutrologa-consultorio-1200.webp',
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
export function gerarSitemap() {
  const maisRecente = posts.map((post) => post.atualizadoEm).sort().at(-1);
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: HOME_REVISADA_EM, imagens: IMAGENS_DA_HOME },
    ...PAGINAS.map((pagina) => ({ loc: urlDaPagina(pagina), lastmod: pagina.atualizadoEm })),
    ...SERVICOS_PUBLICADOS.map((servico) => ({
      loc: urlDoServico(servico),
      lastmod: servico.revisadoEm,
      ...(servico.caminho === 'dra-isabela-bertoglio' && { imagens: ['/dra-isabela-bertoglio.webp'] }),
    })),
    ...(posts.length ? [{ loc: URL_DO_BLOG, lastmod: maisRecente }] : []),
    // Páginas de categoria: lastmod = a última atualização entre os posts da categoria
    ...(posts.length
      ? CATEGORIAS.map((categoria) => ({
          loc: `${SITE_URL}${caminhoDaCategoria(categoria)}`,
          lastmod: postsDaCategoria(categoria).map((p) => p.atualizadoEm).sort().pop(),
        }))
      : []),
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

/** llms.txt do site: resumo da página inicial, páginas de serviço e lista dos posts (src/lib/llms.js). */
export const gerarLlmsTxt = () =>
  montarLlmsTxt(
    posts.map((post) => ({ titulo: post.titulo, descricao: post.descricao, url: urlDoPost(post) })),
    PAGINAS.map((pagina) => ({ titulo: pagina.titulo, descricao: pagina.descricao, url: urlDaPagina(pagina) })),
    SERVICOS_PUBLICADOS.map((servico) => ({
      grupo: servico.grupo,
      titulo: conteudosDosServicos.get(servico.caminho).h1,
      descricao: servico.descricao,
      url: urlDoServico(servico),
    })),
  );
