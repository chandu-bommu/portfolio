const competencies = {
  Architecture: [
    'Micro-Frontends',
    'Server-Side Rendering (SSR)',
    'Node.js BFF Pattern',
    'Event-Driven Architecture',
    'Design Systems'
  ],
  'AI & Cloud': [
    'Azure ML Integration (model serving APIs)',
    'Azure Functions',
    'AKS',
    'Azure Monitor',
    'Application Insights',
    'CI/CD'
  ],
  'Frontend Stack': [
    'React (v18+)',
    'Next.js',
    'TypeScript',
    'Lit (Web Components)',
    'Redux Toolkit',
    'React Query',
    'Webpack / Vite',
    'Storybook'
  ],
  'Backend & API': [
    'Node.js',
    'Express.js',
    'REST',
    'GraphQL',
    'Azure Kubernetes Service (AKS)',
    'GitHub Actions',
    'Azure DevOps'
  ],
  Compliance: [
    'MAS (Monetary Authority of Singapore) regulations',
    'WCAG 2.1 Accessibility',
    'Secure HNW client data workflows'
  ],
  Leadership: [
    'System Design',
    'Code Review Standards',
    'Squad Mentoring (8+ members)',
    'Legacy Modernization',
    'Stakeholder Alignment'
  ]
};

const experiences = [
  {
    role: 'Senior Frontend Engineer — Staff / Technical Lead Capacity',
    company: 'SKF Group',
    location: 'Bengaluru, India (On-site)',
    tenure: 'Apr 2025 – Present',
    highlights: [
      'Architected React frontend + Node.js/Express BFF for an Azure ML-powered predictive maintenance platform, rendering high-frequency IoT predictions with zero UI performance degradation.',
      'Led a centralized design system with Lit and Storybook across 3 internal products, reducing code duplication by 40%.',
      'Improved API response times by 300ms by decoupling frontend orchestration through a Node.js/Express BFF layer on AKS.',
      'Integrated Azure Monitor and Application Insights with secure GitHub Actions CI/CD deployment workflows.',
      'Drove TypeScript and WCAG 2.1 adoption to 100% compliance while mentoring a 6-member squad.'
    ]
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Wipro Digital (Client: Telstra, Australia)',
    location: 'Bengaluru, India (On-site)',
    tenure: 'Oct 2018 – Apr 2025',
    highlights: [
      "Architected micro-frontend patterns for independent 'Billing' and 'Usage' deployment modules for a telecom portal serving millions.",
      'Reduced release cycle times by 50% through scalable modular architecture.',
      'Reduced Time to Interactive by 40% (3.0s to 1.8s) using code splitting, lazy loading, and critical CSS optimization.',
      'Integrated Adobe Experience Manager (AEM) with React for dynamic marketing content updates.',
      'Mentored engineers and maintained ~90% unit test coverage standards.'
    ]
  },
  {
    role: 'UI Developer',
    company: 'Persistent Systems (Client: Intuit — QuickBooks Online)',
    location: 'Pune, India',
    tenure: 'Sep 2014 – Oct 2018',
    highlights: [
      'Migrated legacy QuickBooks modules to React/Redux, improving maintainability and delivery speed.',
      'Built Invoicing, Expense Tracking, and Reporting dashboards with 100% financial calculation accuracy.',
      'Established Jest/Enzyme automation pipelines for critical financial workflows.'
    ]
  },
  {
    role: 'Software Engineer — Singapore Onsite Lead',
    company: 'Tata Consultancy Services (Client: Bank of America)',
    location: 'Bengaluru / Singapore (Onsite 6 months)',
    tenure: 'Dec 2010 – Sep 2014',
    highlights: [
      'Led onsite frontend delivery for Bank of America Global Wealth onboarding, aligned to MAS data privacy regulations.',
      'Built secure frontend workflows for High-Net-Worth client data capture under strict compliance constraints.',
      'Acted as liaison between Singapore stakeholders and offshore teams, ensuring on-time delivery with zero communication gaps.'
    ]
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="eyebrow">Staff Frontend Engineer</p>
        <h1>Chandrasekhar Bommu</h1>
        <p className="headline">
          React · Node.js BFF · Azure ML Integration · Fintech & Regulated Systems · MAS-Compliant Platforms
        </p>
        <p>
          Staff-level Frontend Engineer with 15 years of experience architecting mission-critical platforms across
          fintech, telecom, and enterprise AI. Open to opportunities in India (GCCs / Product) and Singapore.
        </p>
        <div className="contact">
          <a href="tel:+916360684119">+91-6360684119</a>
          <a href="mailto:85bommu@gmail.com">85bommu@gmail.com</a>
          <a href="https://linkedin.com/in/cbommu" target="_blank" rel="noreferrer">
            linkedin.com/in/cbommu
          </a>
          <span>Bengaluru, India</span>
        </div>
      </section>

      <section className="card">
        <h2>Core Competencies</h2>
        <div className="grid two">
          {Object.entries(competencies).map(([category, skills]) => (
            <article key={category} className="skill-block">
              <h3>{category}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.tenure}`} className="timeline-item">
              <header>
                <h3>{item.role}</h3>
                <p>
                  <strong>{item.company}</strong> · {item.location}
                </p>
                <p className="tenure">{item.tenure}</p>
              </header>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="card split">
        <div>
          <h2>Education</h2>
          <p>
            <strong>Bachelor of Technology (B.Tech) — Information Technology</strong>
          </p>
          <p>Jawaharlal Nehru Technological University (JNTU), India</p>
        </div>
        <div>
          <h2>Target Roles</h2>
          <p>Staff Frontend Engineer · UI Architect · Frontend Platform Architect</p>
        </div>
      </section>
    </main>
  );
}
