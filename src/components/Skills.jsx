import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Front-end',
    items: ['React.js', 'Vue.js', 'Tailwind CSS', 'Material-UI', 'Responsive Design'],
  },
  {
    title: 'Back-end & Database',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Swagger', 'Agile/Scrum', 'CI/CD Pipelines'],
  },
  {
    title: 'Integrations',
    items: ['Stripe', 'Razorpay', 'Firebase Cloud Messaging', 'Socket.io', 'Cloudinary', 'Puppeteer'],
  },
];

export default function Skills() {
  const [sectionRef, sectionInView] = useInView({ rootMargin: '0px 0px -60px 0px' });

  return (
    <section id="skills" className="py-24 px-5 bg-[var(--bg)]">
      <div ref={sectionRef} className={`max-w-4xl mx-auto reveal ${sectionInView ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
          <span className="text-[var(--accent)]/80">02.</span> Skills
        </h2>
        <div className="h-px w-24 bg-[var(--accent)]/50 mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`reveal p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-lg hover:-translate-y-1 ${sectionInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: sectionInView ? `${groupIndex * 100}ms` : '0ms' }}
            >
              <h3 className="text-[var(--accent-muted)] text-sm font-medium mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-[var(--border)]/80 text-[var(--text-muted)] text-sm transition-colors hover:bg-[var(--border)] hover:text-[var(--accent)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
