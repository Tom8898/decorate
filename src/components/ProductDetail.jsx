import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.css'

function ProductDetail({ data }) {
  const {
    name,
    subtitle,
    heroImage,
    overview = [],
    colourRangeText = 'View our full colour range',
    colourRangeTo = '/',
    samples = [],
    texturesTitle,
    textures = [],
    faqHeading,
    faqs = [],
    gallery = [],
    specs = [],
    downloads = [],
  } = data

  const [openFaq, setOpenFaq] = useState(-1)
  const trackRef = useRef(null)

  const scrollTextures = (dir) => {
    const track = trackRef.current
    if (!track) return
    const tile = track.querySelector('.texture')
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20
    const amount = tile ? tile.offsetWidth + gap : track.clientWidth * 0.8
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          {heroImage && <img src={heroImage} alt={`${name} finish`} />}
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Product Range</span>
            <span>/</span>
            <span className="breadcrumb__current">{name}</span>
          </nav>
          <h1 className="product-hero__title">{name}</h1>
          {subtitle && <p className="product-hero__subtitle">{subtitle}</p>}
        </div>
      </section>

      <section className="product-overview">
        <div className="container product-overview__inner">
          <div className="product-overview__copy">
            {overview.map((para, i) => (
              <p key={i} className={i === 0 ? 'lead' : undefined}>
                {para}
              </p>
            ))}
            <Link className="btn" to={colourRangeTo}>
              {colourRangeText}
            </Link>
          </div>

          {samples.length > 0 && (
            <div className="product-overview__samples">
              {samples.map((sample, i) => (
                <figure key={sample.name} className={`sample sw-${i + 1}`}>
                  <span className="sample__swatch">
                    {sample.image && (
                      <img src={sample.image} alt={sample.name} loading="lazy" />
                    )}
                  </span>
                  <figcaption>{sample.name}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {textures.length > 0 && (
        <section className="textures">
          <div className="container">
            <header className="section-head">
              <p className="eyebrow">{texturesTitle}</p>
              <h2>{texturesTitle}</h2>
            </header>
            <div className="textures__carousel">
              <div className="textures__track" ref={trackRef}>
                {textures.map((texture, i) => (
                  <article
                    key={texture.name}
                    className={`texture tex-${(i % 7) + 1}`}
                  >
                    <span className="texture__swatch">
                      {texture.image && (
                        <img
                          src={texture.image}
                          alt={texture.name}
                          loading="lazy"
                        />
                      )}
                    </span>
                    <h3>{texture.name}</h3>
                  </article>
                ))}
              </div>

              <div className="textures__controls">
                <button
                  type="button"
                  className="carousel-arrow prev"
                  aria-label="Previous texture"
                  onClick={() => scrollTextures(-1)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="carousel-arrow next"
                  aria-label="Next texture"
                  onClick={() => scrollTextures(1)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="faq">
          <div className="container faq__inner">
            <header className="section-head">
              <p className="eyebrow">Good to know</p>
              <h2>{faqHeading}</h2>
            </header>
            <div className="faq__list">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={faq.q}
                    className={`faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      className="faq-item__q"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-item__icon" aria-hidden="true" />
                    </button>
                    <div className="faq-item__a">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="gallery">
          <div className="container">
            <div className="gallery__grid">
              {gallery.map((item, i) => (
                <figure key={item.caption} className={`gallery__item g-${i + 1}`}>
                  <span className="gallery__media">
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

      {(specs.length > 0 || downloads.length > 0) && (
        <section className="specs">
          <div className="container specs__inner">
            {specs.length > 0 && (
              <div className="specs__col">
                <p className="eyebrow">Specifications</p>
                <dl className="specs__list">
                  {specs.map(([label, value]) => (
                    <div key={label} className="specs__row">
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {downloads.length > 0 && (
              <div className="specs__col specs__downloads">
                <p className="eyebrow">Downloads</p>
                <ul className="downloads">
                  {downloads.map((dl) => (
                    <li key={dl}>
                      <a href="#" className="download-link">
                        <span>{dl}</span>
                        <span className="download-link__icon" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDetail
