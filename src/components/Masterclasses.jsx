import React from 'react';
import { motion } from 'framer-motion';

const Masterclasses = () => {
  const modules = [
    { title: 'NETWORK LIKE A MAFIA' },
    { title: "THE HERO'S JOURNEY" },
    { title: '7-FIGURE EMPIRE' },
    { title: 'GREEK GOD' }
  ];

  return (
    <section id="masterclasses" className="section-padding bg-[#050505]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="flex-1">
            <span className="text-accent-gold text-[10px] tracking-[0.4em] font-bold uppercase block mb-4">THE REPOSITORY</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">EXCLUSIVE MASTERCLASSES INSIDE</h2>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] tracking-[0.3em] font-bold uppercase flex items-center gap-4">
              <span className="text-white/40">PROPRIETARY WISDOM</span>
              <span className="text-white/20">/</span>
              <span className="text-accent-gold">LEVEL 01 ACCESS</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-square bg-[#050505] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              
              {/* Card Image Background */}
              <div 
                className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0"
                style={{ backgroundImage: 'url(/assets/masterclass-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              
              <div className="relative h-full p-8 flex flex-col justify-end z-20">
                <span className="text-accent-gold text-[10px] tracking-[0.2em] font-bold mb-2">00{index + 1}</span>
                <h3 className="text-lg text-white font-bold tracking-wider group-hover:text-accent-gold transition-colors uppercase leading-tight">
                  {module.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
          
          <div className="aspect-square flex flex-col items-center justify-center border border-white/5 bg-white/[0.02] p-8 text-center group cursor-pointer hover:bg-white/[0.04] transition-all">
            <span className="text-accent-gold cinematic-text text-xl tracking-[0.2em] mb-2">+6 MORE MODULES</span>
            <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase">BIOHACKING / WEALTH / TACTICS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclasses;
