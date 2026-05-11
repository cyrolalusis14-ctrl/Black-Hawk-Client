import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        scrolled ? 'py-4 bg-black/90 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="text-xl tracking-[0.2em] font-bold cinematic-text text-white">
          BLACK HAWK ELITE
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase tracking-[0.4em] font-bold">
          <NavLink href="#experiences">Journey</NavLink>
          <NavLink href="#initiation">Initiation</NavLink>
          <NavLink href="#masterclasses">Masterclasses</NavLink>
          <NavLink href="#files">Files</NavLink>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="#application"
            className="hidden sm:block btn-red py-3 px-8 text-[11px] font-bold"
          >
            REQUEST ACCESS
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 border-b border-white/5 overflow-hidden"
          >
            <div className="container py-12 flex flex-col gap-8 text-center text-[12px] uppercase tracking-[0.5em] font-bold">
              <a href="#experiences" onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">Journey</a>
              <a href="#initiation" onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">Initiation</a>
              <a href="#masterclasses" onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">Masterclasses</a>
              <a href="#files" onClick={() => setIsOpen(false)} className="hover:text-accent-gold transition-colors">Files</a>
              <a 
                href="#application" 
                onClick={() => setIsOpen(false)}
                className="btn-red py-4 mt-4"
              >
                REQUEST ACCESS
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
