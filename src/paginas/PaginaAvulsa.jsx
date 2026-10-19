import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS, COMPANY } from '@/lib/doctor';
import { PASTA_IMAGENS } from '@/blog/imagens';
import { formatarData, Trilha } from '@/blog/partes';

const AVATAR = `${PASTA_IMAGENS}/dra-isabela-bertoglio-avatar.webp`;

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

/** Página avulsa da raiz (src/paginas): mesmo visual de um post do blog, sem capa nem data de publicação. */
const PaginaAvulsa = ({ pagina, conteudo }) => (
  <main>
    <article>
      <header className="bg-brand-dark pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Trilha itens={[['Início', '/'], [pagina.nomeCurto]]} />
            <h1 className="text-[2.125rem] md:text-5xl lg:text-[3.5rem] font-serif font-light text-white leading-[1.08]">{pagina.titulo}</h1>
            {pagina.subtitulo && <p className="mt-6 max-w-3xl text-base md:text-lg font-sans font-light text-white/70 leading-relaxed">{pagina.subtitulo}</p>}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 lg:px-8 pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-16">
          <div className="min-w-0 max-w-[42rem]">
            <details className="group lg:hidden mb-10 border-y border-brand-gold/15">
              <summary className="flex items-center justify-between min-h-[52px] cursor-pointer list-none [&::-webkit-details-marker]:hidden text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-dark">
                Nesta página
                <ChevronDown className="w-4 h-4 text-brand-gold transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="pb-5">
                <Indice secoes={conteudo.secoes} />
              </div>
            </details>

            <div className="post-conteudo" dangerouslySetInnerHTML={{ __html: conteudo.html }} />

            {pagina.aviso && (
              <p className="mt-12 pt-6 border-t border-brand-gold/15 text-sm font-sans italic text-brand-light-gray leading-relaxed">{pagina.aviso}</p>
            )}
          </div>

          <aside className="hidden lg:block">
            <nav aria-label="Nesta página" className="sticky top-32">
              <p className="mb-4 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-brand-gold">Nesta página</p>
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
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">Responsável técnica</p>
              <p className="mt-2 text-2xl md:text-3xl font-serif text-brand-dark">{DOCTOR_NAME}</p>
              <p className="mt-1 text-sm text-brand-dark-gray">Médica · Atendimento em Nutrologia</p>
              <p className="mt-3 text-sm text-brand-light-gray leading-relaxed">
                {DOCTOR_CREDENTIALS}
                <br />
                {COMPANY}
              </p>
              <p className="mt-3 text-sm text-brand-light-gray">
                Atualizado em <time dateTime={pagina.atualizadoEm}>{formatarData(pagina.atualizadoEm)}</time>
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
  </main>
);

export default PaginaAvulsa;
