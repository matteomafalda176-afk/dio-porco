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
    <section id="home" className="min-h-screen bg-brand-black flex items-center relative overflow-hidden grain">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-gray/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center mb-4 sm:mb-8">
              <div className="bg-brand-black p-1.5 sm:p-3 rounded-xl sm:rounded-2xl mr-2 sm:mr-4 border border-brand-gray/30">
                <Sparkles className="text-brand-gray-light" size={16} />
              </div>
              <span className="text-brand-white/80 font-medium tracking-wide uppercase text-[10px] sm:text-sm">
                Vittorio Veneto, Italia
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-brand-white mb-4 sm:mb-8 leading-tight">
              Render
              <span className="text-brand-white block">Studio</span>
              <span className="text-brand-orange">Creativo</span>
            </h1>

            <p className="text-sm sm:text-xl text-brand-white/90 mb-6 sm:mb-12 leading-relaxed max-w-lg">
              Partner strategico nella produzione di contenuti aziendali. Dalla concept alla distribuzione, co-creiamo narrazioni di valore che amplificano il vostro messaggio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button
                onClick={scrollToServizi}
                className="bg-brand-orange hover:bg-brand-orange/80 active:scale-95 text-brand-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl group grain text-sm sm:text-base min-h-[48px]"
              >
                Scopri i Servizi
                <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </button>

              <button
                onClick={scrollToContact}
                className="border-2 border-brand-gray text-brand-white hover:bg-brand-gray hover:text-brand-black active:scale-95 px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 hover:shadow-lg grain text-sm sm:text-base min-h-[48px]"
              >
                Contattaci
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div
              className="relative rounded-3xl p-8 shadow-2xl border border-brand-gray/30 transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                backgroundColor: 'rgba(39, 39, 42, 0.4)'
              }}
            >
              <div className="grid grid-cols-4 gap-2 mb-6">
                {gridItems.map((item) => (
                  <div
                    key={item}
                    className={`bg-brand-gray/20 border border-brand-gray/30 rounded-xl h-16 transition-all duration-500 ${
                      showGrid ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${item * 50}ms` }}
                  ></div>
                ))}
              </div>

              <div className="bg-brand-black rounded-3xl p-8 mb-4 border border-brand-gray/30 relative group cursor-pointer hover:border-brand-orange transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-brand-black/80 rounded-3xl group-hover:bg-brand-black/60 transition-all">
                  <div className="text-center">
                    <div className="bg-brand-orange rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-brand-white fill-brand-white" size={32} />
                    </div>
                    <p className="text-brand-white text-sm font-medium">Per comprendere</p>
                    <p className="text-brand-white text-sm font-medium">al meglio cosa facciamo</p>
                  </div>
                </div>
                <div className="h-64 opacity-0"></div>
              </div>

              <div className="flex justify-between items-center text-brand-white/70 text-sm">
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