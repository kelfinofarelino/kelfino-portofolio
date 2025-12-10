export default function Footer() {
  return (
    <footer className="bg-brand-dark-charcoal py-16 border-t border-white/5">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center">
            <a href="#home" className="text-3xl font-extrabold text-white mb-5">FARELINO <span className="text-brand-red">KELFINO</span></a>
            <div className="flex gap-4 mb-6">
                         <a href="https://www.linkedin.com/in/farelino-kelfin-117637ab/" target="_blank" className="w-[45px] h-[45px] bg-[#2a2a2a]/70 text-white rounded-full flex items-center justify-center hover:bg-brand-red hover:-translate-y-1 transition-all"><i className="fab fa-linkedin-in"></i></a>
                         <a href="https://github.com/kelfinofarelino" target="_blank" className="w-[45px] h-[45px] bg-[#2a2a2a]/70 text-white rounded-full flex items-center justify-center hover:bg-brand-red hover:-translate-y-1 transition-all"><i className="fab fa-github"></i></a>
                         <a href="http://instagram.com/farelino.kelfino/" target="_blank" className="w-[45px] h-[45px] bg-[#2a2a2a]/70 text-white rounded-full flex items-center justify-center hover:bg-brand-red hover:-translate-y-1 transition-all"><i className="fab fa-instagram"></i></a>
                    </div>
            <p className="text-brand-gray text-sm text-center">VERSION 1.0 2025 | FARELINO KELFINO</p>
        </div>
    </footer>
  );
}