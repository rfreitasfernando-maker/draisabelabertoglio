import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { trackBlogWhatsappClick } from '@/lib/tracking';
import '@/index.css';
import '@/blog/blog.css';

// Nas páginas do blog só o cabeçalho e o botão de WhatsApp têm interação: são hidratados como ilhas.
// O texto do post é HTML estático (src/blog/render.jsx) e não entra no JavaScript.
// Mesmo item atual do menu que o servidor marcou (src/blog/render.jsx), senão a hidratação diverge.
// Fora do blog (páginas de serviço e do consultório): CTA com a mensagem do site, como em src/blog/render.jsx.
const noBlog = location.pathname.replace(/\/+$/, '').startsWith('/blog');
const atual = noBlog ? 'blog' : location.pathname.replace(/^\/|\/+$/g, '');
ReactDOM.hydrateRoot(document.getElementById('cabecalho'), <Header blog={noBlog} pagina={!noBlog} atual={atual} fundoClaro />);
ReactDOM.hydrateRoot(document.getElementById('whatsapp'), <WhatsAppButton blog={noBlog} pagina={!noBlog} />);

// CTAs dentro do texto (<a data-whatsapp="origem">): rastreados por delegação, já que não são componentes.
document.addEventListener('click', (e) => {
  const link = e.target.closest?.('a[data-whatsapp]');
  if (link) trackBlogWhatsappClick(link.dataset.whatsapp, link);
});

// Índice fixo do post (desktop): destaca a seção que está sendo lida — o último título que já passou
// da linha logo abaixo do cabeçalho fixo. Recalcula no máximo uma vez por quadro ao rolar.
const linksDoIndice = document.querySelectorAll('a[data-indice]');
if (linksDoIndice.length) {
  const titulos = [...linksDoIndice].map((a) => document.getElementById(a.dataset.indice)).filter(Boolean);
  let agendado = false;
  const atualizar = () => {
    agendado = false;
    let atual = titulos[0]?.id;
    for (const h of titulos) if (h.getBoundingClientRect().top <= 180) atual = h.id;
    linksDoIndice.forEach((a) => a.setAttribute('aria-current', String(a.dataset.indice === atual)));
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!agendado) {
        agendado = true;
        requestAnimationFrame(atualizar);
      }
    },
    { passive: true },
  );
  atualizar();
}
