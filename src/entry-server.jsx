import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '@/App';

// Usado só no servidor: no build (tools/prerender.js) gera o HTML inicial das páginas;
// no `npm run dev`, monta as páginas do blog (plugin em vite.config.js).
export const render = () => renderToString(<App />);

export { renderBlog, rotasDoBlog, rotasDasPaginas, gerarSitemap, gerarLlmsTxt } from '@/blog/render';
export { jsonLdDaHome } from '@/lib/schema';
