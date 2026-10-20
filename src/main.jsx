import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { capturarCliqueAnuncio } from '@/lib/cliqueAnuncio';
import { landingDaRota } from '@/lib/landings';

capturarCliqueAnuncio();

const root = document.getElementById('root');
// Página de destino de anúncio (ex.: /clinica-de-emagrecimento): o mesmo App, com o conteúdo do tema.
const landing = landingDaRota(window.location.pathname);

// Em produção o #root já chega com o HTML pré-renderizado (tools/prerender.js): só hidratamos.
// No `npm run dev` ele vem vazio e renderizamos do zero.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, <App landing={landing} />);
} else {
  ReactDOM.createRoot(root).render(<App landing={landing} />);
}
