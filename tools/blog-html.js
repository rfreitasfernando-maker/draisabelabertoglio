// Encaixa uma página do blog (renderBlog, em src/blog/render.jsx) no modelo blog.html.
// Usado no build (tools/prerender.js) e no `npm run dev` (plugin em vite.config.js).
const MARCADORES = {
  head: '<!--blog-head-->',
  cabecalho: '<!--blog-cabecalho-->',
  conteudo: '<!--blog-conteudo-->',
  whatsapp: '<!--blog-whatsapp-->',
};

export function montarPaginaBlog(modelo, pagina) {
  let html = modelo;
  for (const [parte, marcador] of Object.entries(MARCADORES)) {
    if (!html.includes(marcador)) throw new Error(`blog.html: marcador ${marcador} não encontrado`);
    // Função como substituto: um `$` no conteúdo não vira padrão especial do replace.
    html = html.replace(marcador, () => pagina[parte]);
  }
  return html;
}
