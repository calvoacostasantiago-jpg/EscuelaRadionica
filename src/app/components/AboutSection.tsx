import { Heart, Award, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroLogo from '@/assets/logo.png';
import angelicaImg from '@/assets/Angelica.png';

export default function AboutSection() {
  const handleContact = () => {
    window.open('https://wa.me/573226639527?text=Hola%20Angélica,%20me%20gustaría%20conocer%20más%20sobre%20tu%20trabajo%20y%20las%20terapias%20que%20ofreces', '_blank');
  };

  const achievements = [
    {
      icon: Award,
      title: "Experiencia en prevención y control",
      description: "5 años acompañando a personas en programas de prevención y manejo de enfermedades crónicas, promoviendo bienestar y calidad de vida."
    },
    {
      icon: Users,
      title: "Acompañamiento en procesos de final de vida",
      description: "Apoyo humano y profesional a familias y pacientes en el proceso de morir en casa, brindando contención y serenidad."
    },
    {
      icon: Heart,
      title: "Formación integral en terapias energéticas",
      description: "Certificada en medicina Sintergética (Politécnico Grancolombiano), radiónica y radiestesia (Escuela de Radiestesia diferencial y efectiva)."
    }
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2e0d4b] via-[#4a0d7a] to-[#2e0d4b]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37] rounded-full blur-3xl opacity-10" />
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
          <div className="inline-block mb-6">
            <img 
              src={heroLogo} 
              alt="Logo" 
              className="w-80 h-80 object-contain mx-auto"
            />
          </div>

          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 text-[#d4af37]"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 900 }}
          >
            Angélica Montes
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={angelicaImg}
              alt="Angélica Montes" 
              className="w-32 h-32 rounded-full object-cover border-2 border-[#d4af37] shadow-lg"
            />
            <span 
              className="text-lg md:text-xl text-[#f0d9a8] uppercase tracking-wider"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Terapeuta Holística • Maestra de Radiónica
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Quote side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#4a0d7a]/40 to-[#2e0d4b]/40 backdrop-blur-sm border-2 border-[#d4af37]/40 rounded-3xl">
              {/* Decorative quote marks */}
              <div className="absolute top-4 left-4 text-[#d4af37] opacity-30 text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>"</div>
              
              <div className="relative z-10">
                <p 
                  className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed italic"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  La verdadera transformación comienza cuando decides elevar tu vibración y conectar con tu poder interior. 
                  Mi misión es guiarte en este camino sagrado hacia tu mejor versión.
                </p>
                
                <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mb-6" />
                
                <p 
                  className="text-lg text-white/70 leading-relaxed"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                >
                  Con años de dedicación al estudio de la radiónica, radiestesia y terapias energéticas, 
                  he tenido el privilegio de acompañar a cientos de personas en su camino de crecimiento personal. 
                  Cada enseñanza que comparto nace de la experiencia vivida y del profundo amor por esta noble labor.
                </p>
              </div>

              <div className="absolute bottom-4 right-4 text-[#d4af37] opacity-30 text-6xl transform rotate-180" style={{ fontFamily: 'Playfair Display, serif' }}>"</div>
            </div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 text-[#d4af37]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 text-[#f0d9a8]"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
          </motion.div>

          {/* Achievements side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-[#4a0d7a]/30 to-[#2e0d4b]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl hover:border-[#d4af37] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#d4af37] to-[#f0d9a8] rounded-xl">
                    <achievement.icon className="w-6 h-6 text-[#2e0d4b]" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl text-[#d4af37] mb-2"
                      style={{ fontFamily: 'Cinzel, serif', fontWeight: 700 }}
                    >
                      {achievement.title}
                    </h3>
                    <p 
                      className="text-white/80 leading-relaxed"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div 
              className="pt-6"
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={handleContact}
                className="w-full py-4 px-8 bg-gradient-to-r from-[#d4af37] to-[#f0d9a8] text-[#2e0d4b] rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
              >
                Conecta con Angélica
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional info section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[#4a0d7a]/30 to-[#2e0d4b]/30 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl max-w-3xl">
            <p 
              className="text-lg text-white/90 leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              "No importa dónde estés en tu camino de crecimiento personal, siempre hay un siguiente paso que dar. 
              Permíteme acompañarte en este hermoso viaje de <span className="text-[#d4af37] font-semibold">autodescubrimiento</span> y <span className="text-[#d4af37] font-semibold">sanación</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}