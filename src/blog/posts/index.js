// Posts do blog. Cada post tem uma entrada aqui e o texto em ./<slug>.html (o HTML do artigo, sem o título,
// a assinatura e o aviso, que a página monta). Datas no formato AAAA-MM-DD.
//
// Opcionais: `aviso` troca o aviso final padrão; `mensagemWhatsapp` troca a mensagem dos botões de WhatsApp
// dentro do texto (cabeçalho e botão flutuante seguem com a mensagem padrão do blog); `mencoes` lista outros
// temas citados no texto (schema.org `mentions`).
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
    atualizadoEm: '2026-10-19',
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
    atualizadoEm: '2026-10-19',
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
    atualizadoEm: '2026-10-20',
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
    atualizadoEm: '2026-10-19',
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
    atualizadoEm: '2026-10-19',
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
  {
    slug: 'nao-consigo-emagrecer',
    titulo: 'Não consigo emagrecer: 9 causas que vale investigar e como é o tratamento em São Paulo',
    tituloSeo: 'Não consigo emagrecer: causas e tratamento em São Paulo',
    descricao:
      'Não consigo emagrecer mesmo com dieta e treino: veja 9 causas, de hormônios a sono e massa muscular, os exames que ajudam e onde investigar em São Paulo.',
    tituloSocial: 'Não consigo emagrecer: 9 causas que vale investigar',
    descricaoSocial:
      'Resistência à insulina, tireoide, sono, medicamentos, perda de músculo e adaptação metabólica: o que pode travar o emagrecimento e como investigar.',
    publicadoEm: '2026-10-18',
    atualizadoEm: '2026-10-19',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher preocupada mede a cintura com fita métrica, cercada por ícones de causas que dificultam o emagrecimento: cérebro, sono, tireoide, estresse, intestino e massa muscular',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade', alternateName: 'Dificuldade para perder peso' },
    // Outros temas citados no texto (schema.org `mentions`)
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Hipotireoidismo' },
      { '@type': 'MedicalCondition', name: 'Síndrome dos ovários policísticos' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Não suspenda nem altere medicamentos sem orientação. A investigação e o tratamento dependem de avaliação individual com médico.',
  },
  {
    slug: 'resistencia-a-insulina',
    titulo: 'Resistência à insulina: sintomas, exames e como ela dificulta o emagrecimento, com tratamento em São Paulo',
    tituloSeo: 'Resistência à insulina: sintomas e tratamento em São Paulo',
    descricao:
      'Resistência à insulina: veja os sintomas, como o HOMA-IR e outros exames fazem o diagnóstico, por que ela trava o emagrecimento e como tratar em São Paulo.',
    tituloSocial: 'Resistência à insulina: sintomas, exames e tratamento',
    descricaoSocial:
      'Gordura abdominal, fome de doce e dificuldade para emagrecer: como reconhecer a resistência à insulina, entender o HOMA-IR e tratar.',
    publicadoEm: '2026-10-18',
    atualizadoEm: '2026-10-19',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Resultado de exames com glicemia, insulina de jejum, HOMA-IR alto e hemoglobina glicada, ao lado da curva de glicose e insulina após a refeição, com o consultório da Clínica Belvitá ao fundo',
      legenda: 'Imagem ilustrativa',
    },
    tema: {
      '@type': 'MedicalCondition',
      name: 'Resistência à insulina',
      alternateName: 'Insulinorresistência',
      signOrSymptom: [
        { '@type': 'MedicalSignOrSymptom', name: 'Gordura abdominal' },
        { '@type': 'MedicalSignOrSymptom', name: 'Acantose nigricans' },
      ],
      possibleTreatment: [
        { '@type': 'LifestyleModification', name: 'Atividade física e treino de força' },
        { '@type': 'LifestyleModification', name: 'Mudança alimentar' },
      ],
    },
    mencoes: [
      { '@type': 'MedicalTest', name: 'HOMA-IR' },
      { '@type': 'MedicalTest', name: 'Hemoglobina glicada' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Não inicie, suspenda nem altere medicamentos sem orientação. O diagnóstico e o tratamento dependem de avaliação individual com médico.',
  },
  {
    slug: 'gordura-visceral',
    titulo: 'Gordura visceral: o que é, por que é perigosa e como reduzir, com avaliação em São Paulo',
    tituloSeo: 'Gordura visceral: riscos e como reduzir em São Paulo',
    descricao:
      'Gordura visceral: entenda o que é, por que aumenta o risco de diabetes e doenças do coração, como medir e o que reduz essa gordura. Avaliação em São Paulo.',
    tituloSocial: 'Gordura visceral: o que é, riscos e como reduzir',
    descricaoSocial:
      'A gordura entre os órgãos do abdômen é a mais ligada a diabetes, gordura no fígado e doença cardiovascular. Como medir e como reduzir.',
    publicadoEm: '2026-10-18',
    atualizadoEm: '2026-10-19',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Resultado da bioimpedância com o nível de gordura visceral acima da faixa desejável e a medida da cintura, com o consultório da Clínica Belvitá ao fundo',
      legenda: 'Imagem ilustrativa',
    },
    tema: {
      '@type': 'MedicalCondition',
      name: 'Excesso de gordura visceral',
      alternateName: 'Obesidade abdominal',
      riskFactor: [
        { '@type': 'MedicalRiskFactor', name: 'Sedentarismo' },
        { '@type': 'MedicalRiskFactor', name: 'Sono insuficiente' },
        { '@type': 'MedicalRiskFactor', name: 'Menopausa' },
      ],
    },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Esteatose hepática' },
    ],
  },
  {
    slug: 'parar-mounjaro',
    titulo: 'Parar o Mounjaro: o que acontece com o peso, como é a retirada e como manter o resultado, com acompanhamento em São Paulo',
    tituloSeo: 'Parar o Mounjaro: o que acontece com o peso | São Paulo',
    descricao:
      'Parar o Mounjaro faz o peso voltar? Veja o que mostrou o SURMOUNT-4, como é a retirada com acompanhamento médico em nutrologia e como manter o peso.',
    tituloSocial: 'Parar o Mounjaro: o que acontece com o peso e como manter',
    descricaoSocial:
      'Reganho, retirada planejada e manutenção: o que os estudos mostram e como o acompanhamento médico ajuda a não perder o resultado.',
    publicadoEm: '2026-10-19',
    atualizadoEm: '2026-10-19',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher mede a cintura com fita métrica ao lado de uma caneta injetável e de um gráfico de peso que cai e volta a subir, com ícones de fome, abdômen, treino de força, sono e acompanhamento médico',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a tirzepatida não entra nas menções.
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere doses sem orientação médica.',
  },
  {
    slug: 'semaglutida-generica',
    titulo: 'Semaglutida genérica: o que muda, se funciona igual ao Ozempic e como usar com segurança em São Paulo',
    tituloSeo: 'Semaglutida genérica: o que muda e se funciona | São Paulo',
    descricao:
      'Semaglutida genérica funciona igual ao Ozempic? Veja o que a Anvisa aprovou, a diferença entre genérico e similar e como trocar com orientação médica.',
    tituloSocial: 'Semaglutida genérica: o que muda e se funciona igual ao Ozempic',
    descricaoSocial:
      'Genérico, similar e sintética: o que a Anvisa aprovou depois do fim da patente e o que continua valendo no tratamento com acompanhamento médico.',
    publicadoEm: '2026-10-19',
    atualizadoEm: '2026-10-20',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Embalagem ilustrativa de semaglutida genérica com a faixa amarela e a letra G, ao lado de uma lista com os tipos de semaglutida: original, com marca, similar e genérica',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a semaglutida não entra nas menções.
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda, troque nem altere doses sem orientação médica.',
  },
  {
    slug: 'vontade-de-comer-doce-a-noite',
    titulo: 'Vontade de comer doce à noite: por que acontece e o que fazer, com acompanhamento em São Paulo',
    tituloSeo: 'Vontade de comer doce à noite: causas e o que fazer | SP',
    descricao:
      'Vontade de comer doce à noite tem explicação: relógio biológico, sono, estresse e o que você come de dia. Veja o que fazer, com nutrologia em SP.',
    tituloSocial: 'Vontade de comer doce à noite: por que acontece e o que fazer',
    descricaoSocial:
      'Relógio biológico, sono, estresse e refeições do dia: entenda a vontade de doce depois do jantar e quando vale procurar avaliação médica.',
    publicadoEm: '2026-10-20',
    atualizadoEm: '2026-10-20',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher à noite olha para um prato com bolo de chocolate, cookie e chocolate, com a lua na janela e ícones de sono e de vontade de doce',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalSymptom', name: 'Vontade de comer doce à noite' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Transtorno de compulsão alimentar' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Mudanças na alimentação, uso de suplementos e medicamentos devem ser orientados por um profissional de saúde.',
  },
  {
    slug: 'canetas-emagrecedoras',
    // Pilar do grupo de medicamentos: tirzepatida-ou-semaglutida e semaglutida-generica linkam para cá.
    titulo: 'Canetas emagrecedoras: quais são aprovadas, para quem são indicadas, riscos e acompanhamento médico em São Paulo',
    tituloSeo: 'Canetas emagrecedoras: quais são, para quem e riscos | SP',
    descricao:
      'Canetas emagrecedoras aprovadas no Brasil: como agem, quanto ajudam a emagrecer, para quem são indicadas e os riscos. Acompanhamento médico em SP.',
    tituloSocial: 'Canetas emagrecedoras: quais são aprovadas, para quem e os riscos',
    descricaoSocial:
      'Liraglutida, semaglutida e tirzepatida: o que os estudos mostram, quem pode usar, efeitos colaterais e por que o acompanhamento médico faz diferença.',
    publicadoEm: '2026-10-20',
    atualizadoEm: '2026-10-21',
    capa: {
      largura: 1536,
      altura: 1024,
      alt: 'Mulher aplica caneta emagrecedora no braço, com ícones de cintura, gráfico de peso em queda, alimentação e bem-estar',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): os princípios ativos não entram nas menções.
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere doses sem orientação médica.',
  },
  {
    slug: 'mounjaro-efeitos-colaterais',
    titulo: 'Mounjaro: efeitos colaterais, como usar e por que precisa de acompanhamento médico em São Paulo',
    tituloSeo: 'Mounjaro: efeitos colaterais, como usar e cuidados | SP',
    descricao:
      'Efeitos colaterais do Mounjaro: o que mostram os estudos, sinais de alerta, como diminuir o enjoo e como usar a caneta com acompanhamento médico em SP.',
    tituloSocial: 'Mounjaro: efeitos colaterais, sinais de alerta e como usar',
    descricaoSocial:
      'Náusea, diarreia, intestino preso: o que esperar da tirzepatida, quando procurar atendimento e os cuidados com anticoncepcional e cirurgias.',
    publicadoEm: '2026-10-21',
    atualizadoEm: '2026-10-21',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Caneta injetável sem marca ao lado de um quadro com os efeitos colaterais mais comuns da tirzepatida no estudo SURMOUNT-1: náusea, diarreia, intestino preso e vômitos',
      legenda: 'Imagem ilustrativa',
    },
    // `Drug` no `about` do texto original vira Obesidade (ver o topo deste arquivo).
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica nem a leitura da bula, e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere doses sem orientação médica.',
  },
  {
    slug: 'remedios-para-emagrecer',
    // Pilar dos remédios (comprimidos e canetas); canetas-emagrecedoras é o pilar das injetáveis.
    titulo: 'Remédios para emagrecer: quais são aprovados, como agem, riscos e quando usar, com acompanhamento em São Paulo',
    tituloSeo: 'Remédios para emagrecer: quais são aprovados e riscos | SP',
    descricao:
      'Remédios para emagrecer aprovados no Brasil: comprimidos e canetas, como agem, quanto ajudam, riscos e inibidores proibidos. Acompanhamento em SP.',
    tituloSocial: 'Remédios para emagrecer: quais são aprovados, como agem e os riscos',
    descricaoSocial:
      'Orlistate, sibutramina, naltrexona com bupropiona e canetas: o que funciona, o que é proibido e por que a escolha é médica.',
    publicadoEm: '2026-10-21',
    atualizadoEm: '2026-10-21',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Comprimidos e caneta injetável sem marca ao lado de um quadro com os remédios para obesidade aprovados no Brasil, em comprimido e em injeção',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): os princípios ativos não entram nas menções.
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere tratamentos sem orientação médica.',
  },
];
