import type { Education } from "@/data/education";

interface Props {
  education: Education[];
}

export const EducationAndCertifications = ({ education }: Props) => {
  return (
    <section id="education" aria-labelledby="education-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40">
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 id="education-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">
          Education &amp;<br className="hidden sm:block" /> certifications
        </h2>
        <div className="divide-y divide-white/10">
          {
            education.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-8">
                <p className="text-xs text-white/35">{item.period}</p>
                <div>
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/40">{item.institution}</p>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">{item.description}</p>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}