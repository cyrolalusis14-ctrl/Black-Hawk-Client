import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none' }}
    >
      <div className="container flex items-center justify-between">
        <div className="text-xl tracking-[0.2em] font-bold cinematic-text text-white">
          BLACK HAWK ELITE
        </div>
        
        <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold">
          <NavLink href="#experiences">Journey</NavLink>
          <NavLink href="#initiation">Initiation</NavLink>
          <NavLink href="#masterclasses">Masterclasses</NavLink>
          <NavLink href="#files">Files</NavLink>
        </div>

        <a 
          href="#application"
          className="btn-red py-3 px-8 text-[11px] font-bold"
        >
          REQUEST ACCESS
        </a>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link { position: relative; color: #fff; transition: color 0.3s ease; }
        .nav-link:hover { color: var(--accent-gold); }
        .nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -8px; left: 0; background: var(--accent-gold); transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
      `}} />
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="nav-link px-6 hover:text-accent-gold transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
