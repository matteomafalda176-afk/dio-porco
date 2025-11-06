import React from 'react';
import { MapPin, Users, Target, Heart, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovazione',
      description: 'Utilizziamo le tecnologie più avanzate per creare soluzioni digitali all\'avanguardia.'
    },
    {
      icon: <Heart size={24} />,
      title: 'Passione',
      description: 'Ogni progetto è realizzato con dedizione e attenzione ai dettagli.'
    },
    {
      icon: <Target size={24} />,
      title: 'Precisione',
      description: 'Accuratezza tecnica e fedeltà al progetto originale in ogni realizzazione.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Energia',
      description: 'Portiamo entusiasmo e dinamismo in ogni progetto che realizziamo.'
    }
  ];

  // Team members reordered: Damiano, Alessandro (center), Matteo
  const team = [
    {
      name: 'Damiano',
      role: 'Co-Founder & Creative Director',
      description: 'Esperto in design digitale e direzione creativa, con una visione innovativa per progetti di comunicazione visiva.',
      skills: ['Creative Direction', 'Design Digitale', 'Concept Development', 'Brand Strategy']
    },
    {
      name: 'Alessandro',
      role: 'Co-Founder & Motion Designer',
      description: 'Esperto in motion graphics e animazioni, con focus su storytelling visivo e comunicazione dinamica.',
      skills: ['Motion Graphics', 'Video Editing', 'Animation', 'Visual Effects']
    },
    {
      name: 'Matteo',
      role: 'Co-Founder & 3D Artist',
      description: 'Specialista in modellazione 3D e visualizzazione digitale, con competenze tecniche avanzate.',
      skills: ['Modellazione 3D', 'Rendering', 'Animation', 'Technical Art']
    }
  ];

  return (
    <section id="about" className="py-6 sm:py-12 lg:py-14 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 lg:mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <MapPin className="text-brand-mocha mr-2 sm:mr-3" size={20} />
            <span className="text-brand-black/70 font-medium text-sm sm:text-lg">Vittorio Veneto, Italia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-2 sm:mb-4 lg:mb-5 px-3">
            Chi Siamo
          </h2>
          <p className="text-sm sm:text-xl text-brand-black/70 max-w-3xl mx-auto leading-relaxed px-3">
            Render Studio nasce nel 2025 dalla passione di tre giovani creativi per il design digitale e la comunicazione visiva. Dal cuore del Veneto, creiamo soluzioni innovative per il futuro.
          </p>
        </div>

        {/* Mission & Story - Mobile: Compact cards, Desktop: Side-by-side */}
        <div className="grid lg:grid-cols-2 gap-3 lg:gap-8 mb-6 sm:mb-10 lg:mb-12">
          <div className="bg-brand-lilac/30 border border-brand-lilac/50 rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-7 animate-slide-up overflow-hidden">
            <div className="flex items-center mb-2 sm:mb-4">
              <Target className="text-brand-mocha mr-2 sm:mr-4" size={20} />
              <h3 className="text-lg sm:text-3xl font-display font-bold text-brand-black">La Nostra Missione</h3>
            </div>
            <p className="text-brand-black/75 text-xs sm:text-lg leading-relaxed mb-2 sm:mb-4">
              Trasformare idee e progetti in esperienze digitali straordinarie che comunicano efficacemente la visione creativa dei nostri clienti. Crediamo che ogni progetto meriti una realizzazione digitale di eccellenza.
            </p>
            <div className="border-l-2 sm:border-l-4 border-brand-orange pl-2 sm:pl-6">
              <p className="text-brand-mocha italic font-medium text-xs sm:text-base">
                "La creatività è l'intelligenza che si diverte. Noi mettiamo questa filosofia al centro di ogni nostro progetto."
              </p>
            </div>
          </div>

          <div className="bg-brand-rose/25 border border-brand-rose/50 rounded-3xl p-5 sm:p-6 lg:p-7 animate-slide-up overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-2 sm:mb-4">
              <Users className="text-brand-mocha mr-2 sm:mr-4" size={20} />
              <h3 className="text-lg sm:text-3xl font-display font-bold text-brand-black">La Nostra Storia</h3>
            </div>
            <p className="text-brand-black/75 text-xs sm:text-lg leading-relaxed mb-2 sm:mb-4">
              Fondato nel 2025 a Vittorio Veneto, Render Studio è nato dall'incontro di tre giovani professionisti appassionati di design digitale e tecnologie creative. La nostra sede nel cuore del Veneto ci permette di unire tradizione e innovazione.
            </p>
            <div className="border-l-2 sm:border-l-4 border-brand-orange pl-2 sm:pl-6">
              <p className="text-brand-mocha italic font-medium text-xs sm:text-base">
                "Dalle colline del Prosecco alle metropoli digitali, portiamo la qualità veneta nel mondo del design del futuro."
              </p>
            </div>
          </div>
        </div>

        {/* Values - Mobile: 2 columns compact grid */}
        <div className="mb-6 sm:mb-10 lg:mb-12">
          <h3 className="text-xl sm:text-3xl font-display font-bold text-brand-black text-center mb-4 sm:mb-8 lg:mb-10 px-3">
            I Nostri Valori
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-brand-gray-light/50 border border-brand-gray-light hover:border-brand-orange hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden active:scale-95 rounded-xl sm:rounded-3xl p-2 sm:p-5 lg:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-brand-mocha flex justify-center mb-1 sm:mb-3 lg:mb-4 p-1.5 sm:p-3 lg:p-4 rounded-xl w-fit mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-display font-semibold text-brand-black mb-1 sm:mb-2 lg:mb-3">
                  {value.title}
                </h4>
                <p className="text-[10px] sm:text-sm lg:text-base text-brand-black/70 leading-snug sm:leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team - Mobile: Single column cards, Touch-optimized */}
        <div>
          <h3 className="text-xl sm:text-3xl font-display font-bold text-brand-black text-center mb-4 sm:mb-8 lg:mb-10 px-3">
            Il Nostro Team
          </h3>
          {/* Mobile: Single column for better readability, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-brand-gray-light/40 border border-brand-gray-light rounded-xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 hover:shadow-lg hover:border-brand-orange transition-all duration-300 animate-slide-up overflow-hidden flex flex-col active:scale-[0.98]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-lilac/50 rounded-xl sm:rounded-3xl mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center border border-brand-lilac/50">
                  <Users className="text-brand-mocha" size={16} />
                </div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-display font-semibold text-brand-black text-center mb-0.5">
                  {member.name}
                </h4>
                <p className="text-brand-orange text-center font-semibold mb-1.5 sm:mb-3 lg:mb-4 text-[10px] sm:text-sm lg:text-base">
                  {member.role}
                </p>
                <p className="text-brand-black/75 leading-snug sm:leading-relaxed mb-2 sm:mb-4 text-[11px] sm:text-sm lg:text-base flex-grow">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-brand-gray-light border border-brand-gray text-brand-mocha px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[9px] sm:text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
