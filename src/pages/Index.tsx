
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import PainSection from '../components/PainSection';
import CalculatorSection from '../components/CalculatorSection';
import WhySection from '../components/WhySection';
import OfferSection from '../components/OfferSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import PaymentSection from '../components/PaymentSection';
import FooterSection from '../components/FooterSection';
import ExitPopup from '../components/ExitPopup';

// Import framer-motion
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

// Import lucide-react icons we'll be using
<lov-add-dependency>@radix-ui/react-toast@1.1.4</lov-add-dependency>

const Index = () => {
  // Add lazy loading for images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            image.classList.add('animate-fade-in-slow');
            observer.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <PainSection />
      <CalculatorSection />
      <WhySection />
      <OfferSection />
      <TestimonialsSection />
      <FAQSection />
      <PaymentSection />
      <FooterSection />
      <ExitPopup />
      
      {/* Back to top button */}
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-8 right-8 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-40"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.a>
    </div>
  );
};

export default Index;
