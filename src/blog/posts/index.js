// Posts do blog. Cada post tem uma entrada aqui e o texto em ./<slug>.html (o HTML do artigo, sem o título,
// a assinatura e o aviso, que a página monta). Datas no formato AAAA-MM-DD.
//
// Capa: o original vai em fotos-originais/blog/ e as versões otimizadas saem de
//   node tools/imagens-blog.js capa <original> <slug>
// que imprime a largura e a altura a preencher em `capa`.
export const POSTS = [
  {
    slug: 'emagrecimento-com-acompanhamento-medico',
    titulo: 'Emagrecimento com acompanhamento médico: como funciona e para quem é indicado',
    // <title> e descrição do resultado do Google
    tituloSeo: 'Emagrecimento com acompanhamento médico | Dra. Isabela',
    descricao:
      'Emagrecimento com acompanhamento médico: entenda como funciona a avaliação, o que é medido, quanto dura o tratamento e quando ele é indicado. Saiba mais.',
    // Prévia ao compartilhar o link (e resumo no card da lista de posts)
    tituloSocial: 'Emagrecimento com acompanhamento médico: como funciona',
    descricaoSocial:
      'Avaliação, bioimpedância, plano individualizado e manutenção: entenda como funciona o emagrecimento com acompanhamento médico e quando ele é indicado.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-08',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Médica explica o resultado da bioimpedância a uma paciente durante consulta de emagrecimento com acompanhamento médico',
      legenda: 'Imagem ilustrativa',
    },
    // Tema do artigo nos dados estruturados (schema.org `about`)
    tema: { '@type': 'MedicalCondition', name: 'Obesidade', alternateName: 'Excesso de peso' },
  },
];
