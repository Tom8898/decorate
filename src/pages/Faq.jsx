import { Link } from 'react-router-dom'
import '../components/ProductDetail.css'
import './Faq.css'
import heroImg from '../assets/faq/technical-support.webp'

const CARE_GUIDE_URL =
  'https://static1.squarespace.com/static/6368583b33425d7e5cdb242e/t/66d7cf856426071a3b26a127/1725419399135/Ambitec-Care-Guide-2024.pdf'
const JOINERY_SPEC_URL =
  'https://static1.squarespace.com/static/6368583b33425d7e5cdb242e/t/66d79f5d145e0c03f4cbf74d/1725407072377/Ambitec-joinery-spec-sheets-2024.pdf'

const FAQ_GROUPS = [
  {
    title: 'Ambitec Polished Plaster vs Other Finishes',
    items: [
      {
        q: 'What is polished plaster?',
        a: (
          <>
            <p>
              Polished Plaster is a natural lime based or synthetic based
              surface finish which replicates the organic beauty of polished
              natural stone.
            </p>
            <p>
              Traditionally known by many names including Venetian Plaster,
              Venetian Stucco, Marmorino, Carrara, Spatulata, Travertine or
              Tadelakt. It is trowelled onto a suitable substrate in multiple
              coats, and can be honed, floated or burnished to create a smooth
              almost glass like venetian plaster finish.
            </p>
          </>
        ),
      },
      {
        q: 'What is the difference between polished plaster and paint?',
        a: (
          <p>
            Polished plaster is a specialist architectural surface system that
            creates depth, texture, and natural light movement, unlike paint
            which sits flat as a coating. Ambitec finishes are designed as
            long-term design surfaces rather than decorative layers.
          </p>
        ),
      },
      {
        q: 'How do Ambitec polished plasters differ to venetian plaster?',
        a: (
          <p>
            Ambitec is a modern NZ-engineered plaster system designed for
            greater consistency, durability, and architectural application
            compared to traditional Venetian plaster techniques.
          </p>
        ),
      },
      {
        q: 'How do Ambitec polished plasters differ to microcement?',
        a: (
          <p>
            Microcement is a resin based waterproof system commonly used in wet
            areas with minimal texture, while Ambitec polished plasters are
            textured and suitable for most interior surfaces. Both serve
            different requirements and purposes.
          </p>
        ),
      },
      {
        q: 'Why should I choose Ambitec polished plasters for my interior?',
        a: (
          <p>
            Ambitec provides a complete end-to-end surface system, including
            design support, supply, certified installation, and aftercare. This
            ensures consistent, low-risk outcomes across projects.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Design & Application',
    items: [
      {
        q: 'Where is polished plaster best used?',
        a: (
          <>
            <p>In interiors where visual impact and texture are important.</p>
            <p>
              It can be used as a feature wall in living spaces, entryways,
              fireplaces and on entire walls in common spaces such as stairwalls
              and hallways. It can be used on both walls and ceilings, and can
              be the central finish throughout the entire home.
            </p>
          </>
        ),
      },
      {
        q: 'Why is lighting important?',
        a: (
          <p>
            Lighting when used correctly, highlights the texture and movement
            of the polished plaster finish, providing visual impact.
          </p>
        ),
      },
      {
        q: 'How do architects & designers specify Ambitec finishes?',
        a: (
          <>
            <p>
              Architects and designers specify Ambitec using system guides,
              samples, and technical documentation provided to ensure correct
              detailing and finish selection.
            </p>
            <p>A master sample will always be created for sign-off by all stakeholders.</p>
          </>
        ),
      },
      {
        q: 'Can polished plaster be used alongside other materials?',
        a: (
          <p>
            Yes. It works well alongside timber, stone, tiles, metal, concrete
            and other architectural finishes, helping create a layered and
            high-end interior space. See our{' '}
            <Link to="/commercial">commercial</Link> and{' '}
            <Link to="/residential">residential</Link> projects for
            inspiration.
          </p>
        ),
      },
      {
        q: 'Can you apply Ambitec polished plasters to cabinetry and doors?',
        a: (
          <p>
            Yes, our polished plaster finishes can be applied to cabinetry,
            doors and furniture for a seamless look. We provide{' '}
            <a href={JOINERY_SPEC_URL} target="_blank" rel="noreferrer">
              construction guidance
            </a>{' '}
            for best practice.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Performance, Durability & Maintenance',
    items: [
      {
        q: 'On which substrates can Ambitec polished plasters be installed?',
        a: (
          <p>
            Ambitec polished plasters can be installed on plasterboard, cement
            board, concrete, blockwork, metal, MDF and plywood. All surfaces
            must be flat, smooth with no gaps or holes. Refer to our Substrate
            Specifications and Site Requirements for full guidance.
          </p>
        ),
      },
      {
        q: 'Why is substrate preparation important?',
        a: (
          <p>
            Polished plaster reflects the surface beneath it. If preparation is
            poor, imperfections may show. Ambitec provides clear substrate
            standards and installer training to ensure quality results.
          </p>
        ),
      },
      {
        q: 'How thick is the build-up of Ambitec polished plasters?',
        a: (
          <p>
            A finished Suave or Bone China surface is 1-1.5mm thick, for
            SuaveStone allow for a 1.5-2mm thickness. If applying to joinery,
            allow 0.5mm for the edges of cabinetry and doors.
          </p>
        ),
      },
      {
        q: 'How long do polished plaster finishes last?',
        a: (
          <p>
            With correct installation and care, polished plaster finishes can
            last for more than 20 years. Its lifespan depends on use,
            environment, and maintenance, making it a long-term surface
            investment.
          </p>
        ),
      },
      {
        q: 'How do I care for my Ambitec Polished Plaster surfaces?',
        a: (
          <p>
            Maintenance is simple, usually light cleaning with a soft cloth and
            marks can be removed with a damp cloth. It is colourfast and
            designed for long-term architectural performance. For more
            information, please refer to our{' '}
            <a href={CARE_GUIDE_URL} target="_blank" rel="noreferrer">
              care guide
            </a>
            .
          </p>
        ),
      },
      {
        q: 'Can polished plaster be repaired?',
        a: (
          <p>
            Yes, simple repairs such as filling small holes can be done by
            requesting a small pot of plaster but more significant repairs must
            be done carefully by trained applicators to maintain a seamless
            finish. Ambitec provides aftercare and repair guidance for this
            reason.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Polished Plasters in Wet Areas',
    items: [
      {
        q: 'Can Ambitec polished plasters be used in bathrooms?',
        a: (
          <p>
            Yes, Ambitec polished plasters can be used in bathrooms and
            laundries when correctly installed and sealed with surface sealer.
            It is best suited to non-direct water zones within these spaces.
          </p>
        ),
      },
      {
        q: 'Can I use a polished plaster finish in a shower box?',
        a: (
          <p>
            No. Polished plasters are not suitable for direct shower interiors
            or constant water exposure zones. Other waterproof systems such as
            tiles or a microcement are recommended for these applications.
          </p>
        ),
      },
      {
        q: 'Can I use Ambitec polished plasters as a splashback?',
        a: (
          <p>
            Yes, Ambitec polished plasters can be used as a splashback in a
            bathroom or kitchen environment when correctly installed and sealed
            with a surface sealer.
          </p>
        ),
      },
      {
        q: 'Does the substrate preparation differ in bathrooms?',
        a: (
          <p>
            Yes, in bathrooms your builder will use an aqualine or cement board
            that meets building code for wet areas. We recommend that all
            substrates be pre-primed with a pigmented sealer for added
            protection.
          </p>
        ),
      },
    ],
  },
]

function Faq() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="product-hero__media">
          <img src={heroImg} alt="Ambitec colour samples and swatches" />
        </div>
        <div className="container product-hero__inner">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="breadcrumb__current">FAQ</span>
          </nav>
          <h1 className="product-hero__title">Technical Support</h1>
          <p className="product-hero__subtitle">
            At Ambitec, we not only create a stunning array of surface
            finishes, we also seek to make the entire design and specification
            process of these specialist finishes as simple and as clear as
            possible.
          </p>
        </div>
      </section>

      <section className="faq-intro">
        <div className="container faq-intro__inner">
          <p className="faq-intro__lead">
            You will find all the required information in our FAQ section and
            easily accessible PDF documents.
          </p>
          <div className="faq-intro__copy">
            <p>
              We have included everything you may need; from technical data on
              individual products, to the look and feel of Ambitec finishes, to
              site requirements and lighting, and eventually to product
              maintenance.
            </p>
            <p>
              We define the range of colour, texture and polishing options
              available to you, seeking to paint a visual picture enabling you
              to successfully specify the right Ambitec product and finish for
              your project.
            </p>
            <p>
              We are only too happy to help should you have any questions or
              want to seek further information from us.
            </p>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
          </div>

          {FAQ_GROUPS.map((group) => (
            <div key={group.title} className="faq-group">
              <h3 className="faq-group__title">{group.title}</h3>
              <div className="faq-group__list">
                {group.items.map((item) => (
                  <details key={item.q} className="faq-item">
                    <summary className="faq-item__q">
                      <span>{item.q}</span>
                      <span className="faq-item__icon" aria-hidden="true" />
                    </summary>
                    <div className="faq-item__a">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="faq__cta">
            <a
              className="btn btn--solid"
              href={CARE_GUIDE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Technical Downloads
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faq
