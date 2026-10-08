import React from 'react';
import { DOCTOR_NAME } from '@/lib/doctor';
import { CardDoPost, Trilha, CLASSE_SOBRETITULO } from '@/blog/partes';

/** Lista de posts (/blog): o mais recente em destaque, os demais em grade. */
const PaginaDoBlog = ({ posts, minutosDe }) => {
  const [recente, ...anteriores] = posts;

  return (
    <main>
      <header className="bg-brand-dark pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Trilha itens={[['Início', '/'], ['Blog']]} />
            <p className={`${CLASSE_SOBRETITULO} mb-4 md:mb-5`}>Blog · {DOCTOR_NAME}</p>
            <h1 className="max-w-3xl text-[2.125rem] md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.08]">
              Emagrecimento e <span className="text-brand-gold italic">saúde metabólica</span>
            </h1>
            <p className="mt-5 md:mt-6 max-w-2xl text-base md:text-lg font-sans font-light text-white/70 leading-relaxed">
              Artigos da {DOCTOR_NAME} para explicar, sem complicação, como funciona o tratamento do excesso de peso: avaliação,
              composição corporal, medicamentos e manutenção.
            </p>
          </div>
        </div>
      </header>

      <section className="bg-white py-12 md:py-20" aria-label="Artigos">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <CardDoPost post={recente} minutos={minutosDe(recente)} destaque />

            {anteriores.length > 0 && (
              <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-brand-gold/15 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                {anteriores.map((post) => (
                  <CardDoPost key={post.slug} post={post} minutos={minutosDe(post)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaginaDoBlog;
