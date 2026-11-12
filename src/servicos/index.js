// Páginas de serviço (tratamentos, tecnologias e institucionais), com o mesmo modelo do blog.
// O texto de cada uma fica em ./textos/<caminho com "/" trocada por "-">.html, exatamente como foi aprovado,
// com comentários <!-- [ ... ] --> marcando onde entram os componentes (src/servicos/conteudo.js).
//
// Só as páginas com `publicada: true` são geradas, entram no menu, no rodapé e no sitemap. Links do texto
// para uma página ainda não publicada viram texto simples (o link volta sozinho quando ela for publicada).
//
// Este arquivo também vai para o navegador (menu do cabeçalho): só dados curtos, nada de texto das páginas.

// Data da revisão do conteúdo pela Dra. Isabela: aparece no bloco da autora e no dateModified/lastReviewed.
const REVISADO_EM = '2026-11-06';

export const SERVICOS = [
  {
    caminho: 'tratamentos',
    imagemSocial: { src: '/servicos/tratamentos-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Tratamentos em nutrologia e emagrecimento' },
    grupo: 'hub',
    nomeCurto: 'Tratamentos',
    tituloSeo: 'Tratamentos em nutrologia e emagrecimento | São Paulo',
    descricao:
      'Conheça os tratamentos da Dra. Isabela Bertoglio em São Paulo: obesidade, canetas, glicemia, fígado e mais, no Paraíso. Agende pelo WhatsApp.',
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de tratamentos do site e gostaria de agendar uma consulta com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/obesidade',
    imagemSocial: { src: '/servicos/tratamentos-obesidade-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Tratamento da obesidade com acompanhamento médico' },
    grupo: 'tratamentos',
    nomeCurto: 'Obesidade',
    tituloSeo: 'Tratamento da obesidade em São Paulo | Dra. Isabela',
    descricao:
      'Tratamento da obesidade em São Paulo com acompanhamento médico, exames e bioimpedância InBody, no Paraíso. Agende sua avaliação pelo WhatsApp.',
    sobre: { '@type': 'MedicalCondition', name: 'Obesidade' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de tratamento da obesidade e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/canetas-emagrecedoras',
    imagemSocial: { src: '/servicos/tratamentos-canetas-emagrecedoras-og.jpg', alt: 'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Canetas emagrecedoras com acompanhamento médico' },
    grupo: 'tratamentos',
    nomeCurto: 'Canetas emagrecedoras',
    tituloSeo: 'Canetas emagrecedoras com acompanhamento médico | SP',
    descricao:
      'Acompanhamento médico com tirzepatida e semaglutida em São Paulo: indicação, ajuste de dose e cuidado com o músculo. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalTherapy', name: 'Tratamento farmacológico da obesidade com agonistas de GLP-1 e GIP' },
    // Revisada em 12/11/2026 (H2 dos medicamentos)
    revisadoEm: '2026-11-12',
    mensagemWhatsapp: 'Olá! Vim pela página de canetas emagrecedoras e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/resistencia-a-insulina',
    imagemSocial: { src: '/servicos/tratamentos-resistencia-a-insulina-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Resistência à insulina e pré-diabetes' },
    grupo: 'tratamentos',
    nomeCurto: 'Resistência à insulina e pré-diabetes',
    tituloSeo: 'Resistência à insulina e pré-diabetes: tratamento | SP',
    descricao:
      'Tratamento da resistência à insulina e do pré-diabetes em São Paulo, com exames, plano alimentar e acompanhamento médico. Agende pelo WhatsApp.',
    sobre: [
      { '@type': 'MedicalCondition', name: 'Resistência à insulina' },
      { '@type': 'MedicalCondition', name: 'Pré-diabetes' },
    ],
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de resistência à insulina e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/sindrome-metabolica',
    imagemSocial: { src: '/servicos/tratamentos-sindrome-metabolica-og.jpg', alt: 'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Síndrome metabólica' },
    grupo: 'tratamentos',
    nomeCurto: 'Síndrome metabólica',
    tituloSeo: 'Síndrome metabólica: tratamento em São Paulo | Dra. Isabela',
    descricao:
      'Síndrome metabólica em São Paulo: tratamento de colesterol, triglicérides, glicose e peso no mesmo plano, no Paraíso. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalCondition', name: 'Síndrome metabólica' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de síndrome metabólica e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/gordura-no-figado',
    imagemSocial: { src: '/servicos/tratamentos-gordura-no-figado-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Gordura no fígado' },
    grupo: 'tratamentos',
    nomeCurto: 'Gordura no fígado',
    tituloSeo: 'Gordura no fígado: tratamento em São Paulo | Dra. Isabela',
    descricao:
      'Tratamento da gordura no fígado (esteatose) em São Paulo, com exames, alimentação e controle do peso, no Paraíso. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalCondition', name: 'Doença hepática esteatótica associada à disfunção metabólica (MASLD)' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de gordura no fígado e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/cansaco-e-deficiencia-de-vitaminas',
    imagemSocial: { src: '/servicos/tratamentos-cansaco-e-deficiencia-de-vitaminas-og.jpg', alt: 'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Cansaço constante e deficiência de vitaminas' },
    grupo: 'tratamentos',
    nomeCurto: 'Cansaço e deficiência de vitaminas',
    tituloSeo: 'Cansaço constante e falta de vitaminas: investigação | SP',
    descricao:
      'Cansaço constante em São Paulo: investigação de vitamina D, B12, ferro e tireoide com acompanhamento médico, no Paraíso. Agende pelo WhatsApp.',
    sobre: [
      { '@type': 'MedicalSignOrSymptom', name: 'Fadiga' },
      { '@type': 'MedicalCondition', name: 'Deficiência de vitaminas e minerais' },
    ],
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de cansaço e deficiência de vitaminas e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/saude-da-mulher',
    imagemSocial: { src: '/servicos/tratamentos-saude-da-mulher-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Saúde da mulher: menopausa, SOP e pós-parto' },
    grupo: 'tratamentos',
    nomeCurto: 'Saúde da mulher',
    tituloSeo: 'Nutróloga para menopausa e saúde da mulher | SP',
    descricao:
      'Nutrologia para a mulher em São Paulo: menopausa, depois dos 40, SOP e pós-parto, com plano para cada fase, no Paraíso. Agende pelo WhatsApp.',
    sobre: [
      { '@type': 'MedicalCondition', name: 'Menopausa' },
      { '@type': 'MedicalCondition', name: 'Síndrome dos ovários policísticos' },
    ],
    // Revisada em 11/11/2026 (link para o post de endometriose)
    revisadoEm: '2026-11-11',
    mensagemWhatsapp: 'Olá! Vim pela página de saúde da mulher e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/nutrologia-no-lipedema',
    imagemSocial: { src: '/servicos/tratamentos-nutrologia-no-lipedema-og.jpg', alt: 'Dra. Isabela Bertoglio no consultório da Clínica Belvitá, ao lado do título Acompanhamento nutrológico no lipedema' },
    grupo: 'tratamentos',
    nomeCurto: 'Nutrologia no lipedema',
    tituloSeo: 'Nutróloga para lipedema: acompanhamento clínico | SP',
    descricao:
      'Acompanhamento nutrológico no lipedema em São Paulo: inflamação, composição corporal e controle do peso, no Paraíso. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalCondition', name: 'Lipedema' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de nutrologia no lipedema e gostaria de agendar uma consulta com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tratamentos/preparo-para-cirurgia-plastica',
    imagemSocial: { src: '/servicos/tratamentos-preparo-para-cirurgia-plastica-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga, ao lado do título Preparo nutrológico para cirurgia plástica' },
    grupo: 'tratamentos',
    nomeCurto: 'Preparo para cirurgia plástica',
    tituloSeo: 'Preparo nutrológico para cirurgia plástica | São Paulo',
    descricao:
      'Preparo nutrológico para cirurgia plástica em São Paulo: exames, nutrição e plano para o pré e o pós-operatório. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalProcedure', name: 'Preparo nutrológico pré e pós-operatório' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página de preparo para cirurgia plástica e gostaria de agendar uma avaliação com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tecnologias/bioimpedancia-inbody',
    imagemSocial: { src: '/servicos/tecnologias-bioimpedancia-inbody-og.jpg', alt: 'Aparelho de bioimpedância InBody 380 da Clínica Belvitá, ao lado do título Bioimpedância InBody 380' },
    grupo: 'tecnologias',
    nomeCurto: 'Bioimpedância InBody',
    tituloSeo: 'Exame de bioimpedância InBody em São Paulo | Dra. Isabela',
    descricao:
      'Exame de bioimpedância InBody 380 em São Paulo, no Paraíso: veja quanto do seu peso é gordura, músculo e água e acompanhe a evolução. Agende.',
    sobre: { '@type': 'MedicalTest', name: 'Bioimpedância elétrica (InBody 380)' },
    // Revisada em 12/11/2026 (title, meta, H1 e FAQ)
    revisadoEm: '2026-11-12',
    mensagemWhatsapp: 'Olá! Vim pela página da bioimpedância InBody e gostaria de agendar uma consulta com a Dra. Isabela.',
    publicada: true,
  },
  {
    caminho: 'tecnologias/unyque-pro',
    imagemSocial: { src: '/servicos/tecnologias-unyque-pro-og.jpg', alt: 'Equipamento Unyque Pro da Clínica Belvitá, ao lado do título Unyque Pro: contorno depois de emagrecer' },
    grupo: 'tecnologias',
    nomeCurto: 'Unyque Pro',
    tituloSeo: 'Unyque Pro depois de emagrecer: flacidez e celulite | SP',
    descricao:
      'Unyque Pro em São Paulo como complemento ao emagrecimento: flacidez e celulite depois de perder peso, no Paraíso. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalProcedure', name: 'Unyque Pro — tratamento não invasivo do contorno corporal' },
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página do Unyque Pro e gostaria de agendar uma avaliação.',
    publicada: true,
  },
  {
    caminho: 'dra-isabela-bertoglio',
    imagemSocial: { src: '/servicos/dra-isabela-bertoglio-og.jpg', alt: 'Dra. Isabela Bertoglio, nutróloga em São Paulo, no consultório' },
    grupo: 'institucional',
    nomeCurto: 'Dra. Isabela Bertoglio',
    rotuloNoRodape: 'Sobre a Dra. Isabela',
    // Página de perfil: ProfilePage com o Physician completo (src/blog/seo.js).
    perfil: true,
    tituloSeo: 'Dra. Isabela Bertoglio | Nutróloga em São Paulo',
    descricao:
      'Conheça a Dra. Isabela Bertoglio, nutróloga em São Paulo: formação, registros, abordagem e onde atende, no Paraíso. Agende pelo WhatsApp.',
    revisadoEm: REVISADO_EM,
    mensagemWhatsapp: 'Olá! Vim pela página da Dra. Isabela no site e gostaria de agendar uma consulta.',
    publicada: true,
  },
  {
    caminho: 'consulta-nutrologia',
    imagemSocial: { src: '/servicos/consulta-nutrologia-og.jpg', alt: 'Recepção da Clínica Belvitá, ao lado do título Consulta de nutrologia: como funciona' },
    grupo: 'institucional',
    nomeCurto: 'Consulta de nutrologia',
    tituloSeo: 'Consulta com nutróloga em São Paulo: como funciona',
    descricao:
      'Como funciona a consulta com a nutróloga Dra. Isabela em São Paulo: avaliação, InBody, exames, plano e retornos. Agende pelo WhatsApp.',
    sobre: { '@type': 'MedicalProcedure', name: 'Consulta de nutrologia', procedureType: 'https://schema.org/NoninvasiveProcedure' },
    // Revisada em 12/11/2026 (link para o post da consulta online)
    revisadoEm: '2026-11-12',
    mensagemWhatsapp: 'Olá! Vim pela página da consulta de nutrologia e gostaria de agendar a primeira consulta com a Dra. Isabela.',
    publicada: true,
  },
];

export const SERVICOS_PUBLICADOS = SERVICOS.filter((s) => s.publicada);
export const caminhosPublicados = new Set(SERVICOS_PUBLICADOS.map((s) => `/${s.caminho}`));
export const servicoPublicado = (caminho) => SERVICOS_PUBLICADOS.find((s) => s.caminho === caminho);
export const arquivoDoServico = (servico) => `${servico.caminho.replace(/\//g, '-')}.html`;

// Itens dos menus (cabeçalho e rodapé): só páginas publicadas.
export const MENU_TRATAMENTOS = SERVICOS_PUBLICADOS.filter((s) => s.grupo === 'tratamentos');
export const MENU_TECNOLOGIAS = SERVICOS_PUBLICADOS.filter((s) => s.grupo === 'tecnologias');
export const PAGINA_SOBRE = servicoPublicado('dra-isabela-bertoglio');
export const PAGINA_CONSULTA = servicoPublicado('consulta-nutrologia');
export const HUB_TRATAMENTOS = servicoPublicado('tratamentos');
