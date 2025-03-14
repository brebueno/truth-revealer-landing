
import React from 'react';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Este livro vai acabar com meu sonho de investir em leilões?",
    answer: "Não, ele vai transformar seu sonho baseado em ilusões em um entendimento realista do mercado. O e-book não desestimula investimentos, mas ensina o que realmente funciona e quais são os riscos reais, para que você tome decisões informadas e não baseadas em falsas promessas."
  },
  {
    question: "Por que você está vendendo esta informação tão barato quando poderia ganhar mais?",
    answer: "Porque meu objetivo não é lucrar com falsas esperanças, como fazem os 'gurus'. Acredito que informação honesta deve ser acessível. O valor de $97 cobre os custos de criação e distribuição do material, permitindo que eu ajude o máximo de pessoas possível antes que percam milhares de dólares em cursos enganosos."
  },
  {
    question: "O que devo fazer se já gastei dinheiro em cursos caros?",
    answer: "O e-book contém uma seção específica para pessoas nessa situação, com estratégias para minimizar perdas e recuperar parte do investimento. Também inclui um guia passo a passo para evitar mais prejuízos e começar um processo de recuperação financeira e emocional."
  },
  {
    question: "Como lidar com a frustração de ter sido enganado?",
    answer: "O livro aborda esse aspecto emocional em detalhes, com um capítulo inteiro dedicado à recuperação psicológica após descobrir que foi vítima de marketing predatório. Inclui também o acesso à nossa comunidade de apoio, onde você encontrará pessoas que passaram pela mesma situação."
  },
  {
    question: "As informações do e-book funcionam para qualquer tipo de leilão?",
    answer: "Sim, embora o foco seja nos leilões americanos mais promovidos pelos 'gurus' brasileiros, os princípios e alertas se aplicam a praticamente todos os tipos de leilões. O livro ensina a identificar padrões de riscos e manipulações que são universais nesse mercado."
  },
  {
    question: "E se eu não gostar do conteúdo ou não achar útil?",
    answer: "Oferecemos garantia de 30 dias ou devolução do dinheiro, sem questionamentos. Se você não sentir que o conteúdo te ajudou a evitar perdas financeiras ou se não encontrar valor nas informações, basta solicitar o reembolso e devolveremos 100% do seu investimento."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 p-2 bg-primary/10 rounded-full">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Respostas às dúvidas mais comuns sobre o e-book e como ele pode ajudar você.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-secondary rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline bg-secondary/20 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <p className="text-xl font-medium mb-8">
            Ainda tem dúvidas? Estamos aqui para ajudar. Entre em contato pelo email <a href="mailto:suporte@verdadeleiloes.com" className="text-accent underline">suporte@verdadeleiloes.com</a>
          </p>
          <a href="#payment" className="cta-button inline-block">
            CONHEÇA A VERDADE ANTES QUE SEJA TARDE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
