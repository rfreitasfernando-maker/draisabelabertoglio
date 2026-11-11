// Categorias do blog e títulos curtos dos cards.
//
// Todo post precisa estar em exatamente uma categoria: o build falha se faltar (ver `categoriaDoPost`).
// Ao publicar um post novo, acrescente o slug na lista da categoria certa.
//
// Título do card: o `tituloSocial` do post (src/blog/posts/index.js). Quando ele passa de ~60 caracteres,
// o card usa a versão de TITULOS_CURTOS. O H1 e o <title> do post não mudam.

export const CATEGORIAS = [
  {
    slug: 'canetas-e-remedios',
    nome: 'Canetas e remédios para emagrecer',
    posts: [
      'canetas-emagrecedoras', 'tirzepatida', 'tirzepatida-ou-semaglutida', 'mounjaro-efeitos-colaterais',
      'mounjaro-emagrece-quantos-quilos', 'parar-mounjaro', 'mounjaro-e-alcool', 'mounjaro-queda-de-cabelo',
      'ozempic-para-que-serve', 'rosto-de-ozempic', 'semaglutida-generica', 'wegovy', 'wegovy-comprimido',
      'liraglutida', 'retatrutida', 'orforgliprona-foundayo', 'remedios-para-emagrecer', 'inibidor-de-apetite',
      'sibutramina', 'orlistate', 'metformina-emagrece',
    ],
  },
  {
    slug: 'exames-e-metabolismo',
    nome: 'Exames e saúde metabólica',
    posts: [
      'exames-para-emagrecer', 'imc', 'hemoglobina-glicada', 'pre-diabetes', 'resistencia-a-insulina',
      'sindrome-metabolica', 'gordura-no-figado', 'colesterol-alto', 'triglicerides-alto', 'acido-urico-alto',
      'ferritina-alta', 'hipotireoidismo-engorda', 'hipotireoidismo-subclinico',
    ],
  },
  {
    slug: 'vitaminas-e-suplementos',
    nome: 'Vitaminas e suplementos',
    posts: [
      'suplementos-para-emagrecer', 'vitamina-d-b12-ferritina', 'vitamina-b12-baixa', 'creatina',
      'omega-3-para-que-serve', 'magnesio-para-que-serve', 'zinco-para-que-serve', 'colageno-para-que-serve',
      'curcuma-para-que-serve', 'coenzima-q10-estatina', 'probioticos-emagrecem', 'melatonina-para-que-serve',
    ],
  },
  {
    slug: 'alimentacao-e-dietas',
    nome: 'Alimentação e dietas',
    posts: [
      'reeducacao-alimentar', 'deficit-calorico', 'proteina-para-emagrecer', 'alimentos-ricos-em-fibras',
      'low-carb', 'jejum-intermitente', 'dieta-anti-inflamatoria', 'adocante-faz-mal', 'dieta-sem-gluten-emagrece',
      'intolerancia-a-lactose', 'o-que-comer-usando-mounjaro', 'efeito-sanfona',
    ],
  },
  {
    slug: 'hormonios-e-fases-da-vida',
    nome: 'Hormônios e fases da vida',
    posts: [
      'emagrecer-na-menopausa', 'emagrecer-depois-dos-40', 'emagrecer-depois-da-gravidez', 'sop-emagrecer',
      'anticoncepcional-engorda', 'cortisol-alto-engorda', 'como-nao-engordar-nas-festas',
      'emagrecer-para-o-casamento', 'emagrecer-ate-o-carnaval',
    ],
  },
  {
    slug: 'composicao-corporal',
    nome: 'Composição corporal',
    posts: [
      'bioimpedancia', 'sarcopenia', 'mounjaro-perda-de-massa-muscular', 'gordura-visceral',
      'como-perder-gordura-abdominal', 'flacidez-depois-de-emagrecer', 'unyque-pro-celulite-flacidez',
      'retencao-de-liquido', 'obesidade-e-dor-no-joelho',
    ],
  },
  {
    slug: 'sono-intestino-comportamento',
    nome: 'Sono, intestino e comportamento',
    posts: [
      'dormir-mal-engorda', 'apneia-do-sono-e-obesidade', 'compulsao-alimentar', 'vontade-de-comer-doce-a-noite',
      'intestino-preso', 'barriga-inchada', 'hipoglicemia-reativa',
    ],
  },
  {
    slug: 'consulta-e-tratamento',
    nome: 'Consulta e tratamento',
    posts: [
      'emagrecimento-com-acompanhamento-medico', 'obesidade-tratamento', 'nao-consigo-emagrecer',
      'nutrologo-o-que-faz', 'consulta-nutrologia-plano-de-saude', 'reganho-apos-bariatrica',
      'preparo-nutricional-cirurgia-plastica',
    ],
  },
];

