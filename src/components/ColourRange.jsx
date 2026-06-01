import { Link } from 'react-router-dom'
import './ColourRange.css'

function ColourRange({ data }) {
  const {
    title,
    category = 'Colour Library',
    intro = [],
    downloads = [],
    actions = [],
    notes = [],
    colours = [],
  } = data

  return (
    <div className="cr-page">
      <section className="cr-hero">
        <div className="container cr-hero__inner">
          <nav className="cr-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>{category}</span>
            <span>/</span>
            <span className="cr-breadcrumb__current">{title}</span>
          </nav>
          <h1 className="cr-hero__title">{title}</h1>
          {intro.length > 0 && (
            <div className="cr-hero__intro">
              {intro.map((para, i) => (
                <p key={i} className={i === 0 ? 'lead' : undefined}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {(downloads.length > 0 || actions.length > 0 || notes.length > 0) && (
        <section className="cr-info">
          <div className="container cr-info__inner">
            {(downloads.length > 0 || actions.length > 0) && (
              <div className="cr-info__cta">
                {downloads.length > 0 && (
                  <ul className="cr-downloads">
                    {downloads.map((label) => (
                      <li key={label}>
                        <a href="#" className="cr-download">
                          <span className="cr-download__icon" aria-hidden="true" />
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {actions.length > 0 && (
                  <div className="cr-actions">
                    {actions.map((action) => (
                      <a key={action.label} href="#" className="btn btn--solid">
                        {action.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
            {notes.length > 0 && (
              <div className="cr-notes">
                {notes.map((note, i) => (
                  <p key={i}>{note}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {colours.length > 0 && (
        <section className="cr-grid-section">
          <div className="container">
            <div className="cr-grid">
              {colours.map((colour) => (
                <figure key={colour.code || colour.name} className="cr-swatch">
                  <span className="cr-swatch__chip">
                    {colour.image && (
                      <img src={colour.image} alt={colour.name} loading="lazy" />
                    )}
                  </span>
                  <figcaption>
                    <span className="cr-swatch__name">{colour.name}</span>
                    {colour.code && (
                      <span className="cr-swatch__code">{colour.code}</span>
                    )}
                    {colour.madeToOrder && (
                      <span className="cr-swatch__mto">Made to order</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ColourRange
