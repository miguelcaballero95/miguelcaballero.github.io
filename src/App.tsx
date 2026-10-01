import { useState } from "react"
import { About } from "./components/About"
import { EducationAndCertifications } from "./components/EducationAndCertifications"
import { ExperienceModal } from "./components/ExperienceModal"
import { Experiences } from "./components/Experiences"
import { ProjectModal } from "./components/ProjectModal"
import { Projects } from "./components/Projects"
import { SiteFooter } from "./components/SiteFooter"
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
            <SiteFooter />
          </div>
        </div>
      </div>
      {
        experience && <ExperienceModal experience={experience} setSelectedExperience={setSelectedExperience} />
      }
      {
        project && (
          <ProjectModal
            project={project}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            setSelectedProject={setSelectedProject} />
        )
      }
    </main >
  )
}