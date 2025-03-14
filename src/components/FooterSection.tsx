
import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">A Verdade Sobre os Leilões</h3>
              <p className="text-white/70 mb-4">
                Ajudamos pessoas a evitarem armadilhas financeiras e a tomarem decisões informadas sobre investimentos em leilões.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#video" className="text-white/70 hover:text-white transition-colors">Vídeo Revelador</a></li>
                <li><a href="#pain" className="text-white/70 hover:text-white transition-colors">Histórias Reais</a></li>
                <li><a href="#calculator" className="text-white/70 hover:text-white transition-colors">Calculadora da Realidade</a></li>
                <li><a href="#offer" className="text-white/70 hover:text-white transition-colors">O E-book</a></li>
                <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <p className="text-white/70 mb-2">
                Para dúvidas, suporte ou reembolsos:
              </p>
              <a href="mailto:suporte@verdadeleiloes.com" className="text-white hover:underline">
                suporte@verdadeleiloes.com
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p className="mb-3">
              &copy; {currentYear} A Verdade Sobre os Leilões. Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="/reembolso" className="hover:text-white transition-colors">Política de Reembolso</a>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 rounded-lg text-white/80 text-sm text-center">
            <p>
              Este e-book tem caráter informativo e educacional. Não garantimos resultados específicos, pois estes dependem de diversos fatores individuais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
