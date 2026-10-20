// Páginas de destino dos anúncios do Google Ads: a página inicial com o topo, o FAQ e o título
// trocados para a busca de cada grupo de anúncios (o que puxa a "experiência na página de destino"
// do Índice de Qualidade). Fora do sitemap e com noindex: existem para o anúncio, não para a busca
// orgânica, e não disputam posição com a página inicial nem com /medico-para-emagrecer-paraiso.
// Os CTAs são os da página inicial (evento whatsapp_click, que conta como conversão do Ads).
import { Activity, CalendarCheck, Car, MapPin, Stethoscope } from 'lucide-react';
import { FAQ } from '@/lib/faq';

// Perguntas da página inicial sem as do Unyque Pro (a de agendamento cita o Unyque na resposta).
const FAQ_EMAGRECIMENTO = FAQ.filter(({ pergunta, resposta }) => !/unyque/i.test(pergunta + resposta));

// Pergunta da página inicial pelo texto exato (erro no build se ela mudar de nome).
const doFaq = (texto) => {
  const item = FAQ.find(({ pergunta }) => pergunta === texto);
  if (!item) throw new Error(`landings: pergunta "${texto}" não existe em src/lib/faq.js`);
  return item;
};

// Fim da resposta "como agendar" das páginas de destino (a da página inicial cita o Unyque Pro).
const ATENDIMENTO =
  'O atendimento é de segunda a sexta, das 8h às 18h. As consultas são particulares, com nota fiscal para reembolso, e acontecem na Clínica Belvitá, na Rua Teixeira da Silva, 54, Conj. 81/82, Bela Vista, em São Paulo, perto da estação Paraíso do metrô, com estacionamento conveniado com manobrista.';

