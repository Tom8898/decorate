import ColourRange from '../components/ColourRange'

const swatchModules = import.meta.glob(
  '../assets/suavestone_colour_range/*.{webp,jpg,jpeg,png}',
  { eager: true, import: 'default' },
)

const swatchBySlug = {}
for (const filePath in swatchModules) {
  const slug = filePath.split('/').pop().replace(/\.[a-z]+$/i, '')
  swatchBySlug[slug] = swatchModules[filePath]
}

const COLOURS = [
  { name: 'Dover Chalk', code: '3.27', slug: 'dover-chalk-3-27' },
  { name: 'Dover White', code: '2.01', slug: 'dover-white-2-01' },
  { name: 'Sand', code: '2.17', slug: 'sand-2-17', madeToOrder: true },
  { name: 'Clay', code: '2.08', slug: 'clay-2-08' },
  { name: 'Pahia Sand', code: '2.03', slug: 'pahia-sand-2-03', madeToOrder: true },
  { name: 'Hay White', code: '1.08', slug: 'hay-white-1-08', madeToOrder: true },
  { name: 'Yellow Sand', code: '2.07', slug: 'yellow-sand-2-07', madeToOrder: true },
  { name: 'Roman Ochre', code: '2.06', slug: 'roman-ochre-2-06' },
  { name: 'Desert Ochre', code: '2.15', slug: 'desert-ochre-2-15', madeToOrder: true },
  { name: 'Desert Orange', code: '1.05', slug: 'desert-orange-1-05', madeToOrder: true },
  { name: 'Dark Ochre', code: '2.14', slug: 'dark-ochre-2-14', madeToOrder: true },
  { name: 'Pale Brick', code: '1.13', slug: 'pale-brick-1-13', madeToOrder: true },
  { name: 'Riverstone', code: '3.20', slug: 'riverstone-3-20' },
  { name: 'Craigs Stone', code: '3.12', slug: 'craigs-stone-3-12', madeToOrder: true },
  { name: 'Helens Brown', code: '1.02', slug: 'helens-brown-1-02', madeToOrder: true },
  { name: 'Desert Stone', code: '3.15', slug: 'desert-stone-3-15', madeToOrder: true },
  { name: 'Apollo', code: '3.13', slug: 'apollo-3-13', madeToOrder: true },
  { name: 'Lichen Stone', code: '3.06', slug: 'lichen-stone-3-06' },
  { name: 'Iquitos Green', code: '3.17', slug: 'iquitos-green-3-17' },
  { name: 'Tea', code: '3.04', slug: 'tea-3-04' },
  { name: 'Tea Dark', code: '3.05', slug: 'tea-dark-3-05', madeToOrder: true },
  { name: 'Clifftop Sand', code: '1.04', slug: 'clifftop-sand-1-04' },
  { name: 'Stone White', code: '3.07', slug: 'stone-white-3-07' },
  { name: 'Oyster', code: '3.09', slug: 'oyster-3-09' },
  { name: 'Moonstone', code: '3.10', slug: 'moonstone-3-10' },
  { name: 'Central', code: '3.02', slug: 'central-3-02' },
  { name: 'Pearl Grey', code: '3.11', slug: 'pearl-grey-3-11' },
  { name: 'Shell Grey', code: '3.14', slug: 'shell-grey-3-14' },
  { name: 'Just Grey', code: '3.26', slug: 'just-grey-3-26' },
  { name: 'Gomera Grey', code: '3.19', slug: 'gomera-grey-3-19' },
  { name: 'Denises Grey', code: '3.24', slug: 'denises-grey-3-24', madeToOrder: true },
  { name: 'Grey Black', code: '3.28', slug: 'grey-black-3-28' },
  { name: 'Just Black', code: '3.21', slug: 'just-black-3-21' },
].map((c) => ({ ...c, image: swatchBySlug[c.slug] }))

const data = {
  title: 'SuaveStone Colour Range',
  category: 'Colour Library',
  intro: [
    'View the full SuaveStone colour range below.',
    'On screen colours may differ to actual samples, therefore use as a reference guide only and please obtain a sample of the product before making a final selection.',
  ],
  downloads: [
    'Download SuaveStone Colour Guide (A3 / A4, double-sided)',
    "Download SuaveStone 'Dover White' texture map (seamless pattern)",
  ],
  actions: [{ label: 'Order 5 Free Samples' }],
  notes: [
    'All samples are in a medium polish and medium traditional texture at 90 x 150mm.',
    'As time and care goes into making our samples, we will happily collect or welcome their return once no longer needed.',
    'Please allow up to 2–3 weeks for made to order samples.',
  ],
  colours: COLOURS,
}

function SuaveStoneColourRange() {
  return <ColourRange data={data} />
}

export default SuaveStoneColourRange
