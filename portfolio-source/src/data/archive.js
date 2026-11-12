export const archiveProjects = [
  { title: 'Banking Application', category: 'Full-stack', description: 'A banking application with account dashboards and connected financial workflows.', stack: 'Next.js · TypeScript', repo: 'Banking-Application-NextJS' },
  { title: 'Chat Application', category: 'Full-stack', description: 'A full-stack messaging project exploring real-time communication and conversation flows.', stack: 'JavaScript · Full-stack', repo: 'Chat-Application-FullStack' },
  { title: 'Video Collaboration', category: 'Frontend', description: 'A meeting application exploring video collaboration and multi-panel interfaces.', stack: 'TypeScript · Collaboration', repo: 'Zoom-Clone-Applicatioin' },
  { title: 'Ecommerce Application', category: 'Full-stack', description: 'A full-stack storefront with product browsing and shopping workflows.', stack: 'JavaScript · Ecommerce', repo: 'e-commerce-app-fullstack' },
  { title: 'Food Recipe Platform', category: 'Full-stack', description: 'A recipe application combining content browsing with full-stack application flows.', stack: 'JavaScript · CRUD', repo: 'foodRecipeApp-FullStack' },
  { title: 'Bitcoin Dashboard', category: 'Frontend', description: 'An API-connected interface for exploring cryptocurrency market information.', stack: 'React · Node.js', repo: 'Bitcoin-React-NodeJS-App' },
  { title: 'Online Learning', category: 'Full-stack', description: 'A learning application built around courses and structured educational content.', stack: 'JavaScript · Learning platform', repo: 'online-learning-application' },
  { title: 'Book Store', category: 'Frontend', description: 'A React storefront exploring book discovery and ecommerce interfaces.', stack: 'React · Ecommerce', repo: 'book-stort-reactjs' },
].map(project => ({ ...project, href: project.href || `https://github.com/sreytouch/${project.repo}` }))
