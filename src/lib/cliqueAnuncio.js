/**
 * Atribuição de conversão offline do Google Ads via BEL.IA.
 *
 * O gclid da URL se perde quando a paciente vai para o WhatsApp. Para não perdê-lo:
 *   1. na chegada, guardamos gclid/gbraid/wbraid e utm_* da URL;
 *   2. no clique do CTA, geramos um código curto, registramos o clique no BEL.IA
 *      (POST /api/wa/clique via sendBeacon) e anexamos `[ref:CODIGO]` ao fim da mensagem;
 *   3. o webhook do BEL.IA casa o código com o clique e o remove antes de exibir a mensagem.
 *
 * Contrato: belia-saas/app/api/wa/clique/route.ts e lib/leads/refClique.ts.
 * Sem identificador de clique não há código nem beacon: o link segue exatamente o WHATSAPP_URL.
 */

const ENDPOINT = 'https://agendabel.com.br/api/wa/clique';
const CLINICA_ID = '600140eb-7537-44fc-a9af-c784fee99c8c';

// Só o domínio de produção registra cliques: preview da Vercel e localhost não gravam no BEL.IA.
// O domínio sem www redireciona (308) para o www mantendo a query, então o gclid chega aqui.
const HOSTS_PRODUCAO = ['www.draisabelabertoglio.com.br', 'draisabelabertoglio.com.br'];

const CHAVE_STORAGE = 'clique_anuncio';
const CAMPOS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const IDS_CLIQUE = ['gclid', 'gbraid', 'wbraid'];

// Janela de conversão do Google Ads.
const VALIDADE_MS = 90 * 24 * 60 * 60 * 1000;
// Mesmo teto da rota. Valor maior é descartado, nunca cortado: gclid truncado é lixo.
const TETO_VALOR = 1000;

// Alfabeto e tamanho aceitos pela rota (TAM_MIN_REF 6, TAM_MAX_REF 32).
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const TAM_REF = 12;

const emProducao = () => HOSTS_PRODUCAO.includes(window.location.hostname);

/**
 * Lê a query sem URLSearchParams: o gclid é comparado literalmente pelo Google e
 * URLSearchParams transformaria `+` em espaço. decodeURIComponent resolve `%XX` e mantém `+`.
 */
function lerQuery(search) {
  const valores = {};
  for (const par of search.replace(/^\?/, '').split('&')) {
    const i = par.indexOf('=');
    if (i < 1) continue;
    const chave = par.slice(0, i);
    if (!CAMPOS.includes(chave) || chave in valores) continue;
    try {
      const valor = decodeURIComponent(par.slice(i + 1));
      if (valor && valor.length <= TETO_VALOR) valores[chave] = valor;
    } catch {
      // `%` malformado: descarta o valor.
    }
  }
  return valores;
}

/** Chamado uma vez no carregamento. Guarda o clique mais recente que trouxe identificador. */
export function capturarCliqueAnuncio() {
  if (!emProducao()) return;
  const valores = lerQuery(window.location.search);
  if (!IDS_CLIQUE.some((id) => valores[id])) return;
  const dados = {
    ...valores,
    pagina: window.location.origin + window.location.pathname,
    capturado_em: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(dados));
  } catch {
    // Armazenamento bloqueado: a atribuição desta visita se perde, o site segue normal.
  }
}

function lerClique() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || 'null');
    if (!dados || Date.now() - Date.parse(dados.capturado_em) > VALIDADE_MS) return null;
    return dados;
  } catch {
    return null;
  }
}

function gerarRef() {
  const bytes = new Uint8Array(TAM_REF);
  crypto.getRandomValues(bytes);
  // 256 é múltiplo de 64, então o módulo não enviesa o sorteio.
  return Array.from(bytes, (b) => ALFABETO[b % ALFABETO.length]).join('');
}

/**
 * Registra o clique no BEL.IA e devolve o link com `[ref:CODIGO]` no fim da mensagem.
 * Sem clique de anúncio guardado (ou fora de produção), devolve o link intacto.
 * O link de WhatsApp nunca depende do BEL.IA: se o beacon falhar, a paciente chega do mesmo jeito.
 */
export function linkComRefDoClique(url) {
  if (!emProducao()) return url;
  const dados = lerClique();
  if (!dados) return url;

  const ref = gerarRef();
  const corpo = { ref, clinica: CLINICA_ID };
  for (const [chave, valor] of Object.entries(dados)) {
    if (valor) corpo[chave] = valor;
  }
  try {
    // String → Content-Type text/plain: requisição simples, sem preflight de CORS.
    navigator.sendBeacon(ENDPOINT, JSON.stringify(corpo));
  } catch {
    // Sem beacon, o clique não é registrado; o código vai na mensagem mesmo assim.
  }
  // O parâmetro `text` é o último do link, então o código entra no fim da mensagem.
  return `${url}%20%5Bref%3A${ref}%5D`;
}
