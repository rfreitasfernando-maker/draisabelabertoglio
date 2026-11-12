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
    // Página /blog/categoria/canetas-e-remedios
    titulo: 'Artigos sobre canetas e remédios para emagrecer',
    tituloSeo: 'Canetas e remédios para emagrecer: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre canetas e remédios para emagrecer: tirzepatida, semaglutida, efeitos colaterais, como usar, como parar e os riscos sem acompanhamento.',
    intro:
      'Tirzepatida (Mounjaro), semaglutida (Ozempic e Wegovy), liraglutida e outros remédios para obesidade mudaram o tratamento do peso, mas também trouxeram muitas dúvidas. Nestes artigos, a Dra. Isabela Bertoglio explica como cada remédio age, o que os estudos mostram, os efeitos colaterais mais comuns, os cuidados com alimentação e músculo e o que acontece quando o tratamento termina. A indicação de qualquer remédio para obesidade depende de avaliação médica individual.',
    pilar: 'canetas-emagrecedoras',
    servico: { href: '/tratamentos/canetas-emagrecedoras', texto: 'Acompanhamento médico com canetas emagrecedoras' },
    posts: [
      'canetas-emagrecedoras', 'tirzepatida', 'tirzepatida-ou-semaglutida', 'mounjaro-efeitos-colaterais',
      'mounjaro-emagrece-quantos-quilos', 'parar-mounjaro', 'mounjaro-e-alcool', 'mounjaro-queda-de-cabelo',
      'ozempic-para-que-serve', 'rosto-de-ozempic', 'semaglutida-generica', 'wegovy', 'wegovy-comprimido',
      'liraglutida', 'retatrutida', 'orforgliprona-foundayo', 'remedios-para-emagrecer', 'inibidor-de-apetite',
      'sibutramina', 'orlistate', 'metformina-emagrece', 'bupropiona-emagrece-contrave',
      'mounjaro-anticoncepcional',
    ],
  },
  {
    slug: 'exames-e-metabolismo',
    nome: 'Exames e saúde metabólica',
    // Página /blog/categoria/exames-e-metabolismo
    titulo: 'Artigos sobre exames e saúde metabólica',
    tituloSeo: 'Exames e saúde metabólica: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre exames e saúde metabólica: glicose, hemoglobina glicada, resistência à insulina, colesterol, triglicérides, fígado e tireoide.',
    intro:
      'Glicose, hemoglobina glicada, colesterol, triglicérides, ácido úrico, ferritina e tireoide ajudam a entender por que o peso aumenta e quais riscos acompanham o excesso de peso. Nestes artigos, a Dra. Isabela Bertoglio explica o que cada exame mostra, os valores de referência, as causas mais comuns de alteração e quando é preciso investigar mais. Os exames são sempre interpretados junto com a história e a avaliação de cada pessoa.',
    pilar: 'exames-para-emagrecer',
    servico: { href: '/tratamentos/sindrome-metabolica', texto: 'Tratamento da síndrome metabólica' },
    posts: [
      'exames-para-emagrecer', 'imc', 'hemoglobina-glicada', 'pre-diabetes', 'resistencia-a-insulina',
      'sindrome-metabolica', 'gordura-no-figado', 'colesterol-alto', 'triglicerides-alto', 'acido-urico-alto',
      'ferritina-alta', 'hipotireoidismo-engorda', 'hipotireoidismo-subclinico',
      'remissao-diabetes-tipo-2',
    ],
  },
  {
    slug: 'vitaminas-e-suplementos',
    nome: 'Vitaminas e suplementos',
    // Página /blog/categoria/vitaminas-e-suplementos
    titulo: 'Artigos sobre vitaminas e suplementos',
    tituloSeo: 'Vitaminas e suplementos: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre vitaminas e suplementos: vitamina D, B12, ferro, magnésio, ômega 3, creatina, colágeno e o que a ciência mostra sobre cada um.',
    intro:
      'Vitamina D, B12, ferro, magnésio, zinco, ômega 3, creatina, colágeno e outros suplementos estão entre as dúvidas mais comuns no consultório. Nestes artigos, a Dra. Isabela Bertoglio explica para que serve cada um, quais sinais podem indicar falta, o que os estudos realmente mostram e quando o suplemento faz sentido. Suplementar sem necessidade pode não trazer benefício e ter riscos: a indicação depende de avaliação e exames.',
    pilar: 'suplementos-para-emagrecer',
    servico: { href: '/tratamentos/cansaco-e-deficiencia-de-vitaminas', texto: 'Investigação de cansaço e falta de vitaminas' },
    posts: [
      'suplementos-para-emagrecer', 'vitamina-d-b12-ferritina', 'vitamina-b12-baixa', 'creatina',
      'omega-3-para-que-serve', 'magnesio-para-que-serve', 'zinco-para-que-serve', 'colageno-para-que-serve',
      'curcuma-para-que-serve', 'coenzima-q10-estatina', 'probioticos-emagrecem', 'melatonina-para-que-serve',
      'berberina-emagrece', 'whey-protein-para-que-serve',
    ],
  },
  {
    slug: 'alimentacao-e-dietas',
    nome: 'Alimentação e dietas',
    // Página /blog/categoria/alimentacao-e-dietas
    titulo: 'Artigos sobre alimentação e dietas',
    tituloSeo: 'Alimentação e dietas: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre alimentação e dietas para emagrecer: déficit calórico, proteína, fibras, low carb, jejum intermitente, adoçantes e efeito sanfona.',
    intro:
      'Low carb, jejum intermitente, dieta anti-inflamatória, déficit calórico, proteína, fibras, glúten, lactose e adoçantes: há muita informação sobre alimentação, e nem toda se aplica a todas as pessoas. Nestes artigos, a Dra. Isabela Bertoglio explica o que os estudos mostram sobre cada estratégia, os cuidados e por que a dieta que funciona é a que cabe na rotina e se mantém ao longo do tempo, sem restrições desnecessárias.',
    pilar: 'reeducacao-alimentar',
    servico: { href: '/tratamentos/obesidade', texto: 'Tratamento da obesidade com acompanhamento médico' },
    posts: [
      'reeducacao-alimentar', 'deficit-calorico', 'proteina-para-emagrecer', 'alimentos-ricos-em-fibras',
      'low-carb', 'jejum-intermitente', 'dieta-anti-inflamatoria', 'adocante-faz-mal', 'dieta-sem-gluten-emagrece',
      'intolerancia-a-lactose', 'o-que-comer-usando-mounjaro', 'efeito-sanfona',
    ],
  },
  {
    slug: 'hormonios-e-fases-da-vida',
    nome: 'Hormônios e fases da vida',
    // Página /blog/categoria/hormonios-e-fases-da-vida
    titulo: 'Artigos sobre hormônios e fases da vida',
    tituloSeo: 'Hormônios e fases da vida: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre hormônios, peso e fases da vida: menopausa, depois dos 40, pós-parto, SOP, anticoncepcional, cortisol e datas especiais.',
    intro:
      'Menopausa, a chegada dos 40, a gestação e o pós-parto, a síndrome dos ovários policísticos, o anticoncepcional e o estresse mudam a forma como o corpo ganha e perde peso. Nestes artigos, a Dra. Isabela Bertoglio explica o que acontece em cada fase, o que os estudos mostram e como ajustar a alimentação, o treino e o tratamento, inclusive na preparação para datas como casamento, festas e Carnaval.',
    pilar: 'emagrecer-na-menopausa',
    servico: { href: '/tratamentos/saude-da-mulher', texto: 'Nutrologia na saúde da mulher' },
    posts: [
      'emagrecer-na-menopausa', 'emagrecer-depois-dos-40', 'emagrecer-depois-da-gravidez', 'sop-emagrecer',
      'anticoncepcional-engorda', 'cortisol-alto-engorda', 'como-nao-engordar-nas-festas',
      'emagrecer-para-o-casamento', 'emagrecer-ate-o-carnaval', 'endometriose-alimentacao',
    ],
  },
  {
    slug: 'composicao-corporal',
    nome: 'Composição corporal',
    // Página /blog/categoria/composicao-corporal
    titulo: 'Artigos sobre composição corporal',
    tituloSeo: 'Composição corporal: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre composição corporal: bioimpedância, massa muscular, sarcopenia, gordura visceral e abdominal, flacidez e retenção de líquido.',
    intro:
      'O número da balança não mostra tudo: duas pessoas com o mesmo peso podem ter quantidades muito diferentes de gordura e músculo. Nestes artigos, a Dra. Isabela Bertoglio explica como a bioimpedância mede a composição do corpo, por que preservar o músculo é essencial ao emagrecer, o que é gordura visceral e abdominal e como lidar com flacidez e retenção de líquido.',
    pilar: 'bioimpedancia',
    servico: { href: '/tecnologias/bioimpedancia-inbody', texto: 'Bioimpedância InBody 380 na avaliação' },
    posts: [
      'bioimpedancia', 'sarcopenia', 'mounjaro-perda-de-massa-muscular', 'gordura-visceral',
      'como-perder-gordura-abdominal', 'flacidez-depois-de-emagrecer', 'unyque-pro-celulite-flacidez',
      'retencao-de-liquido', 'obesidade-e-dor-no-joelho', 'exercicios-baixo-impacto-emagrecer',
      'enzimas-gordura-localizada',
    ],
  },
  {
    slug: 'sono-intestino-comportamento',
    nome: 'Sono, intestino e comportamento',
    // Página /blog/categoria/sono-intestino-comportamento
    titulo: 'Artigos sobre sono, intestino e comportamento',
    tituloSeo: 'Sono, intestino e comportamento: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre sono, intestino e comportamento alimentar: dormir mal, apneia, compulsão, vontade de doce, intestino preso e barriga inchada.',
    intro:
      'Dormir mal, a apneia do sono, a compulsão alimentar, a vontade de doce à noite, o intestino preso e a barriga inchada interferem no apetite, no peso e na qualidade de vida. Nestes artigos, a Dra. Isabela Bertoglio explica as causas mais comuns, quando vale investigar e quais hábitos ajudam, sempre lembrando que alguns sinais pedem avaliação médica.',
    pilar: 'dormir-mal-engorda',
    servico: { href: '/consulta-nutrologia', texto: 'Como funciona a consulta de nutrologia' },
    posts: [
      'dormir-mal-engorda', 'apneia-do-sono-e-obesidade', 'compulsao-alimentar', 'vontade-de-comer-doce-a-noite',
      'intestino-preso', 'barriga-inchada', 'hipoglicemia-reativa',
      'parar-de-fumar-engorda',
    ],
  },
  {
    slug: 'consulta-e-tratamento',
    nome: 'Consulta e tratamento',
    // Página /blog/categoria/consulta-e-tratamento
    titulo: 'Artigos sobre consulta e tratamento',
    tituloSeo: 'Consulta e tratamento: artigos | Dra. Isabela',
    descricao:
      'Artigos sobre consulta e tratamento do peso: o que faz o nutrólogo, emagrecimento com acompanhamento médico, obesidade, plano de saúde e bariátrica.',
    intro:
      'O que faz um nutrólogo, como funciona o emagrecimento com acompanhamento médico, quando a obesidade precisa de tratamento, por que algumas pessoas não conseguem emagrecer, como pedir reembolso ao plano de saúde e o que fazer em caso de reganho depois da bariátrica. Nestes artigos, a Dra. Isabela Bertoglio explica como é o cuidado com o peso do começo à manutenção.',
    pilar: 'emagrecimento-com-acompanhamento-medico',
    servico: { href: '/tratamentos/obesidade', texto: 'Tratamento da obesidade com acompanhamento médico' },
    posts: [
      'emagrecimento-com-acompanhamento-medico', 'obesidade-tratamento', 'nao-consigo-emagrecer',
      'nutrologo-o-que-faz', 'consulta-nutrologia-plano-de-saude', 'reganho-apos-bariatrica',
      'preparo-nutricional-cirurgia-plastica',
      'consulta-nutrologa-online',
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

/** Endereço da página da categoria. */
export const caminhoDaCategoria = (categoria) => `/blog/categoria/${categoria.slug}`;

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
