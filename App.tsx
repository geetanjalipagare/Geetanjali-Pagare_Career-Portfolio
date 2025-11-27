import React from 'react';
import { Mail, MapPin, Linkedin, Phone, Download, ExternalLink, Brain, Briefcase, GraduationCap, Trophy, Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import NeoCard from './components/NeoCard';
import NeoButton from './components/NeoButton';
import Marquee from './components/Marquee';
import { RESUME_DATA } from './constants';

function App() {
  const allSkills = RESUME_DATA.skills.flatMap(s => s.skills);

  return (
    <div className="min-h-screen font-body text-black pt-20">
      <Navbar />

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-black text-white px-4 py-2 font-display font-bold text-sm uppercase tracking-widest transform -rotate-2">
              HR Business Partner
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-tight uppercase">
              {RESUME_DATA.name.split(' ')[0]} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-pink to-neo-purple" style={{ WebkitTextStroke: '2px black' }}>
                {RESUME_DATA.name.split(' ')[1]}
              </span>
            </h1>
            <p className="text-xl font-bold border-l-8 border-neo-blue pl-6 py-2 max-w-xl">
              {RESUME_DATA.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <NeoButton href={`mailto:${RESUME_DATA.contact.email}`} icon={<Mail size={20} />}>
                Contact Me
              </NeoButton>
              <NeoButton 
                variant="secondary" 
                href={`https://${RESUME_DATA.contact.linkedin}`} 
                icon={<Linkedin size={20} />}
              >
                LinkedIn
              </NeoButton>
            </div>
          </div>

          <div className="relative hidden md:block">
             <div className="absolute inset-0 bg-neo-purple translate-x-4 translate-y-4 border-4 border-black"></div>
             <div className="relative bg-neo-yellow border-4 border-black p-8 aspect-square flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-32 h-32 rounded-full border-4 border-black bg-white overflow-hidden mb-4">
                   <img src="https://picsum.photos/200/200" alt="Placeholder Profile" className="w-full h-full object-cover grayscale contrast-125" />
                </div>
                <div>
                   <div className="font-display text-3xl font-bold uppercase mb-2">10+ Years</div>
                   <div className="font-bold">Experience in HRBP & Strategy</div>
                </div>
                <div className="w-full h-1 bg-black"></div>
                <div>
                   <div className="font-display text-3xl font-bold uppercase mb-2">Tech Savvy</div>
                   <div className="font-bold">AI, Python & Analytics</div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Marquee Skills */}
      <section id="skills" className="py-8 bg-black transform -rotate-1 scale-105 border-y-4 border-white mb-20">
         <Marquee items={allSkills} className="bg-neo-blue border-none" />
      </section>

      {/* Achievements Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <h2 className="font-display text-4xl font-black uppercase mb-12 flex items-center gap-4">
          <Trophy className="w-10 h-10" /> Key Impact
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {RESUME_DATA.achievements.map((ach, i) => (
            <NeoCard key={i} color={i === 0 ? 'pink' : i === 1 ? 'green' : 'blue'} className="flex flex-col justify-between">
               <div>
                <h3 className="font-display text-2xl font-bold mb-2">{ach.title}</h3>
                <p className="font-medium">{ach.description}</p>
               </div>
               {ach.metric && (
                 <div className="mt-6 text-5xl font-display font-black text-right opacity-80">
                   {ach.metric}
                 </div>
               )}
            </NeoCard>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex items-center gap-4 mb-12">
           <Briefcase className="w-10 h-10" />
           <h2 className="font-display text-4xl font-black uppercase">Professional Experience</h2>
        </div>
        
        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-black before:-translate-x-1/2 before:hidden md:before:block">
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-black border-4 border-white rounded-full -translate-x-1/2 z-10"></div>

              {/* Date Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pt-4`}>
                 <span className="inline-block bg-black text-white px-3 py-1 font-bold font-display uppercase transform rotate-2">
                   {job.period}
                 </span>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-1/2">
                <NeoCard color="white" className="group">
                  <h3 className="font-display text-2xl font-bold uppercase mb-1">{job.role}</h3>
                  <div className="font-bold text-lg mb-2 text-gray-700 flex items-center gap-2">
                     {job.company}
                     <span className="text-sm font-normal bg-neo-yellow px-2 py-0.5 border-2 border-black rounded-full flex items-center gap-1">
                       <MapPin size={12} /> {job.location}
                     </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-2 font-medium">
                    {job.details.map((detail, idx) => (
                      <li key={idx} className="marker:text-neo-pink">{detail}</li>
                    ))}
                  </ul>
                </NeoCard>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects: AI & Automation */}
      <section id="projects" className="bg-neo-yellow border-y-4 border-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Brain className="w-8 h-8" />
                <span className="font-bold text-xl">Future Ready HR</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-none">
                AI & Automation <br/> Projects (2025)
              </h2>
            </div>
            <div className="max-w-md font-bold text-lg">
              Leveraging Technology to drive efficiency and actionable insights in Human Resources.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, i) => (
              <NeoCard key={i} color="white" className="h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                   <Terminal className="w-8 h-8" />
                </div>
                <p className="mb-6 font-medium text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, t) => (
                    <span key={t} className="px-3 py-1 border-2 border-black bg-neo-blue font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
        
        {/* Education */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase mb-8 flex items-center gap-3">
             <GraduationCap className="w-8 h-8" /> Education
          </h2>
          <div className="space-y-6">
            {RESUME_DATA.education.map((edu, i) => (
              <div key={i} className="border-l-4 border-black pl-6 py-2 relative">
                <div className="absolute -left-[11px] top-2 w-5 h-5 bg-neo-pink border-4 border-black rounded-full"></div>
                <h3 className="font-display text-xl font-bold">{edu.degree}</h3>
                <p className="font-bold text-gray-700">{edu.institution}</p>
                <p className="text-sm font-mono mt-1 bg-black text-white inline-block px-2">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="font-display text-3xl font-black uppercase mb-8 flex items-center gap-3">
             <Brain className="w-8 h-8" /> Certifications
          </h2>
          <div className="space-y-4">
            {RESUME_DATA.certifications.map((cert, i) => (
              <NeoCard key={i} color="purple" noPadding className="p-4 flex items-center gap-4">
                 <div className="bg-white border-2 border-black p-2 rounded-full">
                    <Trophy size={20} />
                 </div>
                 <span className="font-bold">{cert}</span>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-black text-white border-t-4 border-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase mb-8 leading-tight">
            Let's <span className="text-neo-yellow" style={{ WebkitTextStroke: '2px white' }}>Transform</span> <br/> 
            Your Organization
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-medium text-gray-300">
            Open to opportunities in HR Leadership, Organizational Development, and People Operations.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <a href={`mailto:${RESUME_DATA.contact.email}`} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neo-green text-black font-display font-bold text-xl uppercase tracking-wider border-4 border-white hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <Mail /> {RESUME_DATA.contact.email}
             </a>
             <a href={`tel:${RESUME_DATA.contact.phone}`} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neo-pink text-black font-display font-bold text-xl uppercase tracking-wider border-4 border-white hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <Phone /> {RESUME_DATA.contact.phone}
             </a>
          </div>

          <div className="mt-20 pt-8 border-t border-gray-800 text-sm font-mono text-gray-500">
            © {new Date().getFullYear()} Geetanjali Pagare. Design System: Neo-Brutalism.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;