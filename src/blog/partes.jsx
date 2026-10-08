import React from 'react';
import { ArrowRight } from 'lucide-react';
import { capaDoPost, TAMANHOS_CARD } from '@/blog/imagens';

const FORMATO_DATA = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "2026-10-08" → "8 de outubro de 2026" */
export const formatarData = (iso) => FORMATO_DATA.format(new Date(`${iso}T00:00:00Z`));

// Mesmo dourado claro do sobretítulo do hero da página inicial
export const CLASSE_SOBRETITULO =
  'text-[10px] md:text-xs font-sans font-medium tracking-[0.14em] md:tracking-[0.25em] uppercase text-[color-mix(in_srgb,theme(colors.brand-gold)_85%,white)]';

export const Trilha = ({ itens }) => (
  <nav aria-label="Trilha de navegação" className="mb-8 md:mb-10">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-white/50">
      {itens.map(([nome, href], i) => (
        <React.Fragment key={nome}>
          {i > 0 && <li aria-hidden="true">/</li>}
          <li>
            {href ? (
              <a href={href} className="hover:text-brand-gold transition-colors duration-300">
                {nome}
              </a>
            ) : (
              <span aria-current="page">{nome}</span>
            )}
          </li>
        </React.Fragment>
      ))}
    </ol>
  </nav>
);

/**
 * Card de um post na lista do blog e em "Leia também".
 * `destaque`: imagem e texto lado a lado no desktop (post mais recente na lista).
 */
export const CardDoPost = ({ post, minutos, Titulo = 'h2', destaque = false }) => {
  const capa = capaDoPost(post);
  return (
    <a href={`/blog/${post.slug}`} className={`group block ${destaque ? 'md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:items-center' : ''}`}>
      <div className="aspect-[1200/630] overflow-hidden bg-brand-warm">
        <img
          src={capa.src}
          srcSet={capa.srcSet}
          sizes={destaque ? '(min-width: 1088px) 600px, (min-width: 768px) 60vw, 100vw' : TAMANHOS_CARD}
          width={post.capa.largura}
          height={post.capa.altura}
          alt={post.capa.alt}
          // O card em destaque fica na primeira dobra da lista: carrega já; os demais, só ao chegar perto.
          loading={destaque ? 'eager' : 'lazy'}
          // eslint-disable-next-line react/no-unknown-property -- o React 18 só repassa este atributo escrito em minúsculas
          fetchpriority={destaque ? 'high' : undefined}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div>
        <p className={`mt-5 ${destaque ? 'md:mt-0' : ''} text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-brand-light-gray`}>
          <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time> · {minutos} min de leitura
        </p>
        <Titulo
          className={`mt-2 font-serif text-brand-dark leading-snug group-hover:text-brand-gold transition-colors duration-300 ${
            destaque ? 'text-3xl md:text-4xl font-light' : 'text-2xl'
          }`}
        >
          {post.titulo}
        </Titulo>
        <p className="mt-3 text-sm md:text-base font-sans font-light text-brand-light-gray leading-relaxed">{post.descricaoSocial}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-gold">
          Ler artigo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
};
