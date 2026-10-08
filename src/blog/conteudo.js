import { WHATSAPP_BLOG_URL } from '@/lib/whatsapp';

const PALAVRAS_POR_MINUTO = 200;

const ENTIDADES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

/** Texto puro de um trecho de HTML: sem tags, entidades resolvidas e espaços normalizados. */
export const textoDe = (html) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:amp|lt|gt|quot|#39|nbsp);/g, (e) => ENTIDADES[e])
    .replace(/\s+/g, ' ')
    .trim();

/** "Quando procurar um médico" → "quando-procurar-um-medico" */
export const slugDe = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * Prepara o HTML de um post (src/blog/posts/<slug>.html) para a página:
 * - dá um id a cada <h2> e devolve a lista para o índice "Neste artigo";
 * - completa os CTAs `<a data-whatsapp="origem">` com o link de WhatsApp do blog;
 * - desfaz links para posts do blog que ainda não existem (o texto fica, o link volta sozinho
 *   quando o post for publicado);
 * - extrai as perguntas frequentes (<details> com <summary><h3>) para os dados estruturados;
 * - calcula o tempo de leitura.
 */
export function prepararConteudo(html, slugsPublicados) {
  const secoes = [];
  const idsUsados = new Set();

  let pronto = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, titulo) => {
    let id = slugDe(textoDe(titulo));
    for (let n = 2; idsUsados.has(id); n++) id = `${slugDe(textoDe(titulo))}-${n}`;
    idsUsados.add(id);
    secoes.push({ id, titulo: textoDe(titulo) });
    return `<h2 id="${id}">${titulo}</h2>`;
  });

  pronto = pronto.replace(
    /<a ([^>]*?)data-whatsapp="([^"]+)"/g,
    (_, antes, origem) => `<a href="${WHATSAPP_BLOG_URL.replace(/&/g, '&amp;')}" target="_blank" rel="noopener noreferrer" ${antes}data-whatsapp="${origem}"`,
  );

  pronto = pronto.replace(/<a href="\/blog\/([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g, (link, slug, texto) => {
    if (slugsPublicados.has(slug)) return link;
    console.warn(`blog: link para /blog/${slug} virou texto simples (post ainda não publicado)`);
    return texto;
  });

  const faq = [...pronto.matchAll(/<details>\s*<summary>\s*<h3>([\s\S]*?)<\/h3>\s*<\/summary>([\s\S]*?)<\/details>/g)].map(
    ([, pergunta, resposta]) => ({ pergunta: textoDe(pergunta), resposta: textoDe(resposta) }),
  );

  const palavras = textoDe(pronto).split(' ').length;

  return { html: pronto, secoes, faq, minutosDeLeitura: Math.max(1, Math.round(palavras / PALAVRAS_POR_MINUTO)) };
}
