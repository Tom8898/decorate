import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'

const PROJECT_NAMES = [
  'Almorah Residence',
  'Lake Ridge House',
  'Huruhi',
  'Mooney Residence',
  'One Saint Stephens',
  'Herne Bay Bathroom',
  'Skelton Studio House',
  'Westmere House',
  'Parklane',
  'Upper Watt Street',
  'Red Beach House',
  'Valley House',
  'England Street',
  'Island Bay House',
  'Waipu House',
  'Winscombe Renovation',
  'Moa Rd',
  'Kiekie House',
  'Villa Extension',
  'Herne Bay House',
  'Mountain Retreat',
  'Ponsonby Villa',
  'Remuera House',
  'Kanuka House',
]

const PROJECTS = PROJECT_NAMES.map((title, i) => ({
  title,
  sub: 'Residential',
  tone: `proj-${(i % 3) + 1}`,
}))

function ProjectCard({ project }) {
  return (
    <a href="#" className={`project ${project.tone}`}>
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
    </a>
  )
}

function Residential() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div
          className="product-hero__media"
          style={{
            background:
              'linear-gradient(160deg, #cfc5b3 0%, #9c907a 55%, #5f5747 100%)',
          }}
        />
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="breadcrumb__current">Residential</span>
          </nav>
          <h1 className="product-hero__title">Residential Projects</h1>
          <p className="product-hero__subtitle">
            Ambitec specialises in polished plaster and premium wall finishes
            for residential projects throughout New Zealand — bespoke interior
            surfaces that bring texture, warmth, and material depth to
            contemporary homes and heritage interiors.
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

export default Residential
