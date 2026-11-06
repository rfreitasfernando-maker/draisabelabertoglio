import { linkComRefDoClique } from '@/lib/cliqueAnuncio';
import { landingDaRota } from '@/lib/landings';

/**
 * Chamado no onClick de cada CTA de WhatsApp da página inicial e das páginas de destino dos anúncios,
 * antes de o link abrir em nova aba.
 *
 * Só nas páginas de destino dos anúncios (src/lib/landings.js) o clique conta como conversão do Google Ads:
 * 1. Envia um único evento 'whatsapp_click' ao GTM, com o link base do botão.
 * 2. Se a visita veio de um anúncio, troca o href deste clique pelo link com `[ref:CODIGO]`
 *    (ver cliqueAnuncio.js). O link base fica em data-base-href, porque o React não reescreve o
 *    href enquanto a prop não muda: sem isso, o segundo clique partiria do link já com código.
 * Na página inicial (tráfego orgânico) os mesmos botões usam o evento do blog, fora da conversão.
 */
export function trackWhatsappClick(origem, event) {
  const link = event.currentTarget;
  if (!landingDaRota(window.location.pathname)) {
    trackBlogWhatsappClick(origem, link);
    return;
  }
  if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute('href');
  const url = link.dataset.baseHref;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'whatsapp_click', whatsapp_url: url, cta_location: origem });

  link.href = linkComRefDoClique(url);
}

/**
 * Chamado nos CTAs de WhatsApp das páginas do blog, com o próprio link clicado.
 *
 * Usa um evento próprio, 'blog_whatsapp_click': o gatilho da conversão do Google Ads no GTM compara
 * o nome exato 'whatsapp_click', então os cliques do blog ficam fora da contagem de conversões.
 * Pelo mesmo motivo não anexa o `[ref:CODIGO]` da BEL.IA.
 */
export function trackBlogWhatsappClick(origem, link) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'blog_whatsapp_click', whatsapp_url: link.getAttribute('href'), cta_location: origem });
}
