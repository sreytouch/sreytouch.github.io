import { useState } from 'react'
import profileImage from './assets/sreytouch-profile.jpg'

const navLinks = [
  { label: 'Home', href: '#home', icon: 'home' },
  { label: 'About', href: '#about', icon: 'user' },
  { label: 'Skills', href: '#skills', icon: 'stack' },
  { label: 'Resume', href: '#resume', icon: 'file' },
  { label: 'Projects', href: '#projects', icon: 'briefcase' },
  { label: 'Contact', href: '#contact', icon: 'mail' }
]

function NavIcon({ icon }) {
  const svgProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.9',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  switch (icon) {
    case 'home':
      return (
        <svg {...svgProps}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5.5 9.5V21h13V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      )
    case 'user':
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </svg>
      )
    case 'stack':
      return (
        <svg {...svgProps}>
          <rect x="4" y="5" width="16" height="5" rx="1.5" />
          <rect x="4" y="14" width="16" height="5" rx="1.5" />
          <path d="M16.5 7.5h.01M16.5 16.5h.01" />
        </svg>
      )
    case 'file':
      return (
        <svg {...svgProps}>
          <path d="M8 3.5h6l4 4V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
          <path d="M14 3.5V8h4" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...svgProps}>
          <path d="M4 8.5h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-10Z" />
          <path d="M9 8.5V6.8A1.8 1.8 0 0 1 10.8 5h2.4A1.8 1.8 0 0 1 15 6.8v1.7" />
          <path d="M4 12.5h16" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...svgProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      )
    default:
      return null
  }
}

function ThemeIcon({ theme }) {
  const svgProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }

  if (theme === 'dark') {
    return (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4" />
        <path d="M12 19.1v2.4" />
        <path d="m5.3 5.3 1.7 1.7" />
        <path d="m17 17 1.7 1.7" />
        <path d="M2.5 12h2.4" />
        <path d="M19.1 12h2.4" />
        <path d="m5.3 18.7 1.7-1.7" />
        <path d="M17 7l1.7-1.7" />
      </svg>
    )
  }

  return (
    <svg {...svgProps}>
      <path d="M20 15.2A7.8 7.8 0 1 1 8.8 4 6.4 6.4 0 0 0 20 15.2Z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sreytouch' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sreytouch-lang/' },
  { label: 'Email', href: 'mailto:sreytouchjessicalang@gmail.com' },
  { label: 'RepurposeAI', href: 'https://getrepurpose-ai.com' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/sreytouchjessic1' }
]

const quickFacts = [
  { label: 'Location', value: 'California, United States' },
  { label: 'Opportunity', value: 'Full-time or contract' },
  { label: 'Focus', value: 'Full-stack web, AI, and cloud delivery' },
  { label: 'Strength', value: 'Architecture, APIs, UI, and release ownership' }
]

const bestSkills = [
  'Python',
  'Node.js',
  'React.js',
  'Next.js',
  'TypeScript',
  'Django',
  'FastAPI',
  'Express.js',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'LangChain',
  'OpenAI API',
  'RAG'
]

const summaryHighlights = [
  '8+ years building and operating end-to-end platforms across Python, Node.js, React.js, Next.js, and TypeScript.',
  'Delivered products serving 100K+ daily users and platforms handling 1M+ daily API requests across fintech, e-government, and enterprise sectors.',
  'Built AI product features with LangChain, OpenAI, Hugging Face, RAG pipelines, NLP chatbot flows, and AWS SageMaker-based model monitoring.',
  'Owns the full engineering cycle from system architecture and API design to responsive frontend delivery, cloud deployment, and CI/CD.'
]

const skillGroups = [
  {
    title: 'Frontend engineering',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'React Hooks',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'Angular'
    ]
  },
  {
    title: 'Backend and APIs',
    items: [
      'Python',
      'Django',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'WebSocket',
      'Spring Boot'
    ]
  },
  {
    title: 'AI and ML systems',
    items: [
      'LangChain',
      'OpenAI API',
      'Hugging Face',
      'RAG architectures',
      'Prompt engineering',
      'TensorFlow',
      'PyTorch',
      'AWS SageMaker'
    ]
  },
  {
    title: 'Data and infrastructure',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'DynamoDB',
      'Elasticsearch',
      'Redis',
      'Kafka',
      'RabbitMQ'
    ]
  },
  {
    title: 'Cloud and delivery',
    items: [
      'AWS Lambda',
      'EC2 / S3 / CloudFront',
      'API Gateway',
      'CloudFormation',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'TDD',
      'Agile / Scrum'
    ]
  }
]

