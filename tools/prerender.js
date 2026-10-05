// Pré-renderiza a página no build: injeta o HTML do <App /> no #root do dist/index.html.
// Assim título, texto e CTAs chegam prontos no primeiro byte, sem esperar o JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(serverEntry).href);
const html = fs.readFileSync(indexPath, 'utf8');
const marcador = '<div id="root"></div>';
if (!html.includes(marcador)) throw new Error('prerender: <div id="root"></div> não encontrado em dist/index.html');

fs.writeFileSync(indexPath, html.replace(marcador, `<div id="root">${render()}</div>`));
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('prerender: dist/index.html gerado com o HTML da página');
