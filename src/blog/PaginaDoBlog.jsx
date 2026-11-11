import React from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { DOCTOR_NAME, DOCTOR_CREDENTIALS } from "@/lib/doctor";
import { WHATSAPP_BLOG_URL } from "@/lib/whatsapp";
import {
  CardDoPost,
  CardMini,
  Trilha,
  CLASSE_SOBRETITULO,
} from "@/blog/partes";
import { CATEGORIAS } from "@/blog/categorias";

// Retrato da Dra. Isabela (tools/hero-foto.cjs). Só no desktop: no celular entra o avatar pequeno.
const RETRATO = "/dra-isabela-blog-v2";
const AVATAR = "/blog/imagens/dra-isabela-bertoglio-avatar.webp";
// GIF transparente de 1 px: no celular a <picture> não baixa o retrato.
const PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

// Guias para quem está começando (posts-pilares)
const PILARES = [
  "emagrecimento-com-acompanhamento-medico",
  "canetas-emagrecedoras",
  "obesidade-tratamento",
  "nao-consigo-emagrecer",
];

// "Qual é a sua dúvida?": atalhos para as páginas de tratamento e da consulta
const DUVIDAS = [
  {
    texto: "Vou usar ou já uso caneta",
    href: "/tratamentos/canetas-emagrecedoras",
  },
  {
    texto: "Meus exames vieram alterados",
    href: "/tratamentos/sindrome-metabolica",
  },
  {
    texto: "Estou na menopausa ou passei dos 40",
    href: "/tratamentos/saude-da-mulher",
  },
  { texto: "Quero saber como é a consulta", href: "/consulta-nutrologia" },
];

const TituloDeSecao = ({ id, sobretitulo, children }) => (
  <div className="mb-8 md:mb-10">
    {sobretitulo && (
      <p className="mb-2 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-brand-gold">
        {sobretitulo}
      </p>
    )}
    <h2
      id={id}
      className="text-3xl md:text-4xl font-serif font-light text-brand-dark leading-tight"
    >
      {children}
    </h2>
  </div>
);

/**
 * /blog: hub de conteúdo. Topo com a Dra. Isabela, barra de categorias, destaques, guias para começar,
 * atalhos por dúvida, uma faixa por categoria (todos os posts continuam com link a partir desta página),
 * calculadora de IMC e chamada final.
 */
