export default function Journey() {
  const items = [
    { year: '2020-2022', title: 'SMP N 1 NGAGLIK YOUTUBE', role: 'Content Manager', desc: 'Manage the end-to-end video production cycle.', img: 'banner1.png', logo: 'logo1.jpg' },
    { year: '2021-2023', title: 'Kalimasada Creative Group', role: 'Founder & Mentor', desc: 'Spearheaded a student filmmaking community.', img: 'banner2.png', logo: 'logo2.jpg' },
    { year: '2021-2024', title: 'SMA N 2 SLEMAN YOUTUBE', role: 'Content Manager', desc: 'Manage video production for official events.', img: 'banner3.png', logo: 'logo3.jpg' },
    { year: '2023', title: 'HUT RI-78 Kapanewon Sleman', role: 'Event Documenter', desc: 'Executed official event coverage.', img: 'banner4.png', logo: 'logo4.jpg' },
    { year: '2025 - Current', title: 'SaaSina.com', role: 'Chief Marketing Officer', desc: 'Formulated go-to-market strategies.', img: 'banner5.png', logo: 'logo5.jpg' },
  ];

  return (
    <section id="journey" className="py-24 bg-brand-dark-charcoal relative">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block mb-16 after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-brand-red after:to-brand-light-red animate-on-scroll">MY JOURNEY</h2>
        
        <div className="timeline relative max-w-[1000px] mx-auto">
          {items.map((item, index) => (
            <div key={index} className={`timeline-item flex ${index % 2 === 0 ? 'justify-center md:justify-start md:pr-[calc(50%+30px)]' : 'justify-center md:justify-end md:pl-[calc(50%+30px)]'} mb-16 relative pl-[70px] md:pl-0 animate-on-scroll`}>
              
              {/* --- LOGO DI TENGAH GARIS (NEW) --- */}
              {/* Posisi: Mobile di kiri (30px), Desktop di tengah (50%) */}
              <div className="absolute top-0 left-[30px] -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-brand-dark overflow-hidden z-20 shadow-lg bg-white">
                 <img src={`/assets/image/${item.logo}`} alt="Logo" className="w-full h-full object-contain" />
              </div>
              
              {/* Kartu Konten */}
              <div className="timeline-content relative w-full max-w-[500px] bg-brand-charcoal rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl transition-all">
                <div className="w-full h-[200px] bg-[#333]">
                  <img src={`/assets/image/${item.img}`} alt="Banner" className="w-full h-full object-cover"/>
                </div>
                <div className="p-5 flex items-start gap-5">
                  <div className="grow">
                    <div className="text-brand-light-red font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-brand-light-red font-semibold text-sm tracking-wide mb-4">{item.role}</div>
                    <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}