import { useEffect, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'
type Language = 'pt' | 'en'

const profileUrl = 'https://github.com/LuisGustavoPassos'
const themeStorageKey = 'luis-portfolio-theme'

const content = {
  pt: {
    nav: [
      ['Sobre', '#sobre'],
      ['Competências', '#competencias'],
      ['Projetos', '#projetos'],
      ['Atuação', '#atuacao'],
      ['Formação', '#formacao'],
      ['Contato', '#contato'],
    ],
    themeLabel: 'Alternar tema',
    languageLabel: 'Switch to English',
    eyebrow: 'Engenharia de software · Desenvolvimento fullstack',
    headline: 'Construindo software com intenção e clareza.',
    intro:
      'Sou Luis Gustavo dos Passos, estudante de Engenharia de Software e desenvolvedor fullstack. Trabalho principalmente com .NET, C# e TypeScript com React.',
    projectsCta: 'Explorar projetos',
    heroContactCta: 'Vamos conversar',
    note: 'Em formação · 7º período',
    aboutLabel: '01 / Sobre',
    aboutTitle: 'Tecnologia bem pensada começa entendendo o sistema.',
    aboutText:
      'Tenho experiência prática na arquitetura, no planejamento e na refatoração de plataformas legadas para soluções modulares e escaláveis. Também me interesso por design de sistemas, modelagem de bancos relacionais e componentes reutilizáveis que simplificam o desenvolvimento.',
    aboutAsideTitle: 'Minha abordagem',
    aboutAside: 'Entender o contexto. Organizar a solução. Construir para evoluir.',
    skillsLabel: '02 / Competências',
    skillsTitle: 'Ferramentas que uso para transformar ideias em software.',
    skills: [
      { name: 'Frontend', items: 'HTML5 · CSS3 · JavaScript · TypeScript · React · Tailwind CSS · Vite' },
      { name: 'Backend', items: 'C# · .NET Core · ASP.NET Core · Node.js' },
      { name: 'Bancos de dados', items: 'PostgreSQL · MySQL · SQL Server' },
      { name: 'Ferramentas', items: 'Git · GitHub · Visual Studio · VS Code' },
    ],
    projectsLabel: '03 / Projetos',
    projectsTitle: 'Trabalho em progresso, disponível no GitHub.',
    projectsText:
      'Estou organizando os projetos que melhor representam minha trajetória. Enquanto isso, você pode acompanhar meus repositórios e estudos diretamente no GitHub.',
    githubCta: 'Visitar meu GitHub',
    activity: 'Repositórios e estudos',
    workLabel: '04 / Atuação',
    workTitle: 'Áreas em que posso contribuir.',
    work: [
      ['Arquitetura e evolução', 'Planejamento e refatoração de sistemas para estruturas modulares e escaláveis.'],
      ['Dados relacionais', 'Modelagem de bancos de dados como parte de soluções consistentes e bem organizadas.'],
      ['Componentes reutilizáveis', 'Criação de componentes que ajudam a reduzir repetição e dar ritmo ao desenvolvimento.'],
    ],
    educationLabel: '05 / Formação',
    educationTitle: 'Aprendizado contínuo, com prática no centro.',
    degree: 'Engenharia de Software',
    semester: 'Em formação · 7º período',
    contactLabel: '06 / Contato',
    contactTitle: 'Tem uma ideia ou oportunidade em mente?',
    contactText:
      'Estou aberto a conversas sobre oportunidades, projetos e colaboração em desenvolvimento de software.',
    contactCta: 'Encontrar no GitHub',
    footer: 'Feito com cuidado por Luis Gustavo dos Passos.',
    backToTop: 'Voltar ao topo',
  },
  en: {
    nav: [
      ['About', '#sobre'],
      ['Skills', '#competencias'],
      ['Projects', '#projetos'],
      ['Focus', '#atuacao'],
      ['Education', '#formacao'],
      ['Contact', '#contato'],
    ],
    themeLabel: 'Toggle theme',
    languageLabel: 'Mudar para português',
    eyebrow: 'Software engineering · Fullstack development',
    headline: 'Building software with intention and clarity.',
    intro:
      "I'm Luis Gustavo dos Passos, a Software Engineering student and fullstack developer. I mainly work with .NET, C#, and TypeScript with React.",
    projectsCta: 'Explore projects',
    heroContactCta: "Let's talk",
    note: 'Currently studying · 7th semester',
    aboutLabel: '01 / About',
    aboutTitle: 'Thoughtful technology starts with understanding the system.',
    aboutText:
      'I have hands-on experience with architecture, planning, and refactoring legacy platforms into modular and scalable solutions. I am also interested in systems design, relational database modeling, and reusable components that make development more effective.',
    aboutAsideTitle: 'My approach',
    aboutAside: 'Understand the context. Shape the solution. Build for what comes next.',
    skillsLabel: '02 / Skills',
    skillsTitle: 'Tools I use to turn ideas into software.',
    skills: [
      { name: 'Frontend', items: 'HTML5 · CSS3 · JavaScript · TypeScript · React · Tailwind CSS · Vite' },
      { name: 'Backend', items: 'C# · .NET Core · ASP.NET Core · Node.js' },
      { name: 'Databases', items: 'PostgreSQL · MySQL · SQL Server' },
      { name: 'Tools', items: 'Git · GitHub · Visual Studio · VS Code' },
    ],
    projectsLabel: '03 / Projects',
    projectsTitle: 'Work in progress, available on GitHub.',
    projectsText:
      "I'm organizing the projects that best represent my work. In the meantime, you can follow my repositories and learning projects directly on GitHub.",
    githubCta: 'Visit my GitHub',
    activity: 'Repositories and learning',
    workLabel: '04 / Focus',
    workTitle: 'Areas where I can contribute.',
    work: [
      ['Architecture and evolution', 'Planning and refactoring systems into modular and scalable structures.'],
      ['Relational data', 'Modeling databases as part of consistent, well-organized solutions.'],
      ['Reusable components', 'Building components that reduce repetition and support a steady development cycle.'],
    ],
    educationLabel: '05 / Education',
    educationTitle: 'Continuous learning, grounded in practice.',
    degree: 'Software Engineering',
    semester: 'Currently studying · 7th semester',
    contactLabel: '06 / Contact',
    contactTitle: 'Have an idea or opportunity in mind?',
    contactText:
      "I'm open to conversations about opportunities, projects, and software development collaboration.",
    contactCta: 'Find me on GitHub',
    footer: 'Made with care by Luis Gustavo dos Passos.',
    backToTop: 'Back to top',
  },
} as const

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const appliedTheme = document.documentElement.dataset.theme
    if (appliedTheme === 'light' || appliedTheme === 'dark') return appliedTheme
  }

  try {
    const savedTheme = localStorage.getItem(themeStorageKey)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Theme still works for the current visit when storage is unavailable.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Icon({ name }: { name: 'sun' | 'moon' | 'arrow' | 'external' }) {
  if (name === 'sun') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
  }
  if (name === 'moon') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" /></svg>
  }
  if (name === 'external') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6m-.5-5.5L11 13" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" /></svg>
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [language, setLanguage] = useState<Language>('pt')
  const copy = content[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#2f4156' : '#f5efeb')
    try {
      localStorage.setItem(themeStorageKey, theme)
    } catch {
      // The selected theme remains active for the current visit.
    }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = language === 'pt'
      ? 'Luis Gustavo dos Passos — Portfólio'
      : 'Luis Gustavo dos Passos — Portfolio'
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      language === 'pt'
        ? 'Portfólio de Luis Gustavo dos Passos, estudante de Engenharia de Software e desenvolvedor fullstack.'
        : 'Portfolio of Luis Gustavo dos Passos, Software Engineering student and fullstack developer.',
    )
  }, [language])

  return (
    <div className="site-shell" lang={language === 'pt' ? 'pt-BR' : 'en'}>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label={language === 'pt' ? 'Luis Gustavo dos Passos, início' : 'Luis Gustavo dos Passos, home'}>
          <span className="wordmark-mark">LG</span>
          <span className="wordmark-name">Luis Gustavo<br />dos Passos</span>
        </a>
        <nav className="main-nav" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          {copy.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button language-button" type="button" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} aria-label={copy.languageLabel}>
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className="icon-button theme-button" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={copy.themeLabel} aria-pressed={theme === 'dark'} title={copy.themeLabel}>
            <Icon name={theme === 'light' ? 'moon' : 'sun'} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{copy.eyebrow}</p>
            <h1 id="hero-title">{copy.headline}</h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">{copy.projectsCta}<Icon name="arrow" /></a>
              <a className="text-link" href="#contato">{copy.heroContactCta}<Icon name="arrow" /></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label={copy.note}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="hero-initials">LG<span>.</span></span>
            <span className="hero-note">{copy.note}</span>
            <span className="hero-index">DEV · 01</span>
          </aside>
          <a className="scroll-cue" href="#sobre"><span />{language === 'pt' ? 'Role para conhecer' : 'Scroll to explore'}</a>
        </section>

        <section className="content-section section-wrap about-section" id="sobre" aria-labelledby="about-title">
          <div className="section-heading"><p className="eyebrow">{copy.aboutLabel}</p><h2 id="about-title">{copy.aboutTitle}</h2></div>
          <div className="about-content">
            <p className="body-large">{copy.aboutText}</p>
            <div className="approach-card"><span className="small-label">{copy.aboutAsideTitle}</span><p>{copy.aboutAside}</p><span className="card-number">01</span></div>
          </div>
        </section>

        <section className="content-section section-wrap" id="competencias" aria-labelledby="skills-title">
          <div className="section-heading section-heading-row"><div><p className="eyebrow">{copy.skillsLabel}</p><h2 id="skills-title">{copy.skillsTitle}</h2></div><span className="section-mark">✳</span></div>
          <div className="skills-grid">
            {copy.skills.map((group, index) => <article className="skill-card" key={group.name}><span className="card-number">0{index + 1}</span><h3>{group.name}</h3><p>{group.items}</p></article>)}
          </div>
        </section>

        <section className="content-section section-wrap projects-section" id="projetos" aria-labelledby="projects-title">
          <div className="section-heading"><p className="eyebrow">{copy.projectsLabel}</p><h2 id="projects-title">{copy.projectsTitle}</h2></div>
          <div className="projects-panel">
            <div className="project-visual" aria-hidden="true"><span className="project-grid" /><span className="project-symbol">&lt; / &gt;</span></div>
            <div className="project-copy"><span className="small-label">{copy.activity}</span><p>{copy.projectsText}</p><a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">{copy.githubCta}<Icon name="external" /></a></div>
          </div>
        </section>

        <section className="content-section section-wrap" id="atuacao" aria-labelledby="work-title">
          <div className="section-heading"><p className="eyebrow">{copy.workLabel}</p><h2 id="work-title">{copy.workTitle}</h2></div>
          <div className="work-list">
            {copy.work.map(([title, description], index) => <article className="work-item" key={title}><span className="work-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="work-arrow" aria-hidden="true">↗</span></article>)}
          </div>
        </section>

        <section className="content-section section-wrap education-section" id="formacao" aria-labelledby="education-title">
          <div className="section-heading"><p className="eyebrow">{copy.educationLabel}</p><h2 id="education-title">{copy.educationTitle}</h2></div>
          <article className="education-card"><span className="education-symbol" aria-hidden="true">✳</span><div><h3>{copy.degree}</h3><p>{copy.semester}</p></div></article>
        </section>

        <section className="contact-section section-wrap" id="contato" aria-labelledby="contact-title">
          <p className="eyebrow">{copy.contactLabel}</p>
          <h2 id="contact-title">{copy.contactTitle}</h2>
          <p className="contact-intro">{copy.contactText}</p>
          <a className="button button-light" href={profileUrl} target="_blank" rel="noreferrer">{copy.contactCta}<Icon name="external" /></a>
          <span className="contact-decoration" aria-hidden="true">LG.</span>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>{copy.footer}</span><a href="#inicio">{copy.backToTop}<span aria-hidden="true"> ↑</span></a><span>© {new Date().getFullYear()}</span></footer>
    </div>
  )
}

export default App
