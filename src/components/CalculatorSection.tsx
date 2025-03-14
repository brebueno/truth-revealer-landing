
import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CalculatorSection = () => {
  const [promisedProfit, setPromisedProfit] = useState(10000);
  const [hiddenFees, setHiddenFees] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [transportCosts, setTransportCosts] = useState(0);
  const [bankFees, setBankFees] = useState(0);
  const [surpriseCosts, setSurpriseCosts] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  
  useEffect(() => {
    // Calculate hidden costs automatically based on promised profit
    const calculatedHiddenFees = promisedProfit * 0.15;
    const calculatedTaxes = promisedProfit * 0.25;
    const calculatedTransport = promisedProfit * 0.12;
    const calculatedBankFees = promisedProfit * 0.05;
    const calculatedSurprise = promisedProfit * 0.18;
    
    setHiddenFees(calculatedHiddenFees);
    setTaxes(calculatedTaxes);
    setTransportCosts(calculatedTransport);
    setBankFees(calculatedBankFees);
    setSurpriseCosts(calculatedSurprise);
    
    // Calculate final result (negative represents loss)
    const totalCosts = calculatedHiddenFees + calculatedTaxes + calculatedTransport + 
                        calculatedBankFees + calculatedSurprise;
    setFinalResult(promisedProfit - totalCosts);
  }, [promisedProfit]);
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  return (
    <section id="calculator" className="section-padding bg-gradient-to-b from-secondary/30 to-white">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-primary mr-2" />
            <span className="text-sm font-medium">Calculadora da Realidade</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Calculadora da <span className="text-gradient">Realidade Cruel</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Descubra quanto você realmente pode perder quando os gurus prometem lucros fáceis. 
            Arraste o controle deslizante para ver a diferença entre promessa e realidade.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8 border border-secondary"
        >
          <div className="mb-8">
            <label htmlFor="profit-slider" className="block text-lg font-medium mb-2">
              Lucro prometido pelo guru:
            </label>
            <div className="flex items-center gap-4">
              <DollarSign className="w-6 h-6 text-primary" />
              <input
                type="range"
                id="profit-slider"
                min="1000"
                max="50000"
                step="1000"
                value={promisedProfit}
                onChange={(e) => setPromisedProfit(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-danger"
              />
              <span className="text-xl font-bold min-w-[120px]">
                {formatCurrency(promisedProfit)}
              </span>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center">
                <span className="text-foreground/80">Taxas escondidas:</span>
                <AlertCircle className="w-4 h-4 text-danger ml-2" />
              </div>
              <span className="font-semibold text-danger">-{formatCurrency(hiddenFees)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center">
                <span className="text-foreground/80">Impostos omitidos:</span>
                <AlertCircle className="w-4 h-4 text-danger ml-2" />
              </div>
              <span className="font-semibold text-danger">-{formatCurrency(taxes)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center">
                <span className="text-foreground/80">Custos de transporte:</span>
                <AlertCircle className="w-4 h-4 text-danger ml-2" />
              </div>
              <span className="font-semibold text-danger">-{formatCurrency(transportCosts)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center">
                <span className="text-foreground/80">Taxas bancárias:</span>
                <AlertCircle className="w-4 h-4 text-danger ml-2" />
              </div>
              <span className="font-semibold text-danger">-{formatCurrency(bankFees)}</span>
            </div>
            
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
              <div className="flex items-center">
                <span className="text-foreground/80">Custos surpresa:</span>
                <AlertCircle className="w-4 h-4 text-danger ml-2" />
              </div>
              <span className="font-semibold text-danger">-{formatCurrency(surpriseCosts)}</span>
            </div>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-dashed border-danger/50 bg-danger/5">
            <p className="text-center mb-2 text-foreground/70">Seu resultado final:</p>
            <div className="text-center">
              <span className={`text-3xl font-bold ${finalResult >= 0 ? 'text-success' : 'text-danger'}`}>
                {formatCurrency(finalResult)}
              </span>
            </div>
            <p className="text-center mt-4 italic text-sm text-foreground/70">
              Seu sonho de lucro de {formatCurrency(promisedProfit)} se transforma em {
                finalResult >= 0 ? `apenas ${formatCurrency(finalResult)}` : `um prejuízo de ${formatCurrency(Math.abs(finalResult))}`
              }
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-xl font-medium mb-8">
            Esta é a realidade que os gurus não querem que você conheça. Proteja seu dinheiro antes que seja tarde.
          </p>
          <a href="#offer" className="cta-button inline-block">
            Quero proteger meu dinheiro agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CalculatorSection;
