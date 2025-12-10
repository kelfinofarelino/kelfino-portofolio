"use client";
import { useState } from 'react';

// Database Proyek (Sama seperti di HTML)
const projectsData: any = {
    'SAD': {
        title: 'Stroke Analysis Data',
        role: 'Data Analytics',
        img: '/assets/image/project1.png',
        desc: 'Health data analysis using Python & Pandas for stroke prediction.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
        linkCode: '#',
        linkLive: '#'
    },
    'DONOXYGEN': {
        title: 'DONOXYGEN',
        role: 'UI/UX, Front End',
        img: '/assets/image/project2.png',
        desc: 'A community platform for replanting trees through donations to restore oxygen.',
        tech: ['Figma', 'HTML', 'CSS', 'JS'],
        linkCode: '#',
        linkLive: '#'
    },
    'Saasina': {
        title: 'Saasina Business Plan',
        role: 'Marketing Planner',
        img: '/assets/image/project3.png',
        desc: 'Business strategy and marketing content for digital startups.',
        tech: ['Marketing', 'SEO', 'Content Strategy'],
        linkCode: '#',
        linkLive: '#'
    }
};

export default function FeaturedWork() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);

  const openProject = (id: string) => {
    setActiveProject(projectsData[id]);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="featured" className="py-24 bg-brand-dark-charcoal relative">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <div className="flex justify-between items-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-brand-red after:to-brand-light-red">FEATURED WORK</h2>
            <a href="#" className="text-brand-light-red hover:text-white font-bold text-lg flex items-center transition-colors group">
                VIEW MORE <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.keys(projectsData).map((key) => {
                const project = projectsData[key];
                return (
                    <div key={key} className="group bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2.5 hover:border-brand-red transition-all duration-400 flex flex-col h-full animate-on-scroll">
                        <div className="h-[220px] w-full overflow-hidden relative">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-[#EA3232] font-syne mb-2.5">{project.title}</h3>
                            <p className="text-brand-gray text-[0.95rem] leading-relaxed mb-5 flex-grow">
                                <strong className="text-brand-red">{project.role}</strong><br/>
                                {project.desc}
                            </p>
                            <button onClick={() => openProject(key)} className="text-brand-red font-bold text-sm uppercase self-start hover:text-brand-light-red hover:tracking-wide transition-all">VIEW PROJECT &gt;</button>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>

      {/* Modal Overlay */}
      {modalOpen && activeProject && (
        <div className="fixed inset-0 bg-black/85 z-[10000] flex justify-center items-center backdrop-blur-sm animate-fade-in" onClick={closeModal}>
            <div className="bg-[#141414] w-[90%] max-w-[700px] max-h-[90vh] rounded-2xl border border-white/10 relative overflow-y-auto transform transition-transform" onClick={(e) => e.stopPropagation()}>
                <span className="absolute top-4 right-5 text-3xl text-white cursor-pointer hover:text-brand-red z-10" onClick={closeModal}>&times;</span>
                <div className="w-full h-[250px] overflow-hidden">
                    <img src={activeProject.img} alt="Project" className="w-full h-full object-cover"/>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                        <h2 className="font-syne text-3xl text-white">{activeProject.title}</h2>
                        <div className="flex gap-3">
                            <a href={activeProject.linkCode} className="text-white bg-white/10 px-4 py-2 rounded text-sm hover:bg-brand-red transition-colors"><i className="fab fa-github mr-2"></i> Code</a>
                            <a href={activeProject.linkLive} className="text-white bg-white/10 px-4 py-2 rounded text-sm hover:bg-brand-red transition-colors"><i className="fas fa-external-link-alt mr-2"></i> Live</a>
                        </div>
                    </div>
                    <p className="text-brand-red font-bold mb-3">{activeProject.role}</p>
                    <p className="text-brand-gray leading-relaxed mb-5">{activeProject.desc}</p>
                    <div>
                        <h4 className="text-white mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                            {activeProject.tech.map((t: string) => (
                                <span key={t} className="bg-brand-red/15 text-brand-light-red px-3 py-1 rounded-full text-xs border border-brand-red">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
}