const experienceEntries = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Coinable Inc. · Palo Alto, CA(remote)',
    period: 'Apr 2024 - Present',
    summary:
      'Own the full engineering stack for a greenfield fintech platform spanning frontend, backend, cloud infrastructure, and applied AI product features.',
    bullets: [
      'Scaled a React.js and TypeScript platform with Node.js and Python services to support 100K+ daily users with 99.9% uptime.',
      'Improved user experience and system performance by 25% through Next.js SSR migration, API optimization, and frontend performance profiling.',
      'Built RAG pipelines, LLM-powered dashboards, and NLP chatbot features with LangChain, OpenAI, Hugging Face, and AWS SageMaker-based monitoring.',
      'Reduced average latency from 450ms to 85ms at peak load through API, database, and infrastructure optimization.'
    ],
    tech:
      'React.js, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, CloudFormation, LangChain, OpenAI'
  },
  {
    role: 'Senior Software Engineer',
    company: 'LTLabs Co., Ltd. · Remote',
    period: 'Feb 2020 - Mar 2024',
    summary:
      'Re-architected and delivered full-stack platform services across Python, Node.js, React.js, Angular, and Next.js for enterprise-scale workloads.',
    bullets: [
      'Re-architected a legacy monolith into Python and Node.js microservices, reducing overall web response time by 18.2% and enabling per-service scaling.',
      'Built and maintained full-stack applications serving 1M+ daily API requests across React.js, Angular, Next.js, Node.js, and Python services.',
      'Designed real-time event pipelines with Kafka and AWS Lambda, increasing throughput by 20% and enabling sub-second search with Elasticsearch.',
      'Led CI/CD adoption that reduced deployment steps from 12 to 3 and shortened release cycle time by 50%.'
    ],
    tech:
      'React.js, Angular, Next.js, Node.js, Python, Kafka, AWS Lambda, Elasticsearch, CI/CD'
  },
  {
    role: 'Software Engineer',
    company: 'SLASH CO. INC. · Remote',
    period: 'Apr 2017 - Feb 2020',
    summary:
      'Built large-scale public-sector and enterprise platforms end-to-end with secure APIs, workflow engines, and responsive web interfaces.',
    bullets: [
      "Engineered Cambodia's national e-licensing platform with React.js, Next.js, TypeScript, Node.js, Django, and MongoDB.",
      'Integrated ASYCUDA customs data flows to eliminate manual reconciliation and support cross-border system interoperability.',
      'Implemented a Spring State Machine workflow engine that reduced process error rates by 50%.',
      'Authored OWASP-compliant REST APIs secured with OAuth2 and JWT for government-facing services.'
    ],
    tech:
      'React.js, Next.js, TypeScript, Node.js, Django, MongoDB, Spring State Machine, OAuth2, JWT'
  },
  {
    role: 'Junior Software Engineer',
    company: 'Pathmazing Co., Ltd. · Phnom Penh',
    period: 'Oct 2015 - Apr 2017',
    summary:
      'Contributed to banking and e-licensing platforms with early full-stack engineering work across Node.js, React.js, and Angular.',
    bullets: [
      'Built core banking web application features with Node.js, React.js, and Angular for thousands of daily users.',
      'Implemented Node.js and Express-based microservices that reduced downtime by 15%.',
      'Developed national e-licensing UI flows that helped drive 200% growth in digital adoption after launch.'
    ],
    tech:
      'Node.js, Express.js, React.js, Angular, Microservices'
  }
]

const educationEntries = [
  {
    degree: 'M.S. Computer & Information Science',
    school: 'Westcliff University · Focus: Mobile Application & Applied ML/AI',
    period: 'Feb 2025 - Mar 2027'
  },
  {
    degree: 'B.S. Computer & Information Science',
    school: 'Royal University of Phnom Penh · GPA 3.9 / 4.0',
    period: 'Aug 2012 - Apr 2016'
  }
]

const certificationEntries = [
  'HackerRank Software Engineer',
  'HackerRank Frontend Developer (React)',
  'HackerRank SQL Advanced',
  'HackerRank Problem Solving Intermediate',
  'HackerRank Node.js Intermediate',
  'HackerRank REST API Intermediate'
]

const aiFocusEntries = [
  'CodePath AI301 · AI Open-Source Capstone',
  'CodePath AI110 · Foundations of AI Engineering',
  'RAG pipelines and LLM product flows',
  'Prompt engineering and model evaluation'
]

const categoryOrder = [
  'All',
  'AI / SaaS',
  'Full-Stack Web',
  'Frontend / React',
  'Java / Spring'
]

