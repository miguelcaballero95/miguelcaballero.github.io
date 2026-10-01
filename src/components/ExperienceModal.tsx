import type { Experience } from "@/data/experiences";
import { X } from "lucide-react";

interface Props {
  experience: Experience;
  setSelectedExperience: (index: number | null) => void;
}
export const ExperienceModal = ({ experience, setSelectedExperience }: Props) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0c0e]/90 p-6 backdrop-blur-sm"
      onClick={() => setSelectedExperience(null)}>
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-[#111316] p-6 sm:p-10"
        onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Close experience details"
          onClick={() => setSelectedExperience(null)}
          className="absolute right-5 top-5 text-white/45 transition-colors hover:text-[#d9ff63]">
          <X aria-hidden="true" className="size-5" />
        </button>
        <p className="pr-8 text-xs uppercase tracking-[0.2em] text-[#d9ff63]">{experience.period}</p>
        <h2 id="experience-title" className="mt-5 pr-8 text-3xl tracking-[-0.04em] text-white">{experience.role}</h2>
        <p className="mt-2 text-sm text-white/40">{experience.company}</p>
        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55">{experience.details}</p>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-white/30">What I did</p>
          <ul className="flex flex-col gap-4">
            {
              experience.activities.map((activity) => (
                <li key={activity} className="flex gap-3 text-sm leading-6 text-white/60">
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#d9ff63]" />{activity}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-white/30">Technologies</p>
          <p className="text-xs text-white/55">{experience.technologies}</p>
        </div>
      </div>
    </div>
  )
}