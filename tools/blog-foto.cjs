// Gera a foto do topo do blog (/blog) a partir da foto original da Dra. Isabela diante do espelho.
// Uso: node tools/blog-foto.cjs fotos-originais/IMG_9087.jpg
//
// A foto já vem clara e quente; só um leve ganho de brilho para casar com o fundo creme do topo.
// 1. Desktop: recorte quadrado com a Dra. Isabela e o reflexo no espelho. 4 larguras (480 a 1200 px).
// 2. Celular: recorte horizontal (8:5), com o mesmo enquadramento. 2 larguras (640 e 960 px).
const sharp = require('sharp');

const ORIGINAL = process.argv[2] || 'fotos-originais/IMG_9087.jpg';
// As imagens ficam 7 dias no cache do navegador (vercel.json): mude a versão a cada nova foto
// e atualize RETRATO em src/blog/PaginaDoBlog.jsx.
const VERSAO = 'v3';

async function salvar(buf, largura, nome, qualidade) {
  const i = await sharp(buf).resize(largura).webp({ quality: qualidade, effort: 6, smartSubsample: true }).toFile(`public/${nome}`);
  console.log(nome, `${i.width}x${i.height}`, `${Math.round(i.size / 1024)} KB`);
}

(async () => {
  const tratada = await sharp(ORIGINAL).rotate().modulate({ brightness: 1.04 }).toBuffer();

  const quadrado = await sharp(tratada).extract({ left: 800, top: 304, width: 3600, height: 3600 }).toBuffer();
  for (const w of [480, 720, 960, 1200]) await salvar(quadrado, w, `dra-isabela-blog-${VERSAO}-${w}.webp`, 82);

  const largo = await sharp(tratada).extract({ left: 500, top: 350, width: 4600, height: 2875 }).toBuffer();
  for (const w of [640, 960]) await salvar(largo, w, `dra-isabela-blog-${VERSAO}-celular-${w}.webp`, 80);
})();
