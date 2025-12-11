"use client";

const projectsData = [
    {
        id: 'SAD',
        title: 'Stroke Analysis Data',
        role: 'Data Analytics',
        img: '/assets/image/project1.png',
        desc: 'Health data analysis using Python & Pandas for stroke prediction.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
        linkCode: 'https://github.com/kelfinofarelino/', 
    },
    {
        id: 'DONOXYGEN',
        title: 'Donoxygen',
        role: 'UI/UX, Front End',
        img: '/assets/image/project2.png',
        desc: 'A community platform for replanting trees through donations to restore oxygen.',
        tech: ['Figma', 'HTML', 'CSS', 'JS', 'Bootstrap', 'PHP'],
        linkCode: 'https://github.com/kelfinofarelino/donoxygen-website',
    },
    {
        id: 'BMS',
        title: 'Bakery Management System',
        role: 'Marketing & Strategy',
        img: '/assets/image/project3.png',
        desc: 'A SaaS platform to streamline bakery operations and boost sales.',
        tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'PHP'],
        linkCode: 'https://github.com/kelfinofarelino/bakery-management-system',
    }
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-24 bg-brand-dark-charcoal relative">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 animate-on-scroll gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-brand-red after:to-brand-light-red">
                FEATURED WORK
            </h2>
            
            {/* LINK KE PROFIL GITHUB UTAMA */}
            <a 
                href="https://github.com/kelfinofarelino?tab=repositories" 
                target="_blank" 
                className="text-brand-light-red hover:text-white font-bold text-lg flex items-center transition-colors group"
            >
                VIEW MORE ON GITHUB <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </a>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
                <div key={project.id} className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2.5 hover:border-brand-red transition-all duration-400 flex flex-col h-full animate-on-scroll">
                    
                    {/* Image Link (Klik gambar juga bisa ke Github) */}
                    <a href={project.linkCode} target="_blank" className="h-[220px] w-full overflow-hidden relative block cursor-pointer">
                        <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </a>

                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-[#EA3232] font-syne mb-2.5">{project.title}</h3>
                        
                        <div className="text-brand-gray text-[0.95rem] leading-relaxed mb-5 flex-grow">
                            <strong className="text-brand-red block mb-2">{project.role}</strong>
                            <p className="mb-4">{project.desc}</p>
                            
                            {/* Tech Stack Tags (Opsional, biar kelihatan skillnya) */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.slice(0, 4).map((t, i) => (
                                    <span key={i} className="text-[10px] bg-white/5 px-2 py-1 rounded text-brand-gray border border-white/5">{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* TOMBOL LINK LANGSUNG KE GITHUB PROYEK */}
                        <a 
                            href={project.linkCode} 
                            target="_blank" 
                            className="text-brand-red font-bold text-sm uppercase self-start hover:text-brand-light-red hover:tracking-wide transition-all flex items-center gap-2 mt-4"
                        >
                            VIEW PROJECT <i className="fas fa-chevron-right text-xs"></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}