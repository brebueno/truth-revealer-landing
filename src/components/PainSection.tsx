
import React from 'react';
import { AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Maria S.",
    story: "Investi R$15.000 no curso de leilões americanos. Hoje, estou lutando para pagar o aluguel e sustentando uma dívida que parece interminável.",
    loss: "R$15.000",
  },
  {
    name: "Carlos R.",
    story: "Vendi meu carro para investir no 'negócio do momento'. Depois de taxas ocultas e custos inesperados, perdi tudo e ainda fiquei sem transporte.",
    loss: "R$35.000",
  },
  {
    name: "Júlia M.",
    story: "Meu casamento quase acabou por causa das dívidas que acumulei nos leilões. Os gurus nunca mencionaram os riscos reais envolvidos.",
    loss: "R$28.000",
  }
];

const PainSection = () => {
  return (
    <section id="pain" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-warning/20 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5 text-warning mr-2" />
            <span className="text-sm font-medium">Alerta de Risco</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A Dor <span className="text-gradient">Por Trás do Sonho</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Histórias reais de pessoas que perderam suas economias acreditando nas falsas promessas dos gurus de leilões americanos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-xl p-6 flex flex-col h-full"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                <div className="px-3 py-1 bg-danger/10 text-danger rounded-full text-sm font-medium">
                  Perdeu {testimonial.loss}
                </div>
              </div>
              <p className="text-foreground/80 italic mb-4 flex-grow">"{testimonial.story}"</p>
              <div className="h-1 w-16 bg-danger/30 rounded-full"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl p-8 border border-secondary max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="text-danger font-semibold flex items-center mb-2">
                <TrendingDown className="w-5 h-5 mr-2" />
                Estatística Chocante
              </div>
              <h3 className="text-2xl font-bold mb-4">82% dos brasileiros que investem em cursos de leilão NUNCA recuperam o investimento</h3>
              <p className="text-foreground/70">
                Pesquisas mostram que a grande maioria das pessoas que compram cursos caros acabam perdendo dinheiro. Os gurus só mostram os casos raros de sucesso, enquanto escondem milhares de fracassos.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-danger/10 rounded-full flex items-center justify-center">
              <div className="text-center">
                <span className="block text-5xl font-bold text-danger">82%</span>
                <span className="text-sm text-foreground/70">Perdem Dinheiro</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <p className="text-xl font-medium mb-8">
            Você quer continuar sendo parte da estatística? Ou prefere conhecer a <span className="highlight-text">verdade antes que seja tarde demais</span>?
          </p>
          <a href="#calculator" className="cta-button inline-block">
            Calcular quanto você pode perder
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
