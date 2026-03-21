export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-5 pt-20 pb-16 bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--shadow-accent),transparent_50%)] pointer-events-none animate-gradient opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,var(--shadow-accent),transparent)] pointer-events-none opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-[var(--accent-muted)] text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up opacity-0 delay-1">
          Full Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text)] tracking-tight leading-tight mb-6 animate-fade-in-up opacity-0 delay-2">
          Hi, I&apos;m{' '}
          <span className="text-[var(--accent)] inline-block animate-float">Ritika Tyagi</span>
          <br />
          I build things for the web.
        </h1>
        <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-3">
          Full-stack developer (2+ years) specializing in MERN & MEVN stack, real-time
          systems, secure payments, and scalable automation. I build platforms that perform.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 delay-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--accent-strong)] text-[var(--skip-text)] font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-[var(--shadow-accent)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-hover)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
