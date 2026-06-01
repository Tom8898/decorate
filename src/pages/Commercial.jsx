import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import showroomImg from '../assets/3_ See the new Ambitec showroom .webp'
import williamAustinImg from '../assets/1_ Ambitec x William Austin at the Aotearoa Art Fair.webp'

const PROJECTS = [
  {
    title: 'Ambitec Showroom',
    sub: 'Mt Roskill, Auckland',
    tone: 'proj-3',
    image: showroomImg,
    to: '/commercial/ambitec-showroom',
  },
  {
    title: '2026 Aotearoa Art Fair',
    sub: 'Ambitec x William Austin & Kurutai',
    tone: 'proj-1',
    image: williamAustinImg,
  },
  {
    title: 'ECC Lighting Showroom',
    sub: 'Auckland',
    tone: 'proj-2',
  },
]

function ProjectCard({ project }) {
  const inner = (
    <>
      <span className="project__media">
        {project.image && (
          <img src={project.image} alt={project.title} loading="lazy" />
        )}
      </span>
      <span className="project__caption">
        <span className="project__mark">_</span>
        <span>
          <strong>{project.title}</strong>
          <em>{project.sub}</em>
        </span>
      </span>
    </>
  )

  if (project.to) {
    return (
      <Link to={project.to} className={`project ${project.tone}`}>
        {inner}
      </Link>
    )
  }
  return (
    <a href="#" className={`project ${project.tone}`}>
      {inner}
    </a>
  )
}

function Commercial() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img src={showroomImg} alt="Ambitec commercial projects" />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="breadcrumb__current">Commercial</span>
          </nav>
          <h1 className="product-hero__title">Commercial Projects</h1>
          <p className="product-hero__subtitle">
            From showrooms to hospitality and retail fit-outs, explore how our
            polished plaster and clay finishes shape considered commercial
            spaces across New Zealand.
          </p>
        </div>
      </section>

      <section className="inspire">
        <div className="container">
          <div className="inspire__grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Commercial
