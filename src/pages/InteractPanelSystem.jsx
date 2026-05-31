import ProductDetail from '../components/ProductDetail'
import interactImg from '../assets/Interact Panel System.webp'

const data = {
  name: 'Interact Panel System',
  subtitle: 'A decorative range of pre-rendered panels in a linear profile.',
  heroImage: interactImg,
  overview: [
    'Interact Linear is available in fine or large corrugate profiles on 3mm MDF board. It can be applied to walls and cabinetry, and can be wrapped around large curves. Able to be installed in either a vertical or horizontal orientation on a solid substrate, however consideration must be given to joins, which can be highlighted as a feature with detailing or left as is.',
    'Panels are available in a maximum size of 2.4 x 0.55m and can be cut to a custom size.',
    'A solid substrate is required on which to glue and pin the panels, allowing for the panel thickness if flush details are required.',
    'Able to be used as a feature on fireplaces (must be on an E1 MDF Fire Resistant Substrate), walls and joinery, the Interact corrugate panels can elevate and add an extra dimension.',
    'Panels are made to order and can be manufactured in the full range of Ambitec colours.',
  ],
  colourRangeText: 'Get in touch to learn more',
  colourRangeTo: '/',
  samples: [
    { name: 'Large Corrugate profile' },
    { name: 'Large Corrugate in a tiled application' },
    { name: 'Small corrugate curved' },
  ],
  texturesTitle: 'Corrugate Profiles',
  textures: [{ name: 'Large Corrugate' }, { name: 'Small Corrugate' }],
  faqHeading: 'Possibilities with Interact panels',
  faqs: [
    {
      q: 'What is the Interact panel system?',
      a: 'Interact is a pre-finished panel system developed by Ambitec, featuring a distinctive corrugated texture. Designed for application to walls and joinery in a grid format, it creates structured, architectural surfaces with depth and visual rhythm.',
    },
    {
      q: 'How does Interact corrugate differ from traditional wall finishes?',
      a: 'Unlike Ambitec’s other polished plaster systems, which are applied directly to the substrate, Interact uses a panelised approach. The corrugated finish is applied in a controlled, linear format to MDF panels, which are then installed separately to create a structured, architectural surface.',
    },
    {
      q: 'Where can the Interact system be used?',
      a: 'The Interact panel system is suitable for feature walls, commercial spaces, retail environments, and high-end residential interiors where a strong architectural statement is desired, such as fireplace surrounds and kitchen joinery.',
    },
    {
      q: 'What finishes can be applied to Interact panels?',
      a: 'A range of Ambitec polished plasters in textured finishes can be applied to Interact panels, creating unique surface effects that integrate with the overall interior design.',
    },
  ],
  gallery: [
    { caption: 'Fine Corrugate on curved wall' },
    { caption: 'Large Corrugate on fireplace' },
    { caption: 'Large Corrugate as feature wall' },
  ],
  specs: [
    ['Application', 'Walls | Fireplaces | Cabinetry'],
    ['Available Finishes', 'Suave | SuaveStone'],
    ['Thickness', '6–10 mm'],
    ['Texture', 'Fine Corrugate | Large Corrugate'],
    ['Polish', 'Matte'],
    ['Colour', 'Select colours from our Colour library'],
    ['Suitable substrates', 'Plywood | MDF'],
  ],
  downloads: ['Interact Corrugate Spec Sheet'],
}

function InteractPanelSystem() {
  return <ProductDetail data={data} />
}

export default InteractPanelSystem