// Títulos de card para os posts cujo `tituloSocial` passa de ~60 caracteres
const TITULOS_CURTOS = {
  bioimpedancia: 'Bioimpedância: o que é o exame InBody e como interpretar',
  'tirzepatida-ou-semaglutida': 'Tirzepatida ou semaglutida: as diferenças entre as canetas',
  'mounjaro-perda-de-massa-muscular': 'Mounjaro e perda de massa muscular: como preservar',
  'semaglutida-generica': 'Semaglutida genérica: o que muda e se funciona igual',
  'vontade-de-comer-doce-a-noite': 'Vontade de comer doce à noite: por que acontece',
  'canetas-emagrecedoras': 'Canetas emagrecedoras: quais são aprovadas e os riscos',
  'remedios-para-emagrecer': 'Remédios para emagrecer: quais são aprovados e os riscos',
  'compulsao-alimentar': 'Compulsão alimentar: sintomas e tratamento',
  sarcopenia: 'Sarcopenia: o que é e como prevenir a perda de músculo',
  'pre-diabetes': 'Pré-diabetes: valores, sintomas e como reverter',
  'proteina-para-emagrecer': 'Quanto de proteína por dia para emagrecer?',
  'hipotireoidismo-engorda': 'Hipotireoidismo engorda? Tireoide, TSH e peso',
  'inibidor-de-apetite': 'Inibidor de apetite: quais existem e os riscos',
  orlistate: 'Orlistate: como funciona e quanto emagrece',
  'exames-para-emagrecer': 'Exames para emagrecer: o check-up antes de começar',
  'hipotireoidismo-subclinico': 'Hipotireoidismo subclínico: o que é e quando tratar',
  'low-carb': 'Dieta low carb funciona? Benefícios e riscos',
  'emagrecer-na-menopausa': 'Emagrecer na menopausa: o que muda e o que funciona',
  imc: 'Calculadora de IMC e peso ideal',
};

const CATEGORIA_DO_POST = new Map(CATEGORIAS.flatMap((categoria) => categoria.posts.map((slug) => [slug, categoria])));

/** Categoria do post; erro no build se o post não estiver em nenhuma categoria. */
export function categoriaDoPost(post) {
  const categoria = CATEGORIA_DO_POST.get(post.slug);
  if (!categoria) throw new Error(`blog: o post "${post.slug}" não está em nenhuma categoria (src/blog/categorias.js)`);
  return categoria;
}

/** Título curto do card (sem o " | SP" que alguns títulos de compartilhamento têm). */
export const tituloDoCard = (post) => TITULOS_CURTOS[post.slug] || post.tituloSocial.replace(/\s*\|\s*SP$/, '');

/** Valida a lista: cada slug em uma só categoria e nenhum slug que não exista. */
export function validarCategorias(slugsDosPosts) {
  const vistos = new Set();
  for (const categoria of CATEGORIAS) {
    for (const slug of categoria.posts) {
      if (vistos.has(slug)) throw new Error(`blog: o post "${slug}" está em mais de uma categoria`);
      if (!slugsDosPosts.has(slug)) throw new Error(`blog: a categoria "${categoria.slug}" lista o post "${slug}", que não existe`);
      vistos.add(slug);
    }
  }
}
