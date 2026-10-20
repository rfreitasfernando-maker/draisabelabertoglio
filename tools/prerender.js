// Pré-renderiza as páginas no build, para título, texto e CTAs chegarem prontos no primeiro byte, sem esperar o JavaScript:
// - página inicial: injeta o HTML do <App /> no #root do dist/index.html;
// - páginas de destino dos anúncios (src/lib/landings.js): dist/<slug>.html, a partir do mesmo modelo da página inicial,
//   com outro <head> (title, descrição, noindex, canonical, og) e o <App landing> no #root;
// - blog: gera dist/blog.html e dist/blog/<slug>.html a partir do modelo (o próprio dist/blog.html que o Vite gerou).
//   Com "cleanUrls" no vercel.json, a Vercel serve blog.html em /blog e blog/<slug>.html em /blog/<slug>;
// - páginas avulsas (src/paginas): dist/<slug>.html, com o mesmo modelo do blog, servidas em /<slug>;
// - sitemap: gera dist/sitemap.xml com todas as páginas;
// - llms.txt: gera dist/llms.txt, o resumo do site para assistentes de IA.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { montarPaginaBlog } from './blog-html.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');
const modeloBlogPath = path.join(dist, 'blog.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, renderBlog, rotasDoBlog, rotasDasPaginas, gerarSitemap, gerarLlmsTxt, jsonLdDaHome, jsonLdDaLanding, LANDINGS } = await import(
  pathToFileURL(serverEntry).href
);

const html = fs.readFileSync(indexPath, 'utf8');
const marcador = '<div id="root"></div>';
if (!html.includes(marcador)) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html');
const marcadorJsonLd = '<!--json-ld-->';
if (!html.includes(marcadorJsonLd)) throw new Error('prerender: <!--json-ld--> não encontrado em dist/index.html');
// CSS da página inicial embutido num <style>: a primeira pintura não espera um segundo pedido ao servidor
// (o CSS bloqueava a renderização no celular). O arquivo continua em dist/assets para as páginas do blog.
const linkCss = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*>/);
if (!linkCss) throw new Error('prerender: <link> do CSS principal não encontrado em dist/index.html');
const css = fs.readFileSync(path.join(dist, linkCss[1]), 'utf8');
fs.writeFileSync(
  indexPath,
  html
    .replace(linkCss[0], () => `<style>${css}</style>`)
    .replace(marcadorJsonLd, () => jsonLdDaHome())
    .replace(marcador, () => `<div id="root">${render()}</div>`),
);
console.log(`prerender: dist/index.html gerado com o HTML da página e o CSS embutido (${(css.length / 1024).toFixed(1)} KB)`);

// Páginas de destino: o mesmo modelo, com o <head> trocado tag a tag (cada uma precisa existir uma única vez).
const SITE = 'https://www.draisabelabertoglio.com.br';
const atributo = (valor) => String(valor).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const trocar = (texto, padrao, novo) => {
  const achados = texto.match(new RegExp(padrao.source, 'g')) ?? [];
  if (achados.length !== 1) throw new Error(`prerender: ${padrao} aparece ${achados.length} vezes em dist/index.html`);
  return texto.replace(padrao, () => novo);
};
for (const landing of LANDINGS) {
  const url = `${SITE}/${landing.slug}`;
  let pagina = html;
  pagina = trocar(pagina, /<title>[^<]*<\/title>/, `<title>${landing.tituloSeo.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`);
  pagina = trocar(pagina, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${atributo(landing.descricao)}" />`);
  // Página feita para o anúncio: fora da busca orgânica (o robô do Google Ads avalia a página mesmo assim).
  pagina = trocar(pagina, /<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
  pagina = trocar(pagina, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  pagina = trocar(pagina, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  pagina = trocar(pagina, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${atributo(landing.tituloSocial)}" />`);
  pagina = trocar(pagina, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${atributo(landing.descricao)}" />`);
  const destino = path.join(dist, `${landing.slug}.html`);
  fs.writeFileSync(
    destino,
    pagina
      .replace(linkCss[0], () => `<style>${css}</style>`)
      .replace(marcadorJsonLd, () => jsonLdDaLanding(landing))
      .replace(marcador, () => `<div id="root">${render(landing)}</div>`),
  );
  console.log(`prerender: ${path.relative(root, destino)} (página de destino, noindex)`);
}

// O modelo é lido antes de tudo: a página /blog vai ocupar o mesmo arquivo.
const modeloBlog = fs.readFileSync(modeloBlogPath, 'utf8');
fs.rmSync(modeloBlogPath);
for (const rota of [...rotasDoBlog(), ...rotasDasPaginas()]) {
  const pagina = renderBlog(rota);
  if (!pagina) throw new Error(`prerender: ${rota} não gerou página`);
  const destino = path.join(dist, `${rota}.html`);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, montarPaginaBlog(modeloBlog, pagina));
  console.log(`prerender: ${path.relative(root, destino)}`);
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), gerarSitemap());
console.log('prerender: dist/sitemap.xml');

fs.writeFileSync(path.join(dist, 'llms.txt'), gerarLlmsTxt());
console.log('prerender: dist/llms.txt');

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
