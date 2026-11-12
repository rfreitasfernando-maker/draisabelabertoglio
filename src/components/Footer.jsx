import React from 'react';
import { DOCTOR_NAME, COMPANY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/lib/doctor';
import { ADDRESS, CLINIC_NAME, CONSULTORIO_PATH, HOURS, PHONE } from '@/lib/location';
import { MENU_TRATAMENTOS, MENU_TECNOLOGIAS, PAGINA_SOBRE, PAGINA_CONSULTA, HUB_TRATAMENTOS } from '@/servicos';

const classeLink =
  'inline-flex items-center min-h-[36px] text-sm font-sans font-light text-brand-dark-gray/80 hover:text-brand-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold';
const classeTitulo = 'mb-3 text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-gold';

const Coluna = ({ titulo, itens }) =>
  itens.length > 0 && (
    <div>
      <p className={classeTitulo}>{titulo}</p>
      <ul className="space-y-0.5">
        {itens.map(([rotulo, href]) => (
          <li key={href}>
            <a href={href} className={classeLink}>
              {rotulo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

const Footer = () => {
  const tratamentos = [
    ...(HUB_TRATAMENTOS ? [['Todos os tratamentos', '/tratamentos']] : []),
    ...MENU_TRATAMENTOS.map((s) => [s.nomeCurto, `/${s.caminho}`]),
  ];
  const tecnologias = MENU_TECNOLOGIAS.map((s) => [s.nomeCurto, `/${s.caminho}`]);
  const institucional = [
    ...(PAGINA_SOBRE ? [[PAGINA_SOBRE.rotuloNoRodape ?? PAGINA_SOBRE.nomeCurto, `/${PAGINA_SOBRE.caminho}`]] : []),
    ...(PAGINA_CONSULTA ? [[PAGINA_CONSULTA.nomeCurto, `/${PAGINA_CONSULTA.caminho}`]] : []),
    ['Consultório no Paraíso', CONSULTORIO_PATH],
    ['Blog', '/blog'],
  ];

  return (
    <footer className="relative z-10 w-full bg-brand-cream pt-14 pb-28 md:pb-12 border-t border-brand-gold/10">
      <div className="container mx-auto px-6 lg:px-8">
        <nav aria-label="Rodapé" className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <Coluna titulo="Tratamentos" itens={tratamentos} />
          <Coluna titulo="Tecnologias" itens={tecnologias} />
          <Coluna titulo="A clínica" itens={institucional} />
          <div>
            <p className={classeTitulo}>Onde atendemos</p>
            <address className="not-italic text-sm font-sans font-light text-brand-dark-gray/80 leading-relaxed space-y-1.5">
              <span className="block font-medium text-brand-dark-gray">{CLINIC_NAME}</span>
              <a href={CONSULTORIO_PATH} className="block underline underline-offset-4 decoration-brand-gold/30 hover:text-brand-gold transition-colors duration-300">
                {ADDRESS}
              </a>
              <span className="block">{HOURS}</span>
              <span className="block">Telefone e WhatsApp: {PHONE}</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${INSTAGRAM_HANDLE}, da ${DOCTOR_NAME} (abre em nova aba)`}
                // after: amplia a área de toque para ~47 px de altura sem mexer no layout
                className="relative block after:absolute after:inset-x-0 after:-inset-y-3 after:content-[''] hover:text-brand-gold transition-colors duration-300"
              >
                Instagram {INSTAGRAM_HANDLE}
              </a>
            </address>
          </div>
        </nav>

        <div className="mt-12 pt-8 border-t border-brand-gold/15 flex flex-col items-center gap-4 text-center">
          <img
            src="/logo-belvita.webp"
            srcSet="/logo-belvita-200.webp 200w, /logo-belvita.webp 640w"
            sizes="91px"
            alt="Clínica Belvitá"
            width="640"
            height="451"
            className="h-14 w-auto opacity-80"
            loading="lazy"
          />
          <div className="space-y-1.5 text-xs font-sans font-light text-brand-dark-gray/80 leading-relaxed">
            <p>
              Responsável técnica: <span className="font-medium text-brand-dark-gray/80">{DOCTOR_NAME}</span> — Médica nutróloga | CRM-SP&nbsp;194436 |
              RQE&nbsp;84645 | RQE&nbsp;86835
            </p>
            <p>{COMPANY}</p>
          </div>
          <p className="text-[10px] font-sans font-light tracking-[0.2em] uppercase text-brand-dark-gray/70">
            © 2026 {DOCTOR_NAME} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
