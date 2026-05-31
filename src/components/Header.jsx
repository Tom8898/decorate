import { useEffect, useState } from 'react'

const NAV = [
  {
    label: 'Product Range',
    items: [
      'Suave Polished Plaster',
      'SuaveStone Polished Plaster',
      'Bone China Polished Plaster',
      'SuaveCrete Polished Plaster',
      'Interact Panel System',
      'Duro Clay Plaster',
    ],
  },
  { label: 'Projects', items: ['Commercial', 'Residential'] },
  {
    label: 'Colour Library',
    items: [
      'Suave Colour Range',
      'SuaveStone Colour Range',
      'Suave Two-tone Colour Range',
    ],
  },
  { label: 'FAQ' },
  { label: 'Contact us' },
  { label: 'Journal' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#top">
          Ambitec
        </a>

        <nav className={`primary-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV.map((entry) => (
              <li key={entry.label} className={entry.items ? 'has-sub' : ''}>
                <a href="#">{entry.label}</a>
                {entry.items && (
                  <div className="submenu">
                    <ul>
                      {entry.items.map((item) => (
                        <li key={item}>
                          <a href="#">{item}</a>
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
