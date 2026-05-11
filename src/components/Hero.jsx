import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url("/assets/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/40 to-transparent" />
      <div className="vignette z-2" />
      
      {/* Animated Fog Effect */}
      <div className="absolute inset-0 z-1 opacity-20 pointer-events-none smoke-effect" />

      <div className="container relative z-10 text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="label-gold">PRIVATE NETWORK</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-bold tracking-tight mb-8 uppercase"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 6.5rem)', lineHeight: '0.9', fontFamily: 'var(--font-cinematic)' }}
          >
            BLACK HAWK <br />
            ELITE NETWORK
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-xl leading-relaxed font-light"
          >
            A brotherhood of high caliber Men dedicated to unlocking their true potential through transformative coaching and camaraderie.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-l-4 border-accent-red pl-8 mb-16"
          >
            <p className="text-xl md:text-2xl font-bold text-white uppercase italic tracking-wider leading-snug">
              JOIN OUR ELITE BROTHERHOOD & UNLOCK YOUR TRUE MASCULINE POTENTIAL: <br />
              <span className="text-white">A FREE 12-WEEK SELF-MASTERY PROGRAM FOR MASCULINE EXCELLENCE.</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="#experiences" className="btn-red px-12 py-5">
              LEARN ABOUT THE JOURNEY
            </a>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .smoke-effect {
          background-image: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%);
          animation: drift 20s infinite linear;
        }
        @keyframes drift {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(20px, 10px); }
          100% { transform: scale(1) translate(0, 0); }
        }
      `}} />
    </section>
  );
};

export default Hero;
