import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const SecretFiles = () => {
  return (
    <section id="files" className="section-padding bg-black border-t border-white/5">
      <div className="container">
        {/* Main Content - Image 5 */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Lock size={18} className="text-accent-red" />
              <span className="text-accent-gold text-[10px] tracking-[0.5em] font-bold uppercase">CLASSIFIED INFORMATION</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase leading-none" style={{ fontFamily: 'var(--font-cinematic)' }}>
              THE SECRET <br /> FILES
            </h2>
            
            <div className="mb-12">
              <p className="text-accent-gold text-xl md:text-2xl font-bold italic uppercase tracking-widest mb-4 leading-tight">
                INTERVIEWS. PRIVATE CONVERSATIONS. <br /> THE TRUTH ABOUT THE WORLD.
              </p>
              <div className="w-20 h-1 bg-accent-red" />
            </div>
            
            <p className="text-text-secondary max-w-md mb-12 leading-relaxed font-light text-lg">
              Encrypted access to the network's most sensitive data. Wisdom that cannot be shared on public platforms.
            </p>
            
            <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-5 text-[11px] tracking-[0.4em] font-bold text-white/60 hover:text-white hover:bg-white/[0.08] transition-all uppercase">
              LOCKED ACCESS <Lock size={14} className="opacity-50" />
            </button>
          </motion.div>

          {/* Document Visualization - Image 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[3/4] bg-[#0d0d0d] border border-white/10 p-12 shadow-[0_0_100px_rgba(0,0,0,1)] transform rotate-2 group-hover:rotate-0 transition-transform duration-1000">
              <div className="absolute top-6 right-8 flex gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent-red animate-pulse" />
              </div>
              
              <div className="h-full border border-white/5 flex flex-col items-center justify-center relative bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-12 group-hover:border-accent-gold/20 transition-colors">
                  <Lock size={24} className="text-white/10 group-hover:text-accent-gold/30 transition-colors" />
                </div>
                <div className="space-y-3 w-2/3">
                  <div className="h-0.5 w-full bg-white/5" />
                  <div className="h-0.5 w-3/4 bg-white/5" />
                  <div className="h-0.5 w-full bg-white/5" />
                </div>
                <span className="absolute bottom-12 text-[10px] tracking-[0.6em] text-white/20 font-bold uppercase">
                  BH_PROTOCOL_SECURED
                </span>
              </div>
            </div>
            
            {/* Subtle Atmosphere */}
            <div className="absolute inset-0 bg-accent-red/5 blur-[120px] -z-10 group-hover:bg-accent-red/10 transition-all duration-1000" />
          </motion.div>
        </div>

        {/* Brotherhood Statement - Image 6 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto text-center py-24 border-t border-white/10"
        >
          <div className="mb-16">
            <span className="text-white/20 text-[10px] tracking-[0.8em] uppercase font-bold">The Manifesto</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-12" style={{ fontFamily: 'var(--font-cinematic)' }}>
            BLACK HAWK ELITE NETWORK IS A <span className="text-accent-gold">PRIVATE BROTHERHOOD</span> OF MEN WHO UNITE TO ACHIEVE <span className="text-accent-red">MASCULINE EXCELLENCE</span>. 
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light text-white/80 tracking-[0.2em] uppercase">EVERY MEMBER <br /> IS A MESSAGE</p>
            </div>
            <div className="w-12 h-px bg-white/10 hidden md:block" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-light text-white/80 tracking-[0.2em] uppercase">CONTRIBUTING TO <br /> A BETTER FUTURE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecretFiles;
