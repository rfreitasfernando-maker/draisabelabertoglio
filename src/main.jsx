import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { capturarCliqueAnuncio } from '@/lib/cliqueAnuncio';

capturarCliqueAnuncio();

const root = document.getElementById('root');

// Em produção o #root já chega com o HTML pré-renderizado (tools/prerender.js): só hidratamos.
// No `npm run dev` ele vem vazio e renderizamos do zero.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, <App />);
} else {
  ReactDOM.createRoot(root).render(<App />);
}
