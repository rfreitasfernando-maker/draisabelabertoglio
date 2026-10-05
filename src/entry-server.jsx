import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '@/App';

// Usado só no build (tools/prerender.js) para gerar o HTML inicial da página.
export const render = () => renderToString(<App />);
