// <head> das páginas do blog: título, descrição, canonical, prévia de compartilhamento e dados estruturados.
import { DOCTOR_NAME } from '@/lib/doctor';
import { capaDoPost, TAMANHOS_CAPA } from '@/blog/imagens';

export const SITE_URL = 'https://www.draisabelabertoglio.com.br';
export const URL_DO_BLOG = `${SITE_URL}/blog`;
export const urlDoPost = (post) => `${URL_DO_BLOG}/${post.slug}`;

export const BLOG = {
  tituloSeo: 'Blog sobre emagrecimento e saúde metabólica | Dra. Isabela',
  descricao:
    'Artigos da Dra. Isabela Bertoglio, médica em São Paulo, sobre emagrecimento com acompanhamento médico, bioimpedância, medicamentos e manutenção do peso.',
};

const NOME_DO_SITE = 'Clínica Belvitá – Dra. Isabela Bertoglio';

// Mesmos @id do index.html, para o Google tratar a clínica e a médica como as mesmas entidades em todo o site.
const ID_CLINICA = `${SITE_URL}/#clinica`;
const ID_MEDICA = `${SITE_URL}/#dra-isabela`;

const ENDERECO = {
  '@type': 'PostalAddress',
  streetAddress: 'Rua Teixeira da Silva, 54, Conj. 81/82 – Paraíso',
  addressLocality: 'São Paulo',
  addressRegion: 'SP',
  postalCode: '04002-030',
  addressCountry: 'BR',
};

const CLINICA = {
  '@type': 'MedicalClinic',
  '@id': ID_CLINICA,
  name: 'Clínica Belvitá',
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-belvita-quadrado.png`, width: 1200, height: 1200 },
  image: `${SITE_URL}/logo-belvita-quadrado.png`,
  telephone: '(11) 99975-8182',
  address: ENDERECO,
  areaServed: { '@type': 'City', name: 'São Paulo' },
  priceRange: '$$$',
};

const MEDICA = {
  '@type': 'Physician',
  '@id': ID_MEDICA,
  name: DOCTOR_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/dra-isabela-bertoglio.jpg`,
  worksFor: { '@id': ID_CLINICA },
  telephone: '(11) 99975-8182',
  address: ENDERECO,
  priceRange: '$$$',
  identifier: [
    { '@type': 'PropertyValue', propertyID: 'CRM-SP', value: '194436' },
    { '@type': 'PropertyValue', propertyID: 'RQE', value: '84645' },
    { '@type': 'PropertyValue', propertyID: 'RQE', value: '86835' },
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade de São Paulo' },
  areaServed: { '@type': 'City', name: 'São Paulo' },
};

const atributo = (valor) => String(valor).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const meta = (chave, nome, valor) => `<meta ${chave}="${nome}" content="${atributo(valor)}" />`;
// `<` escapado: nenhum texto do grafo consegue fechar o <script> antes da hora.
const jsonLd = (grafo) =>
  `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(/</g, '\\u003c')}</script>`;

const trilha = (id, itens) => ({
  '@type': 'BreadcrumbList',
  '@id': id,
  itemListElement: itens.map(([nome, url], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: nome,
    ...(url && { item: url }),
  })),
});

function headDaPagina({ titulo, descricao, url, tipo, tituloSocial, descricaoSocial, imagemSocial, imagemAlt, extras }) {
  return [
    `<title>${titulo.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`,
    meta('name', 'description', descricao),
    `<link rel="canonical" href="${atributo(url)}" />`,
    meta('name', 'robots', 'index, follow, max-image-preview:large'),
    meta('property', 'og:type', tipo),
    meta('property', 'og:locale', 'pt_BR'),
    meta('property', 'og:site_name', NOME_DO_SITE),
    meta('property', 'og:url', url),
    meta('property', 'og:title', tituloSocial),
    meta('property', 'og:description', descricaoSocial),
    meta('property', 'og:image', `${SITE_URL}${imagemSocial}`),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', imagemAlt),
    meta('name', 'twitter:card', 'summary_large_image'),
    ...extras,
  ].join('\n    ');
}