const rawProjects = [
  {
    repo: 'repurpose-ai',
    title: 'RepurposeAI',
    category: 'AI / SaaS',
    stack: 'Next.js / TypeScript / OpenAI / Vercel',
    summary:
      'Live personal AI SaaS that turns YouTube transcripts, podcast notes, and blog content into platform-ready posts for LinkedIn, X, Instagram, newsletters, Facebook, and Threads.',
    href: null,
    linkLabel: null,
    liveHref: 'https://getrepurpose-ai.com',
    liveLabel: 'Open live',
    repoLabel: 'Live SaaS',
    updatedAt: '2026-05-06',
    featured: true
  },
  {
    repo: 'Banking-Application-NextJS',
    title: 'Banking Application NextJS',
    category: 'Full-Stack Web',
    stack: 'Next.js / TypeScript / Product UI',
    summary:
      'Banking-oriented full-stack build focused on authenticated product flows, dashboard structure, and finance-style interface composition.',
    href: 'https://github.com/sreytouch/Banking-Application-NextJS',
    updatedAt: '2024-09-13',
    featured: true
  },
  {
    repo: 'Chat-Application-FullStack',
    title: 'Chat Application FullStack',
    category: 'Full-Stack Web',
    stack: 'JavaScript / Full-stack chat / Real-time UX',
    summary:
      'Full-stack chat application centered on messaging flows, room-style interaction, and real-time communication patterns.',
    href: 'https://github.com/sreytouch/Chat-Application-FullStack',
    updatedAt: '2024-09-13',
    featured: true
  },
  {
    repo: 'Zoom-Clone-Applicatioin',
    title: 'Zoom Clone Application',
    category: 'Frontend / React',
    stack: 'TypeScript / Collaboration UI',
    summary:
      'Video collaboration clone exploring meeting-style layouts, real-time interface patterns, and multi-panel communication UX.',
    href: 'https://github.com/sreytouch/Zoom-Clone-Applicatioin',
    updatedAt: '2024-09-13',
    featured: true
  },
  {
    repo: 'e-commerce-app-fullstack',
    title: 'Ecommerce App Fullstack',
    category: 'Full-Stack Web',
    stack: 'JavaScript / Ecommerce / Full-stack',
    summary:
      'Commerce-focused full-stack application exploring product discovery, cart flows, and customer-facing storefront interactions.',
    href: 'https://github.com/sreytouch/e-commerce-app-fullstack',
    updatedAt: '2024-08-25',
    featured: true
  },
  {
    repo: 'foodRecipeApp-FullStack',
    title: 'Food Recipe App FullStack',
    category: 'Full-Stack Web',
    stack: 'JavaScript / Recipe platform / CRUD',
    summary:
      'Recipe-oriented product build combining content management, search-friendly browsing, and full-stack application structure.',
    href: 'https://github.com/sreytouch/foodRecipeApp-FullStack',
    updatedAt: '2024-08-25',
    featured: true
  },
  {
    repo: 'Bitcoin-React-NodeJS-App',
    title: 'Bitcoin React NodeJS App',
    category: 'Frontend / React',
    stack: 'React / Node.js / Crypto dashboard',
    summary:
      'Market-data style application focused on crypto dashboards, price presentation, and API-connected frontend experiences.',
    href: 'https://github.com/sreytouch/Bitcoin-React-NodeJS-App',
    updatedAt: '2024-06-12',
    featured: true
  },
  {
    repo: 'online-learning-application',
    title: 'Online Learning Application',
    category: 'Full-Stack Web',
    stack: 'JavaScript / Learning platform',
    summary:
      'Learning platform concept built around course-style flows, structured content, and education-focused web application patterns.',
    href: 'https://github.com/sreytouch/online-learning-application',
    updatedAt: '2023-10-19'
  },
  {
    repo: 'book-stort-reactjs',
    title: 'Book Store ReactJS',
    category: 'Frontend / React',
    stack: 'React.js / Ecommerce UI',
    summary:
      'React-based storefront project focused on product browsing, shopping-style flows, and practical ecommerce interface composition.',
    href: 'https://github.com/sreytouch/book-stort-reactjs',
    updatedAt: '2023-08-29'
  },
  {
    repo: 'nike-shoes-ecommerce-app-expo',
    title: 'Nike Shoes Ecommerce App',
    category: 'Frontend / React',
    stack: 'JavaScript / Expo / Ecommerce',
    summary:
      'Ecommerce-style shopping app built with Expo, focused on product merchandising, modern mobile commerce UI, and branded browsing flows.',
    href: 'https://github.com/sreytouch/nike-shoes-ecommerce-app-expo',
    updatedAt: '2023-08-16'
  },
  {
    repo: 'crypto-wallet-app-starter',
    title: 'Crypto Wallet App Starter',
    category: 'Frontend / React',
    stack: 'JavaScript / Wallet UI / Expo',
    summary:
      'Crypto wallet interface exploring account views, balance presentation, and finance-oriented mobile interaction design.',
    href: 'https://github.com/sreytouch/crypto-wallet-app-starter',
    updatedAt: '2023-08-16'
  },
  {
    repo: 'travel-onboarding-app-expo',
    title: 'Travel Onboarding App',
    category: 'Frontend / React',
    stack: 'JavaScript / Expo / Onboarding',
    summary:
      'Onboarding-focused travel app concept exploring first-run product flows, visual storytelling, and high-polish user introduction screens.',
    href: 'https://github.com/sreytouch/travel-onboarding-app-expo',
    updatedAt: '2023-08-16'
  }
]

