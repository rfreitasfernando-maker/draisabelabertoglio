// <head> das páginas do blog: título, descrição, canonical, prévia de compartilhamento e dados estruturados.
import { DOCTOR_NAME } from '@/lib/doctor';
import { capaDoPost, TAMANHOS_CAPA } from '@/blog/imagens';
import { SITE_URL, NOME_DO_SITE, ID_CLINICA, ID_MEDICA, CLINICA, MEDICA, COORDENADAS, jsonLd } from '@/lib/schema';
import { categoriaDoPost, caminhoDaCategoria } from '@/blog/categorias';

export { SITE_URL };
export const URL_DO_BLOG = `${SITE_URL}/blog`;
export const urlDoPost = (post) => `${URL_DO_BLOG}/${post.slug}`;

export const BLOG = {
  tituloSeo: 'Blog sobre emagrecimento e saúde metabólica | Dra. Isabela',
  descricao:
    'Artigos da Dra. Isabela Bertoglio, médica em São Paulo, sobre emagrecimento com acompanhamento médico, bioimpedância, medicamentos e manutenção do peso.',
};

// Mesma diretiva da página inicial (index.html).
const ROBOTS = 'index, follow, max-image-preview:large, max-video-preview:-1, max-snippet:-1';

const atributo = (valor) => String(valor).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const meta = (chave, nome, valor) => `<meta ${chave}="${nome}" content="${atributo(valor)}" />`;

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

function headDaPagina({ titulo, descricao, url, tipo, tituloSocial, descricaoSocial, imagemSocial, imagemAlt, extras, robots = ROBOTS }) {
  return [
    `<title>${titulo.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`,
    meta('name', 'description', descricao),
    `<link rel="canonical" href="${atributo(url)}" />`,
    meta('name', 'robots', robots),
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
      ...(post.mencoes && { mentions: post.mencoes }),
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
      [categoriaDoPost(post).nome, `${SITE_URL}${caminhoDaCategoria(categoriaDoPost(post))}`],
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
      meta('name', 'twitter:title', post.tituloSocial),
      meta('name', 'twitter:description', post.descricaoSocial),
      meta('property', 'article:published_time', post.publicadoEm),
      meta('property', 'article:modified_time', post.atualizadoEm),
      // A capa é o maior elemento da primeira dobra: começa a baixar junto com o HTML.
      `<link rel="preload" as="image" href="${capa.src}" imagesrcset="${capa.srcSet}" imagesizes="${TAMANHOS_CAPA}" fetchpriority="high" />`,
      jsonLd(grafo),
    ],
  });
}

export const urlDaPagina = (pagina) => `${SITE_URL}/${pagina.slug}`;

