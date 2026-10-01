import { GitBranch, Mail } from "lucide-react"

export const About = () => {
  return (
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
  )
}