import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const SecretFiles = () => {
  return (
    <section id="files" className="section-padding bg-black border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Lock size={20} className="text-accent-red" />
              <span className="text-accent-gold text-[10px] tracking-[0.4em] font-bold uppercase">CLASSIFIED INFORMATION</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight uppercase" style={{ fontFamily: 'var(--font-cinematic)' }}>THE SECRET FILES</h2>
            
            <p className="text-accent-gold text-lg md:text-xl font-bold italic uppercase tracking-widest mb-8 leading-tight">
              INTERVIEWS. PRIVATE CONVERSATIONS. <br /> THE TRUTH ABOUT THE WORLD.
            </p>
            
            <p className="text-text-secondary max-w-md mb-12 leading-relaxed font-light">
              Encrypted access to the network's most sensitive data. Wisdom that cannot be shared on public platforms.
            </p>
            
            <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 text-[10px] tracking-[0.3em] font-bold text-white/60 hover:text-white transition-all uppercase">
              LOCKED <Lock size={12} className="opacity-50" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            {/* Folder/Document Visualization */}
            <div className="relative aspect-[3/4] bg-[#0d0d0d] border border-white/10 p-8 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-red/40" />
                <div className="w-2 h-2 rounded-full bg-accent-red" />
              </div>
              <div className="h-full border border-white/5 flex flex-col items-center justify-center relative">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center opacity-20 mb-8">
                  <div className="w-4 h-4 border border-white/20" />
                </div>
                <span className="absolute bottom-12 text-[10px] tracking-[0.4em] text-white/20 font-bold uppercase">
                  ENCRYPTED_DATA_092
                </span>
              </div>
            </div>
            
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-accent-red/5 blur-3xl -z-10 group-hover:bg-accent-red/10 transition-all" />
          </motion.div>
        </div>

        {/* Brotherhood Statement - Image 6 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center pt-20 border-t border-white/5"
        >
          <p className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider leading-relaxed" style={{ fontFamily: 'var(--font-cinematic)' }}>
            BLACK HAWK ELITE NETWORK A PRIVATE BROTHERHOOD OF MEN WHO <br className="hidden md:block" />
            UNITE TO ACHIEVE <span className="text-accent-gold">MASCULINE EXCELLENCE</span>. EVERY MEMBER IS A <br className="hidden md:block" />
            MESSAGE. EVERY MEMBER CONTRIBUTES TO A BETTER FUTURE.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecretFiles;
