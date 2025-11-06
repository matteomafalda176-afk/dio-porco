import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 bg-brand-white/98 backdrop-blur-md border-2 border-brand-gray-light rounded-3xl shadow-xl p-5 sm:p-6 w-72 sm:w-80 animate-fade-in">
          <div className="flex justify-between items-center mb-5 sm:mb-6">
            <h3 className="font-display font-bold text-brand-black text-base sm:text-lg">Contattaci Ora</h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Chiudi menu contatti"
              className="text-brand-black/70 hover:text-brand-black hover:bg-brand-gray-light/50 transition-all p-2 rounded-xl"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+390438123456"
              className="flex items-center p-3.5 sm:p-4 bg-brand-gray-light/40 hover:bg-brand-gray-light/60 hover:scale-[1.02] border-2 border-brand-gray-light hover:border-brand-orange rounded-2xl transition-all duration-300 group active:scale-95"
            >
              <div className="bg-brand-orange p-3 rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform">
                <Phone className="text-brand-white" size={18} />
              </div>
              <div>
                <p className="font-bold text-brand-black text-sm sm:text-base">Chiamaci</p>
                <p className="text-brand-black/70 text-xs sm:text-sm">+39 0438 123 456</p>
              </div>
            </a>

            <a
              href="mailto:info@renderstudio.it"
              className="flex items-center p-3.5 sm:p-4 bg-brand-gray-light/40 hover:bg-brand-gray-light/60 hover:scale-[1.02] border-2 border-brand-gray-light hover:border-brand-orange rounded-2xl transition-all duration-300 group active:scale-95"
            >
              <div className="bg-brand-lilac p-3 rounded-xl mr-3 sm:mr-4 border-2 border-brand-lilac/50 group-hover:scale-110 transition-transform">
                <Mail className="text-brand-mocha" size={18} />
              </div>
              <div>
                <p className="font-bold text-brand-black text-sm sm:text-base">Scrivici</p>
                <p className="text-brand-black/70 text-xs sm:text-sm break-all">info@renderstudio.it</p>
              </div>
            </a>
          </div>

          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-brand-gray-light">
            <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-brand-white py-3 sm:py-3.5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/30 active:scale-95 text-sm sm:text-base">
              Richiedi Preventivo Gratuito
            </button>
          </div>
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Chiudi menu contatti' : 'Apri menu contatti'}
        className={`bg-brand-orange hover:bg-brand-orange/90 text-brand-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-brand-orange/40 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'rotate-90 scale-105' : 'animate-pulse-soft'
        }`}
      >
        {isOpen ? <X size={22} className="sm:w-6 sm:h-6" /> : <MessageCircle size={22} className="sm:w-6 sm:h-6" />}
      </button>
    </div>
  );
};

export default FloatingCTA;
