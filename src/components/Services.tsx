import React from 'react';
import { Target, BookOpen, Video, Monitor, Wand2, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Target size={32} />,
      title: 'Analisi degli obbiettivi',
      description: 'Analisi approfondita dei vostri obiettivi di comunicazione per sviluppare strategie video efficaci e misurabili.',
      features: ['Strategia contenuti', 'Analisi target', 'KPI definition', 'Consulenza marketing']
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Storytelling',
      description: 'Creazione di narrazioni coinvolgenti che comunicano i valori del vostro brand in modo autentico ed emozionale.',
      features: ['Concept narrativo', 'Sceneggiatura', 'Storyboard', 'Script writing']
    },
    {
      icon: <Video size={32} />,
      title: 'Video editing',
      description: 'Montaggio professionale e post-produzione per video aziendali, promozionali e contenuti per social media.',
      features: ['Montaggio video', 'Audio mixing', 'Sottotitoli', 'Export multi-formato']
    },
    {
      icon: <Monitor size={32} />,
      title: 'Motion Graphics',
      description: 'Animazioni dinamiche, grafica in movimento e visualizzazioni 3D per comunicare in modo innovativo.',
      features: ['Product animation', '3D environment', 'Animazioni 2D/3D', 'Grafica animata']
    },
    {
      icon: <Wand2 size={32} />,
      title: 'Postproduzione Avanzata',
      description: 'Tecniche avanzate di postproduzione per elevare la qualità visiva dei vostri contenuti video.',
      features: ['Color grading', 'VFX', 'Motion graphic', 'Compositing']
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Automation',
      description: 'Integrazione di intelligenza artificiale per ottimizzare i processi di produzione e post-produzione video.',
      features: ['AI editing', 'Auto-captioning', 'Voice synthesis', 'Smart rendering']
    }
  ];

  return (
    <section id="servizi" className="py-6 sm:py-12 lg:py-14 bg-brand-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-white mb-2 sm:mb-4 lg:mb-5 px-3">
            I Nostri Servizi
          </h2>
          <p className="text-sm sm:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed px-3">
            Offriamo soluzioni complete di design digitale e visualizzazione 3D
            per professionisti, studi e aziende che vogliono comunicare con impatto.
          </p>
        </div>

        {/* Mobile: 2 compact columns, Desktop: 3 columns - Touch-optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-zinc-900 border-2 border-brand-zinc-900 hover:border-brand-cyan hover:shadow-lg hover:shadow-brand-cyan/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 animate-slide-up group flex flex-col h-full relative overflow-hidden rounded-xl sm:rounded-3xl p-2.5 sm:p-6 lg:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl group-hover:bg-brand-cyan/20 transition-all duration-500"></div>

              <div className="text-brand-cyan mb-2 sm:mb-4 lg:mb-6 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300 p-1.5 sm:p-3 lg:p-4 bg-brand-cyan/20 rounded-lg sm:rounded-2xl w-fit relative z-10">
                {service.icon}
              </div>

              <h3 className="text-sm sm:text-xl lg:text-2xl font-display font-bold text-brand-white mb-1.5 sm:mb-3 lg:mb-4 group-hover:text-brand-gold transition-colors duration-300 relative z-10 leading-tight">
                {service.title}
              </h3>

              <p className="text-[10px] sm:text-sm lg:text-base text-brand-gray mb-2 sm:mb-5 lg:mb-6 leading-snug sm:leading-relaxed relative z-10">
                {service.description}
              </p>

              <ul className="space-y-1 sm:space-y-2 lg:space-y-3 mb-2 sm:mb-5 lg:mb-6 flex-grow relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-brand-gray-light text-[9px] sm:text-sm lg:text-base group-hover:text-brand-cyan transition-colors">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-brand-cyan rounded-full mr-1.5 sm:mr-3 lg:mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 sm:pt-4 lg:pt-5 border-t border-brand-zinc-800 mt-auto relative z-10">
                <button className="bg-brand-orange hover:bg-brand-orange/90 active:scale-95 text-brand-white font-bold py-2 sm:py-3 lg:py-3.5 px-2 sm:px-5 lg:px-6 rounded-lg sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-orange/50 flex items-center text-[10px] sm:text-sm lg:text-base w-full justify-center group-hover:scale-105 min-h-[44px] sm:min-h-0">
                  Scopri di più
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
