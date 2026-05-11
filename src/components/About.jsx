import { motion } from 'framer-motion'

const skills = [
  { group: 'Test Automation', items: ['Playwright', 'Selenium'] },
  { group: 'API & Performance', items: ['Postman', 'REST Assured', 'JMeter', 'GraphQL'] },
  { group: 'CI/CD & Tooling', items: ['Jenkins', 'GitHub Actions', 'Docker'] },
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-cream-700">
            01 — About
          </span>
          <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl tracking-tight max-w-2xl">
            Quality is a craft, not a checklist.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-ink-soft"
          >
            <p>
              I'm a Software QA Engineer who treats testing as a design problem.
              The interesting question isn't <em className="text-ink">"did it pass?"</em>—
              it's <em className="text-ink">"what is this system promising, and where
              will reality push back?"</em>
            </p>
            <p>
              I build automation that scales with the product: clean Page Object
              models, deterministic test data, and pipelines that fail loudly when
              they should and quietly when they shouldn't. I care about reducing
              flake, not hiding it.
            </p>
            <p>
              Off-hours I read about distributed systems, tune my dotfiles too
              often, and write small tools to make manual testing feel less manual.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {skills.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-cream-300 bg-white/60 backdrop-blur-sm p-5 hover:border-cream-500/70 hover:bg-white/80 transition-colors"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-ink-muted mb-3">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-cream-200 text-ink px-3 py-1 text-sm font-medium hover:bg-cream-300 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
