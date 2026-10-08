#!/usr/bin/env node
// Gera as imagens otimizadas de um post do blog em public/blog/imagens/.
//
//   node tools/imagens-blog.js capa   <original> <slug>
//     WebP em 640/960/1280/1600 px de largura (sem ampliar o original) e <slug>-og.jpg em 1200×630,
//     a prévia de compartilhamento (WhatsApp, Facebook, LinkedIn), que nem todos leem em WebP.
//
//   node tools/imagens-blog.js figura <original> <nome> [largura]
//     Imagem dentro do texto: corta as bordas lisas e gera <nome>-<largura>.webp e o dobro (telas retina).
//
// Os originais ficam em fotos-originais/ (fora do repositório). Ao final, imprime largura e altura
// para preencher src/blog/posts/index.js.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { largurasDaCapa } from '../src/blog/imagens.js';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destino = path.join(raiz, 'public', 'blog', 'imagens');
const QUALIDADE_WEBP = 78;

const [modo, original, nome, largura] = process.argv.slice(2);
if (!['capa', 'figura'].includes(modo) || !original || !nome) {
  console.error('Uso: node tools/imagens-blog.js capa <original> <slug>\n     node tools/imagens-blog.js figura <original> <nome> [largura]');
  process.exit(1);
}
if (!/^[a-z0-9-]+$/.test(nome)) {
  console.error(`Nome "${nome}" inválido: use só letras minúsculas sem acento, números e hífens.`);
  process.exit(1);
}
fs.mkdirSync(destino, { recursive: true });

const salvar = async (imagem, arquivo) => {
  const info = await imagem.toFile(path.join(destino, arquivo));
  console.log(`${arquivo}  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  return info;
};

if (modo === 'capa') {
  const { width } = await sharp(original).metadata();
  for (const l of largurasDaCapa(width)) {
    await salvar(sharp(original).resize({ width: l }).webp({ quality: QUALIDADE_WEBP }), `${nome}-${l}.webp`);
  }
  await salvar(
    sharp(original).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82, mozjpeg: true }),
    `${nome}-og.jpg`,
  );
} else {
  const exibida = Number(largura) || 320;
  const recortada = await sharp(original).trim({ threshold: 12 }).toBuffer();
  for (const l of [exibida, exibida * 2]) {
    await salvar(sharp(recortada).resize({ width: l, withoutEnlargement: true }).webp({ quality: QUALIDADE_WEBP }), `${nome}-${l}.webp`);
  }
}
