import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-cream-400/70 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-100 p-10 lg:p-14 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cream-300/60 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cream-400/30 blur-3xl" />

          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-cream-800">
              03 — Contact
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight max-w-2xl">
              Let's build something that doesn't break.
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft text-lg">
              Whether it's automating a flaky regression suite or rethinking your testing strategy from scratch — I'd love to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:bijay@example.com"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream-50 px-6 py-3 font-medium hover:bg-cream-800 transition-colors shadow-lg shadow-cream-700/10"
              >
                <Mail className="w-4 h-4" />
                bijay@example.com
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-cream-50/60 backdrop-blur px-6 py-3 font-medium hover:border-ink/40 hover:bg-cream-50 transition-colors"
              >
                See my work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
