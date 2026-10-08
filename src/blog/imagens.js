// Imagens dos posts, geradas por tools/imagens-blog.js em public/blog/imagens/.
// Sem imports: o script de imagens (Node puro) também usa este arquivo.

export const PASTA_IMAGENS = '/blog/imagens';

// Larguras em que a capa é gerada e oferecida no srcset.
// Nunca amplia o original: abaixo de 1600 px, a última versão tem a largura do próprio original.
export const largurasDaCapa = (larguraOriginal) => {
  const larguras = [640, 960, 1280, 1600].filter((l) => l <= larguraOriginal);
  if (larguraOriginal < 1600 && larguras.at(-1) !== larguraOriginal) larguras.push(larguraOriginal);
  return larguras;
};

// A capa ocupa a coluna de até 1024 px (max-w-5xl) dentro do container com 1,5 rem de margem de cada lado.
export const TAMANHOS_CAPA = '(min-width: 1088px) 1024px, calc(100vw - 3rem)';
// Nos cards da lista de posts, a capa ocupa no máximo um terço da largura útil.
export const TAMANHOS_CARD = '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw';

export const capaDoPost = (post) => {
  const larguras = largurasDaCapa(post.capa.largura);
  return {
    src: `${PASTA_IMAGENS}/${post.slug}-${larguras.at(-1)}.webp`,
    srcSet: larguras.map((l) => `${PASTA_IMAGENS}/${post.slug}-${l}.webp ${l}w`).join(', '),
    // Prévia de compartilhamento: JPG 1200×630
    social: `${PASTA_IMAGENS}/${post.slug}-og.jpg`,
  };
};
