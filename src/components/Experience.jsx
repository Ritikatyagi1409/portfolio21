import { useInView } from '../hooks/useInView';

const experienceItems = [
  {
    title: 'Full Stack Developer',
    org: 'Huulke Technologies India Private Limited',
    location: 'India',
    period: 'Jul 2024 — Present',
    summary:
      'Building full-stack education platforms with Vue 3, Node.js, MongoDB, Tailwind, Stripe, and Firebase Messaging—delivering smooth multi-role workflows with business onboarding, course creation, and secure purchases.',
    bullets: [
      'Built full-stack education platform using Vue 3, Node.js, MongoDB, Tailwind, Stripe, and Firebase Messaging.',
      'Developed scalable REST APIs and responsive UI, integrating Stripe payments and real-time FCM notifications.',
      'Optimized system performance for faster and smoother user operations.',
    ],
  },
  {
    title: 'Software Developer',
    org: 'Srishtitech Technology',
    location: 'India',
    period: 'Nov 2023 — Jun 2024',
    summary:
      'Gained hands-on experience in workplace management, task planning, prioritization, and coordinating assignments within the team.',
    bullets: [
      'Task planning, prioritization, and coordinating small assignments within the team.',
      'Performed manual testing, basic functionality checks, and bug verification to support product quality improvement.',
    ],
  },
  {
    title: 'Full Stack Developer (Intern)',
    org: 'ICT Academy',
    location: 'India',
    period: 'Apr 2023 — Jul 2023',
    summary:
      'Assisted in software development and contributed to React.js projects. Collaborated to optimize database queries and improve data retrieval speed.',
    bullets: [
      'Contributed to the implementation of React.js projects.',
      'Collaborated with the team to optimize database queries, improving data retrieval speed and efficiency.',
    ],
  },
];

const educationItems = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'AKTU',
    location: 'India',
    period: 'Sep 2020 — Jul 2024',
    details: 'GPA: 8.2/10.0',
  },
  {
    degree: 'Class 12th',
    school: 'Green Land Public School',
    location: 'India',
    period: 'Mar 2018 — Mar 2020',
    details: '85%',
  },
  {
    degree: 'Class 10th',
    school: 'Green Land Public School',
    location: 'India',
    period: 'Mar 2016 — Mar 2018',
    details: '73%',
  },
];

export default function Experience() {
  const [sectionRef, inView] = useInView({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="experience" className="py-24 px-5 bg-[var(--bg)]">
      <div
        ref={sectionRef}
        className={`max-w-4xl mx-auto reveal ${inView ? 'is-visible' : ''}`}
      >
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
          <span className="text-[var(--accent)]/80">03.</span> Experience &amp; Education
        </h2>
        <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 items-start">
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase text-[var(--text-muted)] mb-4">
              Experience
            </h3>
            <ol className="relative border-l border-[var(--border)]/80 pl-5 space-y-8">
              {experienceItems.map((item, index) => (
                <li
                  key={`${item.title}-${item.period}`}
                  className={`relative reveal ${inView ? 'is-visible' : ''}`}
                  style={{ transitionDelay: inView ? `${index * 80}ms` : '0ms' }}
                >
                  <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(198,110,171,0.35)]" />
                  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-6 py-5 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <p className="text-[var(--text)] font-medium">
                        {item.title}
                      </p>
                      <p className="text-xs font-medium text-[var(--accent-muted)]">
                        {item.period}
                      </p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mb-2">
                      {item.org} · {item.location}
                    </p>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">
                      {item.summary}
                    </p>
                    <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-[7px] h-[3px] w-3 rounded-full bg-[var(--accent-muted)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-medium tracking-wide uppercase text-[var(--text-muted)]">
              Education
            </h3>
            <ul className="space-y-4">
              {educationItems.map((item) => (
                <li
                  key={`${item.degree}-${item.school}`}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] px-5 py-4 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <p className="text-[var(--text)] font-medium mb-1">
                    {item.degree}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mb-1">
                    {item.school} · {item.location}
                  </p>
                  <p className="text-xs text-[var(--accent-muted)] mb-2">
                    {item.period}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
