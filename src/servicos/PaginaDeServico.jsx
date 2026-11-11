import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { DOCTOR_NAME } from '@/lib/doctor';
import { ADDRESS, CLINIC_NAME, CONSULTORIO_PATH, HOURS, MAP_EMBED_URL, PHONE } from '@/lib/location';
import { PASTA_IMAGENS } from '@/blog/imagens';
import { Trilha } from '@/blog/partes';
import { PAGINA_SOBRE } from '@/servicos';

const AVATAR = `${PASTA_IMAGENS}/dra-isabela-bertoglio-avatar.webp`;
// Registros: toda página que diz "nutróloga" mostra CRM e RQEs (publicidade médica).
const REGISTROS = 'CRM-SP 194436 · RQE 84645 · RQE 86835';
const FORMACAO = 'Doutorado pela USP | Nutrologia Clínica — Hospital Israelita Albert Einstein';

/** Trilha visível: Início › Tratamentos › X (tratamentos) ou Início › X (tecnologias e institucionais). */
export const itensDaTrilha = (servico) => {
  if (servico.grupo === 'hub') return [['Início', '/'], [servico.nomeCurto]];
  if (servico.grupo === 'tratamentos') return [['Início', '/'], ['Tratamentos', '/tratamentos'], [servico.nomeCurto]];
  return [['Início', '/'], [servico.nomeCurto]];
};

const BotaoTopo = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-whatsapp="servico_topo"
    className="mt-8 inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-4 bg-brand-gold text-white text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
  >
    <MessageCircle className="w-4 h-4" aria-hidden="true" />
    Agendar avaliação pelo WhatsApp
  </a>
);

const Topo = ({ servico, conteudo, linkWhatsapp }) => (
  <header className="bg-brand-cream pt-28 md:pt-36 pb-14 md:pb-20">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Trilha itens={itensDaTrilha(servico)} />
        <h1 className="text-[2.125rem] md:text-5xl lg:text-[3.5rem] font-serif font-light text-brand-dark leading-[1.08]">{conteudo.h1}</h1>
        {conteudo.subtitulo && (
          <p
            className="mt-6 max-w-3xl text-lg md:text-xl font-serif font-light text-brand-gold leading-snug"
            dangerouslySetInnerHTML={{ __html: conteudo.subtitulo }}
          />
        )}
        {conteudo.abertura && (
          <div className="servico-abertura mt-6 max-w-3xl text-base md:text-lg font-sans font-light text-brand-dark-gray/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: conteudo.abertura }} />
        )}
        {conteudo.botaoTopo && <BotaoTopo href={linkWhatsapp} />}
      </div>
    </div>
  </header>
);

