import type { Project } from "@/data/projects";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, X } from "lucide-react";

interface Props {
  project: Project;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  setSelectedProject: (index: number | null) => void;
}
export const ProjectModal = ({ project, activeSlide, setActiveSlide, setSelectedProject }: Props) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}>
      <div className="relative w-full max-w-2xl border border-white/15 bg-[#111316] p-6 sm:p-10" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Close project details"
          onClick={() => setSelectedProject(null)}
          className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]">
          <X aria-hidden="true" className="size-5" />
        </button>
        <div className="flex items-center justify-between pr-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{project.type}</p>
        </div>
        <h2 id="project-title" className="mt-5 text-3xl tracking-[-0.04em] text-white">{project.name}</h2>
        {
          project.images.length > 0 && (
            <div className="relative mt-8 overflow-hidden bg-white">
              <img
                src={project.images[activeSlide]}
                alt={`${project.name} project preview ${activeSlide + 1}`}
                className="w-full object-cover" />
              {
                project.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous project image"
                      onClick={() => setActiveSlide((activeSlide + project.images.length - 1) % project.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]">
                      <ChevronLeft aria-hidden="true" className="size-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next project image"
                      onClick={() => setActiveSlide((activeSlide + 1) % project.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-[#0b0c0e]/70 p-2 text-white/70 backdrop-blur transition-colors hover:border-[#d9ff63] hover:text-[#d9ff63]">
                      <ChevronRight aria-hidden="true" className="size-4" />
                    </button>
                  </>
                )
              }
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {
                  project.images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      aria-label={`Show project image ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`size-1.5 rounded-full transition-colors ${activeSlide === index ? 'bg-[#d9ff63]' : 'bg-white/45'}`} />
                  ))
                }
              </div>
            </div>
          )
        }
        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{project.details}</p>
        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-5">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Tech stack</p>
            <p className="text-xs text-white/55">{project.stack}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {
              project.website &&
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]">
                <ExternalLink aria-hidden="true" className="size-3.5" />Visit website
              </a>
            }

            {
              project.github &&
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-white/55 transition-colors hover:text-[#d9ff63]">
                <GitBranch aria-hidden="true" className="size-3.5" />
                View code
              </a>
            }

          </div>
        </div>
      </div>
    </div>
  )
}