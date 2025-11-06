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

  const gridItems = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section id="home" className="min-h-screen bg-brand-white flex items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-lilac/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-rose/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center mb-4 sm:mb-8">
              <div className="bg-brand-lilac p-1.5 sm:p-3 rounded-xl sm:rounded-2xl mr-2 sm:mr-4 border border-brand-gray-light">
                <Sparkles className="text-brand-mocha" size={16} />
              </div>
              <span className="text-brand-black/70 font-medium tracking-wide uppercase text-[10px] sm:text-sm">
                Vittorio Veneto, Italia
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-brand-black mb-4 sm:mb-8 leading-tight">
              Render
              <span className="text-brand-black block">Studio</span>
              <span className="text-brand-orange">Creativo</span>
            </h1>

            <p className="text-sm sm:text-xl text-brand-black/80 mb-6 sm:mb-12 leading-relaxed max-w-lg">
              Partner strategico nella produzione di contenuti aziendali. Dalla concept alla distribuzione, co-creiamo narrazioni di valore che amplificano il vostro messaggio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button
                onClick={scrollToServizi}
                className="bg-brand-orange hover:bg-brand-orange/90 active:scale-95 text-brand-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl group text-sm sm:text-base min-h-[48px]"
              >
                Scopri i Servizi
                <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white active:scale-95 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:shadow-lg text-sm sm:text-base min-h-[48px]"
              >
                Contattaci
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div
              className="relative rounded-3xl p-8 shadow-lg border border-brand-gray-light transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                backgroundColor: 'rgba(245, 245, 248, 0.8)'
              }}
            >
              <div className="grid grid-cols-4 gap-2 mb-6">
                {gridItems.map((item) => (
                  <div
                    key={item}
                    className={`bg-brand-lilac/40 border border-brand-lilac/50 rounded-xl h-16 transition-all duration-500 ${
                      showGrid ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${item * 50}ms` }}
                  ></div>
                ))}
              </div>

              <div className="bg-brand-gray-light rounded-3xl p-8 mb-4 border border-brand-gray-light relative group cursor-pointer hover:border-brand-orange transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-gray-light/70 rounded-3xl group-hover:bg-brand-gray-light/50 transition-all">
                  <div className="text-center">
                    <div className="bg-brand-orange rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-brand-white fill-brand-white" size={32} />
                    </div>
                    <p className="text-brand-black text-sm font-medium">Per comprendere</p>
                    <p className="text-brand-black text-sm font-medium">al meglio cosa facciamo</p>
                  </div>
                </div>
                <div className="h-64 opacity-0"></div>
              </div>

              <div className="flex justify-between items-center text-brand-black/60 text-sm">
                <span>Render Studio</span>
                <span>Dal 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
