// Prepara o texto de uma página de serviço (src/servicos/textos/*.html) para o modelo da página.
// O texto chega exatamente como foi aprovado; aqui só se encaixam os componentes nos marcadores:
//   <h1> e <p class="subtitulo">              → topo escuro da página
//   texto até <!-- [BOTÃO WHATSAPP DO HERO] --> → resposta direta, logo abaixo do H1, com o botão
//   <div class="cta-box"> ... </div>          → caixa de CTA com botão de WhatsApp
//   <!-- [LEIA TAMBÉM NO BLOG] /blog/... — ... --> → bloco com links para os posts
//   <h2>Perguntas frequentes</h2> + <h3>/<p>   → perguntas em sanfona, como no blog (e FAQPage)
//   <!-- [FOTO DA DRA. ISABELA] -->           → foto da Dra. Isabela
//   <!-- [BLOCO AUTORA] --> / <!-- [BLOCO LOCAL] --> → componentes ao fim da página (PaginaDeServico)
//   <p class="disclaimer">                    → aviso ao fim da página
import { textoDe, slugDe } from '@/blog/conteudo';

const escaparAtributo = (valor) => String(valor).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Link de WhatsApp de um CTA dentro do texto: rastreado por delegação em src/blog/client.jsx (evento do blog). */
const botaoWhatsapp = (href, origem, classe) =>
  `<a class="${classe}" href="${escaparAtributo(href)}" target="_blank" rel="noopener noreferrer" data-whatsapp="${origem}">Agendar avaliação pelo WhatsApp</a>`;

/**
 * @param html texto da página
 * @param opcoes.slugsDoBlog posts publicados (links para posts que não existem viram texto)
 * @param opcoes.caminhosDoSite páginas do site que existem fora do blog ('/', '/medico-para-emagrecer-paraiso', páginas de serviço publicadas)
 * @param opcoes.linkWhatsapp link de WhatsApp da página (mensagem própria)
 */
