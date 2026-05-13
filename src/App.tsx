const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const OPEN_SOURCE = [
  {
    org: 'Google Error Prone',
    date: 'May 2026',
    what: 'Identified a false negative where unused parameters were silently ignored in method references. Fixed by removing incorrect suppression in visitMemberReference and guarding fix generation for method reference cases.',
    link: 'https://github.com/google/error-prone',
  },
  {
    org: 'Morphe Patches',
    date: 'May 2026',
    what: 'Traced two YouTube feature flags breaking Shorts playback and feed scrolling. Patched both flags in Kotlin and merged into MorpheApp/morphe-patches, closing 2 confirmed bugs.',
    link: 'https://github.com/MorpheApp/morphe-patches',
  },
]

const PROJECTS: { name: string; year: string; story: string; stack: string[]; live?: string; github?: string }[] = [
  {
    name: 'Jarvis',
    year: '2026',
    story:
      "A voice-activated AI assistant for macOS. I got obsessed with fixing the word-cutoff problem — solved it by buffering mic audio in a threading.Queue before the WebSocket handshake. End-to-end latency sits at 75ms. GPT-4o handles 12 tools with session memory for system control, media, and messaging.",
    stack: ['Python', 'OpenAI Realtime API', 'ElevenLabs', 'PyAudio'],
    github: 'https://github.com/AboodFares/Jarvis',
  },
  {
    name: 'Holdex',
    year: '2026',
    story:
      "A full-stack Solana wallet and token locking platform. I wrote an Anchor smart contract in Rust with PDA vaults that enforce time- and price-based unlock conditions — then built a Chrome extension on top of it with a portfolio view, send flow, and activity feed.",
    stack: ['React', 'TypeScript', 'Rust', 'Anchor', 'Solana', 'Supabase'],
  },
  {
    name: 'Sub Tracker',
    year: '2025',
    story:
      "I got tired of forgetting which subscriptions I had. So I built something that reads your Gmail and bank statements and figures it out for you — using a two-stage GPT pipeline for the heavy lifting.",
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Gmail API'],
    github: 'https://github.com/AboodFares/SubTracker',
  },
  {
    name: 'Focus Timer',
    year: '2025',
    story:
      "A Manifest V3 Chrome extension that tracks time on sites and enforces breaks. The interesting part is the Python native messaging bridge that blocks desktop apps when you've gone over your limit — not just websites.",
    stack: ['JavaScript', 'Python', 'Chrome Extension API'],
    github: 'https://github.com/AboodFares/site-blocker',
  },
  {
    name: 'CalorieX',
    year: '2025',
    story:
      'Take a photo of your meal, get the nutrition breakdown. OpenAI Vision identifies the ingredients, the USDA API fills in the numbers. Built it in a weekend as a personal experiment.',
    stack: ['JavaScript', 'OpenAI Vision', 'USDA API'],
  },
]

export default function App() {
  return (
    <div className="bg-background text-foreground" style={{ fontFamily: 'var(--font-body)' }}>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Nav */}
          <nav className="w-full">
            <div className="flex justify-between items-center px-8 py-6 max-w-5xl mx-auto">
              <span
                className="text-lg text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Abdulrahman Fares
              </span>
              <a
                href="#contact"
                className="liquid-glass rounded-full px-5 py-2 text-sm text-foreground hover:scale-[1.03] transition-transform"
              >
                Say hello
              </a>
            </div>
          </nav>

          {/* Hero text */}
          <div className="flex flex-col justify-center px-8 flex-1 pb-24 max-w-5xl mx-auto w-full">
            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] animate-fade-rise"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-2.46px' }}
            >
              Hi, I'm Abdulrahman.
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mt-8 leading-relaxed animate-fade-rise-delay">
              CS student in Montreal. I build full-stack apps, mostly with AI
              somewhere in the stack.
            </p>
            <a
              href="#about"
              className="mt-12 animate-fade-rise-delay-2 text-sm text-muted-foreground hover:text-foreground transition-colors self-start flex items-center gap-2"
            >
              <span>Scroll to learn more</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────────── */}
      <section id="about" className="py-32 px-8">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-3xl sm:text-4xl font-normal leading-snug text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            I'm in my second year at Concordia University, studying Computer
            Science.
          </p>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I made the Dean's List and received the Golden Key Award in my
              first year — but what I care about more is shipping things that
              work. I've been building web apps since high school, and lately
              I've gone deep on AI integrations and systems programming.
            </p>
            <p>
              I also contribute to open source. Recently I patched a false
              negative in Google's Error Prone and fixed two confirmed bugs in
              Morphe Patches — both through actual debugging, not surface-level
              contributions.
            </p>
            <p>
              I'm looking for internship opportunities where I can work on a
              real product and learn from people who are better than me.
            </p>
          </div>
        </div>
      </section>

      {/* ─── OPEN SOURCE ──────────────────────────────────────────────── */}
      <section id="oss" className="py-16 px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-normal text-muted-foreground mb-16"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Open source
          </h2>
          <div className="space-y-12">
            {OPEN_SOURCE.map((item) => (
              <div key={item.org}>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-normal hover:text-muted-foreground transition-colors"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {item.org} ↗
                  </a>
                  <span className="text-sm text-muted-foreground shrink-0">{item.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" className="py-16 px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-normal text-muted-foreground mb-16"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Things I've built
          </h2>

          <div className="space-y-16">
            {PROJECTS.map((project) => (
              <div key={project.name}>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <h3
                    className="text-2xl font-normal"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {project.name}
                  </h3>
                  <span className="text-sm text-muted-foreground shrink-0">{project.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.story}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {project.stack.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground bg-white/[0.04] rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a href={project.live} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                        Live ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-40 px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-normal leading-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Want to work together, or just say hi?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to interesting projects, internship opportunities,
            or just a good conversation about something you're building.
          </p>
          <a
            href="mailto:abood.fm006@gmail.com"
            className="text-foreground hover:text-muted-foreground transition-colors text-lg underline underline-offset-8 decoration-border"
          >
            abood.fm006@gmail.com
          </a>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="border-t border-border px-8 py-6">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Abdulrahman Fares</span>
          <span className="text-xs text-muted-foreground">Montreal, QC · 2026</span>
        </div>
      </footer>

    </div>
  )
}
