import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container text-center">
        <div className="text-3xl font-bold text-accent-gold mb-12 tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-cinematic)', color: 'var(--accent-gold)' }}>
          BLACK HAWK ELITE
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
          <a href="#" className="hover:text-accent-gold transition-colors">SIGN IN / CONNECT</a>
          <a href="#" className="hover:text-accent-gold transition-colors">URGENCY PROTOCOL</a>
          <a href="#" className="hover:text-accent-gold transition-colors">TERMS OF THE JOURNEY</a>
          <a href="#" className="hover:text-accent-gold transition-colors">CONTACT CHANNELS</a>
        </div>
        
        <div className="text-[9px] tracking-[0.4em] text-white/20 uppercase">
          © {new Date().getFullYear()} BLACK HAWK ELITE NETWORK. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
