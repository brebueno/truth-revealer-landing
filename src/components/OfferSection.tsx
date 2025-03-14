
import React from 'react';
import { Check, BookOpen, Shield, AudioLines, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const OfferSection = () => {
  return (
    <section id="offer" className="section-padding bg-gradient-to-b from-white to-secondary/30 broken-dreams-overlay torn-edge-top">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 p-2 bg-accent/10 rounded-full">
            <BookOpen className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A Verdade Que <span className="text-gradient">Vai Proteger Você</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Um e-book revelador que expõe a cruel realidade dos leilões nos EUA e protege você de perder suas economias.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-danger text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg z-10 rotate-12">
                EXCLUSIVO
              </div>
              <img 
                src="/ebook-cover.jpg" 
                alt="Capa do e-book A Verdade Sobre os Leilões dos EUA" 
                className="w-full h-auto rounded-2xl shadow-2xl border-8 border-white vintage-filter"
              />
              <div className="absolute -bottom-4 -right-4 bg-warning text-primary text-sm font-bold py-2 px-4 rounded-full shadow-lg z-10 -rotate-12">
                REVELADOR
              </div>
              
              {/* Torn paper effect */}
              <div className="absolute -bottom-1 left-0 w-full h-8 bg-white rounded-bl-2xl rounded-br-2xl"></div>
              
              {/* Fake coffee stain */}
              <div className="absolute bottom-24 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-amber-800/10 to-amber-700/20 blur-md rotate-12"></div>
              
              {/* Thumbtack effect */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full shadow-md"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">O que você vai descobrir:</h3>
            
            <ul className="space-y-4 mb-8">
              {[
                "A cruel realidade dos leilões nos EUA que os gurus escondem",
                "Os custos ocultos, taxas e armadilhas que deliberadamente não mencionam",
                "Por que a maioria das pessoas perde dinheiro (e como os gurus lucram com isso)",
                "Como identificar promessas irreais e vendedores de cursos enganosos",
                "O que você realmente precisa saber antes de colocar um centavo nesse mercado",
                "Histórias reais de pessoas que perderam tudo (e o que fazer para não ser a próxima)"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="bg-success/20 p-1 rounded-full mt-1">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-8 glass-card p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-semibold line-through text-foreground/60">De $197</span>
                <span className="bg-danger/10 text-danger text-xs px-2 py-1 rounded-full font-semibold">50% OFF</span>
              </div>
              <div className="text-3xl font-bold mb-1">Por apenas $97</div>
              <p className="text-foreground/70 text-sm">Pagamento único • Acesso imediato • Sem assinaturas</p>
            </div>
            
            <a 
              href="#payment" 
              className="cta-button w-full md:w-auto flex items-center justify-center gap-2 text-lg"
            >
              PROTEJA SEUS SONHOS E SEU DINHEIRO AGORA
            </a>
            
            <p className="text-center text-foreground/60 text-sm mt-4">
              Garantia de 30 dias ou seu dinheiro de volta
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Bônus Exclusivos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary flex gap-4 folded-corner">
              <div className="bg-accent/10 p-3 rounded-lg self-start">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Guia de Recuperação</h4>
                <p className="text-foreground/70">
                  Recuperação emocional e financeira após perdas em leilões, com passos práticos para recomeçar.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary flex gap-4 folded-corner">
              <div className="bg-accent/10 p-3 rounded-lg self-start">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">E-book Complementar</h4>
                <p className="text-foreground/70">
                  Como identificar vendedores de curso que querem apenas seu dinheiro, com checklist prático.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary flex gap-4 folded-corner">
              <div className="bg-accent/10 p-3 rounded-lg self-start">
                <AudioLines className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Áudio Meditativo</h4>
                <p className="text-foreground/70">
                  Meditação para cura da ansiedade financeira e sonhos destruídos, narrado por especialista.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary flex gap-4 folded-corner">
              <div className="bg-accent/10 p-3 rounded-lg self-start">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Comunidade de Apoio</h4>
                <p className="text-foreground/70">
                  Acesso ao grupo privado de apoio para vítimas de cursos enganosos, com orientação especializada.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
