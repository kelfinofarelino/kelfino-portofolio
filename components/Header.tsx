"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 250)) {
          const id = section.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionId = (menuName: string) => {
    if (menuName === 'Work') return 'featured';
    return menuName.toLowerCase();
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] py-6 animate-fade-in-down
      ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-dark-red/20 py-4' : 'bg-transparent'}
      `}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-5 flex justify-between items-center relative">
        
        <a href="#home" className="flex items-center gap-3 group z-[10001] cursor-pointer">
            
            <div className="relative w-10 h-10 md:w-12 md:h-12">
                <div className="absolute inset-0 bg-brand-red rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 ease-out"></div>
                
                <div className="relative w-full h-full rounded-full border-2 border-white/10 group-hover:border-brand-red overflow-hidden bg-white/10 backdrop-blur-sm transition-colors duration-300 shadow-lg">
                    <img 
                        src="/assets/image/icon.png" 
                        alt="Logo Kelfino" 
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]" 
                    />
                </div>
            </div>

            <div className="flex flex-col relative">
                <span className="text-xl md:text-2xl font-extrabold text-white leading-none">
                    FARELINO <span className="text-brand-red">KELFINO.</span>
                </span>
                <span className="absolute -bottom-1 left-0 w-6 h-[3px] bg-brand-red transition-all duration-500 ease-out group-hover:w-full"></span>
            </div>
        </a>
        
        <div className="md:hidden text-white text-2xl cursor-pointer z-[10001]" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={`fixed md:relative top-0 ${menuOpen ? 'right-0' : '-right-full'} md:right-0 w-4/5 md:w-auto h-screen md:h-auto bg-[#0a0a0a]/95 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 pt-24 md:pt-0 transition-all duration-300 border-l border-brand-red/20 md:border-none backdrop-blur-xl md:backdrop-blur-none z-[10000]`}>
          {['Home', 'Skills', 'Journey', 'Work', 'About', 'Contact'].map((item) => {
             const sectionId = getSectionId(item);
             const isActive = activeSection === sectionId;
             return (
               <li key={item}>
                 <a href={`#${sectionId}`} 
                    className={`text-white font-semibold text-[0.95rem] tracking-wide hover:text-brand-light-red transition-colors relative group ${isActive ? 'text-brand-light-red' : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`}></span>
                 </a>
               </li>
             );
          })}
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