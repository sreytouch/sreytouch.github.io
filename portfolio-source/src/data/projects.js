import chatbotPreview from '../assets/chatbot-preview.svg';
import copilotDashboard from '../assets/copilot-dashboard.png';

export const featuredProjects = [
  {
    id: 'enterprise-flow',
    title: 'EnterpriseFlow AI',
    category: 'Enterprise AI · Workflow automation',
    description:
      'A departmental AI workspace combining permission-aware retrieval, bounded agents, and workflows with human approval.',
    problem:
      'Give teams a practical way to work with internal knowledge while keeping document access and approval decisions explicit.',
    capabilities: [
      'Hybrid search with source citations and document permissions checked at retrieval time.',
      'LangGraph agents with restricted tools, usage budgets, and streamed responses.',
      'Durable workflows with saved checkpoints, review steps, and auditable approval decisions.',
    ],
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Redis'],
    href: 'https://github.com/sreytouch/Enterprise-FlowAI-Secure-Enterprise-Agent-Workflow-Automation-Platform',
    image: null,
    imageAlt: '',
    imageCaption: 'Architecture overview · departmental access, retrieval, and review',
    architecture: ['Workspace', 'Authorized agents', 'Approval workflows'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot System',
    category: 'Applied AI · Retrieval systems',
    description:
      'A document and media-aware chatbot that connects conversational answers to source evidence and persistent context.',
    problem:
      'Make uploaded documents and transcribed media easier to explore without losing the sources behind an answer.',
    capabilities: [
      'PDF, DOCX, audio, and video ingestion with chunking and duplicate detection.',
      'Chroma retrieval with source excerpts and page references alongside answers.',
      'LangGraph orchestration with Redis conversation memory and rolling summaries.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Redis', 'OpenAI'],
    href: 'https://github.com/sreytouch/AI-Chatbot-System',
    image: chatbotPreview,
    imageWidth: 1600,
    imageHeight: 900,
    imageAlt: 'AI Chatbot System dashboard preview showing ingestion and document chat tools',
    imageCaption: 'Repository UI preview · document and media workspace',
    architecture: ['Files & media', 'Retrieval pipeline', 'Grounded answers'],
  },
  {
    id: 'job-search-copilot',
    title: 'AI Job Search Copilot',
    category: 'Full-stack product · Career tools',
    description:
      'A job search workspace bringing resume alignment, reviewable AI drafts, applications, and interview preparation together.',
    problem:
      'Help job seekers keep application materials, progress, and interview preparation in one organized workflow.',
    capabilities: [
      'Resume-to-job analysis flow with cached results and matched or missing skill insights.',
      'Resume tailoring with accept, edit, and reject controls that save a new version.',
      'Application pipeline, interview preparation, and analytics views in one workspace.',
    ],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Zod'],
    href: 'https://github.com/sreytouch/AI-Job-Search-Copilot',
    image: copilotDashboard,
    imageWidth: 1440,
    imageHeight: 900,
    imageAlt: 'AI Job Search Copilot dashboard with application pipeline, recent applications, and interview reminders',
    imageCaption: 'Product screenshot · job search dashboard',
    architecture: ['Resume & job', 'Analysis & review', 'Application tracking'],
  },
].sort((a, b) => ['ai-chatbot', 'enterprise-flow', 'job-search-copilot'].indexOf(a.id) - ['ai-chatbot', 'enterprise-flow', 'job-search-copilot'].indexOf(b.id));