export function headDoPost(post, conteudo) {
  const url = urlDoPost(post);
  const capa = capaDoPost(post);

  const grafo = [
    {
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.titulo,
      description: post.descricao,
      inLanguage: 'pt-BR',
      datePublished: post.publicadoEm,
      dateModified: post.atualizadoEm,
      lastReviewed: post.atualizadoEm,
      audience: { '@type': 'MedicalAudience', audienceType: 'Pacientes' },
      about: post.tema,
      author: { '@id': ID_MEDICA },
      reviewedBy: { '@id': ID_MEDICA },
      publisher: { '@id': ID_CLINICA },
      primaryImageOfPage: { '@id': `${url}#capa` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
    },
    {
      '@type': 'BlogPosting',
      '@id': `${url}#artigo`,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: post.titulo,
      description: post.descricao,
      image: { '@id': `${url}#capa` },
      datePublished: post.publicadoEm,
      dateModified: post.atualizadoEm,
      inLanguage: 'pt-BR',
      author: { '@id': ID_MEDICA },
      publisher: { '@id': ID_CLINICA },
    },
    {
      '@type': 'ImageObject',
      '@id': `${url}#capa`,
      url: `${SITE_URL}${capa.social}`,
      width: 1200,
      height: 630,
      caption: post.capa.alt,
    },
    MEDICA,
    CLINICA,
    trilha(`${url}#breadcrumb`, [
      ['Início', `${SITE_URL}/`],
      ['Blog', URL_DO_BLOG],
      [post.titulo],
    ]),
  ];

  if (conteudo.faq.length) {
    grafo.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: conteudo.faq.map(({ pergunta, resposta }) => ({
        '@type': 'Question',
        name: pergunta,
        acceptedAnswer: { '@type': 'Answer', text: resposta },
      })),
    });
  }

  return headDaPagina({
    titulo: post.tituloSeo,
    descricao: post.descricao,
    url,
    tipo: 'article',
    tituloSocial: post.tituloSocial,
    descricaoSocial: post.descricaoSocial,
    imagemSocial: capa.social,
    imagemAlt: post.capa.alt,
    extras: [
      meta('property', 'article:published_time', post.publicadoEm),
      meta('property', 'article:modified_time', post.atualizadoEm),
      // A capa é o maior elemento da primeira dobra: começa a baixar junto com o HTML.
      `<link rel="preload" as="image" href="${capa.src}" imagesrcset="${capa.srcSet}" imagesizes="${TAMANHOS_CAPA}" fetchpriority="high" />`,
      jsonLd(grafo),
    ],
  });
}

export function headDoBlog(posts) {
  const grafo = [
    {
      '@type': 'Blog',
      '@id': `${URL_DO_BLOG}#blog`,
      url: URL_DO_BLOG,
      name: `Blog da ${DOCTOR_NAME}`,
      description: BLOG.descricao,
      inLanguage: 'pt-BR',
      author: { '@id': ID_MEDICA },
      publisher: { '@id': ID_CLINICA },
      breadcrumb: { '@id': `${URL_DO_BLOG}#breadcrumb` },
      blogPost: posts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.titulo,
        url: urlDoPost(post),
        datePublished: post.publicadoEm,
        dateModified: post.atualizadoEm,
        image: `${SITE_URL}${capaDoPost(post).social}`,
        author: { '@id': ID_MEDICA },
      })),
    },
    MEDICA,
    CLINICA,
    trilha(`${URL_DO_BLOG}#breadcrumb`, [['Início', `${SITE_URL}/`], ['Blog']]),
  ];

  // Prévia de compartilhamento da lista: a capa do post mais recente.
  const recente = posts[0];
  return headDaPagina({
    titulo: BLOG.tituloSeo,
    descricao: BLOG.descricao,
    url: URL_DO_BLOG,
    tipo: 'website',
    tituloSocial: BLOG.tituloSeo,
    descricaoSocial: BLOG.descricao,
    imagemSocial: capaDoPost(recente).social,
    imagemAlt: recente.capa.alt,
    extras: [jsonLd(grafo)],
  });
}
