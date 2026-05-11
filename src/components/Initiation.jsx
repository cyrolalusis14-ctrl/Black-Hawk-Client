import React from 'react';
import { motion } from 'framer-motion';

const Initiation = () => {
  return (
    <section id="initiation" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/assets/initiation-bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
      </div>

      <div className="container relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 
            className="text-white font-bold mb-12 tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6.2rem)', fontFamily: 'var(--font-cinematic)' }}
          >
            MASCULINE EXCELLENCE <br />
            INITIATION
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            This is not for everyone. We seek the few who are willing to sacrifice who they are for who they could become.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#application" className="btn-red px-16 py-6 text-base">
              APPLY FOR INITIATION
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Initiation;