/** Bloco da autora: foto, nome, especialidade com CRM e RQEs, formação e a data da revisão. */
export const BlocoAutora = ({ revisadoEm }) => (
  <section aria-label="Sobre a autora" className="bg-white border-t border-brand-gold/15">
    <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-8">
        <img src={AVATAR} alt={DOCTOR_NAME} width="128" height="128" loading="lazy" decoding="async" className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
        <div className="font-sans">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">Conteúdo revisado por</p>
          <p className="mt-2 text-2xl md:text-3xl font-serif text-brand-dark">{DOCTOR_NAME}</p>
          <p className="mt-1 text-sm text-brand-dark-gray">Médica nutróloga · {REGISTROS}</p>
          <p className="mt-3 text-sm text-brand-light-gray leading-relaxed">{FORMACAO}</p>
          <p className="mt-3 text-sm text-brand-light-gray">
            Revisado por {DOCTOR_NAME} em <time dateTime={revisadoEm}>{revisadoEm.split('-').reverse().join('/')}</time>
          </p>
          <a
            href={PAGINA_SOBRE ? `/${PAGINA_SOBRE.caminho}` : '/#about'}
            className="group mt-5 inline-flex items-center gap-2 min-h-[44px] text-xs font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-dark transition-colors duration-300"
          >
            Conheça a Dra. Isabela
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/** Bloco local: o mesmo NAP do schema e do rodapé, horário, mapa e o link para a página do consultório. */
const BlocoLocal = ({ linkWhatsapp }) => (
  <section aria-labelledby="onde-atendemos" className="bg-brand-cream/50 border-t border-brand-gold/10">
    <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:items-start">
        <div className="font-sans">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold">Localização</p>
          <h2 id="onde-atendemos" className="mt-3 text-3xl font-serif font-light text-brand-dark">
            Onde atendemos
          </h2>
          <address className="mt-5 not-italic text-base font-light text-brand-dark-gray leading-relaxed">
            <strong className="block font-medium text-brand-dark">{CLINIC_NAME}</strong>
            {ADDRESS}
            <br />
            {HOURS}
            <br />
            Estacionamento conveniado com manobrista
            <br />
            <a
              href={linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp="servico_local"
              className="inline-block py-2 underline underline-offset-4 decoration-brand-gold/40 hover:text-brand-gold"
            >
              Telefone e WhatsApp: {PHONE}
            </a>
          </address>
          <a
            href={CONSULTORIO_PATH}
            className="group mt-4 inline-flex items-center gap-2 min-h-[44px] text-xs font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-dark transition-colors duration-300"
          >
            como chegar ao consultório no Paraíso
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </a>
        </div>
        <div className="h-72 md:h-80 overflow-hidden border border-brand-gold/10 bg-white">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Clínica Belvitá no Paraíso, São Paulo"
          />
        </div>
      </div>
    </div>
  </section>
);

const Aviso = ({ texto }) =>
  texto && (
    <div className="container mx-auto px-6 lg:px-8 pb-14 md:pb-16">
      <p className="max-w-4xl mx-auto pt-6 border-t border-brand-gold/15 text-sm font-sans italic text-brand-light-gray leading-relaxed">{texto}</p>
    </div>
  );

/** Página de serviço. Renderizada só no servidor: o texto chega pronto no HTML. */
const PaginaDeServico = ({ servico, conteudo, linkWhatsapp }) => (
  <main>
    <article>
      <Topo servico={servico} conteudo={conteudo} linkWhatsapp={linkWhatsapp} />

      <div className="container mx-auto px-6 lg:px-8 pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-[42rem] mx-auto">
          {servico.grupo === 'hub' ? (
            <>
              <ul className="grid gap-6 sm:grid-cols-2 mb-14">
                {conteudo.cards.map((card) => (
                  <li key={card.href} className="bg-brand-cream/60 border-t-2 border-brand-gold p-6">
                    <h2 className="text-2xl font-serif font-light text-brand-dark leading-snug">
                      {card.publicado ? (
                        <a href={card.href} className="hover:text-brand-gold transition-colors duration-300">
                          {card.titulo}
                        </a>
                      ) : (
                        card.titulo
                      )}
                    </h2>
                    <p className="mt-3 text-sm font-sans font-light text-brand-dark-gray leading-relaxed" dangerouslySetInnerHTML={{ __html: card.resumo }} />
                    {card.publicado && (
                      <a
                        href={card.href}
                        aria-label={`Ver o tratamento: ${card.titulo}`}
                        className="group mt-4 inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-dark transition-colors duration-300"
                      >
                        Ver tratamento
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="post-conteudo" dangerouslySetInnerHTML={{ __html: conteudo.html }} />
            </>
          ) : (
            <div className="post-conteudo" dangerouslySetInnerHTML={{ __html: conteudo.html }} />
          )}
        </div>
      </div>

      {conteudo.temAutora && <BlocoAutora revisadoEm={servico.revisadoEm} />}
      {conteudo.temLocal && <BlocoLocal linkWhatsapp={linkWhatsapp} />}
      <Aviso texto={conteudo.aviso} />
    </article>
  </main>
);

export default PaginaDeServico;
