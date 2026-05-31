import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import suaveImg from '../assets/Suave Polished Plaster.webp'
import suaveTwoToneImg from '../assets/suave/Suave Two-tone.webp'
import suaveSampleImg from '../assets/suave/Suave.webp'
import suaveMottledImg from '../assets/suave/Suave Mottled.webp'
import traditionalImg from '../assets/suave/Traditional.webp'
import pittedImg from '../assets/suave/Pitted.webp'
import mottledImg from '../assets/suave/Mottled.webp'
import stippledImg from '../assets/suave/Stippled.webp'
import formworkImg from '../assets/suave/Formwork.webp'
import embossedImg from '../assets/suave/Embossed.webp'
import twoToneImg from '../assets/suave/Two-tone.webp'
import galleryCeilingImg from '../assets/suave/Suave in a grey two-tone on a ceiling.webp'
import gallerySealerImg from '../assets/suave/Suave with clear sealer in powder-room.webp'
import galleryStoneWhiteImg from '../assets/suave/Suave in Stone White captures the light.webp'
import './SuavePolishedPlaster.css'

const SAMPLES = [
  { name: 'Suave Two-tone', tone: 'sw-1', image: suaveTwoToneImg },
  { name: 'Suave', tone: 'sw-2', image: suaveSampleImg },
  { name: 'Suave Mottled', tone: 'sw-3', image: suaveMottledImg },
]

const TEXTURES = [
  { name: 'Traditional', tone: 'tex-1', image: traditionalImg },
  { name: 'Pitted', tone: 'tex-2', image: pittedImg },
  { name: 'Mottled', tone: 'tex-3', image: mottledImg },
  { name: 'Stippled', tone: 'tex-4', image: stippledImg },
  { name: 'Formwork', tone: 'tex-5', image: formworkImg },
  { name: 'Embossed', tone: 'tex-6', image: embossedImg },
  { name: 'Two-tone', tone: 'tex-7', image: twoToneImg },
]

const FAQS = [
  {
    q: 'What is Suave polished plaster?',
    a: 'Suave is the signature polished plaster finish developed by Ambitec, designed to create smooth, refined surfaces with subtle texture and depth.',
  },
  {
    q: 'How is Suave different from other polished plaster finishes?',
    a: 'Suave is known for its soft, natural appearance and versatility, offering a more understated and contemporary look compared to heavily textured or stone-like plaster finishes.',
  },
  {
    q: 'What type of spaces is Suave best suited for?',
    a: 'Suave polished plaster is ideal for both contemporary and heritage interiors, including feature walls, ceilings, bathrooms and full interior applications where shifting light throughout the day captures its striking textural movement.',
  },
  {
    q: 'Can Suave be customised?',
    a: 'Yes, Suave polished plaster can be customised in colour, tone, and texture to suit each project. Ambitec works closely with architects and designers to develop bespoke finishes.',
  },
  {
    q: 'Is Suave suitable for bathrooms?',
    a: 'Yes, Suave polished plaster can be used in bathrooms and selected wet areas (not shower cubicles) when installed with the correct system and sealers. It provides a seamless alternative to tiles and painted surfaces.',
  },
]

const GALLERY = [
  {
    caption: 'Suave in a grey two-tone on a ceiling',
    tone: 'g-1',
    image: galleryCeilingImg,
  },
  {
    caption: 'Suave with clear sealer in powder-room',
    tone: 'g-2',
    image: gallerySealerImg,
  },
  {
    caption: 'Suave in Stone White captures the light',
    tone: 'g-3',
    image: galleryStoneWhiteImg,
  },
]

const SPECS = [
  ['Application', 'Walls | Ceilings | Cabinetry'],
  ['Available Finishes', 'Suave | Suave Two-tone | Suave Mottled'],
  ['Thickness', '1–1.5 mm'],
  ['Texture', 'Low | Medium | High'],
  ['Polish', 'Matte | Satin | Gloss'],
  ['Colour', 'Select colours from our Suave colour library'],
  ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
  [
    'Substrate preparation',
    'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
  ],
]

function SuavePolishedPlaster() {
  const [openFaq, setOpenFaq] = useState(0)
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
          <img src={suaveImg} alt="Suave Polished Plaster finish" />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Product Range</span>
            <span>/</span>
            <span className="breadcrumb__current">Suave Polished Plaster</span>
          </nav>
          <h1 className="product-hero__title">Suave Polished Plaster</h1>
          <p className="product-hero__subtitle">
            A contemporary minimal finish with natural depth in colour and
            movement.
          </p>
        </div>
      </section>

      <section className="product-overview">
        <div className="container product-overview__inner">
          <div className="product-overview__copy">
            <p className="lead">
              Silky smooth to heavily distressed, low sheen to high gloss,
              natural white to beautiful black. This contemporary polished
              plaster is ideal for both residential and commercial interior
              surfaces.
            </p>
            <p>
              Suave is a specialist surface finish suitable for the coating of
              all absorbent and prepared indoor surfaces such as plasterboard,
              concrete, brickwork, block work or bonding plaster that are not in
              direct contact with water.
            </p>
            <p>
              Although tonal shading occurs naturally within a single colour,
              multi-colour applications can be used to achieve even greater
              visual ‘movement’ across the surface finish. The final appearance
              can also be influenced by your choice of high grade or low grade
              polish.
            </p>
            <p>
              An optional final surface sealer ensures the Suave specialist
              finish is water and stain repellent. Suave is available in single
              and two-tone colours and in 6 different texture patterns.
            </p>
            <Link className="btn" to="/">
              View our full colour range
            </Link>
          </div>

          <div className="product-overview__samples">
            {SAMPLES.map((sample) => (
              <figure key={sample.name} className={`sample ${sample.tone}`}>
                <span className="sample__swatch">
                  <img src={sample.image} alt={sample.name} loading="lazy" />
                </span>
                <figcaption>{sample.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="textures">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Suave textures &amp; finishes</p>
            <h2>Suave textures & finishes</h2>
          </header>
          <div className="textures__carousel">
            <div className="textures__track" ref={trackRef}>
              {TEXTURES.map((texture) => (
                <article
                  key={texture.name}
                  className={`texture ${texture.tone}`}
                >
                  <span className="texture__swatch">
                    <img src={texture.image} alt={texture.name} loading="lazy" />
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

      <section className="faq">
        <div className="container faq__inner">
          <header className="section-head">
            <p className="eyebrow">Good to know</p>
            <h2>Suave polished plaster for all your interior surfaces</h2>
          </header>
          <div className="faq__list">
            {FAQS.map((faq, i) => {
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

      <section className="gallery">
        <div className="container">
          <div className="gallery__grid">
            {GALLERY.map((item) => (
              <figure key={item.caption} className={`gallery__item ${item.tone}`}>
                <span className="gallery__media">
                  <img src={item.image} alt={item.caption} loading="lazy" />
                </span>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="specs">
        <div className="container specs__inner">
          <div className="specs__col">
            <p className="eyebrow">Specifications</p>
            <dl className="specs__list">
              {SPECS.map(([label, value]) => (
                <div key={label} className="specs__row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="specs__col specs__downloads">
            <p className="eyebrow">Downloads</p>
            <ul className="downloads">
              <li>
                <a href="#" className="download-link">
                  <span>Rendered Joinery Spec Sheet</span>
                  <span className="download-link__icon" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuavePolishedPlaster
