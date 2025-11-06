import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'servizi', 'portfolio', 'about'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      role="banner"
      aria-label="Main navigation"
      className={`sticky top-0 w-full z-40 transition-all duration-500 ${
      scrolled
        ? 'bg-brand-white/95 backdrop-blur-md shadow-lg border-b border-brand-gray-light'
        : 'bg-brand-white/90 backdrop-blur-sm'
    }`}
      style={{ position: 'sticky' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5 lg:py-6">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-display font-bold text-brand-black">
              Render Studio
            </h1>
            <p className="text-xs text-brand-gray font-medium">Vittorio Veneto</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12" aria-label="Primary navigation">
            {[
              { label: 'Home', id: 'home' },
              { label: 'Servizi', id: 'servizi' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Chi Siamo', id: 'about' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Vai a ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`text-brand-black hover:text-brand-orange font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-white rounded px-2 py-1 ${
                  activeSection === item.id ? 'text-brand-orange' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange transition-all duration-300 rounded-full ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-brand-black hover:text-brand-orange transition-all duration-300 p-2 rounded-2xl hover:bg-brand-gray-light/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-white"
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-brand-white/98 backdrop-blur-md rounded-3xl mt-3 p-5 shadow-lg border-2 border-brand-gray-light animate-fade-in"
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Servizi', id: 'servizi' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Chi Siamo', id: 'about' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Vai a ${item.label}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`text-left text-brand-black hover:text-brand-orange font-bold transition-all duration-300 py-3 px-4 rounded-2xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                    activeSection === item.id ? 'text-brand-orange bg-brand-orange/10 border-2 border-brand-orange/30' : 'hover:bg-brand-gray-light/50 border-2 border-transparent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
