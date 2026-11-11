import React from 'react';
import { ArrowRight } from 'lucide-react';
import { capaDoPost, TAMANHOS_CARD } from '@/blog/imagens';
import { categoriaDoPost, tituloDoCard } from '@/blog/categorias';

const FORMATO_DATA = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "2026-10-08" → "8 de outubro de 2026" */
export const formatarData = (iso) => FORMATO_DATA.format(new Date(`${iso}T00:00:00Z`));

// Mesmo dourado do sobretítulo do hero da página inicial (topo claro)
export const CLASSE_SOBRETITULO =
  'text-[10px] md:text-xs font-sans font-medium tracking-[0.14em] md:tracking-[0.25em] uppercase text-brand-gold';

export const Trilha = ({ itens }) => (
  <nav aria-label="Trilha de navegação" className="mb-8 md:mb-10">
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-brand-light-gray">
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
 * `destaque`: imagem e texto lado a lado no desktop. `principal`: card grande do topo do /blog (carrega a imagem já).
 * `compacto`: título menor, para as faixas de 4 cards por categoria.
 */
export const CardDoPost = ({ post, minutos, Titulo = 'h2', destaque = false, principal = false, compacto = false }) => {
  const prioridade = destaque || principal;
  const capa = capaDoPost(post);
  return (
    <a href={`/blog/${post.slug}`} className={`group block ${destaque ? 'md:grid md:grid-cols-[3fr_2fr] md:gap-12 md:items-center' : ''}`}>
      <div className="aspect-[1200/630] overflow-hidden bg-brand-warm">
        <img
          src={capa.src}
          srcSet={capa.srcSet}
          sizes={destaque || principal ? '(min-width: 1088px) 600px, (min-width: 768px) 60vw, 100vw' : compacto ? '(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw' : TAMANHOS_CARD}
          width={post.capa.largura}
          height={post.capa.altura}
          alt={post.capa.alt}
          // O card em destaque fica na primeira dobra da lista: carrega já; os demais, só ao chegar perto.
          loading={prioridade ? 'eager' : 'lazy'}
          // eslint-disable-next-line react/no-unknown-property -- o React 18 só repassa este atributo escrito em minúsculas
          fetchpriority={prioridade ? 'high' : undefined}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div>
        {/* Nas faixas por categoria (compacto) o nome da categoria já está no título da faixa */}
        {!compacto && (
          <p className={`mt-5 ${destaque ? 'md:mt-0' : ''} text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-brand-gold`}>
            {categoriaDoPost(post).nome}
          </p>
        )}
        <p className={`${compacto ? 'mt-4' : 'mt-1.5'} text-[11px] font-sans font-medium tracking-[0.1em] uppercase text-brand-light-gray`}>
          <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time> · {minutos} min de leitura
        </p>
        <Titulo
          className={`mt-2 font-serif text-brand-dark leading-snug line-clamp-3 group-hover:text-brand-gold transition-colors duration-300 ${
            destaque || principal ? 'text-3xl md:text-4xl font-light' : compacto ? 'text-xl' : 'text-2xl'
          }`}
        >
          {tituloDoCard(post)}
        </Titulo>
        <p className="mt-3 text-sm md:text-base font-sans font-light text-brand-light-gray leading-relaxed line-clamp-2">{post.descricaoSocial}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-gold">
          Ler artigo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
};

/** Card compacto (miniatura + categoria + título), para listas laterais do /blog. */
export const CardMini = ({ post, Titulo = 'h3' }) => {
  const capa = capaDoPost(post);
  return (
    <a href={`/blog/${post.slug}`} className="group grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 items-center">
      <div className="aspect-[1200/630] overflow-hidden bg-brand-warm">
        <img
          src={capa.src}
          srcSet={capa.srcSet}
          sizes="120px"
          width={post.capa.largura}
          height={post.capa.altura}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-sans font-medium tracking-[0.16em] uppercase text-brand-gold">{categoriaDoPost(post).nome}</p>
        <Titulo className="mt-1 font-serif text-lg leading-snug text-brand-dark line-clamp-3 group-hover:text-brand-gold transition-colors duration-300">
          {tituloDoCard(post)}
        </Titulo>
      </div>
    </a>
  );
};
