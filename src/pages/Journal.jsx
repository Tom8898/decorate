import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import './Journal.css'
import posts, { journalImage, formatDate } from '../data/journalImages'

function PostCard({ post }) {
  return (
    <Link to={`/journal/${post.slug}`} className="journal-card">
      <span className="journal-card__media">
        <img
          src={journalImage(post.slug, post.cover)}
          alt={post.title}
          loading="lazy"
        />
      </span>
      <time className="journal-card__date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <h2 className="journal-card__title">{post.title}</h2>
      <p className="journal-card__excerpt">{post.excerpt}</p>
      <span className="journal-card__more">Read more</span>
    </Link>
  )
}

function Journal() {
  const [featured, ...rest] = posts

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img
            src={journalImage(featured.slug, featured.cover)}
            alt={featured.title}
          />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb__current">Journal</span>
          </nav>
          <h1 className="product-hero__title">Journal</h1>
          <p className="product-hero__subtitle">
            Projects, events and insights on polished plaster from the Ambitec
            team.
          </p>
        </div>
      </section>

      <section className="journal">
        <div className="container">
          <Link to={`/journal/${featured.slug}`} className="journal-featured">
            <span className="journal-featured__media">
              <img
                src={journalImage(featured.slug, featured.cover)}
                alt={featured.title}
              />
            </span>
            <span className="journal-featured__copy">
              <span className="eyebrow">Latest</span>
              <time className="journal-card__date" dateTime={featured.date}>
                {formatDate(featured.date)}
              </time>
              <h2 className="journal-featured__title">{featured.title}</h2>
              <p className="journal-card__excerpt">{featured.excerpt}</p>
              <span className="journal-card__more">Read more</span>
            </span>
          </Link>

          <div className="journal__grid">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journal
