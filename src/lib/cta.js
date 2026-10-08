import { WHATSAPP_URL, WHATSAPP_BLOG_URL } from '@/lib/whatsapp';
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