export function prepararServico(html, opcoes) {
  const { slugsDoBlog, caminhosDoSite, linkWhatsapp } = opcoes;
  let texto = html.replace(/^\s*<!--[\s\S]*?-->\s*/, ''); // cabeçalho com as instruções de montagem

  const h1 = texto.match(/<h1>([\s\S]*?)<\/h1>/);
  if (!h1) throw new Error('serviços: texto sem <h1>');
  texto = texto.replace(h1[0], '');
  const subtitulo = texto.match(/<p class="subtitulo">([\s\S]*?)<\/p>/);
  if (subtitulo) texto = texto.replace(subtitulo[0], '');

  // Resposta direta: o que vem antes do botão do topo (páginas sem o marcador não têm botão no topo).
  let abertura = '';
  const marcadorHero = texto.match(/<!--\s*\[BOTÃO WHATSAPP DO HERO\]\s*-->/);
  if (marcadorHero) {
    abertura = texto.slice(0, marcadorHero.index).trim();
    texto = texto.slice(marcadorHero.index + marcadorHero[0].length);
  } else {
    // Páginas sem botão no topo (/tratamentos e Sobre): a introdução, até o primeiro <h2> ou marcador, fica no topo.
    const fimDaIntroducao = texto.search(/<h2>|<!--/);
    abertura = texto.slice(0, fimDaIntroducao).trim();
    texto = texto.slice(fimDaIntroducao);
  }

  // Pendências marcadas com TODO: continuam no código (comentário no HTML), mas não aparecem na página.
  texto = texto.replace(/<(li|p)>\s*(TODO:[\s\S]*?)<\/\1>/g, (_, tag, pendencia) => {
    console.warn(`serviços: ${pendencia.slice(0, 80)}...`);
    return `<!-- ${pendencia.replace(/--/g, '—')} -->`;
  });
  // TODO no meio de um parágrafo: só a frase pendente sai da página (vira comentário); o resto do parágrafo fica.
  texto = texto.replace(/\s*(?<!<!-- )(TODO:[^<]*?\.)(?=\s|<)/g, (_, pendencia) => {
    console.warn(`serviços: ${pendencia.slice(0, 80)}...`);
    return ` <!-- ${pendencia.replace(/--/g, '—')} -->`;
  });

  // Fim da página: autora, local e aviso são componentes; o texto acaba no primeiro desses marcadores.
  const temAutora = /<!--\s*\[BLOCO AUTORA/.test(texto);
  const temLocal = /<!--\s*\[BLOCO LOCAL/.test(texto);
  const aviso = texto.match(/<p class="disclaimer">([\s\S]*?)<\/p>/);
  texto = texto.replace(/<!--\s*\[BLOCO (?:AUTORA|LOCAL)[\s\S]*?-->/g, '');
  if (aviso) texto = texto.replace(aviso[0], '');

  // Caixas de CTA
  let ctas = 0;
  texto = texto.replace(
    /<div class="cta-box">\s*<p class="cta-titulo">([\s\S]*?)<\/p>\s*<p class="cta-subtitulo">([\s\S]*?)<\/p>\s*<!--\s*\[BOTÃO[^\]]*\]\s*-->\s*<\/div>/g,
    (_, titulo, sub) => {
      ctas += 1;
      return `<aside class="servico-cta">\n<p class="servico-cta-titulo">${titulo}</p>\n<p class="servico-cta-subtitulo">${sub}</p>\n${botaoWhatsapp(linkWhatsapp, `servico_cta_${ctas}`, 'servico-cta-botao')}\n</aside>`;
    },
  );
  if (/class="cta-box"/.test(texto)) throw new Error('serviços: caixa de CTA fora do formato esperado');

  // Leia também no blog: os títulos do comentário viram os textos dos links.
  texto = texto.replace(/<!--\s*\[LEIA TAMBÉM NO BLOG\]([\s\S]*?)-->/g, (_, lista) => {
    const itens = [...lista.matchAll(/(\/blog\/[a-z0-9-]+)\s*[—–-]\s*(.+)/g)].map(([, href, titulo]) => ({ href, titulo: titulo.trim() }));
    const lis = itens.map(({ href, titulo }) => `<li><a href="${href}">${titulo}</a></li>`).join('\n');
    return `<nav class="servico-leia" aria-labelledby="leia-tambem-no-blog">\n<h2 id="leia-tambem-no-blog">Leia também no blog</h2>\n<ul>\n${lis}\n</ul>\n</nav>`;
  });

  // Foto da Dra. Isabela (página Sobre)
  texto = texto.replace(
    /<!--\s*\[FOTO DA DRA\. ISABELA\]\s*-->/g,
    '<figure class="servico-foto"><img src="/dra-isabela-bertoglio.webp" srcset="/dra-isabela-bertoglio-640.webp 640w, /dra-isabela-bertoglio-768.webp 768w, /dra-isabela-bertoglio.webp 892w" sizes="(min-width: 768px) 240px, 200px" width="892" height="1280" alt="Dra. Isabela Bertoglio, nutróloga, no consultório da Clínica Belvitá em São Paulo" loading="lazy" decoding="async" /></figure>',
  );

  // Perguntas frequentes: do <h2> até o fim do texto, cada <h3> com um <p>.
  const faq = [];
  texto = texto.replace(/<h2>Perguntas frequentes<\/h2>([\s\S]*)$/, (_, resto) => {
    const fimDasPerguntas = resto.search(/<(?:h2|nav|aside|div)[\s>]/);
    const bloco = fimDasPerguntas === -1 ? resto : resto.slice(0, fimDasPerguntas);
    const depois = fimDasPerguntas === -1 ? '' : resto.slice(fimDasPerguntas);
    const pares = [...bloco.matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)];
    const itens = pares.map(([, pergunta, resposta]) => {
      faq.push({ pergunta: textoDe(pergunta), resposta: textoDe(resposta) });
      return `<details>\n<summary><h3>${pergunta}</h3></summary>\n<p>${resposta}</p>\n</details>`;
    });
    return `<section class="post-faq">\n<h2>Perguntas frequentes</h2>\n\n${itens.join('\n\n')}\n</section>\n${depois}`;
  });

  // Página /tratamentos: cada <h2> com link vira um card (antes de desfazer os links das páginas não publicadas).
  const cards = [];
  if (opcoes.cards) {
    texto = texto.replace(/<h2><a href="([^"]+)">([\s\S]*?)<\/a><\/h2>\s*<p>([\s\S]*?)<\/p>\s*/g, (_, href, titulo, resumo) => {
      cards.push({ href, titulo: textoDe(titulo), resumo, publicado: caminhosDoSite.has(href) });
      return '';
    });
  }

  // Links internos para páginas que ainda não existem viram texto simples.
  const desfazer = (trecho) =>
    trecho.replace(/<a href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/g, (link, caminho, rotulo) => {
      const destino = caminho.replace(/\/+$/, '') || '/';
      const blog = destino.match(/^\/blog\/([a-z0-9-]+)$/);
      const existe = blog ? slugsDoBlog.has(blog[1]) : destino === '/blog' || caminhosDoSite.has(destino);
      if (existe) return link;
      console.warn(`serviços: link para ${destino} virou texto simples (página ainda não publicada)`);
      return rotulo;
    });
  texto = desfazer(texto);
  abertura = desfazer(abertura);
  // Um "Leia também" que ficou sem nenhum link não aparece.
  texto = texto.replace(/<nav class="servico-leia"[\s\S]*?<\/nav>/g, (bloco) => (/<a /.test(bloco) ? bloco : ''));

  // Ids dos <h2> (âncoras)
  const usados = new Set();
  texto = texto.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, titulo) => {
    let id = slugDe(textoDe(titulo));
    for (let n = 2; usados.has(id); n++) id = `${slugDe(textoDe(titulo))}-${n}`;
    usados.add(id);
    return `<h2 id="${id}">${titulo}</h2>`;
  });

  return {
    h1: textoDe(h1[1]),
    subtitulo: subtitulo ? subtitulo[1].trim() : null,
    abertura,
    botaoTopo: Boolean(marcadorHero),
    html: texto.replace(/\n{3,}/g, '\n\n').trim(),
    faq,
    cards,
    temAutora,
    temLocal,
    aviso: aviso ? textoDe(aviso[1]) : null,
    palavras: textoDe(`${h1[1]} ${subtitulo?.[1] ?? ''} ${abertura} ${texto} ${cards.map((c) => `${c.titulo} ${c.resumo}`).join(' ')}`).split(' ')
      .length,
  };
}
