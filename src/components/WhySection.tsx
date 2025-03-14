
import React from 'react';
import { DollarSign, Target, ShieldAlert, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <DollarSign className="w-8 h-8 text-danger" />,
    title: "Comissões Ocultas",
    description: "Eles ganham comissões massivas vendendo cursos e 'mentorias' caras, mesmo quando seus alunos perdem dinheiro nos leilões."
  },
  {
    icon: <Target className="w-8 h-8 text-danger" />,
    title: "Marketing Predatório",
    description: "Usam técnicas de marketing agressivas para criar falsas expectativas e vender sonhos impossíveis a pessoas vulneráveis."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-danger" />,
    title: "Informação Controlada",
    description: "Compartilham apenas histórias de sucesso raras e escondem os milhares de fracassos para manter a ilusão de que o negócio é fácil."
  },
  {
    icon: <Users className="w-8 h-8 text-danger" />,
    title: "Rede de Afiliados",
    description: "Criam redes de afiliados onde todos ganham para perpetuar o mito, enquanto as pessoas comuns perdem suas economias."
  }
];

const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-primary text-white">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Por Que Eles <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent">Mentem Para Você</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Entenda os reais motivos por trás das mentiras sobre os leilões americanos, e por que é tão lucrativo para eles manterem você desinformado.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex gap-4">
                <div className="bg-white/10 p-3 rounded-lg self-start">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-white/80">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <p className="text-xl font-medium mb-8">
            Não seja mais uma vítima dessa indústria de sonhos falsos. 
            Conheça a verdade e proteja seu dinheiro suado.
          </p>
          <a href="#offer" className="bg-white text-primary font-bold py-4 px-8 rounded-lg text-center uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
            Quero conhecer toda a verdade
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
