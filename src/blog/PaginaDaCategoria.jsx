import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DOCTOR_CREDENTIALS } from '@/lib/doctor';
import { WHATSAPP_BLOG_URL } from '@/lib/whatsapp';
import { CardDoPost, Trilha, CLASSE_SOBRETITULO } from '@/blog/partes';
import { CATEGORIAS, caminhoDaCategoria, tituloDoCard } from '@/blog/categorias';

const AVATAR = '/blog/imagens/dra-isabela-bertoglio-avatar.webp';

/**
 * /blog/categoria/<slug>: todos os posts de uma categoria, do mais recente para o mais antigo.
 * Título informativo ("Artigos sobre…") e link destacado para a página de tratamento do tema,
 * para não disputar a mesma busca com ela.
 */
const PaginaDaCategoria = ({ categoria, posts, minutosDe }) => {
  const pilar = posts.find((p) => p.slug === categoria.pilar);

  return (
    <main>
      <header className="bg-brand-cream pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Trilha itens={[['Início', '/'], ['Blog', '/blog'], [categoria.nome]]} />
            <p className={`${CLASSE_SOBRETITULO} mb-4 md:mb-5`}>
              Blog · {posts.length} artigos
            </p>
            <h1 className="max-w-4xl text-[2.125rem] md:text-5xl lg:text-[3.5rem] font-serif font-light text-brand-dark leading-[1.08]">
              {categoria.titulo}
            </h1>
            <p className="mt-5 md:mt-6 max-w-3xl text-base md:text-lg font-sans font-light text-brand-dark-gray/90 leading-relaxed">{categoria.intro}</p>
            <div className="mt-7 flex items-center gap-4">
              <img src={AVATAR} alt="" width="128" height="128" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <div className="font-sans leading-snug">
                <p className="text-sm text-brand-dark-gray">
                  Conteúdo escrito e revisado por{' '}
                  <a href="/dra-isabela-bertoglio" className="font-medium text-brand-dark underline underline-offset-4 decoration-brand-dark/25 hover:text-brand-gold">
                    médica nutróloga
                  </a>
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-[0.12em] uppercase text-brand-light-gray">{DOCTOR_CREDENTIALS}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {pilar && (
                <a
                  href={`/blog/${pilar.slug}`}
                  className="group inline-flex items-center justify-between gap-4 min-h-[56px] px-5 bg-white border border-brand-gold/25 hover:border-brand-gold transition-colors duration-300"
                >
                  <span className="font-sans">
                    <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-brand-gold">Comece pelo guia</span>
                    <span className="block text-sm text-brand-dark">{tituloDoCard(pilar)}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 text-brand-gold group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </a>
              )}
              <a
                href={categoria.servico.href}
                className="group inline-flex items-center justify-between gap-4 min-h-[56px] px-5 bg-white border border-brand-gold/25 hover:border-brand-gold transition-colors duration-300"
              >
                <span className="font-sans">
                  <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-brand-gold">Tratamento</span>
                  <span className="block text-sm text-brand-dark">{categoria.servico.texto}</span>
                </span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 text-brand-gold group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white py-12 md:py-16" aria-label={`Artigos: ${categoria.nome}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {posts.map((post, i) => (
              <CardDoPost key={post.slug} post={post} minutos={minutosDe(post)} Titulo="h2" compacto primeiro={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Outras categorias */}
      <nav aria-labelledby="outras-categorias" className="bg-brand-cream py-12 md:py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 id="outras-categorias" className="mb-6 text-2xl md:text-3xl font-serif font-light text-brand-dark">
              Outras categorias
            </h2>
            <ul className="flex flex-wrap gap-2">
              {CATEGORIAS.filter((c) => c.slug !== categoria.slug).map((c) => (
                <li key={c.slug}>
                  <a
                    href={caminhoDaCategoria(c)}
                    className="inline-flex items-center min-h-[40px] px-4 rounded-full border border-brand-gold/25 bg-white text-xs font-sans font-medium text-brand-dark-gray hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                  >
                    {c.nome}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/blog"
                  className="inline-flex items-center min-h-[40px] px-4 rounded-full border border-brand-gold bg-brand-gold text-xs font-sans font-medium text-white hover:bg-brand-dark hover:border-brand-dark transition-colors duration-300"
                >
                  Todos os artigos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-white py-14 md:py-16" aria-labelledby="agendar">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="agendar" className="text-3xl md:text-4xl font-serif font-light text-brand-dark">
              Quer conversar sobre o seu caso?
            </h2>
            <a
              href={WHATSAPP_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp="blog_categoria"
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

export default PaginaDaCategoria;
