"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-dark-red/20 py-4' : 'bg-transparent'}`}>
      <div className="w-[90%] max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold text-white flex items-center relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-[3px] after:bg-brand-red">
          FARELINO <span className="text-brand-red ml-1">KELFINO.</span>
        </a>
        
        <div className="md:hidden text-white text-2xl cursor-pointer z-[1001]" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={`fixed md:relative top-0 ${menuOpen ? 'right-0' : '-right-full'} md:right-0 w-4/5 md:w-auto h-screen md:h-auto bg-brand-dark/98 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 pt-24 md:pt-0 transition-all duration-300 border-l border-brand-red/20 md:border-none backdrop-blur-md md:backdrop-blur-none md:flex`}>
          {['Home', 'Journey', 'Work', 'About', 'Contact'].map((item) => (
             <li key={item}>
               <a href={`#${item.toLowerCase() === 'work' ? 'featured' : item.toLowerCase()}`} 
                  className="text-white font-semibold text-[0.95rem] tracking-wide hover:text-brand-light-red transition-colors relative group"
                  onClick={() => setMenuOpen(false)}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
               </a>
             </li>
          ))}
          <li className="hidden md:block ml-6">
            <span className="bg-brand-dark-red/20 text-brand-light-red px-4 py-2 rounded-full border border-brand-light-red/30 text-xs font-semibold tracking-wider">
              AVAILABLE
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}