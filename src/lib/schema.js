// Dados estruturados (JSON-LD) do site. A clínica e a médica têm o mesmo @id em todas as páginas,
// para o Google tratá-las como as mesmas entidades. NAP igual ao da página e ao da ficha do Google (src/lib/location.js).
import { DOCTOR_NAME, INSTAGRAM_URL } from '@/lib/doctor';
import { CLINIC_NAME, GOOGLE_BUSINESS_NAME, PHONE, MAP_DIRECTIONS_URL } from '@/lib/location';
import { FAQ } from '@/lib/faq';

export const SITE_URL = 'https://www.draisabelabertoglio.com.br';
export const NOME_DO_SITE = `${CLINIC_NAME} – ${DOCTOR_NAME}`;

// Data da última revisão do conteúdo da página inicial pela Dra. Isabela. Aparece na página (AboutDoctor),
// no dateModified do JSON-LD e no <lastmod> do sitemap: atualizar sempre que o texto da página mudar.
export const HOME_REVISADA_EM = '2026-10-19';

export const ID_CLINICA = `${SITE_URL}/#clinica`;
export const ID_MEDICA = `${SITE_URL}/#dra-isabela`;

export const DESCRICAO_DA_CLINICA =
  'Clínica no Paraíso, em São Paulo, com atendimento em Nutrologia da Dra. Isabela Bertoglio: emagrecimento com acompanhamento médico de 3 a 6 meses, bioimpedância InBody 380 e Unyque Pro para celulite, flacidez e gordura localizada.';

const ENDERECO = {
  '@type': 'PostalAddress',
  streetAddress: 'Rua Teixeira da Silva, 54, Conj. 81/82 – Bela Vista',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  postalCode: '04002-030',
  addressCountry: 'BR',
};

// Posição do pin da ficha do Google (cid em src/lib/location.js).
export const COORDENADAS = { '@type': 'GeoCoordinates', latitude: -23.568869, longitude: -46.646175 };

// Segunda a sexta, das 8h às 18h (HOURS em src/lib/location.js).
const HORARIO = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
];

const SAO_PAULO = { '@type': 'City', name: 'São Paulo' };

// Bairros de onde vêm os pacientes (página /medico-para-emagrecer-paraiso), além da cidade.
const AREA_ATENDIDA = [
  ...['Paraíso', 'Bela Vista', 'Vila Mariana', 'Aclimação', 'Liberdade', 'Jardim Paulista', 'Cerqueira César'].map((bairro) => ({
    '@type': 'Place',
    name: `${bairro}, São Paulo - SP`,
  })),
  SAO_PAULO,
];

// Os serviços que a página apresenta, com as palavras da própria página.
const SERVICOS = [
  {
    '@type': 'MedicalProcedure',
    name: 'Emagrecimento com acompanhamento médico',
    description:
      'Investigação da causa do ganho de peso e acompanhamento de 3 a 6 meses, com plano adaptado à rotina e bioimpedância para medir gordura e músculo, não só o peso.',
  },
  {
    '@type': 'MedicalProcedure',
    name: 'Bioimpedância InBody 380',
    description: 'Avaliação da composição corporal: músculo, gordura e água corporal, inclusa na avaliação.',
  },
  {
    '@type': 'MedicalProcedure',
    name: 'Unyque Pro',
    procedureType: 'https://schema.org/NoninvasiveProcedure',
    howPerformed: 'Equipamento Unyque Pro, fabricado pela Contourline, com registro Anvisa nº 80832479008.',
    description:
      'Equipamento de uso médico da Contourline com três tecnologias (ReFreeze, Cryo RF Max e HImFU) para celulite, flacidez corporal, gordura localizada e contorno corporal, sem cortes e sem agulhas.',
  },
];

export const CLINICA = {
  '@type': 'MedicalClinic',
  '@id': ID_CLINICA,
  name: CLINIC_NAME,
  url: `${SITE_URL}/`,
  description: DESCRICAO_DA_CLINICA,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-belvita-quadrado.png`, width: 1200, height: 1200 },
  image: [`${SITE_URL}/logo-belvita-quadrado.png`, `${SITE_URL}/clinica/clinica-belvita-recepcao.webp`],
  telephone: PHONE,
  address: ENDERECO,
  geo: COORDENADAS,
  hasMap: MAP_DIRECTIONS_URL,
  openingHoursSpecification: HORARIO,
  areaServed: AREA_ATENDIDA,
  amenityFeature: [{ '@type': 'LocationFeatureSpecification', name: 'Estacionamento conveniado com manobrista', value: true }],
  isAcceptingNewPatients: true,
  paymentAccepted: 'Consulta particular, com nota fiscal para reembolso',
  availableService: SERVICOS,
  employee: { '@id': ID_MEDICA },
};

export const MEDICA = {
  '@type': 'Physician',
  '@id': ID_MEDICA,
  name: DOCTOR_NAME,
  // A ficha do Google (hasMap) é da médica: o nome dela no Google entra como nome alternativo.
  alternateName: GOOGLE_BUSINESS_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/dra-isabela-bertoglio.jpg`,
  worksFor: { '@id': ID_CLINICA },
  telephone: PHONE,
  address: ENDERECO,
  geo: COORDENADAS,
  hasMap: MAP_DIRECTIONS_URL,
  openingHoursSpecification: HORARIO,
  medicalSpecialty: { '@type': 'MedicalSpecialty', name: 'Nutrologia' },
  sameAs: [INSTAGRAM_URL, MAP_DIRECTIONS_URL],
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'CRM-SP', value: '194436' },
    { '@type': 'PropertyValue', propertyID: 'RQE', value: '84645' },
    { '@type': 'PropertyValue', propertyID: 'RQE', value: '86835' },
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade de São Paulo' },
  areaServed: SAO_PAULO,
};

// `<` escapado: nenhum texto do grafo consegue fechar o <script> antes da hora.
export const jsonLd = (grafo) =>
  `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(/</g, '\\u003c')}</script>`;

/** JSON-LD da página inicial: site, página, clínica, médica e o FAQ visível na página. */
export function jsonLdDaHome() {
  const url = `${SITE_URL}/`;
  return jsonLd([
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url,
      name: NOME_DO_SITE,
      inLanguage: 'pt-BR',
      publisher: { '@id': ID_CLINICA },
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: 'Dra. Isabela Bertoglio | Nutrologia, Emagrecimento e Saúde em São Paulo',
      description: DESCRICAO_DA_CLINICA,
      inLanguage: 'pt-BR',
      dateModified: HOME_REVISADA_EM,
      lastReviewed: HOME_REVISADA_EM,
      isPartOf: { '@id': `${SITE_URL}/#site` },
      about: { '@id': ID_CLINICA },
      reviewedBy: { '@id': ID_MEDICA },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/emagrecimento-acompanhamento-medico-sao-paulo-og.jpg`,
        width: 1200,
        height: 630,
      },
    },
    CLINICA,
    MEDICA,
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: FAQ.map(({ pergunta, resposta }) => ({
        '@type': 'Question',
        name: pergunta,
        acceptedAnswer: { '@type': 'Answer', text: resposta },
      })),
    },
  ]);
}
