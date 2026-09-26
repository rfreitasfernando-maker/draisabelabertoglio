import { WHATSAPP_URL } from '@/lib/whatsapp';

// Envia um único evento 'whatsapp_click' ao GTM. Chamado no onClick de cada CTA,
// antes de o link abrir o WhatsApp em nova aba.
export function trackWhatsappClick(origem, url = WHATSAPP_URL) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'whatsapp_click', whatsapp_url: url, cta_location: origem });
}
