import { Link, useSearchParams } from 'react-router-dom'
import '../components/ProductDetail.css'
import './TestProducts.css'
import heroIndoor from '../assets/residential/herne-bay-bathroom.webp'
import heroOutdoor from '../assets/residential/valley-house.webp'
import suaveImg from '../assets/Suave Polished Plaster.webp'
import suaveStoneImg from '../assets/SuaveStone  Polished Plaster.webp'
import boneChinaImg from '../assets/Bone China Polished Plaster.webp'
import suaveCreteImg from '../assets/SuaveCrete Polished Plaster.webp'
import interactImg from '../assets/Interact Panel System.webp'
import kanukaImg from '../assets/residential/kanuka-house.webp'
import waipuImg from '../assets/residential/waipu-house.webp'
import redBeachImg from '../assets/residential/red-beach-house.webp'
import lakeRidgeImg from '../assets/residential/lake-ridge-house.webp'
import mountainImg from '../assets/residential/mountain-retreat.webp'

// `outdoor: true` means rated for exterior use. Anything usable outside is
// also usable inside, so the indoor view lists every product.
// Entries marked `sample` are placeholders — replace with real products.
const PRODUCTS = [
  {
    name: 'Suave Polished Plaster',
    note: 'Smooth, silken, seamless',
    image: suaveImg,
    to: '/suave-polished-plaster',
    applications: ['Walls', 'Ceilings', 'Cabinetry'],
  },
  {
    name: 'SuaveStone Polished Plaster',
    note: 'Stone-like depth & movement',
    image: suaveStoneImg,
    to: '/suavestone-polished-plaster',
    applications: ['Walls', 'Ceilings'],
  },
  {
    name: 'Bone China Polished Plaster',
    note: 'Refined porcelain softness',
    image: boneChinaImg,
    to: '/bone-china-polished-plaster',
    applications: ['Feature walls'],
  },
  {
    name: 'SuaveCrete Polished Plaster',
    note: 'Raw concrete character',
    image: suaveCreteImg,
    to: '/suavecrete-polished-plaster',
    applications: ['Walls', 'Furniture'],
  },
  {
    name: 'Interact Panel System',
    note: 'Sculptural wall panels',
    image: interactImg,
    to: '/interact-panel-system',
    applications: ['Feature walls', 'Reception'],
  },
  {
    name: 'Duro Clay Plaster',
    note: 'Natural, breathable clay',
    image: mountainImg,
    to: '/duro-clay-plaster',
    applications: ['Walls', 'Ceilings'],
  },
  {
    name: 'Lime Render',
    note: 'Breathable mineral facade',
    image: kanukaImg,
    outdoor: true,
    sample: true,
    applications: ['Facades', 'Garden walls'],
  },
  {
    name: 'Cement Microtopping',
    note: 'Seamless, hard-wearing',
    image: waipuImg,
    outdoor: true,
    sample: true,
    applications: ['Floors', 'Terraces', 'Stairs'],
  },
  {
    name: 'Terrazzo',
    note: 'Polished aggregate surface',
    image: redBeachImg,
    outdoor: true,
    sample: true,
    applications: ['Floors', 'Benches', 'Pool surrounds'],
  },
  {
    name: 'Weatherproof Limewash',
    note: 'Soft, chalky patina',
    image: lakeRidgeImg,
    outdoor: true,
    sample: true,
    applications: ['Facades', 'Fences', 'Interiors'],
  },
]

const MODES = {
  indoor: {
    label: 'Indoor',
    hero: heroIndoor,
    title: 'Finishes for the spaces you live in',
    lead: 'Every finish in our range can be used inside — from bathrooms and kitchens to feature walls and joinery.',
  },
  outdoor: {
    label: 'Outdoor',
    hero: heroOutdoor,
    title: 'Finishes built for the weather',
    lead: 'Exterior-rated finishes made to handle sun, rain and salt air. Each of these works just as well indoors.',
  },
}

function ProductCard({ product, mode }) {
  const content = (
    <>
      <span className="product-card__media">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.sample && <span className="tp-sample">Sample</span>}
      </span>
      <span className="product-card__body">
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__note">{product.note}</span>
        <span className="tp-apps">{product.applications.join(' · ')}</span>
      </span>
    </>
  )

  return product.to ? (
    <Link to={product.to} className="product-card tp-card" data-mode={mode}>
      {content}
    </Link>
  ) : (
    <div className="product-card tp-card" data-mode={mode}>
      {content}
    </div>
  )
}

function TestProducts() {
  const [params, setParams] = useSearchParams()
  const mode = params.get('space') === 'outdoor' ? 'outdoor' : 'indoor'
  const current = MODES[mode]

  const list =
    mode === 'outdoor' ? PRODUCTS.filter((p) => p.outdoor) : PRODUCTS
  // In the indoor view, lead with the products that work in both settings.
  const sorted =
    mode === 'indoor'
      ? [...list].sort((a, b) => Number(!!b.outdoor) - Number(!!a.outdoor))
      : list

  const setMode = (next) =>
    setParams(next === 'outdoor' ? { space: 'outdoor' } : {}, {
      replace: true,
    })

  return (
    <div className="product-page">
      <section className="product-hero tp-hero">
        <div className="product-hero__media">
          {Object.entries(MODES).map(([key, m]) => (
            <img
              key={key}
              src={m.hero}
              alt=""
              className={key === mode ? 'is-active' : ''}
            />
          ))}
        </div>
        <div className="container product-hero__inner">
          <p className="tp-eyebrow">Products</p>
          <h1 className="product-hero__title">{current.title}</h1>
          <p className="product-hero__subtitle">{current.lead}</p>

          <div
            className="tp-toggle"
            role="tablist"
            aria-label="Where will the finish be used?"
          >
            {Object.entries(MODES).map(([key, m]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={key === mode}
                className={key === mode ? 'is-active' : ''}
                onClick={() => setMode(key)}
              >
                {m.label}
              </button>
            ))}
            <span
              className="tp-toggle__thumb"
              style={{
                transform: mode === 'outdoor' ? 'translateX(100%)' : 'none',
              }}
            />
          </div>
        </div>
      </section>

      <section className="tp-list">
        <div className="container">
          <div className="tp-list__head">
            <p className="tp-count">
              <strong>{sorted.length}</strong>{' '}
              {mode === 'outdoor'
                ? 'exterior-rated finishes'
                : 'finishes for interiors'}
            </p>
            {mode === 'indoor' && (
              <button
                type="button"
                className="tp-switch-link"
                onClick={() => setMode('outdoor')}
              >
                Only show outdoor-ready →
              </button>
            )}
          </div>

          <div className="tp-grid" key={mode}>
            {sorted.map((product, i) => (
              <div
                key={product.name}
                className="tp-grid__item"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <ProductCard product={product} mode={mode} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestProducts
