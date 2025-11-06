import React from 'react';
import { Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const videoFrames = [
    { id: 1, orientation: 'horizontal', title: 'Video Aziendale 1' },
    { id: 2, orientation: 'vertical', title: 'Social Content 1' },
    { id: 3, orientation: 'vertical', title: 'Social Content 2' },
    { id: 4, orientation: 'horizontal', title: 'Video Aziendale 2' },
    { id: 5, orientation: 'horizontal', title: 'Video Promozionale' },
    { id: 6, orientation: 'vertical', title: 'Social Content 3' }
  ];

  return (
    <section id="portfolio" className="py-6 sm:py-12 lg:py-14 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-2 sm:mb-4 lg:mb-5 px-3">
            Portfolio
          </h2>
          <p className="text-sm sm:text-xl text-brand-black/70 max-w-3xl mx-auto leading-relaxed px-3">
            Scopri i nostri progetti video, dalle produzioni aziendali ai contenuti per social media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {videoFrames.map((frame, index) => (
            <div
              key={frame.id}
              className={`
                ${frame.orientation === 'vertical' ? 'sm:row-span-2' : 'sm:col-span-1'}
                bg-brand-gray-light/60 border-2 border-brand-gray-light rounded-2xl sm:rounded-3xl p-3 sm:p-6 hover:shadow-lg hover:border-brand-orange hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-slide-up group overflow-hidden
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`
                  ${frame.orientation === 'vertical' ? 'h-64 sm:h-96 md:h-full' : 'h-48 sm:h-64'}
                  bg-brand-dark rounded-2xl relative overflow-hidden cursor-pointer border-2 border-brand-gray-light group-hover:border-brand-orange/50 transition-all duration-300
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/70 via-brand-dark/60 to-brand-dark/70 group-hover:from-brand-dark/50 group-hover:via-brand-dark/40 group-hover:to-brand-dark/50 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-brand-orange rounded-full p-3 sm:p-5 mx-auto mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand-orange/30 transition-all duration-300 animate-pulse-soft min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0">
                      <Play className="text-brand-white fill-brand-white" size={20} />
                    </div>
                    <p className="text-brand-white text-xs sm:text-base font-bold group-hover:text-brand-orange transition-colors">{frame.title}</p>
                    <p className="text-brand-white/80 text-[10px] sm:text-xs mt-1">Guarda il video</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-10 lg:mt-12 text-center px-3">
          <button className="bg-brand-orange hover:bg-brand-orange/90 active:scale-95 text-brand-white px-6 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-brand-orange/30 text-sm sm:text-base w-full sm:w-auto min-h-[48px]">
            Contattaci per il Tuo Progetto
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
