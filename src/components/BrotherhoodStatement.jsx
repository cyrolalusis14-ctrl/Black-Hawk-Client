import React from 'react';
import { motion } from 'framer-motion';

const BrotherhoodStatement = () => {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="mb-12">
            <span className="text-text-muted tracking-[0.5em] text-sm uppercase">Black Hawk Elite Network</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl leading-[1.2] mb-12">
            A PRIVATE BROTHERHOOD OF MEN WHO <br />
            UNITE TO ACHIEVE <span className="text-accent-red glow-text">MASCULINE EXCELLENCE</span>.
          </h2>
          
          <div className="w-16 h-0.5 bg-accent-gold mx-auto mb-12" />
          
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl tracking-widest font-light text-white/80">
              EVERY MEMBER IS A MESSAGE.
            </p>
            <p className="text-2xl md:text-3xl tracking-widest font-light text-white/80">
              EVERY MEMBER CONTRIBUTES TO A BETTER FUTURE.
            </p>
          </div>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .glow-text {
          text-shadow: 0 0 20px rgba(139, 0, 0, 0.5);
          color: var(--accent-red);
        }
      `}} />
    </section>
  );
};

export default BrotherhoodStatement;