function formatDate(dateString, opts = { month: 'short', year: 'numeric' }) {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Intl.DateTimeFormat('en-US', opts).format(
    new Date(year, month - 1, day)
  )
}

const projects = rawProjects.map((project) => ({
  ...project,
  updatedLabel: formatDate(project.updatedAt)
}))

const selectedProjects = projects.filter((project) => project.featured).slice(0, 6)

const profileMetrics = [
  { value: '8+', label: 'Years building products' },
  { value: '100K+', label: 'Daily users scaled' },
  { value: '1M+', label: 'Daily API requests served' },
  { value: '56', label: 'Public repositories' }
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [theme, setTheme] = useState('dark')

  const filterOptions = categoryOrder.map((category) => ({
    label: category,
    count:
      category === 'All'
        ? projects.length
        : projects.filter((project) => project.category === category).length
  }))

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className={`page-shell${theme === 'dark' ? ' theme-dark' : ''}`}>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#home">
            Sreytouch Lang(Jessica)
          </a>

          <div className="site-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              className="theme-toggle"
              aria-label={
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
              }
              title={
                theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
              }
              onClick={() =>
                setTheme((currentTheme) =>
                  currentTheme === 'light' ? 'dark' : 'light'
                )
              }
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>
      </header>

      <nav className="side-rail" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className={`side-rail__link${
              link.href === '#home' ? ' side-rail__link--active' : ''
            }`}
            href={link.href}
            aria-label={link.label}
            title={link.label}
          >
            <NavIcon icon={link.icon} />
            <span className="side-rail__tooltip" aria-hidden="true">
              {link.label}
            </span>
            <span className="visually-hidden">{link.label}</span>
          </a>
        ))}
      </nav>

      <main className="portfolio">
        <section id="home" className="section-card hero">
          <div className="hero-portrait-card">
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src={profileImage}
                alt="Portrait of Sreytouch Lang(Jessica)"
              />
            </div>

            <div className="portrait-copy">
              <p className="eyebrow">Profile</p>
              <h3>Sreytouch Lang(Jessica)</h3>
              <p>
                Senior full-stack engineer building web platforms with Python,
                Node.js, React.js, Next.js, TypeScript, and applied AI systems.
              </p>
            </div>
          </div>

          <div className="hero-copy">
            <div className="hero-topline">
              <p className="eyebrow">Senior full-stack engineer</p>
              <span className="status-pill">Open to work</span>
            </div>

            <h1>
              Senior full-stack engineer specializing in Python, Node.js,
              React.js, Next.js, TypeScript, and AI-enabled product work.
            </h1>

            <p className="lede">
              I am a California-based(open to relocate) full-stack software
              engineer with 8+ years of experience building end-to-end web
              platforms across architecture, APIs, responsive UI, cloud
              deployment, and production AI features.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-link">
                View selected projects
              </a>
              <a href="#contact" className="ghost-link">
                Contact me
              </a>
            </div>

            <div className="fact-grid">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact-card">
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>

            <div className="hero-skill-group">
              <p className="eyebrow">Best skills</p>
              <div className="skill-pill-row">
                {bestSkills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-summary-copy">
              <p className="eyebrow">Professional summary</p>
              <ul className="summary-list">
                {summaryHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="metric-grid">
              {profileMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>
              Product-focused full-stack engineer with strong execution across
              frontend systems, backend services, cloud delivery, and applied
              AI products.
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I work across the full software development lifecycle, from
                requirements and system design to backend services, frontend
                implementation, deployment, monitoring, and iteration. My
                strongest current work is in Python, Node.js, React.js,
                Next.js, TypeScript, and scalable web platform engineering.
              </p>
              <p>
                Alongside product engineering, I build AI-enabled workflows and
                user-facing features including RAG pipelines, LLM dashboards,
                content generation flows, NLP chatbot experiences, and data-
                driven platform tools. Recent work such as RepurposeAI reflects
                that full-stack plus AI direction clearly.
              </p>
            </div>

            <div className="about-card">
              <h3>What I bring</h3>
              <ul className="plain-list">
                <li>End-to-end ownership across architecture, APIs, frontend delivery, deployment, and production support.</li>
                <li>Strong product execution across fintech, e-government, and enterprise platforms with real user scale.</li>
                <li>Hands-on AI integration with RAG, prompt engineering, LLM workflows, and cloud-based model operations.</li>
                <li>Clear engineering habits around CI/CD, performance tuning, TDD, and release readiness.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item} className="skill-token">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Resume</p>
            <h2>Experience, education, and selected credentials across full-stack and AI engineering.</h2>
          </div>

          <div className="resume-layout">
            <div className="experience-column">
              {experienceEntries.map((entry) => (
                <article key={`${entry.company}-${entry.period}`} className="experience-card">
                  <div className="experience-top">
                    <div>
                      <p className="role-label">{entry.role}</p>
                      <h3>{entry.company}</h3>
                    </div>
                    <span className="period-badge">{entry.period}</span>
                  </div>

                  <p className="entry-summary">{entry.summary}</p>

                  <ul className="plain-list">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="tech-line">
                    <strong>Technologies:</strong> {entry.tech}
                  </p>
                </article>
              ))}
            </div>

            <aside className="resume-sidebar">
              <div className="sidebar-card">
                <h3>Education</h3>
                <div className="sidebar-stack">
                  {educationEntries.map((entry) => (
                    <div key={`${entry.degree}-${entry.period}`} className="sidebar-entry">
                      <h4>{entry.degree}</h4>
                      <p>{entry.school}</p>
                      <span>{entry.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Selected certifications</h3>
                <div className="sidebar-stack">
                  {certificationEntries.map((entry) => (
                    <div key={entry} className="sidebar-entry">
                      <h4>{entry}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>AI and learning</h3>
                <div className="sidebar-stack">
                  {aiFocusEntries.map((entry) => (
                    <div key={entry} className="sidebar-entry">
                      <h4>{entry}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected projects with the clearest signal for full-stack product work, AI capability, and end-to-end delivery.</h2>
            <p className="section-note">
              Focused on the public projects and live work that best reflect
              your full-stack direction on GitHub and in your resume.
            </p>
          </div>

          <div className="project-grid">
            {selectedProjects.map((project) => (
              <article key={project.repo} className="project-card">
                <div className="card-topline">
                  <span>{project.category}</span>
                  <span>{project.updatedLabel}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="card-footer">
                  <span className="stack-pill">{project.stack}</span>
                  <div className="card-links">
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.linkLabel || 'Repo'}
                      </a>
                    ) : null}
                    {project.liveHref ? (
                      <a href={project.liveHref} target="_blank" rel="noreferrer">
                        {project.liveLabel || 'Live'}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="project-directory" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Project archive</p>
            <h2>Public full-stack project directory.</h2>
          </div>

          <div className="archive-toolbar">
            <div className="filter-row">
              {filterOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  className={`filter-chip ${
                    activeCategory === option.label ? 'filter-chip--active' : ''
                  }`}
                  onClick={() => setActiveCategory(option.label)}
                >
                  <span>{option.label}</span>
                  <strong>{option.count}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-grid">
            {filteredProjects.map((project) => (
              <article key={project.repo} className="catalog-card">
                <div className="card-topline">
                  <span>{project.category}</span>
                  <span>{project.updatedLabel}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <div className="catalog-meta">
                  <span className="stack-pill">{project.stack}</span>
                  <span className="repo-label">{project.repoLabel || project.repo}</span>
                </div>

                <div className="card-links">
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.linkLabel || 'View repository'}
                    </a>
                  ) : null}
                  {project.liveHref ? (
                    <a href={project.liveHref} target="_blank" rel="noreferrer">
                      {project.liveLabel || 'Open live'}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-card">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <p className="contact-label">Open to work</p>
            </div>

            <h2>
              Looking for a senior full-stack engineer who can take product
              work from architecture and APIs to frontend delivery, AI
              integration, and cloud release.
            </h2>

            <div className="contact-actions">
              <a
                href="mailto:sreytouchjessicalang@gmail.com"
                className="primary-link"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/sreytouch-lang/"
                className="ghost-link"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
