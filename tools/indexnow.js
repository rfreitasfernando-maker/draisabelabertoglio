#!/usr/bin/env node
// Avisa o Bing (e os outros buscadores do IndexNow) das páginas do site. Rodar depois de cada deploy:
//
//   npm run indexnow
//
// Lê as URLs do sitemap publicado, para avisar só o que já está no ar.
// A chave fica em public/<chave>.txt, servida na raiz do site: é ela que prova que o site é nosso.
const SITE = 'https://www.draisabelabertoglio.com.br';
const CHAVE = '97bbe9398e440ba7a2c91875126bce6e';

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`indexnow: sitemap respondeu ${r.status}`);
  return r.text();
});
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const resposta = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: CHAVE, keyLocation: `${SITE}/${CHAVE}.txt`, urlList: urls }),
});

// 200 e 202 são sucesso (202: chave ainda em validação). 403: chave não encontrada no site.
console.log(`indexnow: ${urls.length} URLs enviadas, resposta ${resposta.status}`);
if (!resposta.ok) process.exit(1);
