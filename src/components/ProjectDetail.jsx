import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function ProjectDetail({ data }) {
  const {
    name,
    subtitle,
    heroImage,
    category = 'Commercial',
    categoryTo = '/commercial',
    intro = [],
    finishes = [],
    gallery = [],
    specs = [],
  } = data

  return (
    <div className="pjd-page">
      <section className="pjd-hero">
        <div className="pjd-hero__media">
          {heroImage && <img src={heroImage} alt={name} />}
        </div>
        <div className="container pjd-hero__inner">
          <nav className="pjd-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            {categoryTo ? (
              <Link to={categoryTo}>{category}</Link>
            ) : (
              <span>{category}</span>
            )}
            <span>/</span>
            <span className="pjd-breadcrumb__current">{name}</span>
          </nav>
          <h1 className="pjd-hero__title">{name}</h1>
          {subtitle && <p className="pjd-hero__subtitle">{subtitle}</p>}
        </div>
      </section>

      {intro.length > 0 && (
        <section className="pjd-intro">
          <div className="container pjd-intro__inner">
            <div className="pjd-intro__copy">
              {intro.map((para, i) => (
                <p key={i} className={i === 0 ? 'lead' : undefined}>
                  {para}
                </p>
              ))}
            </div>

            {finishes.length > 0 && (
              <aside className="pjd-finishes">
                <p className="eyebrow">Finishes used</p>
                <ul className="pjd-finishes__list">
                  {finishes.map((finish, i) => (
                    <li key={finish.name} className={`pjd-finish pjd-sw-${(i % 6) + 1}`}>
                      <span className="pjd-finish__swatch">
                        {finish.image && (
                          <img src={finish.image} alt={finish.name} loading="lazy" />
                        )}
                      </span>
                      <span className="pjd-finish__name">{finish.name}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="pjd-gallery">
          <div className="container">
            <div className="pjd-gallery__grid">
              {gallery.map((item, i) => (
                <figure key={item.caption} className={`pjd-gallery__item pjd-g-${(i % 3) + 1}`}>
                  <span className="pjd-gallery__media">
                    {item.image && (
                      <img src={item.image} alt={item.caption} loading="lazy" />
                    )}
                  </span>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {specs.length > 0 && (
        <section className="pjd-specs">
          <div className="container">
            <p className="eyebrow">Project details</p>
            <dl className="pjd-specs__list">
              {specs.map(([label, value]) => (
                <div key={label} className="pjd-specs__row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProjectDetail
