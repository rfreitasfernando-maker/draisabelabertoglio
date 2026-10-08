// Posts do blog. Cada post tem uma entrada aqui e o texto em ./<slug>.html (o HTML do artigo, sem o título,
// a assinatura e o aviso, que a página monta). Datas no formato AAAA-MM-DD.
//
// Capa: o original vai em fotos-originais/blog/ e as versões otimizadas saem de
//   node tools/imagens-blog.js capa <original> <slug>
// que imprime a largura e a altura a preencher em `capa`.
export const POSTS = [
  {
    slug: 'emagrecimento-com-acompanhamento-medico',
    titulo: 'Emagrecimento com acompanhamento médico em São Paulo: como funciona e para quem é indicado',
    // <title> e descrição do resultado do Google
    tituloSeo: 'Emagrecimento com acompanhamento médico em São Paulo',
    descricao:
      'Emagrecimento com acompanhamento médico em São Paulo: veja como funciona a avaliação, o que é medido, quanto dura o tratamento e quando é indicado.',
    // Prévia ao compartilhar o link (e resumo no card da lista de posts)
    tituloSocial: 'Emagrecimento com acompanhamento médico em São Paulo: como funciona',
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
  {
    slug: 'bioimpedancia',
    titulo: 'Bioimpedância em São Paulo: o que é, como é feita e como interpretar o resultado',
    tituloSeo: 'Bioimpedância em São Paulo: o que é e como interpretar',
    descricao:
      'Bioimpedância em São Paulo: entenda o que o exame mede, como se preparar e como interpretar gordura, músculo e água no laudo. Atendimento no Paraíso.',
    tituloSocial: 'Bioimpedância em São Paulo: o que é e como interpretar',
    descricaoSocial:
      'O que a bioimpedância mede, como se preparar para o exame e como ler gordura, massa muscular e gordura visceral no laudo.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Paciente faz o exame de bioimpedância no aparelho InBody enquanto a médica analisa o laudo de composição corporal',
      legenda: 'Imagem ilustrativa',
    },
    tema: {
      '@type': 'MedicalTest',
      name: 'Bioimpedância',
      alternateName: 'Análise de bioimpedância elétrica (BIA)',
      usedToDiagnose: { '@type': 'MedicalCondition', name: 'Obesidade' },
    },
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A interpretação de exames e a indicação de qualquer tratamento dependem de avaliação individual com médico.',
  },
];
