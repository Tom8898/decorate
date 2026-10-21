import posts from './journal.json'

const images = import.meta.glob('../assets/journal/*/*.webp', {
  eager: true,
  import: 'default',
})

export function journalImage(slug, file) {
  return images[`../assets/journal/${slug}/${file}`]
}

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default posts
