export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-charcoal relative">
        <div className="w-[90%] max-w-[1200px] mx-auto px-5">
            <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block mb-16 after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-brand-red after:to-brand-light-red animate-on-scroll">ABOUT ME</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="animate-on-scroll order-2 lg:order-1">
                    <h3 className="text-3xl font-bold mt-8 mb-6 text-white">
                        <strong>Leveling Up in Tech ᗧ•••👻</strong>
                    </h3>
                    <p className="text-brand-gray mb-6 text-lg leading-relaxed">
                        Hi, I'm Farelino Kelfin, a Computer Science student ('24) based in Yogyakarta with a passion for growth.
                    </p>
                    <p className="text-brand-gray mb-10 text-lg leading-relaxed">
                        From Lens to Logic: Transitioning from capturing moments behind the lens to building systems behind the screen, I combine my creative background in videography/content management with my current journey in software engineering.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        {[
                            { num: '40+', label: 'Projects Completed' },
                            { num: '25+', label: 'Happy Clients' },
                            { num: '4+', label: 'Years Experience' },
                            { num: '15+', label: 'Technologies Used' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-[#2a2a2a]/50 rounded-lg border border-white/5 hover:-translate-y-1 hover:border-brand-red/30 transition-all">
                                <div className="text-4xl font-extrabold text-brand-red mb-2">{stat.num}</div>
                                <div className="text-brand-gray font-semibold text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="animate-on-scroll order-1 lg:order-2">
                    <div className="relative w-full max-w-[500px] mx-auto group">
                        <img src="/assets/image/about.png" alt="About" className="w-full h-auto rounded-2xl shadow-2xl shadow-black/40 contrast-110 transition-transform duration-400 group-hover:scale-105"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}