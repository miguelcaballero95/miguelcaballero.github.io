export const SiteFooter = () => {
  return (
    <footer className="mt-32 flex flex-col gap-6 border-t border-white/10 py-8 text-xs text-white/30 sm:mt-40 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Miguel Caballero</p>
      <div className="flex items-center gap-5">
        <a href="#about" className="transition-colors hover:text-[#d9ff63]">Back to top</a>
        <a href="https://github.com" className="transition-colors hover:text-[#d9ff63]">GitHub</a>
        <a href="https://linkedin.com" className="transition-colors hover:text-[#d9ff63]">LinkedIn</a>
      </div>
    </footer>
  )
}