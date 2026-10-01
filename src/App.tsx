import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, GitBranch, Mail, X } from "lucide-react"
import { useState } from "react"
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
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <a href="#about" className="text-sm font-semibold tracking-[-0.02em]">/ miguel.caballero</a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-xs text-white/50 sm:flex">
            <a className="transition-colors hover:text-[#d9ff63]" href="#experience">Experience</a>
            <a className="transition-colors hover:text-[#d9ff63]" href="#projects">Projects</a>
            <a className="transition-colors hover:text-[#d9ff63]" href="#education">Education</a>
            <a className="transition-colors hover:text-[#d9ff63]" href="#skills">Skills</a>
          </nav>
          <a
            href="mailto:mc.caballero95@gmail.com"
            aria-label="Email Miguel"
            className="text-white/50 transition-colors hover:text-[#d9ff63]">
            <Mail aria-hidden="true" className="size-4" />
          </a>
        </header>

        <div className="grid gap-20 pt-16 lg:grid-cols-[180px_1fr] lg:gap-24 lg:pt-24">
          <aside className="hidden lg:block"><p className="sticky top-8 text-xs uppercase tracking-[0.2em] text-white/30">Software<br />developer</p></aside>
          <div className="min-w-0">
            <section id="about" aria-labelledby="about-heading" className="max-w-3xl">
              <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#d9ff63]">About me</p>
              <h1 id="about-heading" className="max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl">
                Software developer focused on dependable systems and thoughtful experiences.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
                I&apos;m Miguel, a software developer focused on building dependable systems and polished experiences. I care
                about the details, the people using the product, and the space between the two.
              </p>
              <div className="mt-10 flex items-center gap-5 text-xs text-white/50">
                <a
                  href="mailto:mc.caballero95@gmail.com"
                  aria-label="Email Miguel"
                  className="text-white/55 transition-colors hover:text-[#d9ff63]">
                  <Mail aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  aria-label="Miguel on LinkedIn"
                  className="text-white/55 transition-colors hover:text-[#d9ff63]">
                  <span aria-hidden="true" className="flex size-4 items-center justify-center rounded-sm border border-current text-[9px] font-semibold">
                    in
                  </span>
                </a>
                <a
                  href="https://github.com"
                  aria-label="Miguel on GitHub"
                  className="text-white/55 transition-colors hover:text-[#d9ff63]">
                  <GitBranch aria-hidden="true" className="size-4" />
                </a>
                <span className="h-px w-8 bg-white/20" />
                <span>Based in Hamilton, Ontario</span>
              </div>
            </section>

            <section id="experience" aria-labelledby="experience-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40"><div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12"><h2 id="experience-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Experience</h2><div className="divide-y divide-white/10">{experiences.map((item, index) => <button type="button" key={item.period} onClick={() => setSelectedExperience(index)} className="group grid w-full gap-3 py-6 text-left first:pt-0 sm:grid-cols-[150px_1fr_auto] sm:gap-8"><p className="text-xs text-white/35">{item.period}</p><div><h3 className="text-base font-medium text-white transition-colors group-hover:text-[#d9ff63]">{item.role} <span className="text-white/35">/ {item.company}</span></h3><p className="mt-2 max-w-lg text-sm leading-6 text-white/45">{item.description}</p><p className="mt-4 text-xs text-white/25">{item.technologies}</p></div><ArrowUpRight aria-hidden="true" className="mt-1 hidden size-4 text-white/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d9ff63] sm:block" /></button>)}</div></div></section>

            <section id="projects" aria-labelledby="projects-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40"><div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12"><h2 id="projects-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Projects</h2><div className="grid gap-3">{projects.map((item, index) => <button type="button" onClick={() => { setSelectedProject(index); setActiveSlide(0) }} key={item.name} className="group grid w-full gap-4 border-b border-white/10 py-5 text-left first:pt-0 sm:grid-cols-[32px_1fr_auto] sm:items-start sm:gap-6"><span className="text-xs text-white/25">0{index + 1}</span><div><div className="flex items-center gap-3"><h3 className="text-lg tracking-[-0.02em] text-white transition-colors group-hover:text-[#d9ff63]">{item.name}</h3><ArrowUpRight aria-hidden="true" className="size-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d9ff63]" /></div><p className="mt-2 max-w-md text-sm leading-6 text-white/45">{item.description}</p><p className="mt-4 text-xs text-white/25">{item.stack}</p></div><span className="text-xs text-white/30 sm:pt-1">{item.type}</span></button>)}</div></div></section>

            <section id="education" aria-labelledby="education-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40"><div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12"><h2 id="education-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Education &amp;<br className="hidden sm:block" /> certifications</h2><div className="divide-y divide-white/10">{education.map((item) => <article key={`${item.period}-${item.title}`} className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-8"><p className="text-xs text-white/35">{item.period}</p><div><h3 className="text-base font-medium text-white">{item.title}</h3><p className="mt-1 text-sm text-white/40">{item.institution}</p><p className="mt-3 max-w-lg text-sm leading-6 text-white/45">{item.description}</p></div></article>)}</div></div></section>

            <section id="skills" aria-labelledby="skills-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40"><div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12"><h2 id="skills-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Skills</h2><ul className="flex max-w-xl flex-wrap gap-x-8 gap-y-4">{skills.map((skill) => <li key={skill} className="text-base text-white/65">{skill}</li>)}</ul></div></section>

            <footer className="mt-32 flex flex-col gap-6 border-t border-white/10 py-8 text-xs text-white/30 sm:mt-40 sm:flex-row sm:items-center sm:justify-between"><p>© 2025 Miguel Caballero</p><div className="flex items-center gap-5"><a href="#about" className="transition-colors hover:text-[#d9ff63]">Back to top</a><a href="https://github.com" className="transition-colors hover:text-[#d9ff63]">GitHub</a><a href="https://linkedin.com" className="transition-colors hover:text-[#d9ff63]">LinkedIn</a></div></footer>
          </div>
        </div>
      </div>

      {experience && <div role="dialog" aria-modal="true" aria-labelledby="experience-title" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm" onClick={() => setSelectedExperience(null)}>
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#111316] p-6 sm:p-10" onClick={(event) => event.stopPropagation()}>
          <button type="button" aria-label="Close experience details" onClick={() => setSelectedExperience(null)} className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]"><X aria-hidden="true" className="size-5" /></button>
          <p className="pr-8 text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{experience.period}</p>
          <h2 id="experience-title" className="mt-5 pr-8 text-3xl tracking-[-0.04em] text-white">{experience.role}</h2>
          <p className="mt-2 text-sm text-white/40">{experience.company}</p>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{experience.details}</p>
          <div className="mt-8 border-t border-white/10 pt-6"><p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-white/30">What I did</p><ul className="flex flex-col gap-4">{experience.activities.map((activity) => <li key={activity} className="flex gap-3 text-sm leading-6 text-white/60"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#d9ff63]" />{activity}</li>)}</ul></div>
          <div className="mt-8 border-t border-white/10 pt-6"><p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Technologies</p><p className="text-xs text-white/55">{experience.technologies}</p></div>
        </div>
      </div>}

      {project && <div role="dialog" aria-modal="true" aria-labelledby="project-title" className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
        <div className="relative w-full max-w-2xl border border-white/15 bg-[#111316] p-6 sm:p-10" onClick={(event) => event.stopPropagation()}>
          <button type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]"><X aria-hidden="true" className="size-5" /></button>
          <div className="flex items-center justify-between pr-8"><p className="text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{project.type}</p><span className="text-xs text-white/30">{project.images.length} views</span></div>
          <h2 id="project-title" className="mt-5 text-3xl tracking-[-0.04em] text-white">{project.name}</h2>
          <div className="relative mt-8 overflow-hidden border border-white/10 bg-white/[0.03]"><img src={project.images[activeSlide]} alt={`${project.name} project preview ${activeSlide + 1}`} className="aspect-[16/7] w-full object-cover opacity-80" /><button type="button" aria-label="Previous project image" onClick={() => setActiveSlide((activeSlide + project.images.length - 1) % project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]"><ChevronLeft aria-hidden="true" className="size-4" /></button><button type="button" aria-label="Next project image" onClick={() => setActiveSlide((activeSlide + 1) % project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]"><ChevronRight aria-hidden="true" className="size-4" /></button><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">{project.images.map((image, index) => <button type="button" key={image} aria-label={`Show project image ${index + 1}`} onClick={() => setActiveSlide(index)} className={`size-1.5 rounded-full transition-colors ${activeSlide === index ? 'bg-[#d9ff63]' : 'bg-white/45'}`} />)}</div></div>
          <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{project.details}</p>
          <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-5"><div><p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Tech stack</p><p className="text-xs text-white/55">{project.stack}</p></div><div className="flex flex-wrap items-center gap-4"><a href={project.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]"><ExternalLink aria-hidden="true" className="size-3.5" />Visit website</a><a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]"><GitBranch aria-hidden="true" className="size-3.5" />View source</a></div></div>
        </div>
      </div>}
    </main>
  )
}