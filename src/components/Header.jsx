import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NAV = [
  {
    label: 'Product Range',
    items: [
      { label: 'Suave Polished Plaster', to: '/suave-polished-plaster' },
      {
        label: 'SuaveStone Polished Plaster',
        to: '/suavestone-polished-plaster',
      },
      {
        label: 'Bone China Polished Plaster',
        to: '/bone-china-polished-plaster',
      },
      {
        label: 'SuaveCrete Polished Plaster',
        to: '/suavecrete-polished-plaster',
      },
      { label: 'Interact Panel System', to: '/interact-panel-system' },
      { label: 'Duro Clay Plaster', to: '/duro-clay-plaster' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { label: 'Commercial', to: '/commercial' },
      { label: 'Residential', to: '/residential' },
    ],
  },
  {
    label: 'Colour Library',
    items: [
      { label: 'Suave Colour Range' },
      { label: 'SuaveStone Colour Range' },
      { label: 'Suave Two-tone Colour Range' },
    ],
  },
  { label: 'FAQ' },
  { label: 'Contact us' },
  { label: 'Journal' },
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
        <Link className="brand" to="/" onClick={close}>
          Ambitec
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
