import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS } from '@/lib/doctor';
import { capaDoPost, PASTA_IMAGENS, TAMANHOS_CAPA } from '@/blog/imagens';
import { formatarData, CardDoPost, Trilha, CLASSE_SOBRETITULO } from '@/blog/partes';

const AVATAR = `${PASTA_IMAGENS}/dra-isabela-bertoglio-avatar.webp`;

// Aviso padrão ao fim do post; um post pode trazer o seu em `aviso` (src/blog/posts/index.js).
const AVISO =
  'Este conteúdo tem caráter exclusivamente informativo e educativo. Não substitui consulta médica. Todo tratamento, inclusive medicamentoso, envolve riscos, e a indicação depende de avaliação individual com médico.';

const Indice = ({ secoes }) => (
  <ol className="space-y-3 font-sans">
    {secoes.map((secao) => (
      <li key={secao.id}>
        <a href={`#${secao.id}`} className="block text-sm leading-snug text-brand-light-gray hover:text-brand-gold transition-colors duration-300">
          {secao.titulo}
        </a>
      </li>
    ))}
  </ol>
);

/** Página de um post. Renderizada só no servidor: o texto chega pronto no HTML e não vai para o JavaScript. */
const PaginaDoPost = ({ post, conteudo, outros, minutosDe }) => {
  const capa = capaDoPost(post);

  return (
    <main>
      <article>
        {/* Topo escuro, como o hero da página inicial; a capa sobe por cima da borda */}
        <header className="bg-brand-dark pt-28 md:pt-36 pb-24 md:pb-36">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Trilha itens={[['Início', '/'], ['Blog', '/blog']]} />
              <p className={`${CLASSE_SOBRETITULO} mb-4 md:mb-5`}>
                <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time> · {conteudo.minutosDeLeitura} min de leitura
              </p>
              <h1 className="text-[2.125rem] md:text-5xl lg:text-[3.5rem] font-serif font-light text-white leading-[1.08]">{post.titulo}</h1>
              <div className="mt-8 flex items-center gap-4">
                <img src={AVATAR} alt="" width="128" height="128" className="w-12 h-12 rounded-full object-cover ring-1 ring-brand-gold/40" />
                <div className="font-sans leading-snug">
                  <p className="text-sm text-white/80">
                    Por{' '}
                    <a href="/#about" className="font-medium text-white hover:text-brand-gold transition-colors duration-300">
                      {DOCTOR_NAME}
                    </a>
                  </p>
                  <p className="mt-1 text-[11px] font-medium tracking-[0.12em] uppercase text-white/50">{DOCTOR_CREDENTIALS}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 lg:px-8 -mt-16 md:-mt-24">
          <figure className="max-w-5xl mx-auto">
            <img
              src={capa.src}
              srcSet={capa.srcSet}
              sizes={TAMANHOS_CAPA}
              width={post.capa.largura}
              height={post.capa.altura}
              alt={post.capa.alt}
              // eslint-disable-next-line react/no-unknown-property -- o React 18 só repassa este atributo escrito em minúsculas
              fetchpriority="high"
              decoding="async"
              className="w-full h-auto bg-brand-warm shadow-2xl shadow-black/10"
            />
            {post.capa.legenda && (
              <figcaption className="mt-2 text-right text-[11px] font-sans text-brand-light-gray">{post.capa.legenda}</figcaption>
            )}
          </figure>
        </div>

        <div className="container mx-auto px-6 lg:px-8 pt-10 md:pt-14 pb-14 md:pb-20">
          <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-16">
            <div className="min-w-0 max-w-[42rem]">
              {/* Celular e tablet: índice recolhido antes do texto. Desktop: índice fixo na lateral. */}
              <details className="group lg:hidden mb-10 border-y border-brand-gold/15">
                <summary className="flex items-center justify-between min-h-[52px] cursor-pointer list-none [&::-webkit-details-marker]:hidden text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-dark">
                  Neste artigo
                  <ChevronDown className="w-4 h-4 text-brand-gold transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="pb-5">
                  <Indice secoes={conteudo.secoes} />
                </div>
              </details>

              <div className="post-conteudo" dangerouslySetInnerHTML={{ __html: conteudo.html }} />

              <p className="mt-12 pt-6 border-t border-brand-gold/15 text-sm font-sans italic text-brand-light-gray leading-relaxed">{post.aviso ?? AVISO}</p>
            </div>

            <aside className="hidden lg:block">
              <nav aria-label="Neste artigo" className="sticky top-32">
                <p className="mb-4 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-brand-gold">Neste artigo</p>
                <Indice secoes={conteudo.secoes} />
              </nav>
            </aside>
          </div>
        </div>

        <footer className="bg-white border-t border-brand-gold/15">
          <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-8">
              <img src={AVATAR} alt={DOCTOR_NAME} width="128" height="128" loading="lazy" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div className="font-sans">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">Escrito por</p>
                <p className="mt-2 text-2xl md:text-3xl font-serif text-brand-dark">{DOCTOR_NAME}</p>
                <p className="mt-1 text-sm text-brand-dark-gray">Médica · Atendimento em Nutrologia</p>
                <p className="mt-3 text-sm text-brand-light-gray leading-relaxed">
                  {DOCTOR_CREDENTIALS}
                  <br />
                  Doutorado pela USP · Nutrologia Clínica – Hospital Israelita Albert Einstein
                </p>
                <p className="mt-3 text-sm text-brand-light-gray">
                  Publicado em <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time> · Última atualização em{' '}
                  <time dateTime={post.atualizadoEm}>{formatarData(post.atualizadoEm)}</time>
                </p>
                <a
                  href="/#about"
                  className="group mt-5 inline-flex items-center gap-2 min-h-[44px] text-xs font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-dark transition-colors duration-300"
                >
                  Conheça a Dra. Isabela
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </article>

      {outros.length > 0 && (
        <section className="bg-white py-14 md:py-20" aria-labelledby="leia-tambem">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 id="leia-tambem" className="mb-10 text-3xl md:text-4xl font-serif font-light text-brand-dark">
                Leia também
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                {outros.map((outro) => (
                  <CardDoPost key={outro.slug} post={outro} minutos={minutosDe(outro)} Titulo="h3" />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default PaginaDoPost;
