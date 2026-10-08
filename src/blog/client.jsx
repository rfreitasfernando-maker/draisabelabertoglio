import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { trackBlogWhatsappClick } from '@/lib/tracking';
import '@/index.css';
import '@/blog/blog.css';

// Nas páginas do blog só o cabeçalho e o botão de WhatsApp têm interação: são hidratados como ilhas.
// O texto do post é HTML estático (src/blog/render.jsx) e não entra no JavaScript.
ReactDOM.hydrateRoot(document.getElementById('cabecalho'), <Header blog />);
ReactDOM.hydrateRoot(document.getElementById('whatsapp'), <WhatsAppButton blog />);

// CTAs dentro do texto (<a data-whatsapp="origem">): rastreados por delegação, já que não são componentes.
document.addEventListener('click', (e) => {
  const link = e.target.closest?.('a[data-whatsapp]');
  if (link) trackBlogWhatsappClick(link.dataset.whatsapp, link);
});
