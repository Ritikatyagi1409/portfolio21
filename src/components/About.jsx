import { useInView } from '../hooks/useInView';
import profilePhoto from '../assets/Ritika.jpg';

export default function About() {
  const [sectionRef, sectionInView] = useInView({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="about" className="py-24 px-5 bg-[var(--bg-alt)] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--bg-alt)_100%)] pointer-events-none opacity-30" />
      <div ref={sectionRef} className={`max-w-4xl mx-auto reveal ${sectionInView ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
          <span className="text-[var(--accent)]/80">01.</span> About Me
        </h2>
        <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-4 text-[var(--text-muted)] leading-relaxed">
            <p>
              Full-stack developer with 2+ years of experience specializing in MERN & MEVN stack,
              real-time communication systems, secure payment integrations (Stripe, Razorpay), and
              large-scale automation.
            </p>
            <p>
              I&apos;ve delivered scalable platforms, boosted API performance by 20%, and built
              high-volume scraping pipelines across multi-country deployments. I focus on clean
              architecture, secure data access, and smooth user experiences.
            </p>
            <p>
              Based in Ghaziabad, India. Open to full-time roles and projects where I can build
              products that scale and users love.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="aspect-[3/4] w-full max-w-[240px] rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-md transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg">
              <img
                src={profilePhoto}
                alt="Ritika Tyagi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
