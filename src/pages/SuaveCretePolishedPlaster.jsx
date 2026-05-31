import ProductDetail from '../components/ProductDetail'
import suaveCreteImg from '../assets/SuaveCrete Polished Plaster.webp'

const data = {
  name: 'SuaveCrete Polished Plaster',
  subtitle: 'A durable, gritty decorative plaster finish.',
  heroImage: suaveCreteImg,
  overview: [
    'Gritty and strong, with its textural appearance naturally created through the varying grades of sand, SuaveCrete offers rough concrete and rock-like finishes. This durable polished plaster is ideal for both residential and commercial interior surfaces and furniture items.',
    'SuaveCrete is a specialist surface finish suitable for the coating of all absorbent and prepared indoor surfaces such as plasterboard, concrete, brickwork, block work or bonding plaster that are not in direct contact with water.',
    'Through the customisation of sand, colour and texture, different effects such as basalt or exposed concrete can be created.',
    'An optional final surface sealer ensures the SuaveCrete specialist finish is water and stain repellent. SuaveCrete is available in various sand and Suave colour combinations.',
  ],
  colourRangeText: 'View our full Suave colour range',
  colourRangeTo: '/',
  samples: [
    { name: 'SuaveCrete Basalt' },
    { name: 'SuaveCrete Concrete' },
    { name: 'SuaveCrete Bespoke' },
  ],
  texturesTitle: 'SuaveCrete textures',
  textures: [{ name: 'Traditional' }, { name: 'Flat' }],
  faqHeading: 'SuaveCrete for surfaces requiring a finish with a bit more grit',
  faqs: [
    {
      q: 'What is SuaveCrete polished plaster?',
      a: 'SuaveCrete is a gritty plaster finish developed by Ambitec, that offers a robust concrete-like finish for interior surfaces.',
    },
    {
      q: 'What is the difference between SuaveCrete and SuaveStone?',
      a: 'SuaveCrete incorporates a higher sand content, which can be customised in grain size and colour to create a more pronounced, textured finish. SuaveStone, in contrast, has a finer aggregate derived from its clay composition, producing a more refined surface with subtle texture, closer in character to Suave.',
    },
    {
      q: 'Is SuaveCrete suitable for residential and commercial projects?',
      a: 'Yes, SuaveCrete polished plaster is suitable for both residential and commercial interiors across New Zealand, offering a durable, design-focused finish for spaces demanding a more specific aesthetic.',
    },
    {
      q: 'What type of interior style does SuaveCrete suit best?',
      a: 'SuaveCrete is ideal for contemporary and minimalist interiors, complementing materials such as concrete, steel, glass, and timber. It is often used in architectural environments where a more industrial aesthetic is required.',
    },
  ],
  gallery: [
    { caption: 'SuaveCrete bespoke panels' },
    { caption: 'SuaveCrete with fine black sand' },
    { caption: 'SuaveCrete bulkhead concrete match' },
  ],
  specs: [
    ['Application', 'Walls | Ceilings | Cabinetry'],
    ['Thickness', '1.5 – 2 mm'],
    ['Texture', 'Flat | Traditional'],
    ['Polish', 'Matte'],
    ['Colour', 'Select colours from our Suave colour library and sand combinations'],
    ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
    [
      'Substrate preparation',
      'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
    ],
  ],
  downloads: ['Suave Technical Data Sheet'],
}

function SuaveCretePolishedPlaster() {
  return <ProductDetail data={data} />
}

export default SuaveCretePolishedPlaster
