import { Link, Navigate, useParams } from 'react-router-dom'
import '../components/ProductDetail.css'
import './Journal.css'
import posts, { journalImage, formatDate } from '../data/journalImages'

function Block({ block, slug }) {
  switch (block.type) {
    case 'img':
      return (
        <figure className="post-figure">
          <img
            src={journalImage(slug, block.src)}
            alt={block.alt}
            loading="lazy"
          />
        </figure>
      )
    case 'h2':
      return <h2>{block.text}</h2>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'quote':
      return <blockquote>{block.text}</blockquote>
    case 'caption':
      return <p className="post-caption">{block.text}</p>
    case 'li':
      return <p className="post-body__li">{block.text}</p>
    default:
      return <p>{block.text}</p>
  }
}

function JournalPost() {
  const { slug } = useParams()
  const index = posts.findIndex((p) => p.slug === slug)
  if (index === -1) return <Navigate to="/journal" replace />

  const post = posts[index]
  const newer = posts[index - 1]
  const older = posts[index + 1]

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img src={journalImage(post.slug, post.cover)} alt={post.title} />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/journal">Journal</Link>
          </nav>
          <h1 className="product-hero__title post-hero__title">
            {post.title}
          </h1>
          <time className="product-hero__subtitle" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
      </section>

      <article className="post">
        <div className="container post-body">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} slug={post.slug} />
          ))}
        </div>
      </article>

      <nav className="post-nav">
        <div className="container post-nav__inner">
          {newer ? (
            <Link to={`/journal/${newer.slug}`} className="post-nav__link">
              <span className="eyebrow">Newer</span>
              <span>{newer.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {older && (
            <Link
              to={`/journal/${older.slug}`}
              className="post-nav__link post-nav__link--older"
            >
              <span className="eyebrow">Older</span>
              <span>{older.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default JournalPost
