
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  
  return (
    <section id="video" className="section-padding bg-white">
      <div className="container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A Verdade Chocante Que <span className="text-gradient">Escondem De Você</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Este vídeo revela o que os gurus de leilões americanos não querem que você saiba sobre o mercado que está destruindo sonhos e economias de famílias brasileiras.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-secondary/50"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="relative">
                <img 
                  src="/video-thumbnail.jpg" 
                  alt="Thumbnail do vídeo sobre a verdade dos leilões" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handlePlayClick}
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl transition-transform hover:scale-110"
                  >
                    <Play className="w-8 h-8 text-danger ml-1" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white text-left">
                    <p className="text-sm uppercase tracking-wider mb-1">Vídeo Exclusivo</p>
                    <h3 className="text-xl font-semibold">A verdade brutal sobre os leilões americanos</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="A Verdade Sobre os Leilões dos EUA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-8 p-6 rounded-lg bg-danger/5 border border-danger/10"
        >
          <p className="italic text-foreground/80 text-center">
            "Depois de assistir este vídeo, você nunca mais olhará para os leilões americanos da mesma forma. É hora de enfrentar a verdade, por mais dolorosa que seja."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
