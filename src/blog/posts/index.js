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
    atualizadoEm: '2026-11-06',
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
    tituloSeo: 'Bioimpedância: o que é, como funciona e como ler o resultado',
    descricao:
      'Bioimpedância: o que é, como é feito o exame no InBody 380, como se preparar e como ler gordura, músculo e gordura visceral. Onde fazer em São Paulo.',
    tituloSocial: 'Bioimpedância: o que é, como funciona e como ler o resultado',
    descricaoSocial:
      'O que a bioimpedância mede, como é o exame no InBody 380, como se preparar e como ler gordura, massa muscular e gordura visceral no laudo.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-11-12',
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
    titulo: 'Mounjaro ou Ozempic? A diferença entre tirzepatida e semaglutida e como é feita a escolha, em São Paulo',
    tituloSeo: 'Mounjaro ou Ozempic: qual a diferença e qual escolher?',
    descricao:
      'Mounjaro ou Ozempic: veja a diferença entre tirzepatida e semaglutida, o que mostrou o estudo que comparou as duas e como é feita a escolha.',
    tituloSocial: 'Mounjaro ou Ozempic: qual a diferença e qual escolher?',
    descricaoSocial:
      'Mounjaro ou Ozempic: veja a diferença entre tirzepatida e semaglutida, o que mostrou o estudo que comparou as duas e como é feita a escolha.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-11-12',
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
    atualizadoEm: '2026-11-12',
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
    tituloSeo: 'Unyque Pro: como funciona para celulite e flacidez',
    descricao:
      'Unyque Pro para celulite, flacidez, gordura localizada e lipedema: veja como age cada tecnologia e como é o tratamento na Clínica Belvitá, em São Paulo.',
    tituloSocial: 'Unyque Pro: como funciona para celulite e flacidez',
    descricaoSocial:
      'Três tecnologias em um só equipamento para celulite, flacidez e gordura localizada, com uso complementar no lipedema. Sem cortes e sem agulhas.',
    publicadoEm: '2026-10-08',
    atualizadoEm: '2026-11-11',
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
    atualizadoEm: '2026-11-06',
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
    tituloSeo: 'Resistência à insulina: sintomas, exames e causas',
    descricao:
      'Resistência à insulina: veja os sintomas, como o HOMA-IR e outros exames fazem o diagnóstico, por que ela trava o emagrecimento e como tratar em São Paulo.',
    tituloSocial: 'Resistência à insulina: sintomas, exames e causas',
    descricaoSocial:
      'Gordura abdominal, fome de doce e dificuldade para emagrecer: como reconhecer a resistência à insulina, entender o HOMA-IR e tratar.',
    publicadoEm: '2026-10-18',
    atualizadoEm: '2026-11-09',
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
    tituloSeo: 'Nível de gordura visceral: o que é normal e como reduzir',
    descricao:
      'Nível de gordura visceral: o que significa na bioimpedância, qual valor é considerado normal, os riscos e o que ajuda a reduzir.',
    tituloSocial: 'Nível de gordura visceral: o que é normal e como reduzir',
    descricaoSocial:
      'Nível de gordura visceral: o que significa na bioimpedância, qual valor é considerado normal, os riscos e o que ajuda a reduzir.',
    publicadoEm: '2026-10-18',
    atualizadoEm: '2026-11-12',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-12',
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
    tituloSeo: 'Canetas emagrecedoras: tipos, diferenças e como agem',
    descricao:
      'Canetas emagrecedoras aprovadas no Brasil: como agem, quanto ajudam a emagrecer, para quem são indicadas e os riscos. Acompanhamento médico em SP.',
    tituloSocial: 'Canetas emagrecedoras: tipos, diferenças e como agem',
    descricaoSocial:
      'Liraglutida, semaglutida e tirzepatida: o que os estudos mostram, quem pode usar, efeitos colaterais e por que o acompanhamento médico faz diferença.',
    publicadoEm: '2026-10-20',
    atualizadoEm: '2026-11-12',
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
    titulo: 'Mounjaro: efeitos colaterais, reações mais comuns, contraindicações e como usar, com acompanhamento em São Paulo',
    tituloSeo: 'Mounjaro: efeitos colaterais, reações e contraindicações',
    descricao:
      'Mounjaro: efeitos colaterais mais comuns, reações na primeira dose, sinais de alerta e contraindicações. Veja como reduzir os enjoos com segurança.',
    tituloSocial: 'Mounjaro: efeitos colaterais, reações e contraindicações',
    descricaoSocial:
      'Mounjaro: efeitos colaterais mais comuns, reações na primeira dose, sinais de alerta e contraindicações. Veja como reduzir os enjoos com segurança.',
    publicadoEm: '2026-10-21',
    atualizadoEm: '2026-11-12',
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
    titulo: 'Qual o melhor remédio para emagrecer? Remédios aprovados, como agem e para quem são indicados, em São Paulo',
    tituloSeo: 'Qual o melhor remédio para emagrecer? Opções aprovadas | SP',
    descricao:
      'Qual o melhor remédio para emagrecer? Conheça os remédios aprovados no Brasil, como agem, para quem são indicados e por que a escolha é individual.',
    tituloSocial: 'Qual o melhor remédio para emagrecer? Opções aprovadas | SP',
    descricaoSocial:
      'Qual o melhor remédio para emagrecer? Conheça os remédios aprovados no Brasil, como agem, para quem são indicados e por que a escolha é individual.',
    publicadoEm: '2026-10-21',
    atualizadoEm: '2026-11-12',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-11',
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
    tituloSeo: 'Obesidade: o que é, graus, riscos e opções de tratamento',
    descricao:
      'Obesidade é doença crônica e tem tratamento. Entenda o IMC, as causas, os riscos e as opções atuais: estilo de vida, remédios e cirurgia. Nutrologia em SP.',
    tituloSocial: 'Obesidade: o que é, graus, riscos e opções de tratamento',
    descricaoSocial:
      'IMC, cintura e composição corporal, causas, riscos e o que a medicina oferece hoje para tratar a obesidade com segurança.',
    publicadoEm: '2026-10-23',
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-09',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-11',
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
    tituloSeo: 'Gordura no fígado: o que é, graus, causas e exames',
    descricao:
      'Gordura no fígado: o que é, o que significam os graus do ultrassom, exames, riscos e tratamento. Perder 5% a 10% do peso ajuda. Nutrologia em São Paulo.',
    tituloSocial: 'Gordura no fígado: o que é, graus, causas e exames',
    descricaoSocial:
      'Esteatose hepática é comum, silenciosa e reversível nas fases iniciais. Entenda os graus do ultrassom, os exames de fibrose e o que trata.',
    publicadoEm: '2026-10-26',
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-08',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-12',
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
    atualizadoEm: '2026-11-12',
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
    atualizadoEm: '2026-11-06',
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
    atualizadoEm: '2026-11-07',
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
    atualizadoEm: '2026-11-06',
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
    titulo: 'Mounjaro (tirzepatida): o que é, para que serve, como age no corpo, para quem é indicado e cuidados, com acompanhamento em São Paulo',
    tituloSeo: 'Mounjaro (tirzepatida): o que é, para que serve e como age',
    descricao:
      'Mounjaro (tirzepatida): o que é, para que serve, como age no corpo, se é insulina, para quem é indicado e os cuidados durante o uso.',
    tituloSocial: 'Mounjaro (tirzepatida): o que é, para que serve e como age',
    descricaoSocial:
      'Mounjaro (tirzepatida): o que é, para que serve, como age no corpo, se é insulina, para quem é indicado e os cuidados durante o uso.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-11-12',
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
  {
    slug: 'mounjaro-emagrece-quantos-quilos',
    titulo: 'Mounjaro emagrece quantos quilos por semana e por mês? O que os estudos mostram e por que varia, com acompanhamento em São Paulo',
    tituloSeo: 'Mounjaro emagrece quantos quilos por semana e por mês? | SP',
    descricao:
      'Mounjaro emagrece quantos quilos por semana e por mês? Veja o que mostram os estudos, por que a perda varia e o que esperar em cada fase.',
    tituloSocial: 'Mounjaro emagrece quantos quilos por semana e por mês? | SP',
    descricaoSocial:
      'Mounjaro emagrece quantos quilos por semana e por mês? Veja o que mostram os estudos, por que a perda varia e o que esperar em cada fase.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Mulher medindo a cintura com fita métrica, ao lado de balança, caneta injetável e gráfico de perda de peso, com ícones de estudos, perda de peso e resultados',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): tirzepatida e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Os números citados são médias de estudos clínicos e não representam garantia de resultado. O uso de tirzepatida depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'metformina-emagrece',
    titulo: 'Metformina emagrece? Para que serve, quando é indicada, efeitos colaterais e uso sem diabetes, com acompanhamento em São Paulo',
    tituloSeo: 'Metformina: para que serve, emagrece e efeitos colaterais',
    descricao:
      'Metformina: para que serve, se emagrece, os efeitos colaterais mais comuns e por que não é um remédio aprovado para perda de peso.',
    tituloSocial: 'Metformina: para que serve, emagrece e efeitos colaterais',
    descricaoSocial:
      'Metformina: para que serve, se emagrece, os efeitos colaterais mais comuns e por que não é um remédio aprovado para perda de peso.',
    publicadoEm: '2026-10-30',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1731,
      altura: 909,
      alt: 'Frasco de comprimidos brancos sobre a bancada, com balança, fita métrica e caderno com gráfico de estudos, e ícones de estudos, perda de peso e limites da metformina',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a metformina não entra nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Pré-diabetes' },
      { '@type': 'MedicalCondition', name: 'Síndrome dos ovários policísticos' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de metformina depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'liraglutida',
    titulo: 'Liraglutida (Saxenda): o que é, como funciona, quanto emagrece e diferença para Ozempic e Mounjaro, com acompanhamento em São Paulo',
    tituloSeo: 'Liraglutida (Saxenda): o que é, como age e quanto emagrece',
    descricao:
      'Liraglutida (Saxenda): o que é, como funciona, quanto emagrece, versão nacional e diferença para Ozempic e Mounjaro. Acompanhamento em São Paulo.',
    tituloSocial: 'Liraglutida (Saxenda): como funciona e quanto emagrece',
    descricaoSocial:
      'A caneta diária da classe do GLP-1: perda média nos estudos, versões nacionais, efeitos e comparação com semaglutida e tirzepatida.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com aplicação diária, hormônio GLP-1, perda média de cerca de 8% e versão nacional da liraglutida, ao lado de uma caneta injetável ilustrativa',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): liraglutida, semaglutida e tirzepatida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de liraglutida depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'sibutramina',
    titulo: 'Sibutramina: o que é, como age, se emagrece, efeitos colaterais e quem não pode usar, com acompanhamento em São Paulo',
    tituloSeo: 'Sibutramina emagrece? Como age, riscos e contraindicações',
    descricao:
      'Sibutramina emagrece? Entenda como age, o que mostram os estudos, os efeitos colaterais, quem não pode usar e por que exige receita especial.',
    tituloSocial: 'Sibutramina emagrece? Como age, riscos e contraindicações',
    descricaoSocial:
      'Sibutramina emagrece? Entenda como age, o que mostram os estudos, os efeitos colaterais, quem não pode usar e por que exige receita especial.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com as regras da sibutramina no Brasil, indicação para IMC a partir de 30, receita controlada e cuidado com o coração, ao lado de cápsulas ilustrativas',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): sibutramina e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Hipertensão arterial' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de sibutramina depende de avaliação individual, prescrição em receita controlada e acompanhamento médico.',
  },
  {
    slug: 'orlistate',
    titulo: 'Orlistate: o que é, como funciona, quanto emagrece, efeitos colaterais e para quem é indicado, com acompanhamento em São Paulo',
    tituloSeo: 'Orlistat emagrece? Como funciona e efeitos colaterais | SP',
    descricao:
      'Orlistat emagrece? Veja como o orlistate age no intestino, o que mostram os estudos, os efeitos colaterais e quem não deve usar.',
    tituloSocial: 'Orlistat emagrece? Como funciona e efeitos colaterais | SP',
    descricaoSocial:
      'Orlistat emagrece? Veja como o orlistate age no intestino, o que mostram os estudos, os efeitos colaterais e quem não deve usar.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro explicando que o orlistate age no intestino, reduz a absorção de cerca de um terço da gordura e não tira a fome, ao lado de cápsulas ilustrativas',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): orlistate, sibutramina e liraglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de orlistate depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'rosto-de-ozempic',
    titulo: 'Rosto de Ozempic: o que é, por que acontece, como prevenir e tratar a flacidez no rosto ao emagrecer, com acompanhamento em São Paulo',
    tituloSeo: 'Rosto de Ozempic: por que acontece e como prevenir | SP',
    descricao:
      'Rosto de Ozempic: por que o rosto fica fino e flácido ao emagrecer com canetas, quem tem mais risco, como prevenir e as opções de tratamento.',
    tituloSocial: 'Rosto de Ozempic: por que acontece e como prevenir',
    descricaoSocial:
      'A perda de volume e a flacidez no rosto ao emagrecer com canetas: causas, prevenção com proteína e treino, e tratamentos.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o que ajuda a prevenir a flacidez no rosto ao emagrecer: ritmo gradual de perda, proteína, treino de força e cuidado com a pele',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Flacidez facial' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): semaglutida e tirzepatida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de qualquer tratamento depende de avaliação individual, e todo procedimento tem riscos.',
  },
  {
    slug: 'o-que-comer-usando-mounjaro',
    titulo: 'O que comer usando Mounjaro ou Ozempic: alimentação para emagrecer, evitar enjoo e preservar o músculo, com acompanhamento em São Paulo',
    tituloSeo: 'O que comer usando Mounjaro ou Ozempic | Nutrologia SP',
    descricao:
      'O que comer usando Mounjaro ou Ozempic: proteína, porções, o que evitar, alimentação contra enjoo e intestino preso e quando usar suplementos.',
    tituloSocial: 'O que comer usando Mounjaro ou Ozempic',
    descricaoSocial:
      'Proteína primeiro, porções menores e o que evitar para reduzir o enjoo e preservar o músculo durante o uso das canetas.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com a ordem do prato durante o uso de canetas, proteína primeiro, depois verduras e legumes e carboidrato em porção menor, ao lado de um prato dividido',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): tirzepatida e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'Diet', name: 'Alimentação durante o uso de agonistas de GLP-1' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. O plano alimentar e o uso de suplementos dependem de avaliação individual.',
  },
  {
    slug: 'flacidez-depois-de-emagrecer',
    titulo: 'Flacidez depois de emagrecer: por que acontece, como prevenir e como tratar em São Paulo',
    tituloSeo: 'Flacidez depois de emagrecer: como prevenir e tratar | SP',
    descricao:
      'Flacidez depois de emagrecer: entenda por que a pele não acompanha, como prevenir com proteína e treino e quando tratar com Unyque Pro em São Paulo.',
    tituloSocial: 'Flacidez depois de emagrecer: por que acontece e como tratar',
    descricaoSocial:
      'Pele ou músculo? Entenda a flacidez depois de emagrecer, como prevenir durante o tratamento e as opções para cada grau, do Unyque Pro à cirurgia.',
    publicadoEm: '2026-10-31',
    atualizadoEm: '2026-11-07',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o tratamento da flacidez depois de emagrecer por grau, de treino e proteína ao Unyque Pro e à avaliação com cirurgião plástico',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Flacidez de pele após perda de peso' },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Os resultados de tratamentos variam de pessoa para pessoa, e toda cirurgia plástica envolve riscos. A indicação depende de avaliação individual.',
  },
  {
    slug: 'mounjaro-e-alcool',
    titulo: 'Quem toma Mounjaro pode beber? Álcool, Ozempic, riscos e cuidados, com acompanhamento em São Paulo',
    tituloSeo: 'Quem toma Mounjaro pode beber? Álcool e canetas | SP',
    descricao:
      'Quem toma Mounjaro pode beber álcool ou refrigerante? Veja os riscos para estômago, glicose, fígado e pâncreas, e os cuidados se for beber.',
    tituloSocial: 'Quem toma Mounjaro pode beber? Álcool e canetas | SP',
    descricaoSocial:
      'Quem toma Mounjaro pode beber álcool ou refrigerante? Veja os riscos para estômago, glicose, fígado e pâncreas, e os cuidados se for beber.',
    publicadoEm: '2026-11-01',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com os riscos do álcool durante o uso de canetas emagrecedoras: enjoo, desidratação, hipoglicemia em quem tem diabetes e sobrecarga do fígado e do pâncreas',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): tirzepatida e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Pancreatite' },
      { '@type': 'MedicalCondition', name: 'Hipoglicemia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de canetas emagrecedoras depende de avaliação individual, prescrição e acompanhamento médico.',
  },
  {
    slug: 'mounjaro-queda-de-cabelo',
    titulo: 'Mounjaro dá queda de cabelo? Por que acontece, quanto dura e como prevenir, com acompanhamento em São Paulo',
    tituloSeo: 'Mounjaro dá queda de cabelo? Causas e como prevenir | SP',
    descricao:
      'Mounjaro dá queda de cabelo? Veja quantas pessoas têm queda nos estudos, por que acontece, quanto dura, quais exames fazer e como prevenir.',
    tituloSocial: 'Mounjaro dá queda de cabelo? Causas, duração e prevenção',
    descricaoSocial:
      'A queda de cabelo com canetas costuma ser um eflúvio temporário ligado à perda de peso. Entenda e saiba como prevenir.',
    publicadoEm: '2026-11-01',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a queda de cabelo com Mounjaro: frequência nos estudos, quando começa, quanto dura e o que ajuda a prevenir',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Eflúvio telógeno' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): tirzepatida e semaglutida não entram nas menções.
    mencoes: [
      { '@type': 'MedicalTest', name: 'Ferritina' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de canetas emagrecedoras e de suplementos depende de avaliação individual e acompanhamento médico.',
  },
  {
    slug: 'consulta-nutrologia-plano-de-saude',
    titulo: 'Consulta de nutrologia pelo plano de saúde: o plano cobre nutrólogo, como pedir reembolso e quais documentos guardar, em São Paulo',
    tituloSeo: 'Nutrólogo pela Unimed e outros planos: cobertura e reembolso',
    descricao:
      'Nutrólogo pela Unimed e outros planos: como funciona a cobertura, quando dá para pedir reembolso e o que levar para a consulta particular.',
    tituloSocial: 'Nutrólogo pela Unimed e outros planos: cobertura e reembolso',
    descricaoSocial:
      'Nutrólogo pela Unimed e outros planos: como funciona a cobertura, quando dá para pedir reembolso e o que levar para a consulta particular.',
    publicadoEm: '2026-11-01',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o passo a passo do reembolso da consulta de nutrologia pelo plano de saúde: contrato, nota fiscal, pedido e prazo de 30 dias',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo. As regras de cobertura e reembolso variam conforme o contrato de cada plano de saúde. Em caso de dúvida, consulte sua operadora ou a ANS.',
  },
  {
    slug: 'exames-para-emagrecer',
    titulo: 'Exames para emagrecer: o check-up metabólico antes de começar, o que cada exame mostra e quando repetir, em São Paulo',
    tituloSeo: 'Exames para emagrecer: o check-up antes de começar | SP',
    descricao:
      'Exames para emagrecer: quais pedir, o que cada um mostra, exames antes de usar canetas, com que frequência repetir e se o plano cobre. Nutrologia SP.',
    tituloSocial: 'Exames para emagrecer: o check-up metabólico antes de começar',
    descricaoSocial:
      'Glicose, insulina, tireoide, fígado, rins e vitaminas: o que cada exame mostra e por que importa no emagrecimento.',
    publicadoEm: '2026-11-01',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o check-up metabólico antes de emagrecer: glicose e hemoglobina glicada, tireoide, fígado e vitaminas, ao lado de tubos de coleta',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Hemoglobina glicada' },
      { '@type': 'MedicalTest', name: 'TSH' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Os exames necessários e a interpretação dos resultados dependem de avaliação individual.',
  },
  {
    slug: 'nutrologo-o-que-faz',
    titulo: 'Nutrólogo: o que faz, se é médico, diferença para o nutricionista e para o endocrinologista para emagrecer, em São Paulo',
    tituloSeo: 'Nutrólogo, endocrinologista ou nutricionista: qual procurar?',
    descricao:
      'Nutrólogo, endocrinologista ou nutricionista: veja a diferença entre eles, o que cada um faz no emagrecimento e qual procurar no seu caso.',
    tituloSocial: 'Nutrólogo, endocrinologista ou nutricionista: qual procurar?',
    descricaoSocial:
      'Nutrólogo, endocrinologista ou nutricionista: veja a diferença entre eles, o que cada um faz no emagrecimento e qual procurar no seu caso.',
    publicadoEm: '2026-11-01',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro comparando nutrólogo, nutricionista e endocrinologista: formação, registro, diagnóstico e prescrição de medicamentos',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica.',
  },
  {
    slug: 'hipotireoidismo-subclinico',
    titulo: 'Hipotireoidismo subclínico: o que é, sintomas, valores do TSH, quando tratar e se tem cura, com acompanhamento em São Paulo',
    tituloSeo: 'Hipotireoidismo subclínico: o que é e quando tratar | SP',
    descricao:
      'Hipotireoidismo subclínico: o que é, sintomas, valores do TSH, quando tratar, se tem cura e a relação com o peso. Acompanhamento em São Paulo.',
    tituloSocial: 'Hipotireoidismo subclínico: o que é, sintomas e quando tratar',
    descricaoSocial:
      'TSH alto com T4 normal: como confirmar o diagnóstico, quando o remédio é indicado e por que muitas vezes o TSH normaliza sozinho.',
    publicadoEm: '2026-11-02',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com a diferença entre hipotireoidismo subclínico e clínico pelo TSH e pelo T4 livre e quando o tratamento costuma ser indicado',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipotireoidismo subclínico' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a levotiroxina não entra nas menções.
    mencoes: [
      { '@type': 'MedicalTest', name: 'TSH' },
      { '@type': 'MedicalCondition', name: 'Tireoidite de Hashimoto' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O diagnóstico e o tratamento da tireoide dependem de avaliação individual e devem ser acompanhados por médico.',
  },
  {
    slug: 'hemoglobina-glicada',
    titulo: 'Hemoglobina glicada: o que é, valores normais, o que significa alta e como baixar, com acompanhamento em São Paulo',
    tituloSeo: 'Hemoglobina glicada (glicemia glicada): valores normais | SP',
    descricao:
      'Hemoglobina glicada (glicemia glicada): o que é, valores normais, o que significa 6,2% ou 11% e como baixar. Veja quando procurar o médico.',
    tituloSocial: 'Hemoglobina glicada (glicemia glicada): valores normais | SP',
    descricaoSocial:
      'Hemoglobina glicada (glicemia glicada): o que é, valores normais, o que significa 6,2% ou 11% e como baixar. Veja quando procurar o médico.',
    publicadoEm: '2026-11-02',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com os valores de hemoglobina glicada: normal abaixo de 5,7%, pré-diabetes de 5,7% a 6,4% e diabetes a partir de 6,5%',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalTest', name: 'Hemoglobina glicada' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Pré-diabetes' },
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A interpretação de exames e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'triglicerides-alto',
    titulo: 'Triglicérides alto: o que é, valores de referência, causas e como baixar com alimentação, com acompanhamento em São Paulo',
    tituloSeo: 'Triglicérides alto: causas, valores e como baixar | SP',
    descricao:
      'Triglicérides alto: valores de referência, causas, riscos, o que comer e o que evitar e quando usar remédio. Acompanhamento em nutrologia em São Paulo.',
    tituloSocial: 'Triglicérides alto: causas, valores e como baixar',
    descricaoSocial:
      'Açúcar, álcool e excesso de peso são os principais vilões. Veja os valores de referência e o que funciona para baixar.',
    publicadoEm: '2026-11-02',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com os valores de triglicérides: desejável abaixo de 150 mg/dL em jejum e acima de 500 mg/dL com risco de pancreatite',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipertrigliceridemia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome metabólica' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Esteatose hepática' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A interpretação de exames e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'ferritina-alta',
    titulo: 'Ferritina alta: o que significa, causas, quando se preocupar e quais exames fazer, com acompanhamento em São Paulo',
    tituloSeo: 'Ferritina alta: o que significa e quando se preocupar',
    descricao:
      'Ferritina alta: o que significa, causas como gordura no fígado e inflamação, exames para investigar, quando se preocupar e o que fazer. Nutrologia SP.',
    tituloSocial: 'Ferritina alta: o que significa e quando se preocupar',
    descricaoSocial:
      'Na maioria das vezes não é excesso de ferro. Entenda as causas e o papel da saturação de transferrina.',
    publicadoEm: '2026-11-02',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com as causas de ferritina alta, como inflamação, gordura no fígado e álcool, e o papel da saturação de transferrina na investigação',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hiperferritinemia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Hemocromatose' },
      { '@type': 'MedicalCondition', name: 'Esteatose hepática' },
      { '@type': 'MedicalTest', name: 'Saturação de transferrina' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A interpretação de exames e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'colesterol-alto',
    titulo: 'Colesterol alto: o que comer, o que evitar, valores de LDL e HDL e como baixar, com acompanhamento em São Paulo',
    tituloSeo: 'Colesterol alto: o que comer, o que evitar e metas | SP',
    descricao:
      'Colesterol alto: o que comer e o que evitar, metas de LDL da diretriz brasileira de 2025, causas e quando usar remédio. Nutrologia em São Paulo.',
    tituloSocial: 'Colesterol alto: o que comer, o que evitar e as metas de LDL',
    descricaoSocial:
      'Fibras, peixes e gorduras boas ajudam; gordura saturada e trans atrapalham. Veja as metas de LDL de 2025 por risco.',
    publicadoEm: '2026-11-02',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com as metas de LDL por risco cardiovascular na diretriz brasileira de 2025, de menos de 115 a menos de 40 mg/dL',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipercolesterolemia' },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Colesterol LDL' },
      { '@type': 'MedicalCondition', name: 'Aterosclerose' },
      { '@type': 'MedicalTest', name: 'Lipoproteína(a)' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A definição do risco cardiovascular, das metas e do tratamento depende de avaliação individual.',
  },
  {
    slug: 'acido-urico-alto',
    titulo: 'Ácido úrico alto: o que é, valores, causas, o que comer e a relação com o peso, com acompanhamento em São Paulo',
    tituloSeo: 'Ácido úrico alto: causas, o que comer e valores | SP',
    descricao:
      'Ácido úrico alto: valores de referência, causas, riscos de gota, o que comer e o que evitar e a relação com o peso. Acompanhamento em nutrologia em SP.',
    tituloSocial: 'Ácido úrico alto: causas, o que comer e valores',
    descricaoSocial:
      'Excesso de peso, álcool e bebidas açucaradas elevam o ácido úrico. Veja o que comer, o que evitar e quando precisa de remédio.',
    publicadoEm: '2026-11-03',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre ácido úrico alto: limite por volta de 6 a 7 mg/dL, risco de cristais a partir de 6,8 mg/dL, meta abaixo de 6 mg/dL na gota e o que reduzir na alimentação',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hiperuricemia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Gota' },
      { '@type': 'MedicalCondition', name: 'Síndrome metabólica' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A interpretação de exames e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'sindrome-metabolica',
    titulo: 'Síndrome metabólica: o que é, critérios de diagnóstico, riscos e tratamento, com acompanhamento em São Paulo',
    tituloSeo: 'Síndrome metabólica: o que é, critérios e riscos',
    descricao:
      'Síndrome metabólica: o que é, os 5 critérios de diagnóstico, causas, riscos de diabetes e infarto, tratamento e se tem cura. Nutrologia em São Paulo.',
    tituloSocial: 'Síndrome metabólica: o que é, critérios e riscos',
    descricaoSocial:
      'Cintura, triglicérides, HDL, pressão e glicose: veja os critérios, os riscos e como a perda de peso melhora todos ao mesmo tempo.',
    publicadoEm: '2026-11-03',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com os cinco critérios da síndrome metabólica: cintura, triglicérides, HDL, pressão e glicemia de jejum',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Síndrome metabólica' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
      { '@type': 'MedicalCondition', name: 'Hipertensão arterial' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O diagnóstico e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'como-perder-gordura-abdominal',
    titulo: 'Como perder gordura abdominal: o que funciona de verdade, mitos e por que a barriga não sai, com acompanhamento em São Paulo',
    tituloSeo: 'Como perder gordura abdominal: o que funciona | SP',
    descricao:
      'Como perder gordura abdominal e barriga: o que funciona, o que é mito, por que a barriga não sai e como medir a cintura. Acompanhamento em São Paulo.',
    tituloSocial: 'Como perder gordura abdominal: o que funciona de verdade',
    descricaoSocial:
      'Abdominal, cinta e chá não tiram gordura da barriga. Veja o que funciona e por que às vezes ela não sai.',
    publicadoEm: '2026-11-03',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro comparando o que funciona para perder gordura abdominal, como alimentação, treino de força e sono, com os mitos, como abdominais, cintas e chás',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade abdominal' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Gordura visceral' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalTest', name: 'Circunferência abdominal' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano para emagrecer e a indicação de qualquer tratamento dependem de avaliação individual.',
  },
  {
    slug: 'creatina',
    titulo: 'Creatina: para que serve, se mulher pode tomar, se engorda e se faz mal aos rins, com acompanhamento em São Paulo',
    tituloSeo: 'Creatina: para que serve, engorda e faz mal aos rins?',
    descricao:
      'Creatina: para que serve, se mulher pode tomar, se engorda ou incha, se faz mal aos rins e o papel no emagrecimento. Nutrologia em São Paulo.',
    tituloSocial: 'Creatina: para que serve, engorda e faz mal aos rins?',
    descricaoSocial:
      'O suplemento mais estudado para força e massa muscular: benefícios, mitos, cuidados com os rins e uso no emagrecimento.',
    publicadoEm: '2026-11-03',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a creatina: ajuda na força e na massa muscular com treino, não aumenta gordura, é considerada segura em rins saudáveis e pode elevar a creatinina no exame',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    // Sem o tipo `DietarySupplement`: como `Drug` (ver o topo deste arquivo), o Google o lê como produto à venda.
    mencoes: [
      { '@type': 'MedicalTest', name: 'Creatinina' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de suplementos depende de avaliação individual e acompanhamento.',
  },
  {
    slug: 'jejum-intermitente',
    titulo: 'Jejum intermitente funciona para emagrecer? O que dizem os estudos, riscos e quem não deve fazer, com acompanhamento em São Paulo',
    tituloSeo: 'Jejum intermitente emagrece? O que a ciência mostra | SP',
    descricao:
      'Jejum intermitente emagrece? Veja o que mostram os estudos, como se compara à dieta comum, os tipos de jejum e quem não deve fazer.',
    tituloSocial: 'Jejum intermitente emagrece? O que a ciência mostra | SP',
    descricaoSocial:
      'Jejum intermitente emagrece? Veja o que mostram os estudos, como se compara à dieta comum, os tipos de jejum e quem não deve fazer.',
    publicadoEm: '2026-11-03',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre jejum intermitente: resultado parecido com o de dietas comuns nos estudos, risco de perda de músculo e grupos que não devem fazer',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'Diet', name: 'Jejum intermitente' },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a tirzepatida não entra nas menções.
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. Qualquer estratégia alimentar para emagrecer depende de avaliação individual.',
  },
  {
    slug: 'deficit-calorico',
    titulo: 'Déficit calórico: o que é, como calcular, quantas calorias comer por dia para emagrecer e por que só ele não basta, em São Paulo',
    tituloSeo: 'Déficit calórico: o que é e quantas calorias comer | SP',
    descricao:
      'Déficit calórico: o que é, como calcular, quantas calorias comer por dia para emagrecer e por que só ele não basta. Acompanhamento em nutrologia em SP.',
    tituloSocial: 'Déficit calórico: o que é e quantas calorias comer por dia',
    descricaoSocial:
      'Como o corpo gasta energia, como estimar o seu déficit e por que a conta nem sempre fecha.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre déficit calórico: o gasto diário soma metabolismo basal, digestão e atividade física, e o déficit moderado com proteína preserva o músculo',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. A meta de calorias e o plano alimentar dependem de avaliação individual.',
  },
  {
    slug: 'low-carb',
    titulo: 'Dieta low carb funciona? Benefícios, riscos, diferença para a cetogênica e para quem serve, com acompanhamento em São Paulo',
    tituloSeo: 'Dieta low carb funciona? Benefícios e riscos | SP',
    descricao:
      'Dieta low carb funciona? Veja o que dizem os estudos, a diferença para a cetogênica, benefícios, riscos e quem não deve fazer. Nutrologia em São Paulo.',
    tituloSocial: 'Dieta low carb funciona? Benefícios, riscos e para quem serve',
    descricaoSocial:
      'Low carb ou cetogênica: o que mostram os estudos, efeitos no colesterol e na glicose e quem precisa de orientação.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre dieta low carb: perda de peso semelhante à de dietas com pouca gordura, melhora de glicose e triglicérides e atenção ao colesterol LDL',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'Diet', name: 'Dieta low carb' },
    mencoes: [
      { '@type': 'Diet', name: 'Dieta cetogênica' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Diabetes mellitus tipo 2' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. Qualquer plano alimentar depende de avaliação individual.',
  },
  {
    slug: 'suplementos-para-emagrecer',
    titulo: 'Suplementos para emagrecer funcionam? Termogênicos, berberina, chá verde e o que diz a ciência, com acompanhamento em São Paulo',
    tituloSeo: 'Suplementos para emagrecer funcionam? O que diz a ciência',
    descricao:
      'Suplementos para emagrecer funcionam? Veja o que a ciência diz sobre termogênicos, berberina, chá verde, cromo e CLA, os riscos e o que realmente ajuda.',
    tituloSocial: 'Suplementos para emagrecer funcionam? O que diz a ciência',
    descricaoSocial:
      'Termogênicos, berberina, chá verde e outros: efeito real no peso, riscos para o fígado e o que pode ajudar de verdade.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o efeito no peso de termogênicos, chá verde e berberina, os riscos para o fígado e o papel de apoio de proteína e creatina, ao lado de cápsulas',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    // Sem menções: os tipos `DietarySupplement` e `Drug` (ver o topo deste arquivo) o Google lê como produto à venda.
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de suplementos depende de avaliação individual e acompanhamento.',
  },
  {
    slug: 'dieta-anti-inflamatoria',
    titulo: 'Dieta anti-inflamatória: alimentos para desinflamar o corpo, o que evitar e para quem ajuda, com acompanhamento em São Paulo',
    tituloSeo: 'Dieta anti-inflamatória: alimentos para desinflamar o corpo',
    descricao:
      'Dieta anti-inflamatória: veja os alimentos para desinflamar o corpo, o que evitar, os mitos e para quem ajuda, incluindo obesidade e reumatismo.',
    tituloSocial: 'Dieta anti-inflamatória: alimentos para desinflamar o corpo',
    descricaoSocial:
      'Dieta anti-inflamatória: veja os alimentos para desinflamar o corpo, o que evitar, os mitos e para quem ajuda, incluindo obesidade e reumatismo.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre dieta anti-inflamatória: alimentos a priorizar, como verduras, peixes e azeite, e a reduzir, como ultraprocessados e açúcar, ao lado de um prato dividido',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'Diet', name: 'Dieta anti-inflamatória' },
    mencoes: [
      { '@type': 'Diet', name: 'Dieta mediterrânea' },
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Artrite reumatoide' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica ou nutricional. O plano alimentar e o tratamento de doenças inflamatórias dependem de avaliação individual.',
  },
  {
    slug: 'cortisol-alto-engorda',
    titulo: 'Cortisol alto engorda? Estresse, ansiedade, sono e ganho de peso, sintomas e quando investigar, com acompanhamento em São Paulo',
    tituloSeo: 'Cortisol alto engorda? Estresse e ganho de peso | SP',
    descricao:
      'Cortisol alto engorda? Entenda como estresse e sono ruim favorecem o ganho de peso, os sinais de síndrome de Cushing, os exames certos e como baixar.',
    tituloSocial: 'Cortisol alto engorda? Estresse, sono e ganho de peso',
    descricaoSocial:
      'Por que o estresse engorda, quando suspeitar de síndrome de Cushing e quais exames fazer.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre cortisol e peso: estresse e sono ruim aumentam a fome e a gordura abdominal, e a síndrome de Cushing é rara e exige exames específicos',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipercortisolismo' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome de Cushing' },
      { '@type': 'MedicalCondition', name: 'Ansiedade' },
      { '@type': 'MedicalCondition', name: 'Obesidade abdominal' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A investigação de alterações hormonais e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'emagrecer-na-menopausa',
    titulo: 'Emagrecer na menopausa: por que fica mais difícil e o que funciona, com acompanhamento em nutrologia em São Paulo',
    tituloSeo: 'Menopausa engorda? Como emagrecer na menopausa | SP',
    descricao:
      'Menopausa engorda? Entenda por que o peso e a barriga mudam nessa fase e o que ajuda a emagrecer na menopausa, com acompanhamento médico.',
    tituloSocial: 'Menopausa engorda? Como emagrecer na menopausa | SP',
    descricaoSocial:
      'Menopausa engorda? Entenda por que o peso e a barriga mudam nessa fase e o que ajuda a emagrecer na menopausa, com acompanhamento médico.',
    publicadoEm: '2026-11-04',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o que muda na menopausa e o que ajuda a emagrecer: gordura na barriga, perda de músculo e sono pior, com treino de força e proteína como base',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Ganho de peso na menopausa' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Menopausa' },
      { '@type': 'MedicalCondition', name: 'Gordura visceral' },
      { '@type': 'MedicalTest', name: 'Bioimpedância' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de terapia hormonal, medicamentos ou qualquer tratamento depende de avaliação individual com médico.',
  },
  {
    slug: 'retencao-de-liquido',
    titulo: 'Retenção de líquido: causas, sintomas, como desinchar e quando o inchaço é sinal de alerta, com acompanhamento em São Paulo',
    tituloSeo: 'Retenção de líquido: causas e como desinchar | SP',
    descricao:
      'Retenção de líquido: entenda as causas do inchaço, os sintomas, como desinchar com segurança e quando o inchaço nas pernas é sinal de alerta.',
    tituloSocial: 'Retenção de líquido: causas, sintomas e como desinchar',
    descricaoSocial:
      'Por que o corpo incha, o que ajuda a desinchar e quando investigar.',
    publicadoEm: '2026-11-05',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre retenção de líquido: sal, calor, hormônios e remédios causam inchaço, e inchaço súbito em uma perna só ou com falta de ar é urgência',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Edema' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Linfedema' },
      { '@type': 'MedicalCondition', name: 'Lipedema' },
      { '@type': 'MedicalCondition', name: 'Insuficiência venosa crônica' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O inchaço persistente precisa de avaliação individual.',
  },
  {
    slug: 'emagrecer-depois-da-gravidez',
    titulo: 'Como emagrecer depois da gravidez com segurança: pós-parto, amamentação, barriga e quando procurar ajuda, em São Paulo',
    tituloSeo: 'Como emagrecer depois da gravidez com segurança | SP',
    descricao:
      'Como emagrecer depois da gravidez com segurança: quando começar, amamentação, barriga pós-parto, exames e quando procurar acompanhamento médico em SP.',
    tituloSocial: 'Como emagrecer depois da gravidez com segurança',
    descricaoSocial:
      'Quando começar, como conciliar com a amamentação e quando buscar ajuda.',
    publicadoEm: '2026-11-05',
    atualizadoEm: '2026-11-06',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o peso no pós-parto: perda gradual ao longo dos meses, sem dietas extremas nem canetas durante a amamentação',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Retenção de peso pós-parto' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diástase abdominal' },
      { '@type': 'MedicalCondition', name: 'Tireoidite pós-parto' },
      { '@type': 'MedicalCondition', name: 'Anemia ferropriva' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano para emagrecer no pós-parto depende de avaliação individual e da liberação do obstetra.',
  },
  {
    slug: 'reganho-apos-bariatrica',
    titulo: 'Reganho de peso depois da bariátrica: por que acontece, sinais de alerta e como tratar, com acompanhamento em São Paulo',
    tituloSeo: 'Reganho de peso após bariátrica: causas e o que fazer',
    descricao:
      'Reganho de peso após bariátrica: entenda por que acontece, os sinais de alerta, os exames e as opções de tratamento com acompanhamento médico em SP.',
    tituloSocial: 'Reganho de peso após bariátrica: causas e tratamento',
    descricaoSocial:
      'Por que o peso volta depois da cirurgia e quais são as opções de tratamento.',
    publicadoEm: '2026-11-05',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre reganho de peso após a bariátrica: adaptação do corpo, beliscos e calorias líquidas, vitaminas por toda a vida e tratamento com acompanhamento',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Reganho de peso após cirurgia bariátrica' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Deficiência de vitamina B12' },
      { '@type': 'MedicalCondition', name: 'Anemia ferropriva' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O tratamento do reganho depende de avaliação individual.',
  },
  {
    slug: 'apneia-do-sono-e-obesidade',
    titulo: 'Apneia do sono e obesidade: sintomas, como o peso afeta o sono, diagnóstico e tratamento, com acompanhamento em São Paulo',
    tituloSeo: 'Apneia do sono e obesidade: sintomas e tratamento | SP',
    descricao:
      'Apneia do sono e obesidade: veja os sintomas, como o excesso de peso afeta o sono, os exames de diagnóstico e como o emagrecimento ajuda no tratamento.',
    tituloSocial: 'Apneia do sono e obesidade: sintomas e tratamento',
    descricaoSocial:
      'Como o peso piora a apneia, como diagnosticar e o papel do emagrecimento.',
    publicadoEm: '2026-11-05',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre apneia do sono e obesidade: ronco e pausas na respiração, diagnóstico por polissonografia e efeito da perda de peso na gravidade',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Apneia obstrutiva do sono' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Hipertensão arterial' },
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O diagnóstico e o tratamento da apneia do sono dependem de avaliação individual.',
  },
  {
    slug: 'dormir-mal-engorda',
    titulo: 'Dormir mal engorda? Como o sono afeta a fome, o peso e o emagrecimento, e o que fazer, com acompanhamento em São Paulo',
    tituloSeo: 'Dormir mal engorda? Sono, fome e emagrecimento | SP',
    descricao:
      'Dormir mal engorda? Entenda como o sono ruim aumenta a fome, quantas horas dormir, o que os estudos mostram e como melhorar o sono para emagrecer.',
    tituloSocial: 'Dormir mal engorda? Sono, fome e emagrecimento',
    descricaoSocial:
      'Como o sono afeta a fome e o peso e o que fazer para dormir melhor.',
    publicadoEm: '2026-11-05',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre sono e peso: sono curto aumenta a fome, e dormir mais reduziu o consumo em cerca de 270 calorias por dia',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Privação de sono' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Insônia' },
      { '@type': 'MedicalCondition', name: 'Apneia obstrutiva do sono' },
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Problemas de sono e o plano para emagrecer dependem de avaliação individual.',
  },
  {
    slug: 'anticoncepcional-engorda',
    titulo: 'Anticoncepcional engorda? O que a ciência mostra sobre pílula, DIU, injeção e implante, e quando investigar o ganho de peso, em São Paulo',
    tituloSeo: 'Anticoncepcional engorda? O que a ciência mostra | SP',
    descricao:
      'Anticoncepcional engorda? Veja o que os estudos mostram sobre pílula, DIU hormonal, implante e injeção, e quando investigar outras causas do ganho de peso.',
    tituloSocial: 'Anticoncepcional engorda? O que a ciência mostra',
    descricaoSocial:
      'Pílula, DIU, implante e injeção: o efeito real de cada método no peso.',
    publicadoEm: '2026-11-06',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o efeito dos anticoncepcionais no peso: pílula combinada, DIU hormonal e implante com efeito pequeno, e injeção trimestral como o método mais associado a ganho de peso',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Ganho de peso' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome dos ovários policísticos' },
      { '@type': 'MedicalCondition', name: 'Retenção de líquido' },
      { '@type': 'MedicalCondition', name: 'Hipotireoidismo' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A escolha e a troca do método contraceptivo devem ser feitas com o ginecologista.',
  },
  {
    slug: 'obesidade-e-dor-no-joelho',
    titulo: 'Obesidade e dor no joelho: perder peso alivia a dor? Artrose, articulações e como emagrecer protegendo o joelho, em São Paulo',
    tituloSeo: 'Obesidade e dor no joelho: perder peso alivia? | SP',
    descricao:
      'Obesidade e dor no joelho: entenda como o peso sobrecarrega a articulação, quanto perder para aliviar a dor e como emagrecer protegendo o joelho.',
    tituloSocial: 'Obesidade e dor no joelho: perder peso alivia a dor?',
    descricaoSocial:
      'Como o peso afeta o joelho e como emagrecer protegendo a articulação.',
    publicadoEm: '2026-11-06',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre peso e dor no joelho: cada quilo perdido reduz cerca de 4 kg de carga no joelho a cada passo, com exercícios de baixo impacto e fortalecimento da coxa',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Osteoartrite de joelho' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
      { '@type': 'MedicalCondition', name: 'Inflamação crônica' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Dor no joelho deve ser avaliada por ortopedista, e o plano para emagrecer depende de avaliação individual.',
  },
  {
    slug: 'magnesio-para-que-serve',
    titulo: 'Magnésio: para que serve, sintomas de falta, alimentos, tipos de suplemento e quando suplementar, com orientação médica em São Paulo',
    tituloSeo: 'Magnésio: para que serve e quando suplementar | SP',
    descricao:
      'Magnésio: para que serve, sintomas de falta, alimentos ricos, tipos de suplemento, efeito no sono e na glicose e quando suplementar com segurança.',
    tituloSocial: 'Magnésio: para que serve e quando suplementar',
    descricaoSocial:
      'Funções, sinais de falta, alimentos, tipos e cuidados com o suplemento.',
    publicadoEm: '2026-11-06',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o magnésio: melhores fontes na alimentação, evidência limitada para o sono, não emagrece e exige orientação em doença nos rins',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Deficiência de magnésio' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Insônia' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Doença renal crônica' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos depende de avaliação individual.',
  },
  {
    slug: 'alimentos-ricos-em-fibras',
    titulo: 'Alimentos ricos em fibras: como as fibras ajudam a emagrecer, quanto comer por dia e como aumentar sem desconforto, com orientação em São Paulo',
    tituloSeo: 'Alimentos ricos em fibras: como ajudam a emagrecer | SP',
    descricao:
      'Alimentos ricos em fibras: veja como as fibras aumentam a saciedade, quanto comer por dia, a tabela de alimentos e como aumentar sem gases.',
    tituloSocial: 'Alimentos ricos em fibras: como ajudam a emagrecer',
    descricaoSocial:
      'Saciedade, glicose e intestino: quanto comer por dia e como aumentar.',
    publicadoEm: '2026-11-06',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com a quantidade aproximada de fibras em feijão, goiaba e aveia e a meta de pelo menos 25 g de fibras por dia',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Constipação intestinal' },
      { '@type': 'MedicalCondition', name: 'Pré-diabetes' },
      { '@type': 'MedicalCondition', name: 'Colesterol alto' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano alimentar depende de avaliação individual.',
  },
  {
    slug: 'imc',
    titulo: 'IMC: calculadora, tabela de classificação, peso ideal e por que o índice de massa corporal sozinho não basta, em São Paulo',
    tituloSeo: 'Calculadora de IMC e peso ideal: tabela e limitações | SP',
    descricao:
      'Calculadora de IMC: calcule o seu índice de massa corporal e a faixa de peso ideal, veja a tabela para adultos e por que o IMC sozinho não basta.',
    tituloSocial: 'Calculadora de IMC e peso ideal: tabela e limitações | SP',
    descricaoSocial:
      'Calculadora de IMC: calcule o seu índice de massa corporal e a faixa de peso ideal, veja a tabela para adultos e por que o IMC sozinho não basta.',
    publicadoEm: '2026-11-06',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com a classificação do IMC em adultos, de peso normal a obesidade, e o que o índice não mostra, como a diferença entre gordura e músculo',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalCondition', name: 'Obesidade abdominal' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A avaliação do peso e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'wegovy-comprimido',
    titulo: 'Wegovy em comprimido: como funciona, como tomar, resultados, efeitos colaterais e quando chega às farmácias',
    tituloSeo: 'Wegovy em comprimido: como tomar, resultados e quando chega',
    descricao:
      'Wegovy em comprimido: entenda como funciona a semaglutida oral aprovada pela Anvisa, como tomar, resultados, efeitos colaterais e quando chega.',
    tituloSocial: 'Wegovy em comprimido: como funciona e quando chega',
    descricaoSocial:
      'Semaglutida oral para obesidade: como tomar, resultados e diferença para a caneta.',
    publicadoEm: '2026-11-07',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o Wegovy em comprimido: semaglutida oral tomada uma vez ao dia em jejum, esperar 30 minutos para comer, perda média de 13,6% do peso em 64 semanas no estudo OASIS 4 e aprovação no Brasil ainda sem data nas farmácias',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug` (ver o topo deste arquivo): a semaglutida não entra no tema nem nas menções.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação, a dose e o acompanhamento de qualquer medicamento para obesidade dependem de avaliação médica individual.',
  },
  {
    slug: 'vitamina-b12-baixa',
    titulo: 'Vitamina B12 baixa: sintomas, causas, exames e tratamento da falta de B12, com acompanhamento em São Paulo',
    tituloSeo: 'Vitamina B12 baixa: sintomas, causas e tratamento | SP',
    descricao:
      'Vitamina B12 baixa: veja os sintomas da falta de B12, por que pode existir sem anemia, as causas, como é o diagnóstico e o tratamento.',
    tituloSocial: 'Vitamina B12 baixa: sintomas, causas e tratamento',
    descricaoSocial:
      'Cansaço, formigamento e falhas de memória: quando investigar a falta de B12.',
    publicadoEm: '2026-11-07',
    atualizadoEm: '2026-11-07',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a falta de vitamina B12: pode acontecer sem anemia, causas comuns como metformina, omeprazol e cirurgia bariátrica, diagnóstico por exame de sangue e tratamento oral ou injetável',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Deficiência de vitamina B12' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Anemia perniciosa' },
      { '@type': 'MedicalCondition', name: 'Gastrite autoimune' },
      { '@type': 'MedicalCondition', name: 'Neuropatia periférica' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A investigação e a reposição de vitaminas dependem de avaliação médica individual. Não suspenda remédios por conta própria.',
  },
  {
    slug: 'barriga-inchada',
    titulo: 'Barriga inchada: causas mais comuns, por que incha depois de comer e quando investigar, com acompanhamento em São Paulo',
    tituloSeo: 'Barriga inchada: causas comuns e quando investigar | SP',
    descricao:
      'Barriga inchada: entenda as causas mais comuns, por que a barriga incha depois de comer, a relação com intestino preso e quando investigar.',
    tituloSocial: 'Barriga inchada: causas comuns e quando investigar',
    descricaoSocial:
      'Gases, intestino preso, intestino irritável e SIBO: o que causa o inchaço.',
    publicadoEm: '2026-11-07',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre barriga inchada: causas mais comuns como intestino preso e gases, comer rápido e bebida com gás, probiótico sem efeito geral e sinais de alerta',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalSignOrSymptom', name: 'Distensão abdominal' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome do intestino irritável' },
      { '@type': 'MedicalCondition', name: 'Constipação intestinal' },
      { '@type': 'MedicalCondition', name: 'Supercrescimento bacteriano no intestino delgado' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Barriga inchada com sinais de alerta precisa de avaliação médica. A investigação e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'colageno-para-que-serve',
    titulo: 'Colágeno funciona? Para que serve, o que a ciência mostra sobre pele, articulações e flacidez depois de emagrecer, em São Paulo',
    tituloSeo: 'Colágeno funciona? Para que serve e o que a ciência mostra',
    descricao:
      'Colágeno funciona? Veja para que serve, o que os estudos mostram sobre pele e articulações e se o colágeno ajuda na flacidez depois de emagrecer.',
    tituloSocial: 'Colágeno funciona? O que a ciência mostra',
    descricaoSocial:
      'Pele, articulações e flacidez: o que os estudos realmente dizem sobre o colágeno.',
    publicadoEm: '2026-11-07',
    atualizadoEm: '2026-11-07',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o colágeno: sem benefício claro para a pele nos melhores estudos, efeito modesto na dor articular, não corrige excesso de pele e o que funciona é proteína, sono e protetor solar',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Envelhecimento da pele' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Osteoartrite' },
      { '@type': 'MedicalCondition', name: 'Flacidez' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos depende de avaliação individual.',
  },
  {
    slug: 'adocante-faz-mal',
    titulo: 'Adoçante faz mal? O que diz a OMS, se adoçante engorda, causa câncer ou diabetes, e quem pode usar, em São Paulo',
    tituloSeo: 'Adoçante faz mal? O que diz a OMS e a ciência | SP',
    descricao:
      'Adoçante faz mal? Entenda o que a OMS recomendou, se adoçante engorda, causa diabetes ou câncer, os tipos e quem pode usar com segurança.',
    tituloSocial: 'Adoçante faz mal? O que diz a OMS e a ciência',
    descricaoSocial:
      'Adoçante engorda, causa diabetes ou câncer? O que os estudos mostram.',
    publicadoEm: '2026-11-07',
    atualizadoEm: '2026-11-07',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre adoçantes: seguros dentro dos limites de consumo, não recomendados pela OMS para emagrecer, sem ligação comprovada com diabetes e câncer, e a melhor troca é bebida doce por água',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
      { '@type': 'MedicalCondition', name: 'Pré-diabetes' },
      { '@type': 'MedicalCondition', name: 'Fenilcetonúria' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano alimentar depende de avaliação individual.',
  },
  {
    slug: 'intestino-preso',
    titulo: 'Intestino preso: causas, o que comer, hábitos que ajudam e quando procurar o médico, com acompanhamento em São Paulo',
    tituloSeo: 'Intestino preso: causas, o que comer e quando ir ao médico',
    descricao:
      'Intestino preso: entenda as causas da prisão de ventre, o que comer, os hábitos que ajudam, a relação com as canetas e quando procurar o médico.',
    tituloSocial: 'Intestino preso: causas, o que comer e quando ir ao médico',
    descricaoSocial:
      'Prisão de ventre: o que causa, o que ajuda e os sinais de alerta.',
    publicadoEm: '2026-11-08',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre intestino preso: menos de três evacuações por semana, fezes duras e muito esforço, cuidado com fibras, água e movimento, e sangue nas fezes ou dor constante como sinais de alerta',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Constipação intestinal' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome do intestino irritável' },
      { '@type': 'MedicalCondition', name: 'Hipotireoidismo' },
      { '@type': 'MedicalCondition', name: 'Disfunção do assoalho pélvico' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Intestino preso com sinais de alerta precisa de avaliação médica. O tratamento depende de avaliação individual.',
  },
  {
    slug: 'omega-3-para-que-serve',
    titulo: 'Ômega 3: para que serve, o que a ciência mostra sobre triglicérides, coração e fígado, e quem precisa suplementar, em São Paulo',
    tituloSeo: 'Ômega 3: para que serve e quem precisa suplementar | SP',
    descricao:
      'Ômega 3: para que serve, o que a ciência mostra sobre triglicérides, coração e fígado, quem precisa suplementar e como ler o rótulo.',
    tituloSocial: 'Ômega 3: para que serve e quem precisa suplementar',
    descricaoSocial:
      'Triglicérides, coração e fígado: o que os estudos mostram sobre o ômega 3.',
    publicadoEm: '2026-11-08',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o ômega 3: redução média de cerca de 15% nos triglicérides, sem benefício claro contra infarto em quem não tem risco elevado, peixe como melhor fonte e EPA e DHA como o que importa no rótulo',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Hipertrigliceridemia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Doença cardiovascular' },
      { '@type': 'MedicalCondition', name: 'Fibrilação atrial' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos depende de avaliação individual.',
  },
  {
    slug: 'zinco-para-que-serve',
    titulo: 'Zinco: para que serve, sinais de falta, alimentos, quem tem mais risco e os perigos do excesso, com orientação em São Paulo',
    tituloSeo: 'Zinco: para que serve, sinais de falta e excesso | SP',
    descricao:
      'Zinco: para que serve, sintomas de falta, quem tem mais risco, alimentos ricos em zinco, quando suplementar e os riscos do excesso.',
    tituloSocial: 'Zinco: para que serve e sinais de falta',
    descricaoSocial:
      'Imunidade, cabelo e cicatrização: quando o zinco faz falta e quando sobra.',
    publicadoEm: '2026-11-08',
    atualizadoEm: '2026-11-08',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre o zinco: participa da imunidade, da cicatrização e do paladar, maior risco de falta com bariátrica, doenças do intestino e álcool, queda de cabelo sozinha não confirma a falta e o excesso pode baixar o cobre',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Deficiência de zinco' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Deficiência de cobre' },
      { '@type': 'MedicalCondition', name: 'Doença celíaca' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A investigação e a indicação de suplementos dependem de avaliação individual.',
  },
  {
    slug: 'curcuma-para-que-serve',
    titulo: 'Cúrcuma: para que serve, o que a ciência mostra, diferença entre tempero e suplemento e quando faz mal, em São Paulo',
    tituloSeo: 'Cúrcuma: para que serve e quando faz mal | SP',
    descricao:
      'Cúrcuma: para que serve, o que a ciência mostra, diferença entre tempero e suplemento de curcumina, riscos para o fígado e quem não deve usar.',
    tituloSocial: 'Cúrcuma: para que serve e quando faz mal',
    descricaoSocial:
      'Tempero ou cápsula? O que os estudos mostram e os riscos da curcumina.',
    publicadoEm: '2026-11-08',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a cúrcuma: segura como tempero, benefícios ainda não confirmados, resultados iniciais na artrose de joelho e relatos de lesão no fígado com cápsulas',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Osteoartrite de joelho' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Lesão hepática induzida por suplementos' },
      { '@type': 'MedicalCondition', name: 'Doença hepática esteatótica' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos depende de avaliação individual. Não suspenda remédios por conta própria.',
  },
  {
    slug: 'probioticos-emagrecem',
    titulo: 'Probióticos emagrecem? O que a ciência mostra sobre microbiota intestinal, disbiose e peso, com acompanhamento em São Paulo',
    tituloSeo: 'Probióticos emagrecem? O que a ciência mostra | SP',
    descricao:
      'Probióticos emagrecem? Veja o que os estudos mostram sobre microbiota intestinal, disbiose e peso, e por que não existe probiótico para emagrecer.',
    tituloSocial: 'Probióticos emagrecem? O que a ciência mostra',
    descricaoSocial:
      'Microbiota, disbiose e peso: o que os estudos realmente dizem.',
    publicadoEm: '2026-11-08',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre probióticos e peso: efeito pequeno ou nenhum, o resultado de um produto não vale para outro, testes sem validação para obesidade e fibras, sono e movimento como o que ajuda',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Disbiose' },
      { '@type': 'MedicalCondition', name: 'Síndrome do intestino irritável' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O tratamento do peso depende de avaliação individual.',
  },
  {
    slug: 'orforgliprona-foundayo',
    titulo: 'Orforgliprona (Foundayo): o que é a pílula da fabricante do Mounjaro, como funciona, efeitos colaterais e situação no Brasil',
    tituloSeo: 'Orforgliprona (Foundayo): o que é a pílula da Lilly',
    descricao:
      'Orforgliprona (Foundayo): entenda a pílula para obesidade da fabricante do Mounjaro, como funciona, efeitos colaterais e situação no Brasil.',
    tituloSocial: 'Orforgliprona (Foundayo): o que é a pílula da Lilly',
    descricaoSocial:
      'Não é o Mounjaro em comprimido: o que é, como age e se já chegou ao Brasil.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a orforgliprona: comprimido tomado uma vez ao dia, com ou sem comida, que age no receptor do GLP-1, aprovado nos Estados Unidos em abril de 2026 e sem aprovação confirmada no Brasil',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug` (ver o topo deste arquivo): o princípio ativo não entra no tema nem nas menções.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de qualquer medicamento para obesidade depende de avaliação médica individual. Informações regulatórias atualizadas em 09/11/2026.',
  },
  {
    slug: 'retatrutida',
    titulo: 'Retatrutida: o que é o novo medicamento em estudo para obesidade, como age em três hormônios e quando pode chegar',
    tituloSeo: 'Retatrutida: o que é o novo remédio para obesidade em estudo',
    descricao:
      'Retatrutida: entenda o medicamento em estudo que age em GLP-1, GIP e glucagon, o que mostram os estudos de fase 3 e quando pode ser aprovado.',
    tituloSocial: 'Retatrutida: o que é o novo remédio em estudo',
    descricaoSocial:
      'Agonista triplo, estudos TRIUMPH e por que ainda não está aprovada.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a retatrutida: age em GLP-1, GIP e glucagon, injeção semanal, dados de fase 3 divulgados pela fabricante e ainda sem aprovação para venda',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug` (ver o topo deste arquivo): o princípio ativo não entra no tema nem nas menções.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
      { '@type': 'MedicalCondition', name: 'Doença cardiovascular' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A retatrutida é um medicamento em estudo, sem aprovação para uso fora de pesquisas clínicas. Informações regulatórias atualizadas em 09/11/2026.',
  },
  {
    slug: 'hipoglicemia-reativa',
    titulo: 'Hipoglicemia reativa: quando sono, fome e tremor depois de comer merecem investigação, com acompanhamento em São Paulo',
    tituloSeo: 'Hipoglicemia reativa: sintomas, causas e diagnóstico | SP',
    descricao:
      'Hipoglicemia reativa: entenda os sintomas, por que sono e fome depois de comer não confirmam o diagnóstico, como investigar e quando é urgência.',
    tituloSocial: 'Hipoglicemia reativa: sintomas, causas e diagnóstico',
    descricaoSocial:
      'Sono e fome depois de comer: quando é hipoglicemia e quando não é.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre hipoglicemia reativa: tremor, suor e palpitação como sintomas, sono e fome sozinhos não confirmam, diagnóstico com glicose baixa durante os sintomas e confusão, desmaio ou convulsão como urgência',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Hipoglicemia reativa (pós-prandial)' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Síndrome de dumping' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Sintomas graves de hipoglicemia são urgência médica. A investigação e o tratamento dependem de avaliação individual.',
  },
  {
    slug: 'coenzima-q10-estatina',
    titulo: 'Coenzima Q10: para que serve, se quem toma estatina precisa suplementar e o que fazer com a dor muscular, em São Paulo',
    tituloSeo: 'Coenzima Q10: quem toma estatina precisa suplementar?',
    descricao:
      'Coenzima Q10: para que serve, se quem toma estatina precisa suplementar, o que os estudos mostram sobre dor muscular e quais os cuidados.',
    tituloSocial: 'Coenzima Q10: quem toma estatina precisa suplementar?',
    descricaoSocial:
      'Dor muscular com estatina: o que os estudos mostram sobre a Q10.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre coenzima Q10 e estatina: estudos conflitantes sobre dor muscular, uso de rotina não recomendado, não reduz o colesterol nem substitui a estatina, que não deve ser interrompida por conta própria',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Miopatia associada a estatinas' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Hipercolesterolemia' },
      { '@type': 'MedicalCondition', name: 'Doença cardiovascular' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos e qualquer mudança no uso de estatinas dependem de avaliação médica individual.',
  },
  {
    slug: 'dieta-sem-gluten-emagrece',
    titulo: 'Dieta sem glúten emagrece? O que a ciência mostra, quem realmente precisa tirar o glúten e por que investigar antes, em São Paulo',
    tituloSeo: 'Dieta sem glúten emagrece? O que a ciência mostra | SP',
    descricao:
      'Dieta sem glúten emagrece? Entenda o que mostram os estudos, quem precisa tirar o glúten e a diferença entre doença celíaca, sensibilidade e alergia.',
    tituloSocial: 'Dieta sem glúten emagrece? O que a ciência mostra',
    descricaoSocial:
      'Doença celíaca, sensibilidade e moda: quem precisa mesmo tirar o glúten.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre dieta sem glúten: não emagrece por si só, produtos sem glúten podem ter mais calorias, é tratamento por toda a vida na doença celíaca e os exames devem ser feitos antes de cortar o glúten',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Doença celíaca' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sensibilidade ao glúten não celíaca' },
      { '@type': 'MedicalCondition', name: 'Alergia ao trigo' },
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A investigação de doenças ligadas ao glúten e o plano alimentar dependem de avaliação individual.',
  },
  {
    slug: 'como-nao-engordar-nas-festas',
    titulo: 'Como não engordar nas festas de fim de ano: o que fazer no Natal, no Ano Novo e nas confraternizações, sem dieta radical, em São Paulo',
    tituloSeo: 'Como não engordar nas festas de fim de ano | SP',
    descricao:
      'Como não engordar nas festas de fim de ano: o que fazer antes, durante e depois do Natal e do Ano Novo, com álcool, doces e sem dieta radical.',
    tituloSocial: 'Como não engordar nas festas de fim de ano',
    descricaoSocial:
      'Natal, Ano Novo e confraternizações: estratégias sem dieta radical.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre as festas de fim de ano: não chegar em jejum, começar pela salada e pela proteína, alternar cada dose de bebida com água e voltar à rotina sem compensar',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Ganho de peso' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Retenção de líquido' },
      { '@type': 'MedicalCondition', name: 'Efeito sanfona' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano alimentar depende de avaliação individual.',
  },
  {
    slug: 'emagrecer-para-o-casamento',
    titulo: 'Emagrecer para o casamento: quanto dá para perder com segurança, como se preparar conforme o tempo até a data e o que evitar, em São Paulo',
    tituloSeo: 'Emagrecer para o casamento: quanto dá e como se preparar',
    descricao:
      'Emagrecer para o casamento com segurança: quanto dá para perder, o que fazer conforme o tempo até a data, a prova do vestido e o que evitar.',
    tituloSocial: 'Emagrecer para o casamento: quanto dá e como se preparar',
    descricaoSocial:
      'Plano a partir da data: o que é possível, o que evitar e cuidados com as canetas.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o foco do planejamento conforme o tempo até o casamento: perda gradual com mais de 6 meses, perda moderada de 3 a 6 meses, ajustes de rotina de 1 a 3 meses e desinchar, sem dieta de emergência, com menos de 1 mês',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalCondition', name: 'Colelitíase' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O ritmo de perda de peso e a indicação de qualquer tratamento dependem de avaliação individual. Resultados variam de pessoa para pessoa.',
  },
  {
    slug: 'emagrecer-ate-o-carnaval',
    titulo: 'Emagrecer até o Carnaval com saúde: o que dá para fazer até fevereiro, o que evitar e como ter energia para a folia, em São Paulo',
    tituloSeo: 'Emagrecer até o Carnaval com saúde: o que dá para fazer | SP',
    descricao:
      'Emagrecer até o Carnaval de 2027 com saúde: quanto dá para perder, como organizar os meses até fevereiro, o que evitar e como ter energia.',
    tituloSocial: 'Emagrecer até o Carnaval com saúde: o que dá para fazer',
    descricaoSocial:
      'Plano até fevereiro, festas no meio do caminho e energia para a folia.',
    publicadoEm: '2026-11-09',
    atualizadoEm: '2026-11-09',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro com o plano até o Carnaval: organizar refeições e treino em novembro, atravessar as festas com estratégia em dezembro, manter o ritmo em janeiro e, nos dias de folia, comer antes e beber água',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
      { '@type': 'MedicalCondition', name: 'Desidratação' },
      { '@type': 'MedicalCondition', name: 'Efeito sanfona' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O ritmo de perda de peso e a indicação de qualquer tratamento dependem de avaliação individual. Resultados variam de pessoa para pessoa.',
  },
  {
    slug: 'melatonina-para-que-serve',
    titulo: 'Melatonina: para que serve, quem pode usar, o que a Anvisa permite e quando ela não resolve a insônia, em São Paulo',
    tituloSeo: 'Melatonina: para que serve e quem pode usar | SP',
    descricao:
      'Melatonina: para que serve, quando ajuda e quando não resolve a insônia, o que a Anvisa permite, quem não deve usar e se melatonina emagrece.',
    tituloSocial: 'Melatonina: para que serve e quem pode usar',
    descricaoSocial:
      'Insônia, fuso horário e regras da Anvisa: o que saber antes de usar.',
    publicadoEm: '2026-11-10',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a melatonina: pode ajudar no fuso horário e no sono atrasado, benefício pequeno na insônia crônica, no Brasil só para adultos em quantidade baixa e forma sublingual não autorizada',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Insônia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Jet lag' },
      { '@type': 'MedicalCondition', name: 'Distúrbio do ritmo circadiano' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de suplementos e o tratamento da insônia dependem de avaliação individual.',
  },
  {
    slug: 'intolerancia-a-lactose',
    titulo: 'Intolerância à lactose: sintomas, diagnóstico, o que comer e a diferença para a alergia ao leite, com acompanhamento em São Paulo',
    tituloSeo: 'Intolerância à lactose: sintomas e o que comer | SP',
    descricao:
      'Intolerância à lactose: veja os sintomas, a diferença para a alergia ao leite, como é o diagnóstico, o que comer e como manter o cálcio.',
    tituloSocial: 'Intolerância à lactose: sintomas e o que comer',
    descricaoSocial:
      'Sintomas, diagnóstico e alimentação sem cortar o que você não precisa.',
    publicadoEm: '2026-11-10',
    atualizadoEm: '2026-11-10',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre intolerância à lactose: gases, inchaço e diarreia como sintomas, alergia ao leite é outra condição, iogurte e queijos maturados costumam ser tolerados e o cálcio precisa de outras fontes',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Intolerância à lactose' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Alergia à proteína do leite' },
      { '@type': 'MedicalCondition', name: 'Síndrome do intestino irritável' },
      { '@type': 'MedicalCondition', name: 'Doença celíaca' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A investigação de sintomas digestivos e o plano alimentar dependem de avaliação individual.',
  },
  {
    slug: 'bupropiona-emagrece-contrave',
    titulo: 'Bupropiona emagrece? A diferença entre bupropiona e Contrave, o que mostram os estudos, os riscos e o acompanhamento necessário, em São Paulo',
    tituloSeo: 'Bupropiona emagrece? O que saber sobre o Contrave | SP',
    descricao:
      'Bupropiona emagrece? Entenda a diferença para o Contrave, o que mostram os estudos, contraindicações e a atualização de segurança da Anvisa em 2026.',
    tituloSocial: 'Bupropiona emagrece? Bupropiona x Contrave',
    descricaoSocial:
      'Diferenças, estudos, riscos e o alerta da Anvisa em 2026.',
    publicadoEm: '2026-11-11',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre bupropiona e Contrave: a bupropiona sozinha é antidepressivo, o Contrave associa naltrexona e bupropiona, não pode com pressão alta não controlada ou opioides e exige reavaliação anual desde 2026',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Sobrepeso' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação, a interrupção e o acompanhamento de qualquer medicamento dependem de avaliação médica individual. Informações regulatórias atualizadas em 11/11/2026.',
  },
  {
    slug: 'exercicios-baixo-impacto-emagrecer',
    titulo: 'Exercícios de baixo impacto para emagrecer: caminhada, bicicleta, natação e hidroginástica, e como escolher com segurança, em São Paulo',
    tituloSeo: 'Exercícios de baixo impacto para emagrecer | SP',
    descricao:
      'Exercícios de baixo impacto para emagrecer: caminhada, bicicleta, natação e hidroginástica, treino de força e como começar com segurança.',
    tituloSocial: 'Exercícios de baixo impacto para emagrecer',
    descricaoSocial:
      'Opções, quanto fazer e como começar sem sobrecarregar as articulações.',
    publicadoEm: '2026-11-11',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre exercícios de baixo impacto: impacto não é intensidade, meta de 150 a 300 minutos por semana mais força em 2 dias, sozinho o exercício leva a perda de peso modesta e o começo deve ser gradual',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Artrose' },
      { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O plano de atividade física depende de avaliação individual. Dor ou sintomas durante o exercício devem ser avaliados por um profissional.',
  },
  {
    slug: 'enzimas-gordura-localizada',
    titulo: 'Enzimas para gordura localizada funcionam? O que é aplicado, o que a ciência mostra, os riscos e o que verificar antes, em São Paulo',
    tituloSeo: 'Enzimas para gordura localizada funcionam? | SP',
    descricao:
      'Enzimas para gordura localizada funcionam? Entenda o que é aplicado, o que os estudos mostram, os riscos e o que verificar na Anvisa antes de decidir.',
    tituloSocial: 'Enzimas para gordura localizada funcionam?',
    descricaoSocial:
      'O que é aplicado, evidências, riscos e o que verificar na Anvisa.',
    publicadoEm: '2026-11-11',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre enzimas para gordura localizada: melhor evidência para o ácido deoxicólico na papada, evidência limitada para a barriga, não tratam obesidade e cosmético não pode ser injetado',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Gordura localizada' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A indicação de qualquer procedimento depende de avaliação individual com profissional habilitado.',
  },
  {
    slug: 'endometriose-alimentacao',
    titulo: 'Endometriose e alimentação: o que a ciência mostra, a dieta low FODMAP, glúten, leite e suplementos, com acompanhamento em São Paulo',
    tituloSeo: 'Endometriose e alimentação: o que a ciência mostra | SP',
    descricao:
      'Endometriose e alimentação: o que a ciência mostra, a dieta low FODMAP, se é preciso cortar glúten ou leite e o papel dos suplementos.',
    tituloSocial: 'Endometriose e alimentação: o que a ciência mostra',
    descricaoSocial:
      'Dieta low FODMAP, glúten, leite e suplementos: evidências e limites.',
    publicadoEm: '2026-11-11',
    atualizadoEm: '2026-11-11',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre endometriose e alimentação: não existe dieta que cure, a dieta low FODMAP alivia sintomas intestinais, cortar glúten e leite de todas não tem base e o tratamento é com o ginecologista',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Endometriose' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Síndrome do intestino irritável' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O tratamento da endometriose é conduzido pelo ginecologista. O plano alimentar depende de avaliação individual.',
  },
  {
    slug: 'consulta-nutrologa-online',
    titulo: 'Consulta com nutróloga online: como funciona a teleconsulta, o que dá para resolver por vídeo, como se preparar e quando ir ao consultório, em São Paulo',
    tituloSeo: 'Consulta com nutróloga online: como funciona | SP',
    descricao:
      'Consulta com nutróloga online: como funciona a teleconsulta, o que dá para resolver por vídeo, a regra do CFM e como se preparar para a consulta.',
    tituloSocial: 'Consulta com nutróloga online: como funciona',
    descricaoSocial:
      'Teleconsulta: o que dá para fazer por vídeo e quando ir ao consultório.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a teleconsulta com nutróloga: regulamentada pela Resolução CFM 2.314/2022, por vídeo dá para fazer avaliação, exames e plano, a bioimpedância é só presencial e a médica decide o formato',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalProcedure', name: 'Teleconsulta em nutrologia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A definição do formato de atendimento, a distância ou presencial, cabe à médica em cada caso.',
  },
  {
    slug: 'mounjaro-anticoncepcional',
    titulo: 'Mounjaro e anticoncepcional: a tirzepatida corta o efeito da pílula? Quando o risco é maior, que métodos não são afetados e os cuidados com a gravidez, em São Paulo',
    tituloSeo: 'Mounjaro e anticoncepcional: corta o efeito? | SP',
    descricao:
      'Mounjaro e anticoncepcional: a tirzepatida pode reduzir o efeito da pílula. Saiba quando o risco é maior, que métodos não são afetados e os cuidados.',
    tituloSocial: 'Mounjaro corta o efeito do anticoncepcional?',
    descricaoSocial:
      'Quando o risco é maior, métodos não afetados e cuidados com a gravidez.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre Mounjaro e anticoncepcional: a absorção da pílula pode diminuir, o risco é maior nas 4 semanas após o início e cada aumento de dose, DIU, implante e anel não são afetados e a gravidez deve ser planejada com o médico',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `Drug`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Gravidez' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A escolha do método anticoncepcional deve ser feita com o ginecologista. O uso de canetas emagrecedoras depende de avaliação e acompanhamento médico.',
  },
  {
    slug: 'berberina-emagrece',
    titulo: 'Berberina emagrece? O que a ciência mostra sobre o "Ozempic natural", os riscos, as interações e o que a Anvisa decidiu, em São Paulo',
    tituloSeo: 'Berberina emagrece? A verdade sobre o Ozempic natural | SP',
    descricao:
      'Berberina emagrece? Veja o que os estudos mostram sobre o "Ozempic natural", os efeitos colaterais, as interações e o que a Anvisa decidiu em 2026.',
    tituloSocial: 'Berberina emagrece? O que saber sobre o Ozempic natural',
    descricaoSocial:
      'Estudos, riscos, interações e a decisão da Anvisa em 2026.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre a berberina: evidência inconclusiva para perda de peso, o apelido de Ozempic natural não tem base científica, causa efeitos intestinais e interações e produtos sem registro foram proibidos pela Anvisa',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Obesidade' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O uso de qualquer suplemento deve ser avaliado individualmente, considerando os remédios em uso e as condições de saúde.',
  },
  {
    slug: 'parar-de-fumar-engorda',
    titulo: 'Parar de fumar engorda? Por que o peso sobe, quanto costuma aumentar e como evitar o ganho de peso sem voltar a fumar, em São Paulo',
    tituloSeo: 'Parar de fumar engorda? Como evitar o ganho de peso | SP',
    descricao:
      'Parar de fumar engorda? Entenda por que o peso sobe, quanto costuma aumentar e o que ajuda a evitar o ganho de peso sem voltar a fumar.',
    tituloSocial: 'Parar de fumar engorda? Como evitar o ganho de peso',
    descricaoSocial:
      'Por que o peso sobe, quanto aumenta e o que ajuda.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre parar de fumar e peso: ganho médio de 4 a 5 kg no primeiro ano, a maior parte nos 3 primeiros meses, com grande variação entre as pessoas, e parar vale a pena com folga',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Tabagismo' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O tratamento do tabagismo e do peso depende de avaliação médica individual.',
  },
  {
    slug: 'remissao-diabetes-tipo-2',
    titulo: 'Diabetes tipo 2 tem remissão? O que significa, o papel da perda de peso, o que mostrou o estudo DiRECT e quem tem mais chance, em São Paulo',
    tituloSeo: 'Diabetes tipo 2 tem remissão? O papel da perda de peso | SP',
    descricao:
      'Diabetes tipo 2 tem remissão? Entenda o que significa, o papel da perda de peso, o que mostrou o estudo DiRECT e quem tem mais chance.',
    tituloSocial: 'Diabetes tipo 2 tem remissão?',
    descricaoSocial:
      'O que significa, o papel da perda de peso e o estudo DiRECT.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre remissão do diabetes tipo 2: hemoglobina glicada abaixo de 6,5% sem remédios, não é cura e pode voltar, 46% em remissão após um ano no estudo DiRECT e remédios só se ajustam com o médico',
      legenda: 'Imagem ilustrativa',
    },
    tema: { '@type': 'MedicalCondition', name: 'Diabetes tipo 2' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. O tratamento do diabetes e qualquer ajuste de remédios dependem de avaliação e acompanhamento médico.',
  },
  {
    slug: 'whey-protein-para-que-serve',
    titulo: 'Whey protein: para que serve, quem pode tomar, se emagrece ou engorda, tipos, cuidados com os rins e como escolher, em São Paulo',
    tituloSeo: 'Whey protein: para que serve e quem pode tomar | SP',
    descricao:
      'Whey protein: para que serve, quem pode tomar, se emagrece ou engorda, os tipos, os cuidados com os rins e a lactose e como escolher um produto.',
    tituloSocial: 'Whey protein: para que serve e quem pode tomar',
    descricaoSocial:
      'Se emagrece, os tipos, os cuidados e como escolher.',
    publicadoEm: '2026-11-12',
    atualizadoEm: '2026-11-12',
    capa: {
      largura: 1734,
      altura: 907,
      alt: 'Quadro sobre whey protein: serve para completar a proteína do dia, não emagrece sozinho, o isolado tem menos lactose e quem tem doença renal precisa de orientação',
      legenda: 'Imagem ilustrativa',
    },
    // Sem o tipo `DietarySupplement`: o Google o lê como produto à venda. O tema é a condição tratada.
    tema: { '@type': 'MedicalCondition', name: 'Sarcopenia' },
    mencoes: [
      { '@type': 'MedicalCondition', name: 'Obesidade' },
    ],
    aviso:
      'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. A necessidade de suplementos e a quantidade de proteína dependem de avaliação individual.',
  },
];
