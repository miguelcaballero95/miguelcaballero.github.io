import { Download, Mail } from "lucide-react"

export const SiteHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-white/10 pb-5">
      <a href="#about" className="text-sm font-semibold tracking-[-0.02em]">/ miguel.caballero</a>
      <nav aria-label="Main navigation" className="hidden items-center gap-6 text-xs text-white/50 sm:flex">
        <a className="transition-colors hover:text-[#d9ff63]" href="#experience">Experience</a>
        <a className="transition-colors hover:text-[#d9ff63]" href="#projects">Projects</a>
        <a className="transition-colors hover:text-[#d9ff63]" href="#education">Education</a>
        <a className="transition-colors hover:text-[#d9ff63]" href="#skills">Skills</a>
      </nav>
      <div className="flex items-center gap-4">
        <a
          href="mailto:mc.caballero95@gmail.com"
          aria-label="Email Miguel"
          className="text-white/50 transition-colors hover:text-[#d9ff63]">
          <Mail aria-hidden="true" className="size-4" />
        </a>
        <a
          href="/resume.pdf"
          download="Miguel-Caballero-Resume.pdf"
          aria-label="Download resume"
          className="inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-[#d9ff63]">
          <Download aria-hidden="true" className="size-3.5" />
          <span className="hidden sm:inline">
            Download resume
          </span>
        </a>
      </div>
    </header>
  )
}