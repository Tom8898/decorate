import { useState } from 'react'

const LINKS = [
  'About Us',
  'Certified Installers',
  'Technical Downloads',
  'FAQ',
  'Privacy Policy',
  'Terms of Service',
  'Trade only',
]

function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <span className="brand brand--lg">Ambitec</span>
          <p className="footer__tagline">
            Polished plaster &amp; bespoke interior finishes.
          </p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Showroom</p>
          <p className="footer__address">
            34 Frost Road
            <br />
            Mt Roskill, Auckland
          </p>
          <p className="footer__hours">
            Monday to Friday 9–4pm
            <br />
            by appointment only
          </p>
          <p className="footer__contact">
            <a href="tel:+6493942953">+64 9 394 2953</a>
            <a href="mailto:info@ambitec.co.nz">info@ambitec.co.nz</a>
            <span>Licence # 808101</span>
          </p>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Explore</p>
          <ul className="footer__links">
            {LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__news">
          <p className="eyebrow">Newsletter</p>
          <p className="footer__news-copy">
            Hear about our latest projects and products.
          </p>
          {done ? (
            <p className="footer__thanks">Thank you!</p>
          ) : (
            <form className="footer__form" onSubmit={onSubmit}>
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn--solid">
                Sign up
              </button>
            </form>
          )}
          <p className="footer__privacy">We respect your privacy.</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Ambitec</span>
        <span>Crafting Emotive Spaces.</span>
      </div>
    </footer>
  )
}

export default Footer
