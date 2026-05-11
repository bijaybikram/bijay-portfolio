import { motion } from 'framer-motion'
import {
  Github,
  ExternalLink,
  Workflow,
  ShieldCheck,
  Beaker,
  GitBranch,
} from 'lucide-react'

const projects = [
  {
    icon: Workflow,
    title: 'E2E Test Automation Framework',
    description:
      'Scalable Playwright + TypeScript framework with a custom POM layer, parallel sharding, and Allure reporting. Cut regression cycles from 6 hours to 40 minutes.',
    tech: ['Playwright', 'TypeScript', 'Allure', 'GitHub Actions'],
    accent: 'from-cream-200 to-cream-300',
  },
  {
    icon: ShieldCheck,
    title: 'API Contract Test Suite',
    description:
      'Contract-first API testing pipeline using REST Assured and OpenAPI schemas. Catches breaking changes before deploys with auto-generated regression baselines.',
    tech: ['REST Assured', 'Java', 'OpenAPI', 'Postman'],
    accent: 'from-cream-100 to-cream-200',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Quality Gates',
    description:
      'Jenkins pipeline with layered quality gates: static analysis, unit, integration, and smoke E2E. Blocks merges on coverage regressions and flaky-test thresholds.',
    tech: ['Jenkins', 'SonarQube', 'Docker', 'Slack API'],
    accent: 'from-cream-300 to-cream-400/80',
  },
  {
    icon: Beaker,
    title: 'Mobile Test Lab',
    description:
      'Cross-platform Appium suite running on real devices via BrowserStack. Visual regression with Percy, parallel device matrix, and nightly health reports to Slack.',
    tech: ['Appium', 'BrowserStack', 'Percy', 'Python'],
    accent: 'from-cream-200 to-cream-100',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-cream-700">
              02 — Selected work
            </span>
            <h2 className="mt-2 font-display font-bold text-4xl sm:text-5xl tracking-tight">
              Projects I'm proud of.
            </h2>
          </div>
          <p className="text-ink-muted text-sm max-w-xs">
            A small set of representative work — frameworks, suites, and pipelines that shipped real outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative rounded-3xl border border-cream-300 bg-white/70 backdrop-blur-sm p-6 lg:p-7 hover:shadow-xl hover:shadow-cream-500/15 hover:-translate-y-1 hover:border-cream-500/70 transition-all duration-300"
              >
                <div
                  className={`relative h-44 rounded-2xl bg-gradient-to-br ${p.accent} mb-6 overflow-hidden flex items-center justify-center`}
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.7), transparent 50%)',
                    }}
                  />
                  <div className="absolute inset-0 dot-grid opacity-30" />
                  <Icon
                    className="w-16 h-16 text-ink/75 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    strokeWidth={1.3}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream-600/40 to-transparent" />
                </div>

                <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-xs text-cream-800 bg-cream-100 border border-cream-300/80 rounded-md px-2 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-5 text-sm">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink transition-colors"
                  >
                    <Github className="w-4 h-4" /> Repo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Case study
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
