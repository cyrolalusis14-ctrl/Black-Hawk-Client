import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      id: '01',
      title: 'BREAK FREE FROM THE MATRIX',
      description: 'Shatter comfort zones, dismantle destructive consumption patterns, and break the invisible shackles holding you back from greatness.'
    },
    {
      id: '02',
      title: 'ATONE WITH THE FATHER',
      description: 'Master essential survival and leadership skills. Learn to hunt and thrive in any environment while forging unbreakable brotherhood bonds.'
    },
    {
      id: '03',
      title: 'INTEGRATION OF THE NEW MAN',
      description: 'Apply your forged strengths in the real world. Solidify your new identity and step into a life of purpose, power, and masculine excellence.'
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-black">
      <div className="container">
        <div className="text-center mb-24">
          <span className="text-accent-gold text-[10px] tracking-[0.4em] font-bold uppercase block mb-3">THE PROTOCOL</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white uppercase leading-none" style={{ fontFamily: 'var(--font-cinematic)' }}>
            12-WEEK MASCULINE EXCELLENCE JOURNEY
          </h2>
          <div className="w-24 h-1 bg-accent-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#050505] border border-white/5 p-12 relative group hover:border-accent-gold/20 transition-all duration-500"
            >
              <div className="mb-4">
                <span className="text-accent-gold text-[11px] tracking-[0.3em] font-bold block mb-4 uppercase">
                  PROCESS {exp.id}
                </span>
                <h3 className="text-3xl mb-8 leading-tight text-white font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-cinematic)' }}>
                  {exp.title}
                </h3>
                <p className="text-text-secondary mb-12 leading-relaxed text-sm font-light">
                  {exp.description}
                </p>
                
                <button className="flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-accent-gold group-hover:text-white transition-colors uppercase">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
