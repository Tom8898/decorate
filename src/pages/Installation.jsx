import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import './Faq.css'
import './Installation.css'
import heroImg from '../assets/installation/level-4-wall.webp'
import teamImg from '../assets/installation/installation-team.webp'
import certifiedImg from '../assets/installation/certified-installers.webp'

const FAQS = [
  {
    q: 'Do you use subcontractors?',
    a: 'We have a dedicated in-house installation team based in Auckland and a trusted team of subcontractors. For projects outside the greater Auckland area and the Waikato, we will put you in touch with one of our regional certified Ambitec installers.',
  },
  {
    q: 'Can I contact an installer directly?',
    a: 'Yes you can. We prefer projects come through Ambitec initially to ensure correct system specification, however we will put you directly in touch with our regional certified installers dependent on project size and location.',
  },
  {
    q: 'Do you provide nationwide service?',
    a: 'Yes, we support projects across New Zealand using our certified installer network.',
  },
  {
    q: 'Can you help choose the right system?',
    a: 'Absolutely. We guide you through product selection based on your environment and requirements.',
  },
  {
    q: 'How long does installation take?',
    a: 'Timeframes vary depending on the project size and system, but the minimum will be 3 days no matter how small. We will provide clear timelines once your quote has been accepted.',
  },
]

function Installation() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img src={heroImg} alt="Ambitec finishing on a Level 4 wall" />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb__current">Installation</span>
          </nav>
          <h1 className="product-hero__title">Installation</h1>
        </div>
      </section>

      <section className="faq-intro">
        <div className="container">
          <p className="faq-intro__lead install-intro__lead">
            Every Ambitec installation is completed by either our dedicated
            in-house installation team or a certified Ambitec installer. All
            installers are trained in the correct application of Ambitec
            products and work to our installation standards, ensuring a
            consistent, high-quality finish regardless of where your project is
            located.
          </p>
        </div>
      </section>

      <section className="install-split">
        <div className="container install-split__inner">
          <div className="install-split__media">
            <img src={teamImg} alt="The Ambitec installation team" loading="lazy" />
          </div>
          <div className="install-split__copy">
            <h2>Ambitec installation team</h2>
            <p className="install-split__region">
              Our services cover Northland–Auckland–Waikato–Bay of
              Plenty–Coromandel.
            </p>
            <p>
              For projects throughout the upper North Island, our dedicated
              Ambitec installation team offers an additional level of
              continuity. Working exclusively with Ambitec products every day,
              they bring extensive experience across our full range of finishes
              and maintain close collaboration with our manufacturing and
              technical teams.
            </p>
            <p>
              Because our installation team is part of Ambitec, communication is
              streamlined from specification through to completion. They work
              closely with our technical team and have direct access to product
              knowledge, allowing questions to be resolved quickly and ensuring
              every project reflects the quality standards Ambitec is known for.
            </p>
            <p>
              Installation is carefully coordinated with the wider construction
              programme. We work closely with builders and other trades to
              ensure substrates are ready, surrounding surfaces are protected,
              and the installation can proceed efficiently. When you choose
              Ambitec to install your polished plaster, you gain from extensive
              years of experience using Ambitec products.
            </p>
          </div>
        </div>
      </section>

      <section className="install-split install-split--reverse">
        <div className="container install-split__inner">
          <div className="install-split__media">
            <img
              src={certifiedImg}
              alt="Ambitec polished plaster in Queenstown"
              loading="lazy"
            />
          </div>
          <div className="install-split__copy">
            <h2>Ambitec certified installers</h2>
            <p>
              Outside the regions serviced by our dedicated team,
              Ambitec-certified installers extend the same quality standards
              throughout New Zealand. Carefully selected and trained by Ambitec,
              they provide local expertise while working in accordance with our
              approved application methods and quality expectations.
            </p>
            <p>
              Every certified installer has been trained by us in the correct
              application of Ambitec products and follows our installation
              standards to ensure a consistent, high-quality finish. This gives
              architects, builders and homeowners confidence that every Ambitec
              surface is completed to the same exacting standard.
            </p>
            <p>
              Throughout the project, quality is monitored to ensure the
              completed finish matches the approved master sample.
            </p>
            <p>
              Regardless of where a project is in New Zealand (Auckland,
              Wellington, Christchurch, Queenstown), all initial colour work and
              sampling is managed directly by Ambitec.
            </p>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="faq-group">
            <h3 className="faq-group__title">Installation FAQs</h3>
            <div className="faq-group__list">
              {FAQS.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary className="faq-item__q">
                    <span>{item.q}</span>
                    <span className="faq-item__icon" aria-hidden="true" />
                  </summary>
                  <div className="faq-item__a">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="faq__cta">
            <a
              className="btn btn--solid"
              href="mailto:info@ambitec.co.nz?subject=New%20project"
            >
              Contact us about your next project
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Installation
