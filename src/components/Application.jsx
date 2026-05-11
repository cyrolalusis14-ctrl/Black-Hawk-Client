import React from 'react';
import { motion } from 'framer-motion';

const Application = () => {
  return (
    <section id="application" className="section-padding bg-[#050505]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-gold text-[10px] tracking-[0.4em] font-bold uppercase block mb-4">JOIN THE NETWORK</span>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-12 uppercase tracking-tight leading-tight">
              JOIN THE WAITLIST BELOW TO GET MORE DETAILS.
            </h2>
            
            <p className="text-text-secondary mb-12 leading-relaxed max-w-md">
              Black Hawk Elite Network has a strict application process. We only accept Men we can truly rely on. Our vetting is thorough, and our standards are non-negotiable.
            </p>
            
            <div className="flex items-center gap-4 text-accent-red font-bold tracking-[0.3em] text-[10px] bg-accent-red/5 p-6 border border-accent-red/20 uppercase">
              <div className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />
              CURRENT STATUS: ENROLLMENT RESTRICTED
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormGroup label="Full Name" type="text" placeholder="John Doe" />
              <FormGroup label="Instagram" type="text" placeholder="@username" />
              <FormGroup label="Occupation" type="text" placeholder="CEO / Founder" />
              <FormGroup label="Mobile Number" type="tel" placeholder="+1..." />
              <div className="md:col-span-2">
                <FormGroup label="Email" type="email" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2">
                <FormGroup label="Why do you want access?" type="textarea" placeholder="Tell us about your goals..." />
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="button" className="btn-red w-full py-5">
                  SUBMIT APPLICATION
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
  <div className="space-y-3">
    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent-gold/60">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="input-field"
    />
  </div>
);

export default Application;
