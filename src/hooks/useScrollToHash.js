import { useEffect } from 'react';

/**
 * Rola até a seção do #hash da URL no primeiro carregamento (ex.: /#metodo).
 *
 * O navegador tenta fazer isso sozinho, mas antes do React renderizar a seção ainda não existe.
 * Por isso rolamos depois do mount e repetimos no `load`, quando fontes e imagens já ocuparam o
 * espaço final e poderiam ter empurrado a seção. O recuo do header fixo vem do scroll-margin
 * (scroll-mt-*) de cada seção, que o scrollIntoView respeita.
 */
export const useScrollToHash = () => {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return undefined;

    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    };

    const frame = requestAnimationFrame(scroll);
    if (document.readyState !== 'complete') window.addEventListener('load', scroll, { once: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', scroll);
    };
  }, []);
};
