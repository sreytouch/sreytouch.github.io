export const profile = {
  name: 'Sreytouch Lang (Jessica)',
  firstName: 'Sreytouch',
  email: 'sreytouchlangjessica95@gmail.com',
  location: 'San Francisco, CA · Open to relocate',
  github: 'https://github.com/sreytouch',
  linkedin: 'https://www.linkedin.com/in/sreytouch-lang/',
  headline: 'AI Engineer | Full-Stack Software Engineer',
  summary:
    'I build AI-powered applications and scalable full-stack systems. My work connects Python, FastAPI, React, and Next.js with LLMs, retrieval-augmented generation, and cloud infrastructure to turn complex workflows into useful products.'
}

export const metrics = [
  { value: '8+', label: 'Years of experience', context: 'Professional software engineering' },
  { value: '100K+', label: 'Daily users supported', context: 'Fintech platform at Coinable' },
  { value: '1M+', label: 'Daily API requests', context: 'Full-stack platforms at LTLabs' },
  { value: '30%', label: 'User retention uplift', context: 'Generative AI features at Coinable' }
]

export const experience = [
  {
    company: 'Handshake AI',
    role: 'AI Engineer',
    period: 'May 2026 – Present',
    location: '',
    bullets: [
      'Build generative AI applications for enterprise workflows with Python, LangChain, OpenAI, Hugging Face, and RAG.',
      'Develop and monitor production ML and LLM pipelines on AWS SageMaker, integrating APIs, vector databases, and enterprise data.',
      'Maintain engineering quality through testing, debugging, refactoring, and production code reviews.'
    ],
    stack: ['Python', 'LangChain', 'OpenAI', 'Hugging Face', 'RAG', 'AWS SageMaker']
  },
  {
    company: 'Coinable Inc.',
    role: 'Senior Full-Stack Engineer',
    period: 'Apr 2024 – May 2026',
    location: '',
    bullets: [
      'Owned a greenfield fintech platform serving 100K+ daily users with 99.9% uptime; shipped generative AI features that lifted retention by 30%.',
      'Built REST and GraphQL APIs and optimized PostgreSQL and MongoDB queries, reducing average peak-load latency from 450 ms to 85 ms.',
      'Led 6 engineers, introduced TDD and CI practices that cut production defects by 40%, and automated infrastructure deployments to reduce deployment time by 30%.'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker']
  },
  {
    company: 'LTLabs Co., Ltd.',
    role: 'Senior Software Engineer',
    period: 'Feb 2020 – Mar 2024',
    location: '',
    bullets: [
      'Delivered React, Angular, and Next.js applications with Node.js and Python backends serving 1M+ daily API requests.',
      'Re-architected a monolith into independently scalable microservices, cutting web response time by 18.2%; Kafka and Lambda pipelines increased throughput by 20%.',
      'Led organization-wide CI adoption, reducing deployment steps from 12 to 3 and shortening release cycles by 50%.'
    ],
    stack: ['React', 'Next.js', 'Angular', 'Node.js', 'Python', 'Kafka', 'AWS Lambda', 'CI/CD']
  },
  {
    company: 'Slash Co. Inc.',
    role: 'Software Engineer',
    period: 'Apr 2017 – Feb 2020',
    location: '',
    bullets: [
      'Built Cambodia’s national e-licensing platform across frontend and backend, achieving 200% growth in digital applications at launch.',
      'Integrated the ASYCUDA customs system to automate cross-border data flows and eliminate manual reconciliation.',
      'Developed OWASP-compliant REST APIs with OAuth2 and JWT authentication for government-facing services.'
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'OAuth2', 'JWT']
  },
  {
    company: 'Pathmazing Co., Ltd.',
    role: 'Junior Software Engineer',
    period: 'Oct 2015 – Apr 2017',
    location: '',
    bullets: [
      'Built core banking web application features with React, Angular, and Node.js for thousands of daily users.',
      'Improved application performance and user experience across banking workflows.',
      'Implemented Node.js and Express microservices that reduced system downtime by 15%.'
    ],
    stack: ['React', 'Angular', 'Node.js', 'Express', 'Microservices']
  }
]

export const education = [
  {
    degree: 'M.S., Computer & Information Science',
    school: 'Westcliff University',
    period: 'Expected Mar 2027',
    note: 'Coursework in machine learning, applied AI, big data, database systems, and AWS & DevOps.'
  },
  {
    degree: 'B.S., Computer & Information Science',
    school: 'Royal University of Phnom Penh',
    period: 'Apr 2016',
    note: 'GPA 3.9 / 4.0 · Algorithms, data structures, object-oriented programming, and database systems.'
  }
]

export const certifications = [
  'CodePath AI301 · AI Open-Source Capstone · Summer 2026 · Current student',
  'CodePath AI110 · Foundations of AI Engineering · Spring 2026',
  'CodePath Intermediate Software Engineering · Certificate of Achievement · 2022',
  'Claude with Amazon Bedrock',
  'Claude with Google Vertex AI',
  'Model Context Protocol: Advanced Topics',
  'AI Fluency: Framework & Foundations',
  'AI Fluency for Builders'
]

export const skillGroups = [
  {
    title: 'AI & Machine Learning',
    icon: 'sparkles',
    skills: ['Generative AI', 'LLM Applications', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'OpenAI API', 'Hugging Face', 'Prompt Engineering', 'Machine Learning']
  },
  {
    title: 'Frontend Engineering',
    icon: 'layout',
    skills: ['React', 'Next.js', 'TypeScript', 'Angular', 'CSS', 'Design Systems', 'Localization', 'Internationalization']
  },
  {
    title: 'Backend Engineering',
    icon: 'code',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices']
  },
  {
    title: 'Databases & Data',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB', 'Vector Databases', 'Apache Kafka', 'Query Optimization']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'AWS SageMaker', 'Lambda', 'S3', 'CloudFront', 'CloudFormation', 'Docker', 'CI/CD', 'Blue-Green Deployments']
  },
  {
    title: 'Software Architecture',
    icon: 'layers',
    skills: ['System Design', 'API Design', 'Authentication', 'OAuth2 / JWT', 'Event-Driven Systems', 'Workflow Orchestration', 'TDD', 'Code Review']
  }
]
