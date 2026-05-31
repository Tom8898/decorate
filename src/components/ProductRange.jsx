import suaveStoneImg from '../assets/SuaveStone  Polished Plaster.webp'
import suaveImg from '../assets/Suave Polished Plaster.webp'
import boneChinaImg from '../assets/Bone China Polished Plaster.webp'
import suaveCreteImg from '../assets/SuaveCrete Polished Plaster.webp'
import interactImg from '../assets/Interact Panel System.webp'

const PRODUCTS = [
  {
    name: 'SuaveStone Polished Plaster',
    note: 'Stone-like depth & movement',
    tone: 'tone-1',
    image: suaveStoneImg,
  },
  {
    name: 'Suave Polished Plaster',
    note: 'Smooth, silken, seamless',
    tone: 'tone-2',
    image: suaveImg,
  },
  {
    name: 'Bone China Polished Plaster',
    note: 'Refined porcelain softness',
    tone: 'tone-3',
    image: boneChinaImg,
  },
  {
    name: 'SuaveCrete Polished Plaster',
    note: 'Raw concrete character',
    tone: 'tone-4',
    image: suaveCreteImg,
  },
  {
    name: 'Interact Panel System',
    note: 'Sculptural wall panels',
    tone: 'tone-5',
    image: interactImg,
  },
]

function ProductRange() {
  return (
    <section className="products" id="products">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Product Range</p>
          <h2>Discover our product range</h2>
        </header>

        <div className="products__grid">
          {PRODUCTS.map((product, i) => (
            <a
              key={product.name}
              href="#"
              className={`product-card ${product.tone} ${i === 0 ? 'is-feature' : ''}`}
            >
              <span className="product-card__media">
                <img src={product.image} alt={product.name} loading="lazy" />
              </span>
              <span className="product-card__body">
                <span className="product-card__name">{product.name}</span>
                <span className="product-card__note">{product.note}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductRange
