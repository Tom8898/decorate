import ProductDetail from '../components/ProductDetail'
import suaveImg from '../assets/Suave Polished Plaster.webp'
import suaveTwoToneImg from '../assets/suave/Suave Two-tone.webp'
import suaveSampleImg from '../assets/suave/Suave.webp'
import suaveMottledImg from '../assets/suave/Suave Mottled.webp'
import traditionalImg from '../assets/suave/Traditional.webp'
import pittedImg from '../assets/suave/Pitted.webp'
import mottledImg from '../assets/suave/Mottled.webp'
import stippledImg from '../assets/suave/Stippled.webp'
import formworkImg from '../assets/suave/Formwork.webp'
import embossedImg from '../assets/suave/Embossed.webp'
import twoToneImg from '../assets/suave/Two-tone.webp'
import galleryCeilingImg from '../assets/suave/Suave in a grey two-tone on a ceiling.webp'
import gallerySealerImg from '../assets/suave/Suave with clear sealer in powder-room.webp'
import galleryStoneWhiteImg from '../assets/suave/Suave in Stone White captures the light.webp'

const data = {
  name: 'Suave Polished Plaster',
  subtitle:
    'A contemporary minimal finish with natural depth in colour and movement.',
  heroImage: suaveImg,
  overview: [
    'Silky smooth to heavily distressed, low sheen to high gloss, natural white to beautiful black. This contemporary polished plaster is ideal for both residential and commercial interior surfaces.',
    'Suave is a specialist surface finish suitable for the coating of all absorbent and prepared indoor surfaces such as plasterboard, concrete, brickwork, block work or bonding plaster that are not in direct contact with water.',
    'Although tonal shading occurs naturally within a single colour, multi-colour applications can be used to achieve even greater visual ‘movement’ across the surface finish. The final appearance can also be influenced by your choice of high grade or low grade polish.',
    'An optional final surface sealer ensures the Suave specialist finish is water and stain repellent. Suave is available in single and two-tone colours and in 6 different texture patterns.',
  ],
  samples: [
    { name: 'Suave Two-tone', image: suaveTwoToneImg },
    { name: 'Suave', image: suaveSampleImg },
    { name: 'Suave Mottled', image: suaveMottledImg },
  ],
  texturesTitle: 'Suave textures & finishes',
  textures: [
    { name: 'Traditional', image: traditionalImg },
    { name: 'Pitted', image: pittedImg },
    { name: 'Mottled', image: mottledImg },
    { name: 'Stippled', image: stippledImg },
    { name: 'Formwork', image: formworkImg },
    { name: 'Embossed', image: embossedImg },
    { name: 'Two-tone', image: twoToneImg },
  ],
  faqHeading: 'Suave polished plaster for all your interior surfaces',
  faqs: [
    {
      q: 'What is Suave polished plaster?',
      a: 'Suave is the signature polished plaster finish developed by Ambitec, designed to create smooth, refined surfaces with subtle texture and depth.',
    },
    {
      q: 'How is Suave different from other polished plaster finishes?',
      a: 'Suave is known for its soft, natural appearance and versatility, offering a more understated and contemporary look compared to heavily textured or stone-like plaster finishes.',
    },
    {
      q: 'What type of spaces is Suave best suited for?',
      a: 'Suave polished plaster is ideal for both contemporary and heritage interiors, including feature walls, ceilings, bathrooms and full interior applications where shifting light throughout the day captures its striking textural movement.',
    },
    {
      q: 'Can Suave be customised?',
      a: 'Yes, Suave polished plaster can be customised in colour, tone, and texture to suit each project. Ambitec works closely with architects and designers to develop bespoke finishes.',
    },
    {
      q: 'Is Suave suitable for bathrooms?',
      a: 'Yes, Suave polished plaster can be used in bathrooms and selected wet areas (not shower cubicles) when installed with the correct system and sealers. It provides a seamless alternative to tiles and painted surfaces.',
    },
  ],
  gallery: [
    { caption: 'Suave in a grey two-tone on a ceiling', image: galleryCeilingImg },
    { caption: 'Suave with clear sealer in powder-room', image: gallerySealerImg },
    { caption: 'Suave in Stone White captures the light', image: galleryStoneWhiteImg },
  ],
  specs: [
    ['Application', 'Walls | Ceilings | Cabinetry'],
    ['Available Finishes', 'Suave | Suave Two-tone | Suave Mottled'],
    ['Thickness', '1–1.5 mm'],
    ['Texture', 'Low | Medium | High'],
    ['Polish', 'Matte | Satin | Gloss'],
    ['Colour', 'Select colours from our Suave colour library'],
    ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
    [
      'Substrate preparation',
      'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
    ],
  ],
  downloads: ['Rendered Joinery Spec Sheet'],
}

function SuavePolishedPlaster() {
  return <ProductDetail data={data} />
}

export default SuavePolishedPlaster
