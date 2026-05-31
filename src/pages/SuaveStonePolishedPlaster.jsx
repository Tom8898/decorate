import ProductDetail from '../components/ProductDetail'
import suaveStoneImg from '../assets/SuaveStone  Polished Plaster.webp'

const data = {
  name: 'SuaveStone Polished Plaster',
  subtitle: 'An earthy mineral finish with textural presence.',
  heroImage: suaveStoneImg,
  overview: [
    'Earthy and grounding, combining the natural minerals to create a stone-like finish that can be applied textured or smooth. This classic polished plaster is ideal for both residential and commercial interior surfaces.',
    'SuaveStone is a specialist surface finish suitable for the coating of all absorbent and prepared indoor surfaces such as plasterboard, concrete, brickwork, block work or bonding plaster that are not in direct contact with water.',
    'With its rugged make up, the SuaveStone polished plaster lends itself to more defined textures, such as the large corrugate texture and bespoke combinations with Mica and woodchips.',
    'An optional final surface sealer ensures the SuaveStone specialist finish is water and stain repellent. SuaveStone is available in 5 different texture patterns.',
  ],
  samples: [
    { name: 'SuaveStone Formwork' },
    { name: 'SuaveStone' },
    { name: 'SuaveStone + Mica' },
  ],
  texturesTitle: 'SuaveStone textures',
  textures: [
    { name: 'Traditional' },
    { name: 'Formwork' },
    { name: 'Embossed' },
    { name: 'Pitted' },
    { name: 'Stippled' },
  ],
  faqHeading: 'SuaveStone polished plaster for all your interior surfaces',
  faqs: [
    {
      q: 'What is SuaveStone polished plaster?',
      a: 'SuaveStone is a polished plaster finish developed by Ambitec that delivers a more textured, stone-like appearance than smoother finishes such as Suave, with a fine aggregate subtly visible throughout the surface.',
    },
    {
      q: 'When would you choose SuaveStone over Suave?',
      a: 'SuaveStone is typically selected for its natural, textured surface, creating depth and a refined, stone-like aesthetic. It is particularly well suited to the layered, material-rich architectural spaces seen in Queenstown, where finishes are often designed to complement schist, timber, and natural stone.',
    },
    {
      q: 'Can SuaveStone be customised?',
      a: 'Customisation of SuaveStone is limited due to the colour and fleck being determined by the clay content. The fleck is an inherent feature of this finish and cannot be adjusted. Once installed, this fleck naturally recedes to the background and adds to the movement and beauty of the finish.',
    },
    {
      q: 'Why choose polished plaster over paint?',
      a: 'Polished plaster offers a more premium finish than paint, with greater depth, texture, and durability. It creates a seamless surface that elevates interior spaces and adds long-term visual value.',
    },
  ],
  gallery: [
    { caption: 'SuaveStone in Dover Chalk' },
    { caption: 'SuaveStone with Woodchips' },
    { caption: 'SuaveStone pitted as rammed earth' },
  ],
  specs: [
    ['Application', 'Walls | Ceilings | Cabinetry'],
    ['Thickness', '1.5 – 2 mm'],
    ['Texture', 'Low | Medium'],
    ['Polish', 'Matte'],
    ['Colour', 'Select from our SuaveStone colour library'],
    ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
    [
      'Substrate preparation',
      'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
    ],
  ],
  downloads: ['Interact Corrugate Spec Sheet'],
}

function SuaveStonePolishedPlaster() {
  return <ProductDetail data={data} />
}

export default SuaveStonePolishedPlaster
