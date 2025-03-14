
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-primary/5 to-background"></div>
      </div>
      
      <div className="container-padding relative z-10 py-12 md:py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-danger/10 border border-danger/20 rounded-full">
            <span className="text-danger font-medium">A verdade que tentam esconder de você</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight"
          >
            <span className="block">SONHOS DESTRUÍDOS:</span>
            <span className="text-gradient">Como os "gurus" de leilões americanos</span>
            <span className="block mt-2">LUCRAM com seu FRACASSO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto"
          >
            Descubra as verdades dolorosas que ninguém teve coragem de revelar antes de você perder suas economias
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="#video" className="cta-button">
              Assistir o vídeo revelador
            </a>
            <a href="#offer" className="font-bold py-4 px-8 rounded-lg text-primary bg-white border-2 border-primary/20 text-center uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Proteger meu dinheiro agora
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <a href="#video" className="flex flex-col items-center">
          <span className="text-sm text-foreground/70 mb-2">Continue para descobrir</span>
          <ChevronDown className="w-6 h-6 text-primary" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
