import { Github, Linkedin, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cream-300/60 mt-10 py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-ink-muted font-mono">
          © {new Date().getFullYear()} Bijay Bikram Dhakal — Crafted with care.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/bijay-bikram/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-cream-300 bg-white/50 hover:border-ink/40 hover:bg-cream-100 transition-all flex items-center justify-center"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-cream-300 bg-white/50 hover:border-ink/40 hover:bg-cream-100 transition-all flex items-center justify-center"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-cream-300 bg-white/50 hover:border-ink/40 hover:bg-cream-100 transition-all flex items-center justify-center"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
