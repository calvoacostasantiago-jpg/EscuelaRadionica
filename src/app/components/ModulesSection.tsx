import { CheckCircle, Lock, Sparkles, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import module1Image from 'figma:asset/cf1164c52b3a1752e556056d05f3d01138b7b823.png';
import module2Image from 'figma:asset/fe3f087c02b2873d08bbe9a1fbbaea47e615411b.png';
import module3Image from 'figma:asset/b15529c5b757ce9e07d05bdbef5e4f2bcdcc8196.png';

interface ModuleProps {
  number: number;
  title: string;
  description: string;
  features: string[];
  price?: string;
  available: boolean;
  highlighted?: boolean;
  image: string;
}

function ModuleCard({ number, title, description, features, price, available, highlighted, image }: ModuleProps) {
  const handleEnroll = () => {
    if (available) {
      window.open(`https://wa.me/573226639527?text=Hola,%20quiero%20inscribirme%20al%20Módulo%20${number}:%20${title}`, '_blank');
    }
  };

  return (
    <motion.div
      className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 flex flex-col h-full ${
        highlighted
          ? 'bg-gradient-to-br from-[#4a0d7a]/40 to-[#2e0d4b]/40 border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.3)] scale-105 z-10'
          : 'bg-gradient-to-br from-[#4a0d7a]/20 to-[#2e0d4b]/20 border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]'
      } ${!available && 'opacity-75'}`}
      whileHover={available ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] rounded-full z-20 w-max max-w-[90%]">
          <p 
            className="text-sm text-[#2e0d4b] uppercase tracking-wide flex items-center justify-center gap-2"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            <Star className="w-4 h-4" />
            ¡Disponible Ahora!
          </p>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e0d4b] via-transparent to-transparent z-10 opacity-60" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {!available && (
          <div className="absolute inset-0 bg-[#2e0d4b]/60 backdrop-blur-[2px] z-20 flex items-center justify-center">
            <div className="p-3 bg-[#2e0d4b] rounded-full border border-[#d4af37]/30">
              <Lock className="w-8 h-8 text-[#f0d9a8]" />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-4">
        <p 
          className="text-sm text-[#f0d9a8] uppercase tracking-widest"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
        >
          Módulo {number}
        </p>
        {!available && (
          <span className="text-xs px-2 py-1 bg-[#2e0d4b]/50 rounded border border-[#d4af37]/20 text-white/50">
            Próximamente
          </span>
        )}
      </div>

      <h3 
        className="text-2xl md:text-3xl text-[#d4af37] mb-4"
        style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
      >
        {title}
      </h3>

      <p 
        className="text-white/80 mb-6 leading-relaxed flex-grow"
        style={{ fontFamily: 'Open Sans, sans-serif' }}
      >
        {description}
      </p>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
            <p 
              className="text-white/90 text-sm"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        {available ? (
          <button
            onClick={handleEnroll}
            className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] text-[#2e0d4b] rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 transform"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            Inscribirme Ahora
          </button>
        ) : (
          <div className="py-4 px-6 bg-[#2e0d4b]/50 rounded-full text-center border border-[#d4af37]/10">
            <p 
              className="text-[#f0d9a8] uppercase tracking-wide text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Inscripciones Cerradas
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ModulesSection() {
  const modules: ModuleProps[] = [
    {
      number: 1,
      title: "Fundamentos de Radiestesia",
      description: "Aprende las bases esenciales de la radiestesia, el arte de detectar energías sutiles y desarrolla tu sensibilidad energética.",
      features: [
        "Introducción a la radiestesia profesional",
        "Manejo del péndulo y herramientas básicas",
        "Bases para atender tus primeros consultantes",
        "Ejercicios prácticos guiados",
        "Certificado habilitante para ejercer"
      ],
      available: true,
      highlighted: true,
      image: module1Image
    },
    {
      number: 2,
      title: "Radiónica Práctica",
      description: "Descubre cómo utilizar la radiónica para enviar energía sanadora a distancia y manifestar cambios positivos.",
      features: [
        "Principios de la radiónica cuántica",
        "Creación de gráficos para clientes",
        "Emisión de energía a distancia (sin fronteras)",
        "Cómo cobrar por terapias remotas",
        "Prácticas de manifestación y abundancia"
      ],
      available: false,
      image: module2Image
    },
    {
      number: 3,
      title: "Maestría Vibra Alto",
      description: "Alcanza el nivel de maestría integrando todas las técnicas avanzadas de radiónica y radiestesia.",
      features: [
        "Técnicas avanzadas de medición energética",
        "Protocolos completos de terapia",
        "Programación de cristales y objetos",
        "Estructura de negocio holístico",
        "Mentoría para terapeutas exitosos"
      ],
      available: false,
      image: module3Image
    }
  ];

  return (
    <section id="modules" className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a0d7a] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-[#4a0d7a]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-full">
            <Zap className="w-5 h-5 text-[#d4af37]" />
            <p 
              className="text-sm md:text-base text-[#f0d9a8] uppercase tracking-widest"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Programa de Formación
            </p>
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[#d4af37]"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}
          >
            Módulos de Aprendizaje
          </h2>

          <p 
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300 }}
          >
            Un viaje transformador de tres niveles diseñado para llevarte desde los fundamentos 
            hasta la maestría en <span className="text-[#d4af37]">radiónica y radiestesia</span>,
            habilitándote para sanar a otros y crear una <span className="text-[#d4af37] font-semibold">fuente de ingresos</span> alineada con tu propósito.
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {modules.map((module) => (
            <ModuleCard key={module.number} {...module} />
          ))}
        </div>

        {/* Additional info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4a0d7a]/30 to-[#2e0d4b]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <p 
              className="text-white/90"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Todos los módulos incluyen <span className="text-[#d4af37] font-semibold">material descargable</span>, <span className="text-[#d4af37] font-semibold">soporte continuo</span> y guía para <span className="text-[#d4af37] font-semibold">monetizar tu saber</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}