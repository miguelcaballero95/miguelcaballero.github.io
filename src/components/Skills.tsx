interface Props {
  skills: string[];
}

export const Skills = ({ skills }: Props) => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mt-32 scroll-mt-10 border-t border-white/10 pt-6 sm:mt-40">
      <div className="grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 id="skills-heading" className="text-xs uppercase tracking-[0.2em] text-white/35">Skills</h2>
        <ul className="flex max-w-xl flex-wrap gap-x-8 gap-y-4">
          {skills.map((skill) => <li key={skill} className="text-base text-white/65">{skill}</li>)}
        </ul>
      </div>
    </section>

  )
}