export const LANDINGS = [
  {
    slug: 'clinica-de-emagrecimento',
    // Grupo de anúncios: "clínica de emagrecimento", "clinica de emagrecimento sp",
    // [clínica de emagrecimento perto de mim], [programa de emagrecimento], [tratamento para emagrecer]
    tituloSeo: 'Clínica de emagrecimento em São Paulo | Clínica Belvitá',
    descricao:
      'Clínica de emagrecimento em São Paulo, no Paraíso: acompanhamento médico de 3 a 6 meses com a Dra. Isabela Bertoglio e bioimpedância inclusa. Agende.',
    tituloSocial: 'Clínica de emagrecimento em São Paulo | Dra. Isabela Bertoglio',
    // Faixa de palavras entre as seções: o tema da busca, em vez das palavras genéricas da página inicial
    faixa: [
      'Clínica de emagrecimento',
      'Acompanhamento médico',
      'Bioimpedância InBody',
      '3 a 6 meses',
      'Metrô Paraíso',
      'Perto da Paulista',
      'Consulta particular',
    ],
    hero: {
      sobretitulo: 'Clínica de emagrecimento · Paraíso, SP',
      titulo: { antes: 'Clínica de emagrecimento em São Paulo', destaque: 'com acompanhamento médico' },
      texto:
        'Na Clínica Belvitá, no Paraíso, a Dra. Isabela Bertoglio investiga a causa do ganho de peso e acompanha você por 3 a 6 meses, com bioimpedância para medir gordura e músculo. Perto do metrô Paraíso e da Avenida Paulista.',
      beneficios: [
        { icon: Activity, texto: 'Bioimpedância InBody na avaliação' },
        { icon: CalendarCheck, texto: 'Acompanhamento de 3 a 6 meses' },
        { icon: MapPin, texto: 'Metrô Paraíso, perto da Paulista' },
        { icon: Car, texto: 'Estacionamento com manobrista' },
      ],
      // "Particular" no botão: quem procura convênio já sabe antes de clicar.
      cta: 'Agendar consulta particular',
      nota: 'Sem fórmulas prontas e sem promessas · Resposta rápida pelo WhatsApp',
    },
    faq: {
      subtitulo: 'Clínica de emagrecimento com acompanhamento médico em São Paulo',
      // As objeções que decidem o agendamento vêm primeiro.
      perguntas: [
        {
          pergunta: 'Como funciona o tratamento na clínica de emagrecimento?',
          resposta:
            'Começa com uma consulta médica que revisa o histórico de peso, o sono, a rotina, os medicamentos e os exames, com bioimpedância InBody 380 inclusa. A partir daí, a Dra. Isabela Bertoglio monta um plano adaptado à sua rotina e acompanha a evolução por 3 a 6 meses, com retornos para medir gordura e massa muscular e ajustar o tratamento.',
        },
        {
          pergunta: 'O tratamento inclui medicação?',
          resposta:
            'Depende da avaliação. A conduta é definida na consulta, depois de revisar o histórico, os exames e a composição corporal. Quando há indicação, o plano pode incluir medicamentos para obesidade, como as canetas da família GLP-1, sempre com receita, acompanhamento e plano para a fase de manutenção. Quando não há, o tratamento segue com ajustes na alimentação, no sono, na atividade física e na rotina.',
        },
        doFaq('Você atende por convênio?'),
        doFaq('O que está incluso na primeira consulta?'),
        doFaq('Já tentei de tudo, por que agora seria diferente?'),
        doFaq('Vou precisar mudar tudo na minha vida?'),
        doFaq('É só para quem quer emagrecer muito?'),
        doFaq('Em quanto tempo começo a ver resultados?'),
        doFaq('Meus exames estão normais, mas não me sinto bem. Isso pode ser hormonal?'),
        doFaq('Onde fazer emagrecimento com acompanhamento médico em São Paulo?'),
        {
          pergunta: 'Como agendar uma avaliação na clínica de emagrecimento?',
          resposta: `Pelo WhatsApp (11) 99975-8182. ${ATENDIMENTO}`,
        },
      ],
    },
  },
  {
    slug: 'nutrologia',
    // Grupo de anúncios: [nutrólogo], "nutrólogo perto de mim", [médico nutrólogo], [nutrólogo sp],
    // "consulta nutrólogo", [nutrologista], [consulta de nutrologia]
    tituloSeo: 'Nutróloga em São Paulo | Dra. Isabela Bertoglio',
    descricao:
      'Nutróloga em São Paulo, no Paraíso: consulta de nutrologia com a Dra. Isabela Bertoglio, com exames, bioimpedância inclusa e acompanhamento. Agende.',
    tituloSocial: 'Nutróloga em São Paulo | Consulta de nutrologia no Paraíso',
    hero: {
      sobretitulo: 'Nutrologia · Paraíso, SP',
      titulo: { antes: 'Nutróloga em São Paulo:', destaque: 'consulta de nutrologia', depois: 'no Paraíso' },
      texto:
        'Na Clínica Belvitá, a Dra. Isabela Bertoglio, médica nutróloga, avalia peso, metabolismo, alimentação e exames, com bioimpedância InBody inclusa e acompanhamento de 3 a 6 meses. Perto do metrô Paraíso e da Avenida Paulista.',
      beneficios: [
        { icon: Stethoscope, texto: 'Consulta de nutrologia' },
        { icon: Activity, texto: 'Bioimpedância InBody na avaliação' },
        { icon: MapPin, texto: 'Metrô Paraíso, perto da Paulista' },
        { icon: Car, texto: 'Estacionamento com manobrista' },
      ],
    },
    faq: {
      subtitulo: 'Consulta de nutrologia em São Paulo',
      perguntas: [
        {
          pergunta: 'O que o nutrólogo faz na consulta?',
          resposta:
            'O nutrólogo é o médico que cuida da relação entre alimentação, metabolismo e saúde. Na consulta, a Dra. Isabela Bertoglio revisa o histórico de peso, a alimentação, o sono, a rotina, os medicamentos e os exames, faz a bioimpedância InBody 380 e define o plano, que pode incluir ajustes na alimentação, exames complementares e, quando indicado, medicação, com acompanhamento de 3 a 6 meses.',
        },
        {
          pergunta: 'Qual a diferença entre nutrólogo e nutricionista?',
          resposta:
            'O nutrólogo é médico, com especialidade em Nutrologia: investiga doenças ligadas ao peso e ao metabolismo, pede e interpreta exames e, quando indicado, prescreve medicamentos. O nutricionista é o profissional da nutrição que elabora o plano alimentar. Os dois trabalhos se complementam.',
        },
        ...FAQ_EMAGRECIMENTO,
        {
          pergunta: 'Como agendar uma consulta de nutrologia?',
          resposta: `Pelo WhatsApp (11) 99975-8182. ${ATENDIMENTO}`,
        },
      ],
    },
  },
];

/** Página de destino da rota (ex.: "/clinica-de-emagrecimento"), ou undefined na página inicial. */
export const landingDaRota = (caminho) => {
  const limpo = caminho.split(/[?#]/)[0].replace(/\/+$/, '');
  return LANDINGS.find((landing) => `/${landing.slug}` === limpo);
};
