// Resposta 410 (Gone) para endereços do site antigo de reumatologia (WordPress) que não existem mais.
// O vercel.json reescreve esses caminhos para cá; o 410 faz o Google tirá-los do índice mais rápido que o 404.
export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(410).send(`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Página removida | Dra. Isabela Bertoglio</title>
</head>
<body style="font-family: system-ui, sans-serif; max-width: 36rem; margin: 4rem auto; padding: 0 1.5rem; color: #1f2937; line-height: 1.6">
<h1 style="font-size: 1.5rem">Esta página foi removida</h1>
<p>O conteúdo que estava neste endereço não existe mais.</p>
<p><a href="https://www.draisabelabertoglio.com.br/">Ir para a página inicial</a> · <a href="https://www.draisabelabertoglio.com.br/blog">Ver o blog</a></p>
</body>
</html>`);
}
