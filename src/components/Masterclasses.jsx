import React from 'react';
import { motion } from 'framer-motion';

const Masterclasses = () => {
  const modules = [
    { title: 'NETWORK LIKE A MAFIA', image: '/assets/masterclass-1.png' },
    { title: "THE HERO'S JOURNEY", image: '/assets/masterclass-2.png' },
    { title: '7-FIGURE EMPIRE', image: '/assets/masterclass-3.png' },
    { title: 'GREEK GOD', image: '/assets/masterclass-4.png' }
  ];

  return (
    <section id="masterclasses" className="section-padding bg-black">
      <div className="container">
        {/* Header Section - Image 1 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex-1">
            <span className="text-accent-gold text-[10px] tracking-[0.4em] font-bold uppercase block mb-3">THE REPOSITORY</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-none" style={{ fontFamily: 'var(--font-cinematic)' }}>
              EXCLUSIVE MASTERCLASSES INSIDE
            </h2>
          </div>
          <div className="md:text-right pb-1">
            <div className="text-[10px] tracking-[0.3em] font-bold uppercase flex items-center gap-4">
              <span className="text-white/40">PROPRIETARY WISDOM</span>
              <span className="text-white/20">/</span>
              <span className="text-accent-gold">LEVEL 01 ACCESS</span>
            </div>
          </div>
        </div>

        {/* Grid Section - Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-square bg-[#0a0a0a] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
              
              {/* Card Image Background */}
              <div 
                className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity grayscale group-hover:grayscale-0"
                style={{ 
                  backgroundImage: `url(${module.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              
              <div className="relative h-full p-8 flex flex-col justify-end z-20">
                <span className="text-accent-gold text-[11px] tracking-[0.2em] font-bold mb-1">00{index + 1}</span>
                <h3 className="text-lg text-white font-bold tracking-wider group-hover:text-accent-gold transition-colors uppercase leading-tight" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  {module.title}
                </h3>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
          
          {/* +6 More Modules Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="aspect-square flex flex-col items-start justify-end bg-[#050505] p-8 group cursor-pointer hover:bg-[#0a0a0a] transition-all border border-white/5"
          >
            <span className="text-accent-gold font-bold text-2xl tracking-[0.1em] mb-2 uppercase" style={{ fontFamily: 'var(--font-cinematic)' }}>
              +6 MORE MODULES
            </span>
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-bold">
              BIOHACKING / WEALTH / TACTICS
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Masterclasses;
