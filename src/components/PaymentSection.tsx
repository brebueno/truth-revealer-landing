
import React from 'react';
import { ShieldCheck, CreditCard, CheckCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const PaymentSection = () => {
  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'https://pay.kirvano.com/a6d8629d-53d0-4ef9-a51a-dea61dc63b01';
  };

  return (
    <section id="payment" className="section-padding bg-gradient-to-b from-white to-secondary/30">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Proteja Seu <span className="text-gradient">Dinheiro Agora</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Invista uma fração do que poderia perder para proteger suas economias e seus sonhos.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="col-span-2 bg-white rounded-xl shadow-xl p-8 border border-secondary">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">A Verdade Sobre os Leilões dos EUA</h3>
            </div>
            
            <ul className="space-y-3 mb-6">
              {[
                "E-book completo em formato PDF",
                "Guia de Recuperação Financeira",
                "E-book: Como identificar vendedores enganosos",
                "Áudio meditativo para ansiedade financeira",
                "Acesso à comunidade privada de apoio",
                "Atualizações gratuitas por 1 ano"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold line-through text-foreground/60">$197</span>
                <span className="bg-danger/10 text-danger text-xs px-2 py-1 rounded-full font-semibold">OFERTA ESPECIAL</span>
              </div>
              <div className="text-3xl font-bold mb-1">Apenas $97</div>
              <p className="text-sm text-foreground/70">Pagamento único • Sem assinaturas</p>
            </div>
            
            <div className="flex items-center gap-2 mb-6 p-3 bg-success/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-success shrink-0" />
              <p className="text-sm">Garantia de 30 dias ou seu dinheiro de volta, sem perguntas.</p>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <img src="/payment-methods.png" alt="Métodos de pagamento aceitos" className="h-8" />
              <p className="text-sm text-foreground/70">Pagamento seguro processado por Stripe</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 border border-secondary flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Checkout Seguro</h3>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="w-full p-4 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-lg shadow-lg transition-all mb-6"
            >
              FINALIZAR COMPRA AGORA
            </Button>
            
            <div className="text-center my-4">
              <p className="text-sm text-muted-foreground">Você será redirecionado para uma página segura de pagamento</p>
            </div>
            
            <div className="p-4 bg-muted/20 rounded-lg mb-6">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Produto:</span>
                <span>E-book + Bônus</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Preço normal:</span>
                <span className="line-through">$197.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total hoje:</span>
                <span>$97.00</span>
              </div>
            </div>
            
            <div className="mt-auto text-center">
              <div className="flex justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground/70">
                Seus dados estão protegidos. Conexão segura com criptografia SSL.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentSection;
