import type { Experience } from "@/data/experiences";
import { ArrowUpRight } from "lucide-react";

interface Props {
  experiences: Experience[];
  setSelectedExperience: (index: number) => void
}

export const Experiences = ({ experiences, setSelectedExperience }: Props) => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mt-20 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-24">
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 id="experience-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">
          Experience
        </h2>
        <div className="divide-y divide-white/10">
          {
            experiences.map((item, index) => (
              <button
                type="button"
                key={item.period}
                onClick={() => setSelectedExperience(index)}
                className="group grid w-full gap-3 py-6 text-left first:pt-0 sm:grid-cols-[150px_1fr_auto] sm:gap-8">
                <p className="text-xs text-white/35">
                  {item.period}
                </p>
                <div>
                  <h3 className="text-base font-medium text-white transition-colors group-hover:text-[#d9ff63]">
                    {item.role} <span className="text-white/35">/ {item.company}</span>
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xs text-white/25">
                    {item.technologies}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 hidden size-4 text-white/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d9ff63] sm:block" />
              </button>
            ))
          }
        </div>
      </div>
    </section>

  )
}