/** <head> de uma página avulsa da raiz (src/paginas): a página fala da clínica, com a trilha Início › página. */
export function headDaPaginaAvulsa(pagina, conteudo) {
  const url = urlDaPagina(pagina);

  const grafo = [
    {
      '@type': 'MedicalWebPage',
      '@id': `${url}#webpage`,
      url,
      name: pagina.titulo,
      description: pagina.descricao,
      inLanguage: 'pt-BR',
      dateModified: pagina.atualizadoEm,
      lastReviewed: pagina.atualizadoEm,
      audience: { '@type': 'MedicalAudience', audienceType: 'Pacientes' },
      about: { '@id': ID_CLINICA },
      reviewedBy: { '@id': ID_MEDICA },
      publisher: { '@id': ID_CLINICA },
      primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${pagina.imagemSocial.src}`, width: 1200, height: 630 },
      breadcrumb: { '@id': `${url}#breadcrumb` },
    },
    CLINICA,
    MEDICA,
    trilha(`${url}#breadcrumb`, [
      ['Início', `${SITE_URL}/`],
      [pagina.nomeCurto, url],
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
    titulo: pagina.tituloSeo,
    descricao: pagina.descricao,
    url,
    tipo: 'website',
    tituloSocial: pagina.tituloSocial,
    descricaoSocial: pagina.descricaoSocial,
    imagemSocial: pagina.imagemSocial.src,
    imagemAlt: pagina.imagemSocial.alt,
    extras: [
      meta('name', 'twitter:title', pagina.tituloSocial),
      meta('name', 'twitter:description', pagina.descricaoSocial),
      meta('name', 'geo.region', 'BR-SP'),
      meta('name', 'geo.placename', 'Paraíso, São Paulo'),
      meta('name', 'geo.position', `${COORDENADAS.latitude};${COORDENADAS.longitude}`),
      meta('name', 'ICBM', `${COORDENADAS.latitude}, ${COORDENADAS.longitude}`),
      jsonLd(grafo),
    ],
  });
}

// Diretiva das páginas de serviço (briefing): sem limite de trecho nem de prévia de imagem.
const ROBOTS_SERVICO = 'index, follow, max-image-preview:large, max-snippet:-1';
// Imagem de compartilhamento padrão (a da página inicial, 1200 × 630), para página de serviço sem imagem própria.
// Cada página tem a sua em public/servicos/<caminho>-og.jpg (`imagemSocial` em src/servicos/index.js).
const IMAGEM_SOCIAL_SERVICO = {
  src: '/emagrecimento-acompanhamento-medico-sao-paulo-og.jpg',
  alt: 'Dra. Isabela Bertoglio em seu consultório, ao lado do símbolo da Clínica Belvitá',
};

export const urlDoServico = (servico) => `${SITE_URL}/${servico.caminho}`;

/**
 * <head> de uma página de serviço (src/servicos): um único @graph com a página, a trilha e o FAQ.
 * A clínica e a médica entram só pelo @id (os dados completos estão na página inicial).
 * `itensDaTrilha`: [[nome, caminho]], o mesmo da trilha visível.
 */
export function headDoServico(servico, conteudo, itensDaTrilha, outrosServicos = []) {
  const url = urlDoServico(servico);
  const hub = servico.grupo === 'hub';

  const pagina = {
    '@type': hub ? 'CollectionPage' : servico.perfil ? 'ProfilePage' : 'MedicalWebPage',
    // Página de perfil: o assunto é a própria médica (dados completos no nó Physician abaixo).
    ...(servico.perfil && { mainEntity: { '@id': ID_MEDICA }, about: { '@id': ID_MEDICA } }),
    '@id': `${url}#webpage`,
    url,
    name: conteudo.h1,
    description: servico.descricao,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': `${SITE_URL}/#site` },
    ...(servico.sobre && { about: servico.sobre }),
    ...(!hub && { audience: { '@type': 'MedicalAudience', audienceType: 'Pacientes' } }),
    author: { '@id': ID_MEDICA },
    reviewedBy: { '@id': ID_MEDICA },
    publisher: { '@id': ID_CLINICA },
    lastReviewed: servico.revisadoEm,
    dateModified: servico.revisadoEm,
    breadcrumb: { '@id': `${url}#breadcrumb` },
    ...(hub && { mainEntity: { '@id': `${url}#tratamentos` } }),
  };

  const grafo = [
    pagina,
    trilha(
      `${url}#breadcrumb`,
      itensDaTrilha.map(([nome, caminho], i) => [nome, i === itensDaTrilha.length - 1 ? url : `${SITE_URL}${caminho === '/' ? '/' : caminho}`]),
    ),
  ];

  // Página Sobre: o Physician completo (o mesmo @id e os mesmos dados da página inicial).
  if (servico.perfil) {
    grafo.push(MEDICA);
  }

  if (hub) {
    grafo.push({
      '@type': 'ItemList',
      '@id': `${url}#tratamentos`,
      itemListElement: outrosServicos.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.nomeCurto, url: urlDoServico(s) })),
    });
  }

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
    titulo: servico.tituloSeo,
    descricao: servico.descricao,
    url,
    tipo: 'website',
    tituloSocial: servico.tituloSeo,
    descricaoSocial: servico.descricao,
    imagemSocial: (servico.imagemSocial ?? IMAGEM_SOCIAL_SERVICO).src,
    imagemAlt: (servico.imagemSocial ?? IMAGEM_SOCIAL_SERVICO).alt,
    robots: ROBOTS_SERVICO,
    extras: [
      meta('name', 'twitter:title', servico.tituloSeo),
      meta('name', 'twitter:description', servico.descricao),
      meta('name', 'twitter:image', `${SITE_URL}${(servico.imagemSocial ?? IMAGEM_SOCIAL_SERVICO).src}`),
      meta('name', 'geo.region', 'BR-SP'),
      meta('name', 'geo.placename', 'São Paulo'),
      meta('name', 'geo.position', `${COORDENADAS.latitude};${COORDENADAS.longitude}`),
      meta('name', 'ICBM', `${COORDENADAS.latitude}, ${COORDENADAS.longitude}`),
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

/**
 * <head> de uma página de categoria do blog (/blog/categoria/<slug>): CollectionPage com a lista dos posts
 * (ItemList) e a trilha Início › Blog › Categoria. Imagem de compartilhamento: a capa do post mais recente.
 */
export function headDaCategoria(categoria, posts) {
  const url = `${SITE_URL}${caminhoDaCategoria(categoria)}`;
  const recente = posts[0];
  const grafo = [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name: categoria.titulo,
      description: categoria.descricao,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': `${URL_DO_BLOG}#blog` },
      about: categoria.nome,
      author: { '@id': ID_MEDICA },
      publisher: { '@id': ID_CLINICA },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: posts.length,
        itemListElement: posts.map((post, i) => ({ '@type': 'ListItem', position: i + 1, url: urlDoPost(post), name: post.titulo })),
      },
    },
    trilha(`${url}#breadcrumb`, [
      ['Início', `${SITE_URL}/`],
      ['Blog', URL_DO_BLOG],
      [categoria.nome, url],
    ]),
  ];
  return headDaPagina({
    titulo: categoria.tituloSeo,
    descricao: categoria.descricao,
    url,
    tipo: 'website',
    tituloSocial: categoria.titulo,
    descricaoSocial: categoria.descricao,
    imagemSocial: capaDoPost(recente).social,
    imagemAlt: recente.capa.alt,
    extras: [jsonLd(grafo)],
  });
}
