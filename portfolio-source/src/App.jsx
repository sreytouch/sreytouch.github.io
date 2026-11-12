import { useEffect, useRef, useState } from 'react'
import Icon from './components/Icon'
import ProjectPreview from './components/ProjectPreview'
import portrait from './assets/sreytouch-profile.jpg'
import { profile, metrics, experience, education, certifications, skillGroups } from './data/profile'
import { featuredProjects } from './data/projects'
import { archiveProjects } from './data/archive'
import { personalProjects } from './data/personalProjects'

const navigation = [['projects', 'Projects'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']]

function ExternalLink({ href, children, className = '', ...props }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>{children}<span className="sr-only"> (opens in a new tab)</span></a>
}

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{children && <div className="section-description">{children}</div>}</div>
}

function SystemDiagram() {
  const layers = [
    { icon: 'code', label: 'Thoughtful interfaces', detail: 'React / Next.js / TypeScript', className: 'interface' },
    { icon: 'server', label: 'Resilient backend services', detail: 'Python / FastAPI / Node.js', className: 'backend' },
    { icon: 'ai', label: 'Intelligent applications', detail: 'LLMs / LangGraph / RAG', className: 'intelligence' },
  ]
  return <div className="system-visual" aria-label="Engineering focus: interfaces, backend services, AI applications, and cloud infrastructure">
    <div className="system-topbar"><span className="window-dots"><i /><i /><i /></span><span>engineering / end-to-end</span><Icon name="code" size={14} /></div>
    <div className="system-canvas">
      <div className="system-caption"><span className="small-dot" /> FROM INTERFACE TO INTELLIGENCE</div>
      {layers.map((layer, i) => <div className="system-layer-wrap" key={layer.label}>
        {i > 0 && <div className="system-connector"><span /><Icon name="chevron" size={12} /></div>}
        <div className={`system-layer ${layer.className}`}><div className="layer-icon"><Icon name={layer.icon} /></div><div><strong>{layer.label}</strong><span>{layer.detail}</span></div><span className="layer-index">0{i + 1}</span></div>
      </div>)}
      <div className="system-foundation"><span><Icon name="database" size={15} /> Data</span><span><Icon name="shield" size={15} /> Security</span><span><Icon name="cloud" size={15} /> Cloud</span></div>
    </div>
    <div className="system-footer"><span className="small-dot" /> Designed to connect. Built to scale.</div>
  </div>
}

function ProjectCard({ project, index }) {
  return <article className="project-card">
    <div className={`project-visual project-visual--${project.id}`}>
      <span className="project-number">0{index + 1}</span>
      {project.image ? <ProjectPreview project={project} /> : <div className="workflow-visual" role="img" aria-label="Enterprise workflow: request, agent routing, permission-aware retrieval, approval, execution, audit trail"><div className="workflow-label"><Icon name="layers" size={15} /> AGENT ORCHESTRATION</div><div className="workflow-node"><Icon name="mail" size={15} /> Business request</div><div className="workflow-line" /><div className="workflow-node workflow-node--accent"><Icon name="ai" size={15} /> Route & retrieve</div><div className="workflow-line" /><div className="workflow-branches"><span><Icon name="shield" size={14} /> Approve</span><span><Icon name="check" size={14} /> Execute</span></div><div className="workflow-audit">Permission checks · Audit trail</div></div>}
      <span className="visual-caption">{project.imageCaption || 'Architecture overview'}</span>
    </div>
    <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p className="project-problem"><span>THE PROBLEM</span>{project.problem}</p><ul className="capabilities">{project.capabilities.map(item => <li key={item}><Icon name="check" size={14} />{item}</li>)}</ul><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><ExternalLink className="project-link" href={project.href}><span><Icon name="github" size={17} /> Explore repository</span><Icon name="external" size={18} /></ExternalLink></div>
  </article>
}

function PersonalProjects() {
  return <div className="personal-project-grid">
    {personalProjects.map(project => <article className="personal-project-card" key={project.id}>
      <div className="personal-project-top"><span className="product-mark" aria-hidden="true">{project.mark}</span><span className="product-status"><span className="small-dot" /> Live website</span></div>
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="personal-project-description">{project.description}</p>
      <ul className="personal-project-features">{project.features.map(feature => <li key={feature}><Icon name="check" size={14} />{feature}</li>)}</ul>
      <ExternalLink href={project.href} className="personal-project-link" aria-label={`Visit ${project.title} website (opens in a new tab)`}><span><strong>Visit website</strong><small>{project.domain}</small></span><Icon name="external" size={19} /></ExternalLink>
    </article>)}
  </div>
}

function ProjectArchive() {
  const [category, setCategory] = useState('All')
  const filtered = archiveProjects.filter(project => category === 'All' || project.category === category)
  return <details className="archive"><summary><span><Icon name="layers" /><strong>More web projects</strong><span className="archive-count">{archiveProjects.length} projects</span></span><Icon name="chevron" /></summary><div className="archive-body"><div className="archive-filters" aria-label="Filter web projects">{['All', 'Full-stack', 'Frontend'].map(filter => <button key={filter} type="button" aria-pressed={category === filter} onClick={() => setCategory(filter)}>{filter}</button>)}</div><p className="sr-only" role="status">{filtered.length} projects shown</p><div className="archive-grid">{filtered.map(project => <ExternalLink href={project.href} className="archive-item" key={project.title}><div className="archive-item-top"><span>{project.category}</span><Icon name="external" size={18} /></div><h3>{project.title}</h3><p>{project.description}</p><span className="archive-stack">{project.stack}</span>{project.live && <span className="live-label">Visit live site</span>}</ExternalLink>)}</div></div></details>
}

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const menuButton = useRef(null)
  const header = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('portfolio-theme', theme) } catch { /* Themes still work without browser storage. */ }
  }, [theme])

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.3
      let current = 'home'
      for (const [id] of navigation) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= threshold) current = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) current = 'contact'
      setActiveSection(current)
    }
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => { window.removeEventListener('scroll', updateActiveSection); window.removeEventListener('resize', updateActiveSection) }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    header.current?.querySelector('#primary-nav a')?.focus()
    const onKey = event => { if (event.key === 'Escape') { setMenuOpen(false); menuButton.current?.focus() } }
    const onOutside = event => { if (!header.current?.contains(event.target)) setMenuOpen(false) }
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)
    document.addEventListener('focusin', onOutside)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onOutside); document.removeEventListener('focusin', onOutside); window.removeEventListener('resize', onResize) }
  }, [menuOpen])

  const goToSection = (event, id) => {
    setMenuOpen(false)
    setActiveSection(id)
    if (menuOpen) {
      event.preventDefault()
      const section = document.getElementById(id)
      section?.focus({ preventScroll: true })
      section?.scrollIntoView()
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" ref={header}><div className="container header-inner">
      <a className="brand" href="#home" aria-label="Sreytouch Lang, home" onClick={() => setMenuOpen(false)}><span className="brand-mark">sl<span>.</span></span><span>Sreytouch Lang<span className="brand-alias"> / Jessica</span></span></a>
      <nav id="primary-nav" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={event => goToSection(event, id)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="icon-button theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} /></button><button ref={menuButton} type="button" className="icon-button menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div>
    </div></header>
    <main id="main" tabIndex="-1">
      <section id="home" className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="small-dot" /> SOFTWARE ENGINEERING · APPLIED AI</p><div className="hero-intro"><img src={portrait} alt="" width="38" height="38" /><p>Hi, I’m Sreytouch <span>(Jessica).</span></p></div><h1 id="hero-title">AI Engineer <span className="hero-amp">&</span><br />Full-Stack<br /><span className="accent-text">Software Engineer.</span></h1><p className="hero-description">I build AI-powered applications and the systems behind them—from intelligent agents and RAG pipelines to scalable APIs and thoughtful web experiences.</p><div className="hero-actions"><a href="#projects" className="button button-primary">View projects <Icon name="arrow" size={18} /></a><a href="#contact" className="button button-secondary"><Icon name="mail" size={17} /> Get in touch</a></div><div className="hero-meta"><span><Icon name="pin" size={15} /> {profile.location}</span><span className="meta-divider" /><ExternalLink href={profile.github}>GitHub <Icon name="external" size={13} /></ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn <Icon name="external" size={13} /></ExternalLink></div></div>
        <div className="hero-visual"><SystemDiagram /><div className="hero-visual-note"><span>Full-stack thinking.</span><span>From first request to production.</span></div></div>
      </section>
      <div className="container impact-strip" aria-label="Selected career impact">{metrics.map(metric => <div className="impact-item" key={metric.label}><strong>{metric.value}</strong><div><span>{metric.label}</span><small>{metric.context}</small></div></div>)}</div>
      <section id="projects" className="section container" tabIndex="-1" aria-labelledby="projects-title"><div id="personal-projects"><SectionHeading number="01" label="PERSONAL PROJECTS" title={<span id="projects-title">Products I’ve built.</span>}>My independent products, from interview practice and content creation to pregnancy wellness.</SectionHeading><PersonalProjects /></div><div className="engineering-projects-heading"><p className="eyebrow">OPEN-SOURCE ENGINEERING</p><h2>Engineering in practice.</h2><p>Three recent projects exploring AI agents, retrieval systems, and full-stack workflows.</p></div><div className="project-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div><ProjectArchive /></section>
      <section id="about" className="section about-section" tabIndex="-1" aria-labelledby="about-title"><div className="container about-grid"><div className="about-portrait"><img src={portrait} alt="Sreytouch Lang (Jessica)" width="460" height="460" loading="lazy" /><div className="portrait-caption"><strong>Sreytouch Lang</strong><span>Software engineer. Problem solver.</span></div></div><div className="about-copy"><p className="eyebrow"><span>02</span> THE ENGINEER BEHIND THE CODE</p><h2 id="about-title">The whole system.<br /><span className="muted-heading">The details that matter.</span></h2><p>{profile.summary}</p><p>My work spans fintech, enterprise platforms, and public-sector systems. I care about how the pieces fit together: clear interfaces, secure APIs, dependable data, and applications that are useful in practice.</p><div className="about-principles"><span><Icon name="layers" /> End-to-end ownership</span><span><Icon name="shield" /> Security by design</span><span><Icon name="ai" /> Applied AI</span></div><a href="#experience" className="text-link">Explore my experience <Icon name="arrow" size={17} /></a></div></div></section>
      <section id="skills" className="section container" tabIndex="-1" aria-labelledby="skills-title"><SectionHeading number="03" label="TECHNICAL TOOLKIT" title={<span id="skills-title">Across the stack.</span>}>Tools and technologies from my professional work and public projects.</SectionHeading><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group" key={group.title}><div className="skill-heading"><Icon name={group.icon || ['ai', 'code', 'server', 'database', 'cloud', 'layers'][index]} /><h3>{group.title}</h3></div><div className="skill-tokens">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>
      <section id="experience" className="section experience-section" tabIndex="-1" aria-labelledby="experience-title"><div className="container"><SectionHeading number="04" label="PROFESSIONAL EXPERIENCE" title={<span id="experience-title">A track record of building.</span>} /><div className="timeline">{experience.map((role, index) => <article className="experience-row" key={role.company}><div className="experience-date"><span className={`timeline-dot${index === 0 ? ' current' : ''}`} /><p>{role.period}</p>{role.location && <span>{role.location}</span>}{index === 0 && <span className="current-label">CURRENT ROLE</span>}</div><div className="experience-details"><div className="experience-title"><div><h3>{role.role}</h3><p>{role.company}</p></div><span className="role-number">0{index + 1}</span></div><ul>{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="experience-stack">{role.stack.join(' · ')}</div></div></article>)}</div>
        <div className="education-grid"><div><p className="eyebrow">EDUCATION</p>{education.map(item => <div className="education-item" key={item.degree}><h3>{item.degree}</h3><p>{item.school}</p><span>{item.period}</span>{item.note && <small>{item.note}</small>}</div>)}</div><div><p className="eyebrow">CERTIFICATIONS & CONTINUING LEARNING</p><ul className="certifications">{certifications.map(item => <li key={item}><Icon name="check" size={15} />{item}</li>)}</ul></div></div>
      </div></section>
      <section id="contact" className="section container contact-section" tabIndex="-1" aria-labelledby="contact-title"><div className="contact-top"><div><p className="eyebrow"><span>05</span> LET’S CONNECT</p><h2 id="contact-title">Good software starts<br />with a conversation<span className="accent-text">.</span></h2><p>Have an AI, full-stack, or software engineering opportunity?<br className="desktop-break" /> I’d love to hear what you’re building.</p></div></div></section>
    </main>
    <footer className="container site-footer"><span>© {new Date().getFullYear()} Sreytouch Lang (Jessica)</span><span>Built with React. Crafted with care.</span><a href="#home">Back to top ↑</a></footer>
  </>
}
