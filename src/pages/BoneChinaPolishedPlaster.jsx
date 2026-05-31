import ProductDetail from '../components/ProductDetail'
import boneChinaImg from '../assets/Bone China Polished Plaster.webp'

const data = {
  name: 'Bone China Polished Plaster',
  subtitle:
    'A delicate porcelain-like finish with fine ‘crazing’ and a pearly lustre.',
  heroImage: boneChinaImg,
  overview: [
    'Predominantly expressed in Bony White to emulate the delicateness of fine porcelain, the more pronounced ‘distressed’ areas of the polished plaster appear to have an almost translucent appearance that seem ‘soft to the touch’. The effect, a unique baroque surface finish perfect for areas that demand something more.',
    'With its delicate make up, Bone China polished plaster lends itself to low use decorative areas such as ceilings and wall panels.',
    'Bone China is a specialist surface finish suitable for the coating of absorbent and prepared indoor surfaces such as plasterboard, concrete, brickwork, block work or bonding plaster that are not in direct contact with water.',
    'Currently only available in Bony White.',
  ],
  colourRangeText: 'Get in touch to learn more',
  colourRangeTo: '/',
  samples: [
    { name: 'Ceiling' },
    { name: 'Bony White' },
    { name: 'Sculptural' },
  ],
  faqHeading: 'Bone China for surfaces that need something a little bit different',
  faqs: [
    {
      q: 'What is Bone China polished plaster?',
      a: 'Bone China is a decorative plaster finish developed by Ambitec, with fine crazing and a pearly lustre that re-imagines porcelain as a high-end surface finish.',
    },
    {
      q: 'Where can Bone China be used?',
      a: 'Due to its more fragile nature, the Bone China finish is only suitable for walls, ceilings and surfaces in low traffic areas within a commercial or residential space.',
    },
    {
      q: 'Can you use Bone China in bathrooms?',
      a: 'As the fine crazing creates open cracks, the Bone China finish is not recommended for use in bathrooms or moisture prone areas.',
    },
    {
      q: 'Is Bone China available in other colours?',
      a: 'No, currently Bone China is only available in the Bony White colour, however we are looking to create options in Black and Clay.',
    },
  ],
  specs: [
    ['Application', 'Walls | Ceilings | Cabinetry'],
    ['Available Finishes', 'Bone China'],
    ['Thickness', '1–1.5 mm'],
    ['Texture', 'Crazing'],
    ['Polish', 'Satin | Gloss'],
    ['Colour', 'Bony (Natural) White'],
    ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
    [
      'Substrate preparation',
      'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
    ],
  ],
  downloads: ['Bone China Spec Sheet'],
}

function BoneChinaPolishedPlaster() {
  return <ProductDetail data={data} />
}

export default BoneChinaPolishedPlaster
