import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import almorahImg from '../assets/residential/almorah-residence.webp'
import lakeRidgeImg from '../assets/residential/lake-ridge-house.webp'
import huruhiImg from '../assets/residential/huruhi.webp'
import mooneyImg from '../assets/residential/mooney-residence.webp'
import oneSaintStephensImg from '../assets/residential/one-saint-stephens.webp'
import herneBayBathroomImg from '../assets/residential/herne-bay-bathroom.webp'
import skeltonImg from '../assets/residential/skelton-studio-house.webp'
import westmereImg from '../assets/residential/westmere-house.webp'
import parklaneImg from '../assets/residential/parklane.webp'
import upperWattImg from '../assets/residential/upper-watt-street.webp'
import redBeachImg from '../assets/residential/red-beach-house.webp'
import valleyImg from '../assets/residential/valley-house.webp'
import englandStImg from '../assets/residential/england-street.webp'
import islandBayImg from '../assets/residential/island-bay-house.webp'
import waipuImg from '../assets/residential/waipu-house.webp'
import winscombeImg from '../assets/residential/winscombe-renovation.webp'
import moaRdImg from '../assets/residential/moa-rd.webp'
import kiekieImg from '../assets/residential/kiekie-house.webp'
import villaExtensionImg from '../assets/residential/villa-extension.webp'
import herneBayHouseImg from '../assets/residential/herne-bay-house.webp'
import mountainRetreatImg from '../assets/residential/mountain-retreat.webp'
import ponsonbyVillaImg from '../assets/residential/ponsonby-villa.webp'
import remueraImg from '../assets/residential/remuera-house.webp'
import kanukaImg from '../assets/residential/kanuka-house.webp'

const PROJECT_DATA = [
  ['Almorah Residence', almorahImg],
  ['Lake Ridge House', lakeRidgeImg],
  ['Huruhi', huruhiImg],
  ['Mooney Residence', mooneyImg],
  ['One Saint Stephens', oneSaintStephensImg],
  ['Herne Bay Bathroom', herneBayBathroomImg],
  ['Skelton Studio House', skeltonImg],
  ['Westmere House', westmereImg],
  ['Parklane', parklaneImg],
  ['Upper Watt Street', upperWattImg],
  ['Red Beach House', redBeachImg],
  ['Valley House', valleyImg],
  ['England Street', englandStImg],
  ['Island Bay House', islandBayImg],
  ['Waipu House', waipuImg],
  ['Winscombe Renovation', winscombeImg],
  ['Moa Rd', moaRdImg],
  ['Kiekie House', kiekieImg],
  ['Villa Extension', villaExtensionImg],
  ['Herne Bay House', herneBayHouseImg],
  ['Mountain Retreat', mountainRetreatImg],
  ['Ponsonby Villa', ponsonbyVillaImg],
  ['Remuera House', remueraImg],
  ['Kanuka House', kanukaImg],
]

const PROJECTS = PROJECT_DATA.map(([title, image], i) => ({
  title,
  sub: 'Residential',
  tone: `proj-${(i % 3) + 1}`,
  image,
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
        <div className="product-hero__media">
          <img src={mountainRetreatImg} alt="Ambitec residential projects" />
        </div>
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
