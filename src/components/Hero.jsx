import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, FileDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Decorative blobs + grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-16 -left-32 w-[26rem] h-[26rem] rounded-full bg-cream-200/70 blur-3xl animate-blob" />
        <div
          className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-cream-300/45 blur-3xl animate-blob"
          style={{ animationDelay: '7s' }}
        />
        <div className="absolute inset-0 dot-grid opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-cream-400/60 bg-cream-100/70 backdrop-blur px-3 py-1 text-xs font-mono text-ink-soft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cream-600 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cream-700" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cream-700" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.04]"
        >
          Bijay Bikram <br />
          <span className="relative inline-block">
            Dhakal
            <span className="absolute -bottom-1 left-0 right-0 h-4 bg-cream-200 -z-10 -skew-y-2 rounded-sm" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 text-xl sm:text-2xl text-ink-soft font-display font-medium"
        >
          Software <span className="text-cream-800">QA Engineer</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft"
        >
          I design and automate test strategies that keep production calm.
          From end-to-end Playwright suites to API contract tests and CI/CD quality
          gates — I help engineering teams ship faster without breaking what users love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream-50 px-6 py-3 font-medium hover:bg-cream-800 transition-all hover:gap-3 shadow-lg shadow-cream-700/10"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-cream-50/50 backdrop-blur px-6 py-3 font-medium hover:border-ink/40 hover:bg-cream-100 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            View work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-ink-muted"
        >
          <span>Test automation</span>
          <span className="w-px h-3 bg-ink-muted/40" />
          <span>API &amp; UI</span>
          <span className="w-px h-3 bg-ink-muted/40" />
          <span>CI/CD quality</span>
          <span className="w-px h-3 bg-ink-muted/40" />
          <span>Performance</span>
        </motion.div>
      </div>
    </section>
  )
}
