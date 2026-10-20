// Páginas de destino dos anúncios do Google Ads: a página inicial com o topo, o FAQ e o título
// trocados para a busca de cada grupo de anúncios (o que puxa a "experiência na página de destino"
// do Índice de Qualidade). Fora do sitemap e com noindex: existem para o anúncio, não para a busca
// orgânica, e não disputam posição com a página inicial nem com /medico-para-emagrecer-paraiso.
// Os CTAs são os da página inicial (evento whatsapp_click, que conta como conversão do Ads).
import { Activity, CalendarCheck, Car, MapPin } from 'lucide-react';
import { FAQ } from '@/lib/faq';

// Perguntas da página inicial sem as do Unyque Pro (a de agendamento cita o Unyque na resposta).
const FAQ_EMAGRECIMENTO = FAQ.filter(({ pergunta, resposta }) => !/unyque/i.test(pergunta + resposta));

export const LANDINGS = [
  {
    slug: 'clinica-de-emagrecimento',
    // Grupo de anúncios: "clínica de emagrecimento", "clinica de emagrecimento sp",
    // [clínica de emagrecimento perto de mim], [programa de emagrecimento], [tratamento para emagrecer]
    tituloSeo: 'Clínica de emagrecimento em São Paulo | Clínica Belvitá',
    descricao:
      'Clínica de emagrecimento em São Paulo, no Paraíso: acompanhamento médico de 3 a 6 meses com a Dra. Isabela Bertoglio e bioimpedância inclusa. Agende.',
    tituloSocial: 'Clínica de emagrecimento em São Paulo | Dra. Isabela Bertoglio',
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
    },
    faq: {
      subtitulo: 'Clínica de emagrecimento com acompanhamento médico em São Paulo',
      perguntas: [
        {
          pergunta: 'Como funciona o tratamento na clínica de emagrecimento?',
          resposta:
            'Começa com uma consulta médica que revisa o histórico de peso, o sono, a rotina, os medicamentos e os exames, com bioimpedância InBody 380 inclusa. A partir daí, a Dra. Isabela Bertoglio monta um plano adaptado à sua rotina e acompanha a evolução por 3 a 6 meses, com retornos para medir gordura e massa muscular e ajustar o tratamento.',
        },
        ...FAQ_EMAGRECIMENTO,
        {
          pergunta: 'Como agendar uma avaliação na clínica de emagrecimento?',
          resposta:
            'Pelo WhatsApp (11) 99975-8182. O atendimento é de segunda a sexta, das 8h às 18h. As consultas são particulares, com nota fiscal para reembolso, e acontecem na Clínica Belvitá, na Rua Teixeira da Silva, 54, Conj. 81/82, Bela Vista, em São Paulo, perto da estação Paraíso do metrô, com estacionamento conveniado com manobrista.',
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
