// Gera as fotos do hero (página inicial e páginas de anúncio) a partir da foto original da Dra. Isabela.
// Uso: node tools/hero-foto.cjs fotos-originais/IMG_9058.jpg
//
// 1. Tratamento de luz: clareia sem levantar os pretos (senão a foto fica "esfumaçada"), puxa o tom para o
//    creme rosado do site e aumenta o contraste local (CLAHE), o que destaca o rosto. Não mexe em traços do rosto.
// 2. Desktop: recorte com a cadeira encostada na borda direita; a lateral esquerda, onde a foto encontra o
//    texto, se funde ao creme do fundo (#FAF8F5). 4 larguras (800 a 2000 px), para telas comuns e Retina.
// 3. Celular: recorte próprio, sem a fusão lateral. 2 larguras (640 e 960 px).
// 4. Blog: retrato vertical (4:5), do rosto até a mesa, para o topo da lista de posts. 3 larguras (360 a 720 px).
const sharp = require('sharp');

const ORIGINAL = process.argv[2] || 'fotos-originais/IMG_9058.jpg';
const CREME = { r: 250, g: 248, b: 245 };
// Muda a cada novo tratamento: as imagens ficam 7 dias no cache do navegador (vercel.json), então um nome novo
// garante que todos vejam a versão nova. Atualizar também src/components/Hero.jsx e index.html.
const VERSAO = 'v2';
const TRATAMENTO = { brilho: 1.12, saturacao: 1.08, cor: [1.05, 0.985, 0.95], contrasteLocal: { width: 400, height: 400, maxSlope: 2 } };

async function fotoTratada() {
  const t = TRATAMENTO;
  const comContraste = await sharp(ORIGINAL).rotate().clahe(t.contrasteLocal).toBuffer();
  return sharp(comContraste)
    .recomb([
      [t.cor[0], 0.01, 0],
      [0, t.cor[1], 0],
      [0, 0, t.cor[2]],
    ])
    .modulate({ brightness: t.brilho, saturation: t.saturacao })
    .toBuffer();
}

async function salvar(buf, largura, nome, qualidade) {
  const i = await sharp(buf).resize(largura).webp({ quality: qualidade, effort: 6, smartSubsample: true }).toFile(`public/${nome}`);
  console.log(nome, `${i.width}x${i.height}`, `${Math.round(i.size / 1024)} KB`);
}

(async () => {
  const tratada = await fotoTratada();

  // Desktop: proporção ~0,85; a borda direita do recorte é a borda da cadeira (x ≈ 3720).
  // Faltam ~130 px à esquerda: completados com o creme e fundidos à foto por um degradê.
  const W = 3850;
  const H = Math.round(W / 0.85);
  const topo = 1249;
  const direita = 3720;
  const pad = W - direita;
  const recorte = await sharp(tratada).extract({ left: 0, top: topo, width: direita, height: H }).extend({ left: pad, background: CREME }).toBuffer();
  const larguraFusao = Math.round(W * 0.28);
  const fusao = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="a" x1="0" x2="1"><stop offset="0" stop-color="#FAF8F5" stop-opacity="1"/><stop offset="${(pad / larguraFusao).toFixed(3)}" stop-color="#FAF8F5" stop-opacity="0.9"/><stop offset="1" stop-color="#FAF8F5" stop-opacity="0"/></linearGradient></defs><rect width="${larguraFusao}" height="${H}" fill="url(#a)"/></svg>`,
  );
  const desktop = await sharp(recorte).composite([{ input: fusao, left: 0, top: 0 }]).toBuffer();
  for (const w of [800, 1200, 1600, 2000]) await salvar(desktop, w, `dra-isabela-hero-${VERSAO}-${w}.webp`, 82);

  // Celular: largura total da foto, rosto no terço de cima, sem a fusão lateral.
  const Wc = 3940;
  const Hc = Math.round(Wc / 0.85);
  const celular = await sharp(tratada).extract({ left: 0, top: 1235, width: Wc, height: Hc }).toBuffer();
  for (const w of [640, 960]) await salvar(celular, w, `dra-isabela-hero-${VERSAO}-celular-${w}.webp`, 80);

  // Blog: retrato 4:5 centrado no rosto (x ≈ 1840), do alto da cabeça até a mesa.
  const blog = await sharp(tratada).extract({ left: 640, top: 1700, width: 2400, height: 3000 }).toBuffer();
  for (const w of [360, 540, 720]) await salvar(blog, w, `dra-isabela-blog-${VERSAO}-${w}.webp`, 82);
})();
