import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/homelogo/crafted-surface-logo.png'

const NAV = [
  { label: 'Products', to: '/products' },
  {
    label: 'Projects',
    items: [
      { label: 'Commercial', to: '/commercial' },
      { label: 'Residential', to: '/residential' },
    ],
  },
  { label: 'Colours', to: '/suave-colour-range' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact us', to: '/contact-us' },
]

function NavLink({ to, children, onClick }) {
  if (to) {
    return (
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    )
  }
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link className="brand brand--logo" to="/" onClick={close}>
          <img src={logo} alt="Crafted Surface" />
        </Link>

        <nav className={`primary-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV.map((entry) => (
              <li key={entry.label} className={entry.items ? 'has-sub' : ''}>
                <NavLink to={entry.to} onClick={close}>
                  {entry.label}
                </NavLink>
                {entry.items && (
                  <div className="submenu">
                    <ul>
                      {entry.items.map((item) => (
                        <li key={item.label}>
                          <NavLink to={item.to} onClick={close}>
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
