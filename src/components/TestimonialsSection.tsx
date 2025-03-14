
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ricardo M.",
    photo: "/testimonial-1.jpg",
    text: "Depois de perder R$30.000 em leilões, este livro me mostrou onde eu errei. Se eu tivesse lido antes, teria economizado uma fortuna e muitas noites de insônia.",
    stars: 5
  },
  {
    name: "Fernanda S.",
    photo: "/testimonial-2.jpg",
    text: "Eu ia investir minhas economias de vida em um curso caro de leilões... este livro me salvou da ruína. As informações são tão claras que até me emocionei ao perceber o quanto estava próxima de perder tudo.",
    stars: 5
  },
  {
    name: "André L.",
    photo: "/testimonial-3.jpg",
    text: "Meu casamento quase acabou por causa das dívidas dos leilões. Este e-book não só me mostrou onde errei, mas me deu um caminho para recuperar minha vida financeira e meu relacionamento.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-full">
            <Quote className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vidas <span className="text-gradient">Transformadas</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Depoimentos reais de pessoas que evitaram o desastre financeiro graças às informações deste e-book.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
            >
              <div className="aspect-[3/2] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <img 
                  src={testimonial.photo} 
                  alt={`Foto de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <blockquote className="text-foreground/80 italic mb-4 flex-grow">
                  "{testimonial.text}"
                </blockquote>
                <footer className="font-semibold">{testimonial.name}</footer>
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
            Junte-se a milhares de pessoas que decidiram abrir os olhos e proteger suas finanças.
          </p>
          <a href="#payment" className="cta-button inline-block">
            QUERO PROTEGER MEU DINHEIRO AGORA
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
