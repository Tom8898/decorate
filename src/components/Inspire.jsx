import williamAustinImg from '../assets/1_ Ambitec x William Austin at the Aotearoa Art Fair.webp'
import kurutaiImg from '../assets/2_ Ambitec x Kurutai at the Aotearoa Art Fair.webp'
import showroomImg from '../assets/3_ See the new Ambitec showroom .webp'

const PROJECTS = [
  {
    title: 'Ambitec x William Austin',
    sub: 'at the Aotearoa Art Fair',
    tone: 'proj-1',
    image: williamAustinImg,
  },
  {
    title: 'Ambitec x Kurutai',
    sub: 'at the Aotearoa Art Fair',
    tone: 'proj-2',
    image: kurutaiImg,
  },
  {
    title: 'See the new Ambitec showroom',
    sub: 'Mt Roskill, Auckland',
    tone: 'proj-3',
    image: showroomImg,
  },
]

function Inspire() {
  return (
    <section className="inspire" id="projects">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Spaces to inspire</h2>
          <p className="inspire__lead">
            View some of our recently completed projects for inspiration and
            examples of how our polished plaster finishes can add something
            unique to your space.
          </p>
        </header>

        <div className="inspire__grid">
          {PROJECTS.map((project) => (
            <a key={project.title} href="#" className={`project ${project.tone}`}>
              <span className="project__media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </span>
              <span className="project__caption">
                <span className="project__mark">_</span>
                <span>
                  <strong>{project.title}</strong>
                  <em>{project.sub}</em>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inspire
