// Gera a foto da seção "Quem sou" da página inicial (src/components/AboutDoctor.jsx).
// Uso: node tools/sobre-foto.cjs fotos-originais/IMG_9077-2.jpg [pasta-de-teste]
//
// Mesmo tratamento de luz do hero (tools/hero-foto.cjs): clareia sem levantar os pretos, puxa para o creme
// rosado do site e aumenta o contraste local, o que destaca o rosto. Recorte 3:4, da estante até a mesa.
// O nome do arquivo descreve a foto (busca de imagens); mude-o se trocar a foto, por causa do cache de 7 dias.
const sharp = require('sharp');

const ORIGINAL = process.argv[2] || 'fotos-originais/IMG_9077-2.jpg';
const PASTA = process.argv[3] || 'public';
const NOME = 'dra-isabela-bertoglio-nutrologa-consultorio';
const RECORTE = { left: 300, top: 820, width: 3400, height: 4533 };

(async () => {
  const comContraste = await sharp(ORIGINAL).rotate().extract(RECORTE).clahe({ width: 400, height: 400, maxSlope: 2 }).toBuffer();
  const tratada = await sharp(comContraste)
    .recomb([
      [1.05, 0.01, 0],
      [0, 0.985, 0],
      [0, 0, 0.95],
    ])
    .modulate({ brightness: 1.08, saturation: 1.06 })
    .toBuffer();
  for (const w of [480, 660, 880, 1200]) {
    const i = await sharp(tratada).resize(w).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(`${PASTA}/${NOME}-${w}.webp`);
    console.log(`${NOME}-${w}.webp`, `${i.width}x${i.height}`, `${Math.round(i.size / 1024)} KB`);
  }
})();
