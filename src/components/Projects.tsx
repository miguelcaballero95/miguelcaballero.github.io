import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
interface Props {
  projects: Project[];
  setSelectedProject: (index: number) => void;
  setActiveSlide: (index: number) => void;
}

export const Projects = ({ projects, setSelectedProject, setActiveSlide }: Props) => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40">
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 id="projects-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Projects</h2>
        <div className="grid gap-3">
          {
            projects.map((item, index) => (
              <button
                type="button"
                onClick={() => { setSelectedProject(index); setActiveSlide(0) }}
                key={item.name}
                className="group grid w-full gap-4 border-b border-white/10 py-5 text-left first:pt-0 sm:grid-cols-[32px_1fr_auto] sm:items-start sm:gap-6">
                <span className="text-xs text-white/25">0{index + 1}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg tracking-[-0.02em] text-white transition-colors group-hover:text-[#d9ff63]">{item.name}</h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d9ff63]"
                    />
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/45">{item.description}</p>
                  <p className="mt-4 text-xs text-white/25">{item.stack}</p>
                </div>
                <span className="text-xs text-white/30 sm:pt-1">{item.type}</span>
              </button>
            ))
          }
        </div>
      </div>
    </section>
  )
}