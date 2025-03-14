
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  useEffect(() => {
    let timeout;
    
    const handleMouseLeave = (e) => {
      // Only trigger when the mouse moves to the top of the page
      if (e.clientY <= 5 && !hasShown) {
        timeout = setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
        }, 500);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [hasShown]);
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-xl shadow-2xl p-8 max-w-lg relative"
          >
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-danger/10 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-danger" />
              </div>
              <h3 className="text-2xl font-bold mb-2">ESPERE!</h3>
              <p className="text-danger font-semibold">
                Mais uma pessoa acaba de perder tudo em leilões enquanto você lê isto...
              </p>
            </div>
            
            <p className="text-foreground/80 mb-6">
              Não deixe que isso aconteça com você. Proteja suas economias agora com as informações reveladoras que os "gurus" não querem que você saiba.
            </p>
            
            <div className="bg-secondary/30 p-4 rounded-lg mb-6">
              <p className="font-medium text-center">
                Desconto especial de última chance: <span className="line-through">$97</span> <span className="text-danger font-bold">$67</span>
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a 
                href="#payment" 
                onClick={() => setIsVisible(false)}
                className="cta-button block text-center"
              >
                QUERO PROTEGER MEU DINHEIRO
              </a>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="text-foreground/60 hover:text-foreground"
              >
                Não, prefiro arriscar perder minhas economias
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;
