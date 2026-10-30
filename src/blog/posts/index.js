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
    titulo: 'Emagrecimento com acompanhamento médico: como funciona, para quem é indicado e quais tratamentos existem, em São Paulo',
    // <title> e descrição do resultado do Google
    tituloSeo: 'Emagrecimento com acompanhamento médico: como funciona | SP',
    descricao:
      'Emagrecimento com acompanhamento médico e nutrologia: avaliação, bioimpedância, plano, remédios quando indicados e manutenção. Veja como funciona em SP.',
    // Prévia ao compartilhar o link (e resumo no card da lista de posts)
    tituloSocial: 'Emagrecimento com acompanhamento médico: como funciona',
    descricaoSocial:
      'Avaliação, bioimpedância, tratamentos e manutenção: o guia do emagrecimento saudável com acompanhamento médico em nutrologia.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-27',
    capa: {
      largura: 1672,
      altura: 941,
      alt: 'Mulher sorri pensativa, com ícones de avaliação individualizada, plano nutricional, estratégias e qualidade de vida no emagrecimento com acompanhamento médico',
      legenda: 'Imagem ilustrativa',
    },
    // Tema do artigo nos dados estruturados (schema.org `about`)
    tema: { '@type': 'MedicalCondition', name: 'Obesidade', alternateName: 'Excesso de peso' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): semaglutida e tirzepatida não entram nas menções.
    mencoes: [{ '@type': 'MedicalTest', name: 'Bioimpedância' }],
  },
  {
    slug: 'bioimpedancia',
    titulo: 'Bioimpedância: o que é, como é feito o exame InBody e como interpretar o resultado em São Paulo',
    tituloSeo: 'Bioimpedância: o que é, exame InBody e como interpretar | SP',
    descricao:
      'Bioimpedância: o que é, como é feito o exame no InBody 380, como se preparar e como ler gordura, músculo e gordura visceral. Onde fazer em São Paulo.',
    tituloSocial: 'Bioimpedância: o que é, como é feito o exame InBody e como interpretar',
    descricaoSocial:
      'O que a bioimpedância mede, como é o exame no InBody 380, como se preparar e como ler gordura, massa muscular e gordura visceral no laudo.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-10-23',
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
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
      { '@type': 'MedicalCondition', name: 'Gordura visceral' },
    ],
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
  {
    slug: 'ozempic-para-que-serve',
    titulo: 'Ozempic: para que serve, se emagrece, efeitos colaterais e diferença para o Wegovy, com acompanhamento em São Paulo',
    tituloSeo: 'Ozempic: para que serve, se emagrece e riscos | SP',
    descricao:
      'Ozempic serve para quê? Entenda se emagrece, a diferença para o Wegovy, efeitos colaterais e quando faz mal. Acompanhamento médico em São Paulo.',
    tituloSocial: 'Ozempic: para que serve, se emagrece e quais os riscos',
    descricaoSocial:
      'Bula para diabetes, uso para emagrecer, diferença para o Wegovy e efeitos colaterais: o que você precisa saber antes de usar semaglutida.',
    publicadoEm: '2026-10-23',
    atualizadoEm: '2026-10-23',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Caneta injetável sem marca ao lado de um quadro comparando a indicação, a dose e a perda de peso do Ozempic e do Wegovy',
      legenda: 'Imagem ilustrativa',
    },
    // Tema principal: diabetes tipo 2 (indicação em bula do Ozempic). Sem o tipo `Drug` (ver o topo deste arquivo).
    tema: { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica nem a leitura da bula, e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere doses sem orientação médica.',
  },
  {
    slug: 'compulsao-alimentar',
    titulo: 'Compulsão alimentar e fome emocional: sintomas, diferença e como tratar, com acompanhamento em São Paulo',
    tituloSeo: 'Compulsão alimentar: sintomas e como tratar | São Paulo',
    descricao:
      'Compulsão alimentar: sintomas, diferença para a fome emocional, o ciclo de restrição e como é o tratamento com psicoterapia e acompanhamento médico em SP.',
    tituloSocial: 'Compulsão alimentar: sintomas, diferença para fome emocional e tratamento',
    descricaoSocial:
      'Episódios de comer muito com perda de controle têm nome e tratamento. Entenda os sinais e como psicoterapia e cuidado médico se combinam.',
    publicadoEm: '2026-10-23',
    atualizadoEm: '2026-10-23',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Mulher pensativa diante de bolo de chocolate, cookies e chocolates, com ícones de estresse, sono, ansiedade e fome emocional',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Transtorno da compulsão alimentar', alternateName: 'Compulsão alimentar' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalTherapy', name: 'Terapia cognitivo-comportamental' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou psicológica. Se você se identificou com os sintomas descritos, procure avaliação profissional.',
  },
  {
    slug: 'obesidade-tratamento',
    // Pilar da obesidade: remedios-para-emagrecer e bioimpedancia linkam para cá.
    titulo: 'Obesidade: o que é, como saber se você tem, riscos e opções de tratamento médico em São Paulo',
    tituloSeo: 'Obesidade: o que é, riscos e tratamento médico | São Paulo',
    descricao:
      'Obesidade é doença crônica e tem tratamento. Entenda o IMC, as causas, os riscos e as opções atuais: estilo de vida, remédios e cirurgia. Nutrologia em SP.',
    tituloSocial: 'Obesidade: o que é, riscos e opções de tratamento',
    descricaoSocial:
      'IMC, cintura e composição corporal, causas, riscos e o que a medicina oferece hoje para tratar a obesidade com segurança.',
    publicadoEm: '2026-10-23',
    atualizadoEm: '2026-10-23',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Paciente conversa com a médica, que mostra a composição corporal em um tablet, com fita métrica sobre a mesa e ícones de avaliação, riscos, tratamento clínico e cirurgia bariátrica',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): semaglutida e tirzepatida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalProcedure', name: 'Cirurgia bariátrica' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Toda cirurgia envolve riscos, e a indicação de qualquer tratamento depende de avaliação individual.',
  },
  {
    slug: 'efeito-sanfona',
    titulo: 'Efeito sanfona: por que o peso volta depois da dieta e como evitar o reganho, com acompanhamento em São Paulo',
    tituloSeo: 'Efeito sanfona: por que o peso volta e como evitar | SP',
    descricao:
      'Efeito sanfona tem explicação: hormônios da fome, metabolismo e perda de músculo. Veja como evitar o reganho de peso, inclusive após as canetas, em SP.',
    tituloSocial: 'Efeito sanfona: por que o peso volta e como evitar o reganho',
    descricaoSocial:
      'O que os estudos mostram sobre fome, metabolismo e reganho depois da dieta, e o que ajuda a manter o peso perdido.',
    publicadoEm: '2026-10-25',
    atualizadoEm: '2026-10-25',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher pensativa ao lado de uma balança e de uma fita métrica, com uma linha que sobe e desce representando o efeito sanfona',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Reganho de peso', alternateName: 'Efeito sanfona' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a tirzepatida não entra nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. Não inicie, suspenda nem altere tratamentos sem orientação médica.',
  },
  {
    slug: 'reeducacao-alimentar',
    titulo: 'Reeducação alimentar para emagrecer: o que é, como começar e como manter, com acompanhamento em São Paulo',
    tituloSeo: 'Reeducação alimentar para emagrecer: como começar | SP',
    descricao:
      'Reeducação alimentar para emagrecer sem dieta da moda: diferença para a dieta, princípios, passo a passo para começar e erros comuns. Nutrologia em SP.',
    tituloSocial: 'Reeducação alimentar para emagrecer: o que é e como começar',
    descricaoSocial:
      'Comida de verdade, proteína, fibras e regularidade: como trocar a dieta com data para acabar por hábitos que mantêm o peso.',
    publicadoEm: '2026-10-25',
    atualizadoEm: '2026-10-25',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher sorridente almoça um prato com frango grelhado, quinoa, salada, tomate, brócolis e abacate, ao lado de frutas, castanhas e água com limão',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'Diet', name: 'Reeducação alimentar' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. O plano alimentar adequado depende de avaliação individual.',
  },
  {
    slug: 'sarcopenia',
    titulo: 'Sarcopenia: o que é, sintomas, diagnóstico e como prevenir a perda de massa muscular, com acompanhamento em São Paulo',
    tituloSeo: 'Sarcopenia: o que é, sintomas e como prevenir | São Paulo',
    descricao:
      'Sarcopenia é a perda de força e massa muscular. Veja sintomas, quem tem mais risco, diagnóstico com bioimpedância e como prevenir. Nutrologia em SP.',
    tituloSocial: 'Sarcopenia: o que é, sintomas e como prevenir a perda de músculo',
    descricaoSocial:
      'Perda de força e de massa muscular com a idade ou depois de emagrecer: sinais, diagnóstico, relação com as canetas e o que funciona para prevenir.',
    publicadoEm: '2026-10-25',
    atualizadoEm: '2026-10-25',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher madura faz exercício com halter, com a musculatura do braço em destaque, ilustrando a prevenção da sarcopenia com treino de força',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade sarcopênica' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
      { '@type': 'MedicalTest', name: 'Força de preensão palmar' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de suplementos e a definição do plano alimentar e de exercícios dependem de avaliação individual.',
  },
  {
    slug: 'gordura-no-figado',
    titulo: 'Gordura no fígado: o que é, graus, exames, riscos e tratamento, com acompanhamento em São Paulo',
    tituloSeo: 'Gordura no fígado: causas, graus e tratamento | São Paulo',
    descricao:
      'Gordura no fígado: o que é, o que significam os graus do ultrassom, exames, riscos e tratamento. Perder 5% a 10% do peso ajuda. Nutrologia em São Paulo.',
    tituloSocial: 'Gordura no fígado: o que é, graus, riscos e tratamento',
    descricaoSocial:
      'Esteatose hepática é comum, silenciosa e reversível nas fases iniciais. Entenda os graus do ultrassom, os exames de fibrose e o que trata.',
    publicadoEm: '2026-10-26',
    atualizadoEm: '2026-10-26',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher com as mãos na barriga e a ilustração de um fígado com gordura acumulada, com ícones de causas, graus e exames, riscos e tratamento',
      legenda: 'Imagem ilustrativa',
    },
    tema: {
      '@type': 'MedicalCondition',
      name: 'Esteatose hepática',
      alternateName: 'Doença hepática esteatótica associada à disfunção metabólica (MASLD)',
    },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalTest', name: 'Elastografia hepática' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. A interpretação de exames e a indicação de tratamento dependem de avaliação individual.',
  },
  {
    slug: 'vitamina-d-b12-ferritina',
    titulo: 'Vitamina D, B12 e ferritina baixas: sintomas, exames, causas e quando tratar, com acompanhamento em São Paulo',
    tituloSeo: 'Vitamina D, B12 e ferritina baixas: sintomas e exames | SP',
    descricao:
      'Vitamina D, B12 e ferritina baixas: sintomas, valores de referência, causas e por que não suplementar por conta própria. Avaliação em nutrologia em SP.',
    tituloSocial: 'Vitamina D, B12 e ferritina baixas: sintomas e quando tratar',
    descricaoSocial:
      'Cansaço, queda de cabelo e formigamento podem ter relação com deficiências comuns. Veja os valores de referência e quando procurar o médico.',
    publicadoEm: '2026-10-26',
    atualizadoEm: '2026-10-26',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher pensativa ao lado de um quadro com vitamina D, vitamina B12 e ferritina e para que serve cada uma: ossos e músculos, sistema nervoso e sangue, disposição e cabelo',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Deficiências nutricionais' },
    mencoes: [
      { '@type': 'MedicalTest', name: '25-hidroxivitamina D' },
      { '@type': 'MedicalTest', name: 'Vitamina B12 sérica' },
      { '@type': 'MedicalTest', name: 'Ferritina' },
      { '@type': 'MedicalCondition', name: 'Anemia por deficiência de ferro' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de suplementos ou medicamentos. A interpretação de exames e a definição de doses dependem de avaliação individual.',
  },
  {
    slug: 'preparo-nutricional-cirurgia-plastica',
    titulo: 'Preparo nutricional antes da cirurgia plástica: exames, alimentação e cuidados para uma recuperação mais segura em São Paulo',
    tituloSeo: 'Preparo nutricional antes da cirurgia plástica | São Paulo',
    descricao:
      'Preparo nutricional antes da cirurgia plástica: anemia, ferro, proteína, glicose, canetas e suplementos. Avaliação em nutrologia na Clínica Belvitá, SP.',
    tituloSocial: 'Preparo nutricional antes da cirurgia plástica',
    descricaoSocial:
      'O que avaliar nas semanas antes da cirurgia: anemia, ferro, proteína, glicose, peso estável, canetas emagrecedoras e suplementos.',
    publicadoEm: '2026-10-26',
    atualizadoEm: '2026-10-26',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher à mesa com salada de frango, salmão, castanhas e água, ao lado de um plano nutricional, com ícones de exames, alimentação, massa muscular e recuperação',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalProcedure', name: 'Avaliação nutricional pré-operatória' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): semaglutida e tirzepatida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalProcedure', name: 'Cirurgia plástica' },
      { '@type': 'MedicalCondition', name: 'Anemia por deficiência de ferro' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Toda cirurgia plástica envolve riscos, e a indicação e o preparo dependem de avaliação individual com o cirurgião, o anestesista e a equipe médica.',
  },
  {
    slug: 'sop-emagrecer',
    titulo: 'SOP e emagrecimento: por que é mais difícil perder peso com ovário policístico e o que funciona, com acompanhamento em São Paulo',
    tituloSeo: 'SOP e emagrecimento: por que é difícil e o que funciona | SP',
    descricao:
      'Emagrecer com SOP é mais difícil por causa da resistência à insulina. Veja por que, o que funciona na alimentação, treino e remédios. Nutrologia em SP.',
    tituloSocial: 'SOP e emagrecimento: por que é mais difícil e o que funciona',
    descricaoSocial:
      'Resistência à insulina, fome e gordura na barriga: entenda a relação entre SOP e peso e o que ajuda a emagrecer com ovário policístico.',
    publicadoEm: '2026-10-27',
    atualizadoEm: '2026-10-27',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher pensativa ao lado da ilustração do útero e dos ovários, com ícones de hormônios, resistência à insulina, ganho de peso e opções de tratamento da SOP',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Síndrome dos ovários policísticos', alternateName: 'SOP' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a metformina não entra nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. O diagnóstico e o tratamento da SOP dependem de avaliação individual com ginecologista e equipe médica.',
  },
  {
    slug: 'emagrecer-depois-dos-40',
    titulo: 'Emagrecer depois dos 40: o que realmente muda no corpo e o que fazer, com acompanhamento em São Paulo',
    tituloSeo: 'Emagrecer depois dos 40: o que muda e o que fazer | SP',
    descricao:
      'Emagrecer depois dos 40 fica mais difícil, mas não pelo motivo que você pensa. Veja o que muda no corpo e o que funciona. Nutrologia em São Paulo.',
    tituloSocial: 'Emagrecer depois dos 40: o que realmente muda e o que fazer',
    descricaoSocial:
      'O metabolismo não desliga aos 40. Entenda o papel do músculo, do sono e dos hormônios e o que funciona para emagrecer nessa fase.',
    publicadoEm: '2026-10-27',
    atualizadoEm: '2026-10-27',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher de cerca de 40 anos sorri pensativa, com ícones de metabolismo, composição corporal, treino e saúde para emagrecer depois dos 40',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
      { '@type': 'MedicalCondition', name: 'Perimenopausa' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de exames, medicamentos e terapias hormonais depende de avaliação individual.',
  },
  {
    slug: 'pre-diabetes',
    titulo: 'Pré-diabetes: o que é, a partir de quanto, sintomas, o que comer e como reverter, com acompanhamento em São Paulo',
    tituloSeo: 'Pré-diabetes: a partir de quanto, sintomas e como reverter',
    descricao:
      'Pré-diabetes a partir de quanto? Veja os valores de glicemia e glicada 5,7, os sintomas, o que comer e como reverter. Nutrologia em São Paulo.',
    tituloSocial: 'Pré-diabetes: a partir de quanto, sintomas, o que comer e como reverter',
    descricaoSocial:
      'Glicemia entre 100 e 125 ou glicada entre 5,7% e 6,4%? Entenda o que é pré-diabetes e o que fazer para reverter.',
    publicadoEm: '2026-10-29',
    atualizadoEm: '2026-10-29',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mãos medindo a glicemia no glicosímetro, que mostra 100 mg/dL, ao lado de mingau de aveia com frutas, castanhas e água, com ícones de glicemia, sintomas, alimentação e prevenção',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Pré-diabetes', alternateName: 'Pré-diabetes tipo 2' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
      { '@type': 'MedicalTest', name: 'Hemoglobina glicada' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica e não é recomendação de uso de qualquer medicamento. O diagnóstico e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'proteina-para-emagrecer',
    titulo: 'Proteína para emagrecer: quanto de proteína por dia, alimentos ricos em proteína e se o whey emagrece, com acompanhamento em São Paulo',
    tituloSeo: 'Quanto de proteína por dia para emagrecer? | SP',
    descricao:
      'Quanto de proteína por dia para emagrecer, cálculo por kg, alimentos ricos em proteína e se o whey emagrece ou engorda. Nutrologia em São Paulo.',
    tituloSocial: 'Quanto de proteína por dia para emagrecer? Cálculo e alimentos',
    descricaoSocial:
      'Proteína dá saciedade e protege o músculo no emagrecimento. Veja quanto comer por dia, as melhores fontes e se o whey ajuda.',
    publicadoEm: '2026-10-29',
    atualizadoEm: '2026-10-29',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Alimentos ricos em proteína sobre a mesa: frango grelhado, salmão, ovos, iogurte, castanhas, sementes e uma dose de whey protein, com ícones de quantidade ideal e cálculo por kg',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'Diet', name: 'Dieta rica em proteína' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. A quantidade de proteína e o uso de suplementos dependem de avaliação individual.',
  },
  {
    slug: 'hipotireoidismo-engorda',
    titulo: 'Hipotireoidismo engorda ou emagrece? Tireoide, TSH alto, levotiroxina e como emagrecer, com acompanhamento em São Paulo',
    tituloSeo: 'Hipotireoidismo engorda ou emagrece? Tireoide e peso | SP',
    descricao:
      'Hipotireoidismo engorda ou emagrece? Veja quantos quilos a tireoide engorda, o que o TSH alto indica e se a levotiroxina emagrece. Nutrologia em SP.',
    tituloSocial: 'Hipotireoidismo engorda ou emagrece? Tireoide, TSH e levotiroxina',
    descricaoSocial:
      'A tireoide lenta engorda, mas geralmente pouco. Entenda o TSH, por que a levotiroxina não emagrece sozinha e como perder peso.',
    publicadoEm: '2026-10-29',
    atualizadoEm: '2026-10-29',
    capa: {
      largura: 1733,
      altura: 907,
      alt: 'Mulher com a mão no pescoço e a ilustração da tireoide em destaque, com ícones de peso, exames de TSH e T4 e tratamento do hipotireoidismo',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipotireoidismo' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a levotiroxina não entra nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Tireoidite de Hashimoto' },
      { '@type': 'MedicalTest', name: 'TSH' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O diagnóstico e o tratamento do hipotireoidismo dependem de avaliação individual, e o uso de qualquer medicamento deve ser feito com prescrição e acompanhamento médico.',
  },
  {
    slug: 'wegovy',
    titulo: 'Wegovy: o que é, como funciona, quanto emagrece e diferença para o Ozempic, com acompanhamento em São Paulo',
    tituloSeo: 'Wegovy: o que é, quanto emagrece e diferença do Ozempic',
    descricao:
      'Wegovy: o que é, como funciona, quanto emagrece nos estudos, diferença para o Ozempic, efeitos colaterais e quem pode usar. Nutrologia em São Paulo.',
    tituloSocial: 'Wegovy: o que é, quanto emagrece e diferença para o Ozempic',
    descricaoSocial:
      'Semaglutida aprovada para obesidade: como age, o que os estudos mostram, efeitos colaterais e o que acontece quando para.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-10-30',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mão segurando uma caneta injetável de semaglutida, com outra caneta ao fundo, e ícones de como funciona, indicações e diferenças em relação ao Ozempic',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug` (ver o topo deste arquivo): semaglutida, Ozempic e tirzepatida não entram nas menções.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de qualquer medicamento para emagrecer depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'inibidor-de-apetite',
    titulo: 'Inibidor de apetite: o que é, quais existem, se o natural funciona e quais os riscos, com acompanhamento em São Paulo',
    tituloSeo: 'Inibidor de apetite: o que é, quais existem e riscos | SP',
    descricao:
      'Inibidor de apetite: quais são permitidos no Brasil, quais foram proibidos, se o natural funciona e os riscos de usar sem acompanhamento médico.',
    tituloSocial: 'Inibidor de apetite: quais existem, o natural funciona e riscos',
    descricaoSocial:
      'Sibutramina, naltrexona com bupropiona e canetas: como reduzem a fome, quem não pode usar e o que foi proibido no Brasil.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-10-30',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Frasco de cápsulas ao lado de um prato com frango, quinoa, brócolis e tomate, copo de água e fita métrica, com ícones de como agem, tipos e riscos dos inibidores de apetite',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): sibutramina, naltrexona/bupropiona e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Compulsão alimentar' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de qualquer medicamento para emagrecer depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'tirzepatida',
    titulo: 'Tirzepatida: o que é, como funciona no corpo, para quem é indicada e cuidados, com acompanhamento em São Paulo',
    tituloSeo: 'Tirzepatida: o que é, como funciona e para quem é | SP',
    descricao:
      'Tirzepatida (Mounjaro): o que é, como funciona no corpo, em quanto tempo faz efeito, para quem é indicada e riscos das canetas falsificadas.',
    tituloSocial: 'Tirzepatida: o que é, como funciona e para quem é indicada',
    descricaoSocial:
      'O princípio ativo do Mounjaro age no GLP-1 e no GIP. Entenda o mecanismo, a indicação, onde aplicar e os cuidados.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-10-30',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher aplicando uma caneta de tirzepatida na barriga, com caderno e estetoscópio sobre a mesa e ícones de ação no organismo, uso seguro e cuidados',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): tirzepatida e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de tirzepatida depende de avaliação individual, prescrição e acompanhamento médico.',
  },
];
