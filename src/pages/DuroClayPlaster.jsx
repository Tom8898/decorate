import ProductDetail from '../components/ProductDetail'

const data = {
  name: 'Duro Clay Plaster',
  subtitle: 'A natural decorative clay plaster finish.',
  overview: [
    'Duro by Tierrafino is a clay plaster that offers a durable, elegant finish suitable for both residential and commercial spaces. An earthen finish with natural binders, providing a thinner, harder plaster layer than typical clay finishes while remaining easy to repair.',
    'Made from 100% natural ingredients, Duro is humidity and temperature regulating, has antistatic properties and can help contribute to a healthier interior environment.',
    'Currently available in Dover White, Delphi White, Iquitos Green and Gomera Grey.',
    'Soft whites, beiges, greens and greys can be created through the mixing of small amounts of coloured clay with Dover White as a base.',
    'Flat in application with the option of a coarse or fine texture.',
  ],
  colourRangeText: 'Get in touch to learn more',
  colourRangeTo: '/',
  samples: [
    { name: 'Dover White' },
    { name: 'Delphi White' },
    { name: 'Iquitos Green' },
    { name: 'Gomera Grey' },
  ],
  texturesTitle: 'Duro textures',
  textures: [{ name: 'Fine' }, { name: 'Coarse' }],
  faqHeading: 'Duro for a natural, breathable clay finish',
  faqs: [
    {
      q: 'What is Duro clay plaster?',
      a: 'Duro by Tierrafino is a decorative clay plaster made from 100% natural ingredients. Its natural binders create a thinner, harder layer than typical clay finishes, giving an earthen, elegant surface that is easy to repair.',
    },
    {
      q: 'Is Duro suitable for residential and commercial spaces?',
      a: 'Yes, Duro is durable enough for both residential and commercial interiors, making it a versatile natural finish for walls, ceilings and cabinetry.',
    },
    {
      q: 'What colours is Duro available in?',
      a: 'Duro is currently available in Dover White, Delphi White, Iquitos Green and Gomera Grey. Soft whites, beiges, greens and greys can also be created by mixing small amounts of coloured clay with Dover White as a base.',
    },
    {
      q: 'What are the benefits of a clay plaster finish?',
      a: 'As a natural clay finish, Duro is humidity and temperature regulating, has antistatic properties and can help contribute to a healthier interior environment.',
    },
  ],
  gallery: [
    { caption: 'Bergen Residence, Netherlands — Duro in Dover White with a pearl effect' },
    { caption: 'Duro Dover White' },
    { caption: 'Dover 80% / Iquitos 20% blend' },
  ],
  specs: [
    ['Application', 'Walls | Ceilings | Cabinetry'],
    ['Thickness', '1.5 – 2 mm'],
    ['Texture', 'Flat | Traditional'],
    ['Polish', 'Matte'],
    ['Colour', 'Dover White | Delphi White | Iquitos Green | Gomera Grey'],
    ['Suitable substrates', 'Plasterboard | Cementboard | Blockwork | Plywood | MDF'],
    [
      'Substrate preparation',
      'Plasterboard/cementboard stopped to Level 4, blockwork skimmed, no visible fixings',
    ],
  ],
  downloads: ['Duro Technical Data Sheet'],
}

function DuroClayPlaster() {
  return <ProductDetail data={data} />
}

export default DuroClayPlaster
