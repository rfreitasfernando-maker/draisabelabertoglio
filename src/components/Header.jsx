import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ctaDaPagina } from '@/lib/cta';
import { CONSULTORIO_PATH } from '@/lib/location';
import { MENU_TRATAMENTOS, MENU_TECNOLOGIAS, PAGINA_SOBRE, HUB_TRATAMENTOS } from '@/servicos';

// `blog`: fora da página inicial os itens são links para outras páginas (em vez de rolar até as seções)
// e o CTA usa o link e o evento do blog.
// `pagina`: páginas de serviço e do consultório: links como no blog, CTA com o evento do blog e a mensagem do site.
// `atual`: item do menu da página aberta ('blog' ou o caminho da página, sem a barra inicial).
// `simples`: só o logo e o botão de agendar, sem menu (páginas de destino dos anúncios, src/lib/landings.js).
const Header = ({ blog = false, pagina = false, atual, simples = false }) => {
  const cta = ctaDaPagina({ blog, pagina });
  const foraDaHome = blog || pagina;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Submenu aberto no desktop ('tratamentos' | 'tecnologias' | null) e grupos abertos no menu do celular
  const [submenu, setSubmenu] = useState(null);
  const [gruposAbertos, setGruposAbertos] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Esc e clique fora fecham o submenu do desktop
  useEffect(() => {
    if (!submenu) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        const botao = navRef.current?.querySelector(`[data-submenu="${submenu}"]`);
        setSubmenu(null);
        botao?.focus();
      }
    };
    const onClick = (e) => {
      if (!navRef.current?.contains(e.target)) setSubmenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [submenu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const solid = scrolled || isMenuOpen;
  const linkDaSecao = (id) => (id === 'hero' ? '/' : `/#${id}`);

  const itensTratamentos = [
    ...(HUB_TRATAMENTOS ? [{ label: 'Todos os tratamentos', href: '/tratamentos', atual: atual === 'tratamentos' }] : []),
    ...MENU_TRATAMENTOS.map((s) => ({ label: s.nomeCurto, href: `/${s.caminho}`, atual: atual === s.caminho })),
  ];
  const itensTecnologias = MENU_TECNOLOGIAS.map((s) => ({ label: s.nomeCurto, href: `/${s.caminho}`, atual: atual === s.caminho }));

  const navItems = [
    { label: 'Início', secao: 'hero' },
    ...(itensTratamentos.length ? [{ label: 'Tratamentos', grupo: 'tratamentos', itens: itensTratamentos }] : []),
    ...(itensTecnologias.length ? [{ label: 'Tecnologias', grupo: 'tecnologias', itens: itensTecnologias }] : []),
    PAGINA_SOBRE
      ? { label: 'Sobre', href: `/${PAGINA_SOBRE.caminho}`, atual: atual === PAGINA_SOBRE.caminho }
      : { label: 'Sobre', secao: 'about' },
    { label: 'Consultório', href: CONSULTORIO_PATH, atual: atual === CONSULTORIO_PATH.slice(1) },
    { label: 'Blog', href: '/blog', atual: atual === 'blog' },
  ];

  const foco = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold';

  // Links de verdade (<a>) onde há outra página, para o Google seguir; botões para o que acontece nesta página.
  const renderItem = (item, className) => {
    const href = item.href ?? (foraDaHome && item.secao ? linkDaSecao(item.secao) : null);
    if (href) {
      return (
        <a key={item.label} href={href} aria-current={item.atual ? 'page' : undefined} className={`${className} ${foco} ${item.atual ? '!text-brand-gold' : ''}`}>
          {item.label}
        </a>
      );
    }
    return (
      <button key={item.label} type="button" onClick={() => scrollToSection(item.secao)} className={`${className} ${foco}`}>
        {item.label}
      </button>
    );
  };

  const classeDesktop = `flex items-center gap-1.5 text-sm font-sans font-medium tracking-wider xl:tracking-widest uppercase transition-colors duration-300 ${
    solid ? 'text-brand-dark-gray/80 hover:text-brand-gold' : 'text-white/80 hover:text-brand-gold-light'
  }`;

  // Submenu do desktop: os links ficam sempre no HTML (invisíveis quando fechado), abrem com o mouse,
  // com clique/Enter no botão e fecham com Esc.
  const renderGrupoDesktop = (item) => {
    const aberto = submenu === item.grupo;
    const ativo = item.itens.some((i) => i.atual);
    const id = `submenu-${item.grupo}`;
    return (
      <div
        key={item.label}
        className="relative"
        onMouseEnter={() => setSubmenu(item.grupo)}
        onMouseLeave={() => setSubmenu((atualAberto) => (atualAberto === item.grupo ? null : atualAberto))}
      >
        <button
          type="button"
          data-submenu={item.grupo}
          aria-expanded={aberto}
          aria-controls={id}
          // Com o mouse o submenu já abriu ao passar por cima: o clique mantém aberto. Pelo teclado (detail 0), alterna.
          onClick={(e) => setSubmenu(e.detail === 0 && aberto ? null : item.grupo)}
          className={`${classeDesktop} ${foco} ${ativo ? '!text-brand-gold' : ''}`}
        >
          {item.label}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        <div
          id={id}
          className={`absolute left-0 top-full pt-4 transition-opacity duration-200 ${aberto ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
        >
          <ul className="min-w-[17rem] bg-white border border-brand-gold/10 shadow-xl shadow-black/[0.06] py-3">
            {item.itens.map((sub) => (
              <li key={sub.href}>
                <a
                  href={sub.href}
                  aria-current={sub.atual ? 'page' : undefined}
                  className={`block px-5 py-2.5 text-sm font-sans text-brand-dark-gray hover:text-brand-gold hover:bg-brand-cream/60 transition-colors duration-200 ${foco} focus-visible:-outline-offset-2 ${
                    sub.atual ? '!text-brand-gold' : ''
                  }`}
                >
                  {sub.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const classeMobile =
    'flex items-center gap-2 px-2 py-4 min-h-[44px] text-sm font-sans font-medium tracking-widest uppercase text-brand-dark-gray/80 hover:text-brand-gold transition-colors';

  const renderGrupoMobile = (item) => {
    const aberto = Boolean(gruposAbertos[item.grupo]);
    const id = `submenu-mobile-${item.grupo}`;
    return (
      <div key={item.label}>
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={id}
          onClick={() => setGruposAbertos((g) => ({ ...g, [item.grupo]: !aberto }))}
          className={`${classeMobile} ${foco} w-full justify-between`}
        >
          {item.label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        <ul id={id} hidden={!aberto} className="pb-2 pl-4 border-l border-brand-gold/20 ml-2">
          {item.itens.map((sub) => (
            <li key={sub.href}>
              <a
                href={sub.href}
                aria-current={sub.atual ? 'page' : undefined}
                className={`flex items-center px-2 py-3 min-h-[44px] text-sm font-sans text-brand-dark-gray hover:text-brand-gold transition-colors ${foco} ${
                  sub.atual ? '!text-brand-gold' : ''
                }`}
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const logo = (
    <img
      src="/logo-monograma.webp"
      srcSet="/logo-monograma-92.webp 92w, /logo-monograma-118.webp 119w, /logo-monograma.webp 203w"
      sizes="(min-width: 768px) 59px, 46px"
      alt="Clínica Belvitá – logotipo"
      width="203"
      height="192"
      className="h-11 md:h-14 w-auto"
    />
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      solid
        ? 'bg-white/95 backdrop-blur-md border-b border-brand-gold/10 shadow-sm shadow-black/[0.03]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav ref={navRef} aria-label="Menu principal" className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20 md:h-24 gap-6 xl:gap-10">
          {foraDaHome ? (
            <a href="/" className={`flex items-center flex-shrink-0 ${foco}`} aria-label="Clínica Belvitá - página inicial">
              {logo}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className={`flex items-center flex-shrink-0 ${foco}`}
              aria-label="Clínica Belvitá - voltar ao início"
            >
              {logo}
            </button>
          )}

          <div className={`hidden ${simples ? '' : 'lg:flex'} items-center gap-5 xl:gap-8 flex-1`}>
            {navItems.map((item) => (item.grupo ? renderGrupoDesktop(item) : renderItem(item, classeDesktop)))}
          </div>

          <a
            href={cta.href}
            onClick={(e) => cta.rastrear('menu', e)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${simples ? 'block ml-auto' : 'hidden lg:block'} ${foco} text-sm font-sans font-medium tracking-widest uppercase px-5 xl:px-6 py-2.5 transition-all duration-500 flex-shrink-0 ${
              solid
                ? 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white'
                : 'bg-brand-gold text-white hover:bg-white hover:text-brand-dark'
            }`}
          >
            Agendar Consulta
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${simples ? 'hidden' : 'lg:hidden'} ${foco} p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ml-auto ${solid ? 'text-brand-dark-gray hover:text-brand-gold' : 'text-white hover:text-brand-gold-light'}`}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-celular"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div id="menu-celular" className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-brand-gold/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="py-6 flex flex-col gap-1">
              {navItems.map((item) => (item.grupo ? renderGrupoMobile(item) : renderItem(item, classeMobile)))}
              <a
                href={cta.href}
                onClick={(e) => {
                  cta.rastrear('menu_mobile', e);
                  setIsMenuOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-3 ${foco} text-sm font-sans font-medium tracking-widest uppercase border border-brand-gold text-brand-gold px-6 py-4 min-h-[48px] hover:bg-brand-gold hover:text-white transition-all duration-300 text-center`}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
