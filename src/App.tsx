import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, X } from "lucide-react"
import { useState } from "react"
import { About } from "./components/About"
import { EducationAndCertifications } from "./components/EducationAndCertifications"
import { Experiences } from "./components/Experiences"
import { Projects } from "./components/Projects"
import { SiteHeader } from "./components/SiteHeader"
import { Skills } from "./components/Skills"
import { education } from "./data/education"
import { experiences } from "./data/experiences"
import { projects } from "./data/projects"
import { skills } from "./data/skills"

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const project = selectedProject === null ? null : projects[selectedProject]
  const experience = selectedExperience === null ? null : experiences[selectedExperience]

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-[#f3f3ef] selection:bg-[#d9ff63] selection:text-[#0b0c0e]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-16 lg:py-10">
        <SiteHeader />
        <div className="grid gap-20 pt-16 lg:grid-cols-[180px_1fr] lg:gap-24 lg:pt-24">
          <aside className="hidden lg:block">
            <p className="sticky top-8 text-xs uppercase tracking-[0.2em] text-white/30">
              Software<br />developer
            </p>
          </aside>
          <div className="min-w-0">
            <About />
            <Experiences
              experiences={experiences}
              setSelectedExperience={setSelectedExperience}
            />
            <Projects
              projects={projects}
              setSelectedProject={setSelectedProject}
              setActiveSlide={setActiveSlide}
            />
            <EducationAndCertifications education={education} />
            <Skills skills={skills} />
            <footer className="mt-32 flex flex-col gap-6 border-t border-white/10 py-8 text-xs text-white/30 sm:mt-40 sm:flex-row sm:items-center sm:justify-between"><p>© 2025 Miguel Caballero</p><div className="flex items-center gap-5"><a href="#about" className="transition-colors hover:text-[#d9ff63]">Back to top</a><a href="https://github.com" className="transition-colors hover:text-[#d9ff63]">GitHub</a><a href="https://linkedin.com" className="transition-colors hover:text-[#d9ff63]">LinkedIn</a></div></footer>
          </div>
        </div>
      </div>

      {
        experience && <div role="dialog" aria-modal="true" aria-labelledby="experience-title" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm" onClick={() => setSelectedExperience(null)}>
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#111316] p-6 sm:p-10" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close experience details" onClick={() => setSelectedExperience(null)} className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]"><X aria-hidden="true" className="size-5" /></button>
            <p className="pr-8 text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{experience.period}</p>
            <h2 id="experience-title" className="mt-5 pr-8 text-3xl tracking-[-0.04em] text-white">{experience.role}</h2>
            <p className="mt-2 text-sm text-white/40">{experience.company}</p>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{experience.details}</p>
            <div className="mt-8 border-t border-white/10 pt-6"><p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-white/30">What I did</p><ul className="flex flex-col gap-4">{experience.activities.map((activity) => <li key={activity} className="flex gap-3 text-sm leading-6 text-white/60"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#d9ff63]" />{activity}</li>)}</ul></div>
            <div className="mt-8 border-t border-white/10 pt-6"><p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Technologies</p><p className="text-xs text-white/55">{experience.technologies}</p></div>
          </div>
        </div>
      }

      {
        project && <div role="dialog" aria-modal="true" aria-labelledby="project-title" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-2xl border border-white/15 bg-[#111316] p-6 sm:p-10" onClick={(event) => event.stopPropagation()}>
            <button type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]"><X aria-hidden="true" className="size-5" /></button>
            <div className="flex items-center justify-between pr-8"><p className="text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{project.type}</p><span className="text-xs text-white/30">{project.images.length} views</span></div>
            <h2 id="project-title" className="mt-5 text-3xl tracking-[-0.04em] text-white">{project.name}</h2>
            <div className="relative mt-8 overflow-hidden border border-white/10 bg-white/[0.03]"><img src={project.images[activeSlide]} alt={`${project.name} project preview ${activeSlide + 1}`} className="aspect-[16/7] w-full object-cover opacity-80" /><button type="button" aria-label="Previous project image" onClick={() => setActiveSlide((activeSlide + project.images.length - 1) % project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]"><ChevronLeft aria-hidden="true" className="size-4" /></button><button type="button" aria-label="Next project image" onClick={() => setActiveSlide((activeSlide + 1) % project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]"><ChevronRight aria-hidden="true" className="size-4" /></button><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{project.images.map((image, index) => <button type="button" key={image} aria-label={`Show project image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`size-1.5 rounded-full transition-colors ${activeSlide === index ? 'bg-[#d9ff63]' : 'bg-white/45'}`} />)}</div></div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{project.details}</p>
            <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-5"><div><p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Tech stack</p><p className="text-xs text-white/55">{project.stack}</p></div><div className="flex flex-wrap items-center gap-4"><a href={project.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]"><ExternalLink aria-hidden="true" className="size-3.5" />Visit website</a><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]"><GitBranch aria-hidden="true" className="size-3.5" />View source</a></div></div>
          </div>
        </div>
      }
    </main >
  )
}