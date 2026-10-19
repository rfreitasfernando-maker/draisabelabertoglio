// Páginas avulsas na raiz do site (fora de /blog), montadas com o mesmo modelo e o mesmo código do blog
// (blog.html, src/blog/render.jsx). O texto de cada uma fica em ./<slug>.html, no mesmo formato dos posts.
export const PAGINAS = [
  {
    slug: 'medico-para-emagrecer-paraiso',
    // Página de SEO local: o consultório, como chegar e o atendimento.
    titulo: 'Médico para emagrecer no Paraíso, perto da Bela Vista e da Avenida Paulista',
    subtitulo:
      'Atendimento em nutrologia e emagrecimento · Pacientes do Paraíso, Bela Vista, Vila Mariana, Aclimação, Liberdade e região da Avenida Paulista',
    // Nome curto na trilha de navegação e no menu
    nomeCurto: 'Consultório no Paraíso',
    tituloSeo: 'Médico para emagrecer no Paraíso, perto da Paulista | SP',
    descricao:
      'Médico para emagrecer no Paraíso, perto da Av. Paulista, do HCor e do Shopping Pátio Paulista. Estacionamento conveniado com manobrista e bioimpedância inclusa.',
    tituloSocial: 'Médico para emagrecer no Paraíso, perto da Paulista',
    descricaoSocial:
      'Consultório da Dra. Isabela Bertoglio no Paraíso: perto do metrô, com estacionamento conveniado com manobrista e bioimpedância inclusa. Segunda a sexta, 8h às 18h.',
    atualizadoEm: '2026-10-19',
    imagemSocial: { src: '/emagrecimento-acompanhamento-medico-sao-paulo-og.jpg', alt: 'Dra. Isabela Bertoglio em seu consultório, ao lado do símbolo da Clínica Belvitá' },
    mensagemWhatsapp: 'Olá! Vim pela página do consultório no Paraíso e gostaria de agendar uma avaliação com a Dra. Isabela.',
    aviso:
      'Este conteúdo tem caráter informativo. Não substitui consulta médica. A indicação de qualquer tratamento depende de avaliação individual, e os resultados variam de pessoa para pessoa.',
  },
];
