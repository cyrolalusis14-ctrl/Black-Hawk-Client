import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Journey = () => {
  const processes = [
    {
      id: '01',
      label: 'PROCESS 01',
      title: 'BREAK FREE FROM THE MATRIX',
      description: 'Shatter comfort zones, eliminate destructive consumption patterns, and break free from distractions holding you back from greatness.',
    },
    {
      id: '02',
      label: 'PROCESS 02',
      title: 'ATONE WITH THE FATHER',
      description: 'Master essential survival and leadership skills. Learn to hunt and thrive in any environment while deepening brotherhood bonds.',
    },
    {
      id: '03',
      label: 'PROCESS 03',
      title: 'INTEGRATION OF THE NEW MAN',
      description: 'Apply your forged strengths in the real world. Build presence, leadership and stop living a life of passive comfort.',
    },
  ];

  return (
    <section id="journey" className="section-padding bg-black">
      <div className="container">
        <div className="text-center mb-24">
          <span className="label-small">THE PROTOCOL</span>
          <h2 className="text-5xl mb-6">12-WEEK MASCULINE EXCELLENCE JOURNEY</h2>
          <div className="w-24 h-1 bg-accent-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover relative bg-bg-card p-12 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-accent-red text-xs tracking-[0.3em] font-bold block mb-4">
                  {process.label}
                </span>
                <h3 className="text-2xl mb-6 leading-tight text-white font-bold">
                  {process.title}
                </h3>
                <p className="text-text-secondary mb-10 leading-relaxed text-sm">
                  {process.description}
                </p>
                
                <button className="flex items-center gap-3 text-xs tracking-[0.2em] font-bold text-white hover:text-accent-red transition-colors uppercase">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>

              <div className="absolute top-4 right-4 text-7xl font-bold text-white/[0.03] cinematic-text pointer-events-none">
                {process.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .protocol-card { position: relative; height: 100%; transition: transform 0.4s ease; }
        .protocol-card:hover { transform: translateY(-10px); }
        .grid { display: grid; gap: 2rem; }
        @media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }
      `}} />
    </section>
  );
};

export default Journey;
