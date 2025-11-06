import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="contact" className="py-6 sm:py-12 lg:py-14 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-8">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-white mb-2 sm:mb-4 lg:mb-5 px-3">
              Hai un progetto in mente?
            </h2>
            <p className="text-sm sm:text-xl text-brand-white/85 leading-relaxed px-3">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5 mb-5 sm:mb-8">
            <a
              href="tel:+390438123456"
              className="bg-brand-white/10 backdrop-blur-sm border-2 border-brand-white/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 hover:bg-brand-white/15 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center group min-h-[100px] sm:min-h-0 flex flex-col items-center justify-center"
            >
              <Phone className="text-brand-white mx-auto mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h3 className="text-brand-white font-bold mb-0.5 sm:mb-2 text-xs sm:text-base">Telefono</h3>
              <p className="text-brand-white/70 text-[10px] sm:text-sm">Chiamaci ora</p>
            </a>

            <a
              href="https://wa.me/390438123456"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-white/10 backdrop-blur-sm border-2 border-brand-white/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 hover:bg-brand-white/15 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center group min-h-[100px] sm:min-h-0 flex flex-col items-center justify-center"
            >
              <MessageCircle className="text-brand-white mx-auto mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h3 className="text-brand-white font-bold mb-0.5 sm:mb-2 text-xs sm:text-base">WhatsApp</h3>
              <p className="text-brand-white/70 text-[10px] sm:text-sm">Scrivici subito</p>
            </a>

            <a
              href="mailto:info@renderstudio.it"
              className="bg-brand-white/10 backdrop-blur-sm border-2 border-brand-white/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 hover:bg-brand-white/15 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center group min-h-[100px] sm:min-h-0 flex flex-col items-center justify-center"
            >
              <Mail className="text-brand-white mx-auto mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h3 className="text-brand-white font-bold mb-0.5 sm:mb-2 text-xs sm:text-base">Email</h3>
              <p className="text-brand-white/70 text-[10px] sm:text-sm">Inviaci una mail</p>
            </a>

            <button
              onClick={() => setShowContactModal(true)}
              className="bg-brand-white/10 backdrop-blur-sm border-2 border-brand-white/30 rounded-xl sm:rounded-3xl p-3 sm:p-6 hover:bg-brand-white/15 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center group min-h-[100px] sm:min-h-0 flex flex-col items-center justify-center"
            >
              <Mail className="text-brand-white mx-auto mb-1.5 sm:mb-4 group-hover:scale-110 transition-transform" size={20} />
              <h3 className="text-brand-white font-bold mb-0.5 sm:mb-2 text-xs sm:text-base">Form</h3>
              <p className="text-brand-white/70 text-[10px] sm:text-sm">Compila il modulo</p>
            </button>
          </div>

          <div className="text-center px-3">
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-brand-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto min-h-[48px]">
              Richiedi Preventivo Gratuito
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-brand-black text-brand-white border-t border-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            <div className="sm:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-white mb-4 sm:mb-6">Render Studio</h3>
              <p className="text-brand-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
                Studio di produzione video aziendale con sede a Vittorio Veneto. Dalla strategia alla distribuzione, creiamo contenuti di valore per la tua comunicazione.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-brand-black p-2 rounded-xl mr-4 border border-brand-gray/30">
                    <Mail className="text-brand-gray-light" size={20} />
                  </div>
                  <span className="text-brand-white/70">info@renderstudio.it</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-black p-2 rounded-xl mr-4 border border-brand-gray/30">
                    <Phone className="text-brand-gray-light" size={20} />
                  </div>
                  <span className="text-brand-white/70">+39 0438 123 456</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-brand-black p-2 rounded-xl mr-4 border border-brand-gray/30">
                    <MapPin className="text-brand-gray-light" size={20} />
                  </div>
                  <span className="text-brand-white/70">Via Roma 123, 31029 Vittorio Veneto (TV)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-display font-semibold text-brand-white mb-4 sm:mb-8">Navigazione</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Servizi', id: 'servizi' },
                  { label: 'Portfolio', id: 'portfolio' },
                  { label: 'Chi Siamo', id: 'about' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-brand-white/70 hover:text-brand-gray-light transition-colors duration-300 font-medium"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-display font-semibold text-brand-white mb-4 sm:mb-8">Servizi</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><span className="text-brand-white/70 font-medium text-sm sm:text-base">Analisi degli obbiettivi</span></li>
                <li><span className="text-brand-white/70 font-medium text-sm sm:text-base">Storytelling</span></li>
                <li><span className="text-brand-white/70 font-medium text-sm sm:text-base">Video editing</span></li>
                <li><span className="text-brand-white/70 font-medium text-sm sm:text-base">Motion Graphics</span></li>
                <li><span className="text-brand-white/70 font-medium text-sm sm:text-base">Postproduzione</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-gray/30 pt-8 sm:pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8 md:mb-0">
                <a href="#" className="text-brand-white/70 hover:text-brand-gray-light transition-colors duration-300 bg-brand-black p-3 rounded-2xl hover:bg-brand-gray/20 border border-brand-gray/30 grain">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-brand-white/70 hover:text-brand-gray-light transition-colors duration-300 bg-brand-black p-3 rounded-2xl hover:bg-brand-gray/20 border border-brand-gray/30 grain">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-brand-white/70 hover:text-brand-gray-light transition-colors duration-300 bg-brand-black p-3 rounded-2xl hover:bg-brand-gray/20 border border-brand-gray/30 grain">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-brand-white/70 hover:text-brand-gray-light transition-colors duration-300 bg-brand-black p-3 rounded-2xl hover:bg-brand-gray/20 border border-brand-gray/30 grain">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-gray/30 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-brand-white/50 text-xs sm:text-sm px-4">
              © 2025 Render Studio. Tutti i diritti riservati. | P.IVA 12345678901 | Privacy Policy | Cookie Policy
            </p>
            <p className="text-brand-white/40 text-xs mt-2 px-4">
              Vittorio Veneto (TV) - Italia | Produzione video aziendali
            </p>
          </div>
        </div>
      </footer>

      {showContactModal && (
        <div className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowContactModal(false)}>
          <div className="bg-brand-black border-2 border-brand-gray/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full grain" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-white mb-5 sm:mb-6">Contattaci</h3>
            <form className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-brand-gray/10 border-2 border-brand-gray/30 rounded-xl px-4 py-3 text-brand-white text-sm sm:text-base placeholder-brand-white/50 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-brand-gray/10 border-2 border-brand-gray/30 rounded-xl px-4 py-3 text-brand-white text-sm sm:text-base placeholder-brand-white/50 focus:outline-none focus:border-brand-orange transition-colors"
              />
              <textarea
                placeholder="Messaggio"
                rows={4}
                className="w-full bg-brand-gray/10 border-2 border-brand-gray/30 rounded-xl px-4 py-3 text-brand-white text-sm sm:text-base placeholder-brand-white/50 focus:outline-none focus:border-brand-orange resize-none transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 active:scale-95 text-brand-white px-8 py-3.5 sm:py-4 rounded-2xl font-bold transition-all duration-300 grain text-sm sm:text-base"
              >
                Invia Messaggio
              </button>
              <button
                type="button"
                onClick={() => setShowContactModal(false)}
                className="w-full border-2 border-brand-gray/30 text-brand-white px-8 py-3.5 sm:py-4 rounded-2xl font-bold hover:bg-brand-gray/10 active:scale-95 transition-all duration-300 text-sm sm:text-base"
              >
                Chiudi
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
