// Pré-renderiza as páginas no build, para título, texto e CTAs chegarem prontos no primeiro byte, sem esperar o JavaScript:
// - página inicial: injeta o HTML do <App /> no #root do dist/index.html;
// - blog: gera dist/blog.html e dist/blog/<slug>.html a partir do modelo (o próprio dist/blog.html que o Vite gerou).
//   Com "cleanUrls" no vercel.json, a Vercel serve blog.html em /blog e blog/<slug>.html em /blog/<slug>;
// - sitemap: gera dist/sitemap.xml com todas as páginas.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { montarPaginaBlog } from './blog-html.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const indexPath = path.join(dist, 'index.html');
const modeloBlogPath = path.join(dist, 'blog.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, renderBlog, rotasDoBlog, gerarSitemap } = await import(pathToFileURL(serverEntry).href);

const html = fs.readFileSync(indexPath, 'utf8');
const marcador = '<div id="root"></div>';
if (!html.includes(marcador)) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html');
fs.writeFileSync(indexPath, html.replace(marcador, () => `<div id="root">${render()}</div>`));
console.log('prerender: dist/index.html gerado com o HTML da página');

// O modelo é lido antes de tudo: a página /blog vai ocupar o mesmo arquivo.
const modeloBlog = fs.readFileSync(modeloBlogPath, 'utf8');
fs.rmSync(modeloBlogPath);
for (const rota of rotasDoBlog()) {
  const pagina = renderBlog(rota);
  if (!pagina) throw new Error(`prerender: ${rota} não gerou página`);
  const destino = path.join(dist, `${rota}.html`);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, montarPaginaBlog(modeloBlog, pagina));
  console.log(`prerender: ${path.relative(root, destino)}`);
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), gerarSitemap());
console.log('prerender: dist/sitemap.xml');

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
