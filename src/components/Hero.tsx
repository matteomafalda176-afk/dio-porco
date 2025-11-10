import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setShowGrid(true), 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToServizi = () => {
    const element = document.getElementById('servizi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="min-h-screen bg-brand-black flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-gold/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center mb-4 sm:mb-8">
              <div className="bg-brand-cyan/20 p-1.5 sm:p-3 rounded-xl sm:rounded-2xl mr-2 sm:mr-4 border border-brand-cyan/50">
                <Sparkles className="text-brand-cyan" size={16} />
              </div>
              <span className="text-brand-cyan font-medium tracking-wide uppercase text-[10px] sm:text-sm">
                Vittorio Veneto, Italia
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-brand-white mb-4 sm:mb-8 leading-tight">
              Render
              <span className="text-brand-white block">Studio</span>
              <span className="bg-gradient-to-r from-brand-orange via-brand-gold to-brand-cyan bg-clip-text text-transparent">Creativo</span>
            </h1>

            <p className="text-sm sm:text-xl text-brand-gray mb-6 sm:mb-12 leading-relaxed max-w-lg">
              Partner strategico nella produzione di contenuti aziendali. Dalla concept alla distribuzione, co-creiamo narrazioni di valore che amplificano il vostro messaggio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button
                onClick={scrollToServizi}
                className="bg-brand-orange hover:bg-brand-orange/90 active:scale-95 text-brand-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-orange/50 group text-sm sm:text-base min-h-[48px]"
              >
                Scopri i Servizi
                <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 active:scale-95 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-cyan/20 text-sm sm:text-base min-h-[48px]"
              >
                Contattaci
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
