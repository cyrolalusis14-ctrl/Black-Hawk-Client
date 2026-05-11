import React from 'react';
import { motion } from 'framer-motion';

const Application = () => {
  return (
    <section id="application" className="section-padding bg-black border-t border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold text-[10px] tracking-[0.5em] font-bold uppercase block mb-6">ENROLLMENT PHASE</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-12 uppercase tracking-tighter leading-none text-white" style={{ fontFamily: 'var(--font-cinematic)' }}>
              JOIN THE <br /> WAITLIST BELOW
            </h2>
            
            <p className="text-text-secondary mb-12 leading-relaxed max-w-md font-light text-lg">
              Black Hawk Elite Network has a strict application process. We only accept Men we can truly rely on. Our vetting is thorough, and our standards are non-negotiable.
            </p>
            
            <div className="inline-flex items-center gap-6 text-accent-red font-bold tracking-[0.4em] text-[10px] bg-accent-red/5 px-8 py-6 border border-accent-red/10 uppercase">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-red"></span>
              </div>
              CURRENT STATUS: ENROLLMENT RESTRICTED
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#050505] p-12 md:p-16 border border-white/5 shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              <FormGroup label="Full Name" type="text" placeholder="IDENTITY" />
              <FormGroup label="Instagram" type="text" placeholder="@USERNAME" />
              <FormGroup label="Occupation" type="text" placeholder="DISCIPLINE" />
              <FormGroup label="Mobile" type="tel" placeholder="CONTACT" />
              <div className="md:col-span-2">
                <FormGroup label="Email" type="email" placeholder="SECURE CHANNEL" />
              </div>
              <div className="md:col-span-2 pt-6">
                <button type="button" className="btn-red w-full py-6 text-[12px] tracking-[0.4em] hover:scale-[1.02] active:scale-[0.98]">
                  REQUEST ACCESS
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FormGroup = ({ label, type, placeholder }) => (
  <div className="group">
    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent-gold block mb-2 opacity-60 group-focus-within:opacity-100 transition-opacity">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="input-field border-b-white/10 focus:border-b-accent-gold text-sm tracking-widest placeholder:text-white/10 uppercase"
    />
  </div>
);

export default Application;
