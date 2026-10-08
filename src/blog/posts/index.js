// Posts do blog. Cada post tem uma entrada aqui e o texto em ./<slug>.html (o HTML do artigo, sem o título,
// a assinatura e o aviso, que a página monta). Datas no formato AAAA-MM-DD.
//
// Opcionais: `aviso` troca o aviso final padrão; `mensagemWhatsapp` troca a mensagem dos botões de WhatsApp
// dentro do texto (cabeçalho e botão flutuante seguem com a mensagem padrão do blog).
// Não use o tipo `Drug` nos dados estruturados: o Google o lê como produto à venda e acusa erro
// por falta de preço e avaliação.
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
  {
    slug: 'tirzepatida-ou-semaglutida',
    titulo: 'Tirzepatida ou semaglutida: diferenças entre as canetas para emagrecer e como é a indicação em São Paulo',
    tituloSeo: 'Tirzepatida ou semaglutida: diferenças | Médica em São Paulo',
    descricao:
      'Tirzepatida ou semaglutida? Entenda como cada uma age, o que mostraram os estudos e os efeitos colaterais. Acompanhamento médico em São Paulo.',
    tituloSocial: 'Tirzepatida ou semaglutida: diferenças entre as canetas para emagrecer',
    descricaoSocial:
      'Mecanismo, resultados dos estudos, efeitos colaterais e quem não deve usar: entenda a diferença entre tirzepatida e semaglutida.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Duas canetas injetáveis para emagrecer, uma de tirzepatida e outra de semaglutida, lado a lado sobre uma mesa',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Todo tratamento medicamentoso envolve riscos, exige prescrição e depende de avaliação individual com médico.',
  },
  {
    slug: 'mounjaro-perda-de-massa-muscular',
    titulo: 'Mounjaro e perda de massa muscular: o que acontece e como preservar o músculo no tratamento em São Paulo',
    tituloSeo: 'Mounjaro e perda de massa muscular | Médica em São Paulo',
    descricao:
      'Mounjaro faz perder massa muscular? Veja o que os estudos mostram, como a bioimpedância mede a perda e o que ajuda a preservar músculo. Atendimento em SP.',
    tituloSocial: 'Mounjaro e perda de massa muscular: o que acontece e como preservar',
    descricaoSocial:
      'Quanto do peso perdido com tirzepatida é massa magra, por que isso importa e como proteína, treino de força e bioimpedância ajudam a preservar o músculo.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Caneta de tirzepatida ao lado de halteres, prato com proteína e tela com o resultado da bioimpedância',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Todo tratamento medicamentoso envolve riscos, exige prescrição e depende de avaliação individual com médico.',
  },
  {
    slug: 'unyque-pro-celulite-flacidez',
    // Lipedema fica só no corpo do texto, não no título nem no endereço (pedido da clínica).
    titulo: 'Unyque Pro para celulite e flacidez: como é o tratamento na Clínica Belvitá, em São Paulo',
    tituloSeo: 'Unyque Pro para celulite e flacidez em São Paulo',
    descricao:
      'Unyque Pro para celulite, flacidez, gordura localizada e lipedema: veja como age cada tecnologia e como é o tratamento na Clínica Belvitá, em São Paulo.',
    tituloSocial: 'Unyque Pro para celulite e flacidez na Clínica Belvitá',
    descricaoSocial:
      'Três tecnologias em um só equipamento para celulite, flacidez e gordura localizada, com uso complementar no lipedema. Sem cortes e sem agulhas.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Equipamento Unyque Pro com as ponteiras ReFreeze, Cryo RF Max e HImFU ao lado de paciente para tratamento de celulite e flacidez',
      legenda: 'Imagem ilustrativa',
    },
    tema: {
      '@type': 'MedicalProcedure',
      name: 'Unyque Pro',
      procedureType: 'https://schema.org/NoninvasiveProcedure',
      bodyLocation: 'Abdômen, flancos, coxas, glúteos, braços e pernas',
    },
    // Mensagem própria dos botões de WhatsApp no texto deste post
    mensagemWhatsapp: 'Olá, tenho interesse no Unyque Pro com a Dra. Isabela Bertoglio. Pode me ajudar?',
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Todo procedimento, inclusive não invasivo, pode ter efeitos adversos, e a indicação depende de avaliação individual com médico. Os resultados variam de pessoa para pessoa.',
  },
];
