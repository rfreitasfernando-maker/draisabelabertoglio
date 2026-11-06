import { WHATSAPP_URL, WHATSAPP_BLOG_URL, WHATSAPP_PAGINAS_URL } from '@/lib/whatsapp';
import { trackWhatsappClick, trackBlogWhatsappClick } from '@/lib/tracking';

// Link e rastreamento dos CTAs de WhatsApp compartilhados (cabeçalho, botão flutuante), por tipo de página.
// `rastrear(origem, evento)` vai no onClick do link.
export const CTA_SITE = {
  href: WHATSAPP_URL,
  rastrear: (origem, e) => trackWhatsappClick(origem, e),
};

export const CTA_BLOG = {
  href: WHATSAPP_BLOG_URL,
  rastrear: (origem, e) => trackBlogWhatsappClick(origem, e.currentTarget),
};

// Páginas de serviço e do consultório: tráfego orgânico, com o mesmo evento do blog (fora da conversão do
// Google Ads, que fica nas páginas dos anúncios) e a mensagem do site.
export const CTA_PAGINA = {
  href: WHATSAPP_PAGINAS_URL,
  rastrear: (origem, e) => trackBlogWhatsappClick(origem, e.currentTarget),
};

/** CTA do cabeçalho e do botão flutuante conforme o tipo de página. */
export const ctaDaPagina = ({ blog = false, pagina = false }) => (pagina ? CTA_PAGINA : blog ? CTA_BLOG : CTA_SITE);