const PaginaDoBlog = ({ posts, minutosDe }) => {
  const [recente, ...anteriores] = posts;
  const recentes = anteriores.slice(0, 3);
  const pilares = PILARES.map((slug) =>
    posts.find((p) => p.slug === slug),
  ).filter(Boolean);
  const imc = posts.find((p) => p.slug === "imc");
  // Posts de cada categoria, do mais recente para o mais antigo
  const porCategoria = CATEGORIAS.map((categoria) => ({
    ...categoria,
    lista: posts.filter((p) => categoria.posts.includes(p.slug)),
  }));

  return (
    <main>
      <header className="bg-brand-cream pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:items-end">
            <div>
              <Trilha itens={[["Início", "/"], ["Blog"]]} />
              <p className={`${CLASSE_SOBRETITULO} mb-4 md:mb-5`}>
                Blog · {DOCTOR_NAME}
              </p>
              <h1 className="max-w-3xl text-[2.125rem] md:text-5xl lg:text-6xl font-serif font-light text-brand-dark leading-[1.08]">
                Emagrecimento e{" "}
                <span className="text-brand-gold-light italic">
                  saúde metabólica
                </span>
              </h1>
              <p className="mt-5 md:mt-6 max-w-2xl text-base md:text-lg font-sans font-light text-brand-dark-gray/90 leading-relaxed">
                Artigos da {DOCTOR_NAME} para explicar, sem complicação, como
                funciona o tratamento do excesso de peso: avaliação, composição
                corporal, medicamentos e manutenção.
              </p>
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={AVATAR}
                  alt=""
                  width="128"
                  height="128"
                  className="lg:hidden w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="font-sans leading-snug">
                  <p className="text-sm text-brand-dark-gray">
                    Conteúdo escrito e revisado por{" "}
                    <a
                      href="/dra-isabela-bertoglio"
                      className="font-medium text-brand-dark underline underline-offset-4 decoration-brand-dark/25 hover:text-brand-gold"
                    >
                      médica nutróloga
                    </a>
                  </p>
                  <p className="mt-1 text-[11px] font-medium tracking-[0.12em] uppercase text-brand-light-gray">
                    {DOCTOR_CREDENTIALS}
                  </p>
                </div>
              </div>
            </div>
            <picture className="hidden lg:block">
              <source
                media="(min-width: 1024px)"
                srcSet={`${RETRATO}-360.webp 360w, ${RETRATO}-540.webp 540w, ${RETRATO}-720.webp 720w`}
                sizes="288px"
              />
              <img
                src={PIXEL}
                alt={`${DOCTOR_NAME}, médica nutróloga, no consultório`}
                width="720"
                height="900"
                // eslint-disable-next-line react/no-unknown-property -- o React 18 só repassa este atributo escrito em minúsculas
                fetchpriority="high"
                className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-xl shadow-black/[0.07]"
              />
            </picture>
          </div>
        </div>
      </header>

      {/* Barra de categorias: fica presa logo abaixo do cabeçalho ao rolar; rola na horizontal no celular */}
      <nav
        aria-label="Categorias do blog"
        className="sticky top-20 md:top-24 z-30 bg-white/95 backdrop-blur-md border-y border-brand-gold/10"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-4 md:gap-5">
            {/* Rótulo fixo à esquerda: deixa claro que os chips são clicáveis */}
            <p className="flex-shrink-0 py-3 text-[10px] md:text-[11px] font-sans font-medium tracking-[0.16em] md:tracking-[0.2em] uppercase text-brand-gold leading-tight">
              Leia por
              <br className="md:hidden" /> categoria
            </p>
            <div className="relative flex-1 min-w-0">
              <ul className="flex gap-2 pr-10 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {porCategoria.map((categoria) => (
                  <li key={categoria.slug} className="flex-shrink-0">
                    <a
                      href={`#${categoria.slug}`}
                      className="inline-flex items-center min-h-[40px] px-4 rounded-full border border-brand-gold/25 bg-white text-xs font-sans font-medium text-brand-dark-gray whitespace-nowrap hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                    >
                      {categoria.nome}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Esmaecido à direita: indica que a barra rola para o lado */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Destaques: o mais recente grande e os três seguintes ao lado */}
      <section
        className="bg-white pt-12 md:pt-16 pb-14 md:pb-20"
        aria-labelledby="mais-recentes"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <TituloDeSecao id="mais-recentes" sobretitulo="Novos no blog">
              Artigos mais recentes
            </TituloDeSecao>
            <div className="lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
              <CardDoPost
                post={recente}
                minutos={minutosDe(recente)}
                Titulo="h3"
                principal
              />
              <ul className="mt-12 lg:mt-0 space-y-8 lg:border-l lg:border-brand-gold/15 lg:pl-12">
                {recentes.map((post) => (
                  <li key={post.slug}>
                    <CardMini post={post} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comece por aqui + atalhos por dúvida */}
      <section
        className="bg-brand-cream py-14 md:py-20"
        aria-labelledby="comece-por-aqui"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-16">
            <div>
              <TituloDeSecao id="comece-por-aqui" sobretitulo="Guias">
                Comece por aqui
              </TituloDeSecao>
              <ul className="space-y-7">
                {pilares.map((post) => (
                  <li key={post.slug}>
                    <CardMini post={post} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <TituloDeSecao id="sua-duvida" sobretitulo="Atalhos">
                Qual é a sua dúvida?
              </TituloDeSecao>
              <ul className="grid gap-3">
                {DUVIDAS.map((duvida) => (
                  <li key={duvida.href}>
                    <a
                      href={duvida.href}
                      className="group flex items-center justify-between gap-4 min-h-[64px] px-6 bg-white border border-brand-gold/20 font-serif text-xl text-brand-dark hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                    >
                      {duvida.texto}
                      <ArrowRight
                        className="w-5 h-5 flex-shrink-0 text-brand-gold group-hover:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Uma faixa por categoria: 4 cards e, logo abaixo, links para os demais posts da categoria */}
      <div className="bg-white">
        {porCategoria.map((categoria, i) => (
          <section
            key={categoria.slug}
            className={`py-14 md:py-16 scroll-mt-40 ${i > 0 ? "border-t border-brand-gold/10" : ""}`}
            id={categoria.slug}
            aria-labelledby={`titulo-${categoria.slug}`}
          >
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <TituloDeSecao
                  id={`titulo-${categoria.slug}`}
                  sobretitulo={`${categoria.lista.length} artigos`}
                >
                  {categoria.nome}
                </TituloDeSecao>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                  {categoria.lista.slice(0, 4).map((post) => (
                    <CardDoPost
                      key={post.slug}
                      post={post}
                      minutos={minutosDe(post)}
                      Titulo="h3"
                      compacto
                    />
                  ))}
                </div>
                {categoria.lista.length > 4 && (
                  <div className="mt-10 pt-6 border-t border-brand-gold/10">
                    <p className="mb-3 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-brand-light-gray">
                      Mais artigos
                    </p>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5 font-sans text-sm">
                      {categoria.lista.slice(4).map((post) => (
                        <li key={post.slug}>
                          <a
                            href={`/blog/${post.slug}`}
                            className="text-brand-dark-gray hover:text-brand-gold underline-offset-4 hover:underline"
                          >
                            {post.tituloSocial.replace(/\s*\|\s*SP$/, "")}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Ferramenta: calculadora de IMC */}
      {imc && (
        <section
          className="bg-brand-cream py-12 md:py-14"
          aria-labelledby="calculadora"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <Calculator
                className="w-10 h-10 text-brand-gold flex-shrink-0"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <div className="flex-1">
                <h2
                  id="calculadora"
                  className="text-2xl md:text-3xl font-serif font-light text-brand-dark"
                >
                  Calculadora de IMC e peso ideal
                </h2>
                <p className="mt-2 text-sm md:text-base font-sans font-light text-brand-dark-gray/90">
                  Calcule o seu índice de massa corporal e a faixa de peso
                  saudável para a sua altura, e entenda o que o IMC não mostra.
                </p>
              </div>
              <a
                href="/blog/imc"
                className="group inline-flex items-center justify-center gap-3 min-h-[52px] px-7 bg-brand-gold text-white text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-colors duration-300"
              >
                Calcular meu IMC
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Chamada final, discreta */}
      <section className="bg-white py-14 md:py-20" aria-labelledby="agendar">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="agendar"
              className="text-3xl md:text-4xl font-serif font-light text-brand-dark"
            >
              Quer conversar sobre o seu caso?
            </h2>
            <p className="mt-4 text-base font-sans font-light text-brand-dark-gray/90 leading-relaxed">
              A {DOCTOR_NAME} atende na Clínica Belvitá, no Paraíso, em São
              Paulo, com avaliação médica, exames e bioimpedância InBody 380.
            </p>
            <a
              href={WHATSAPP_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp="blog_lista"
              className="mt-8 inline-flex items-center justify-center min-h-[52px] px-8 border border-brand-gold text-brand-gold text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-white transition-colors duration-300"
            >
              Agendar consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaginaDoBlog;
