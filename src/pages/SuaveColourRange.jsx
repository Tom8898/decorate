import ColourRange from '../components/ColourRange'

const swatchModules = import.meta.glob(
  '../assets/suave_colour_range/*.{webp,jpg,jpeg,png}',
  { eager: true, import: 'default' },
)

const swatchBySlug = {}
for (const filePath in swatchModules) {
  const slug = filePath.split('/').pop().replace(/\.[a-z]+$/i, '')
  swatchBySlug[slug] = swatchModules[filePath]
}

const COLOURS = [
  { name: 'Natural White', code: '1.04', slug: 'natural-white-1-04' },
  { name: 'Wan White', code: '1.13', slug: 'wan-white-1-13' },
  { name: 'Misty White', code: '1.03', slug: 'misty-white-1-03' },
  { name: 'Illusion', code: '1.14', slug: 'illusion-1-14' },
  { name: 'Black White', code: '1.02', slug: 'black-white-1-02' },
  { name: 'Grey White', code: '1.11', slug: 'grey-white-1-11' },
  { name: 'Still White', code: '1.07', slug: 'still-white-1-07' },
  { name: 'Madrid White', code: '1.06', slug: 'madrid-white-1-06' },
  { name: 'Whitford White', code: '1.12', slug: 'whitford-white-1-12' },
  { name: 'Greenhithe', code: '1.10', slug: 'greenhithe-1-10' },
  { name: 'Still Cream', code: '2.13', slug: 'still-cream-2-13' },
  { name: 'Hay Brown', code: '2.15', slug: 'hay-brown-2-15' },
  { name: 'Still Fossil', code: '2.07', slug: 'still-fossil-2-07' },
  { name: 'Blanc', code: '2.11', slug: 'blanc-2-11' },
  { name: 'Dutch Latte', code: '2.14', slug: 'dutch-latte-2-14', madeToOrder: true },
  { name: 'Queenstown Stone', code: '2.08', slug: 'queenstown-stone-2-08', madeToOrder: true },
  { name: 'Stone White', code: '1.08', slug: 'stone-white-1-08' },
  { name: 'Misty Almond', code: '2.04', slug: 'misty-almond-2-04', madeToOrder: true },
  { name: 'Still Almond', code: '2.05', slug: 'still-almond-2-05', madeToOrder: true },
  { name: 'Brown Grey', code: '2.06', slug: 'brown-grey-2-06' },
  { name: 'Linseed White', code: '1.09', slug: 'lindseed-white-1-09' },
  { name: 'Still Mocha', code: '3.01', slug: 'still-mocha-3-01', madeToOrder: true },
  { name: 'Burmese Beige', code: '3.06', slug: 'burmese-beige-3-06' },
  { name: 'Grain Brown', code: '3.08', slug: 'grain-brown-3-08' },
  { name: 'Gravel White', code: '3.12', slug: 'gravel-white-3-12' },
  { name: 'Gothic', code: '3.13', slug: 'gothic-3-13' },
  { name: 'Stone', code: '3.15', slug: 'stone-3-15' },
  { name: 'Still Muesli', code: '3.19', slug: 'still-muesli-3-19', madeToOrder: true },
  { name: 'Easy Muesli', code: '2.17', slug: 'easy-muesli-2-17', madeToOrder: true },
  { name: 'Rich Putty', code: '3.16', slug: 'rich-putty-3-16', madeToOrder: true },
  { name: 'Rich Coffee', code: '3.20', slug: 'rich-coffee-3-20' },
  { name: 'Tender Lime', code: '4.02', slug: 'tender-lime-4-02', madeToOrder: true },
  { name: 'Tender Yellow', code: '4.01', slug: 'tender-yellow-4-01', madeToOrder: true },
  { name: 'Still Clay', code: '4.04', slug: 'still-clay-4-04', madeToOrder: true },
  { name: 'Rich Clay', code: '3.18', slug: 'rich-clay-3-18', madeToOrder: true },
  { name: 'Still Pumpkin', code: '5.02', slug: 'still-pumpkin-5-02', madeToOrder: true },
  { name: 'Tender Brick', code: '5.04', slug: 'tender-brick-5-04', madeToOrder: true },
  { name: 'Rich Tangerine', code: '5.03', slug: 'rich-tangerine-5-03', madeToOrder: true },
  { name: 'Tuscany', code: '5.07', slug: 'tuscany-5-07', madeToOrder: true },
  { name: 'Pale Orange', code: '5.08', slug: 'pale-orange-5-08', madeToOrder: true },
  { name: 'Brians Red', code: '6.01', slug: 'brians-red-6-01', madeToOrder: true },
  { name: 'Deep Rose', code: '6.03', slug: 'deep-rose-6-03', madeToOrder: true },
  { name: 'Almond Petal Light', code: '7.09', slug: 'almond-petal-light-7-09' },
  { name: 'Almond Petal Dark', code: '7.11', slug: 'almond-petal-dark-7-11' },
  { name: 'Deep Copper', code: '6.06', slug: 'deep-copper-6-06' },
  { name: 'Red Grape', code: '6.08', slug: 'red-grape-6-08' },
  { name: 'Cardinal', code: '7.04', slug: 'cardinal-7-04', madeToOrder: true },
  { name: 'Deep Purple', code: '7.05', slug: 'deep-purple-7-05', madeToOrder: true },
  { name: 'Still Purple', code: '7.01', slug: 'still-purple-7-01', madeToOrder: true },
  { name: 'Tender Purple', code: '7.02', slug: 'tender-purple-7-02', madeToOrder: true },
  { name: 'Purple Grape', code: '7.08', slug: 'purple-grape-7-08', madeToOrder: true },
  { name: 'Stone Blush', code: '3.07', slug: 'stone-blush-3-07' },
  { name: 'Powder Blue', code: '8.02', slug: 'powder-blue-8-02' },
  { name: 'Tender Blue', code: '8.01', slug: 'tender-blue-8-01' },
  { name: 'Steel Blue', code: '8.03', slug: 'steel-blue-8-03' },
  { name: 'Dark Denim', code: '8.11', slug: 'dark-denim-8-11' },
  { name: 'Midnight Blue', code: '11.08', slug: 'midnight-blue-11-08' },
  { name: 'Beautiful Green', code: '9.11', slug: 'beautiful-green-9-11' },
  { name: "Fay's Green", code: '9.07', slug: 'fay-s-green-9-07', madeToOrder: true },
  { name: 'Pale Green', code: '9.14', slug: 'pale-green-9-14' },
  { name: 'Still Green', code: '9.03', slug: 'still-green-9-03' },
  { name: 'Lichen Green', code: '9.05', slug: 'lichen-green-9-05' },
  { name: 'Masala', code: '10.13', slug: 'masala-10-13' },
  { name: 'Tapa', code: '10.12', slug: 'tapa-10-12' },
  { name: 'Still Grey', code: '10.01', slug: 'still-grey-10-01' },
  { name: 'Tilt Slab Light', code: '10.18', slug: 'tilt-slab-light-10-18' },
  { name: 'Pale Grey', code: '10.02', slug: 'pale-grey-10-02' },
  { name: 'Tilt Slab Dark', code: '10.17', slug: 'tilt-slab-dark-10-17' },
  { name: 'Tender Grey', code: '10.03', slug: 'tender-grey-10-03', madeToOrder: true },
  { name: 'Queenstown Grey', code: '10.19', slug: 'queenstown-grey-10-19' },
  { name: 'Lichen Grey', code: '10.04', slug: 'lichen-grey-10-04' },
  { name: 'Graphite Grey', code: '10.05', slug: 'graphite-grey-10-05' },
  { name: 'Grey Grey', code: '10.06', slug: 'grey-grey-10-06' },
  { name: 'Masonry', code: '10.23', slug: 'masonry-10-23' },
  { name: 'Gravel Grey', code: '10.07', slug: 'gravel-grey-10-07' },
  { name: 'Lead', code: '10.09', slug: 'lead-10-09' },
  { name: 'Basalt Grey', code: '10.16', slug: 'basalt-grey-10-16' },
  { name: 'Quartz Zinc', code: '10.15', slug: 'quartz-zinc-10-15' },
  { name: 'Pietra Stone', code: '11.05', slug: 'pietra-stone-11-05' },
  { name: 'Imperial Brown', code: '3.23', slug: 'imperial-brown-3-23' },
  { name: 'Thoroughbred', code: '11.02', slug: 'thoroughbred-11-02' },
  { name: 'Dark Metal', code: '10.24', slug: 'dark-metal-10-24' },
  { name: 'Taupo Stone', code: '11.01', slug: 'taupo-stone-11-01', madeToOrder: true },
  { name: 'Beautiful Black', code: '11.03', slug: 'beautiful-black-11-03' },
].map((c) => ({ ...c, image: swatchBySlug[c.slug] }))

const data = {
  title: 'Suave Colour Range',
  category: 'Colour Library',
  intro: [
    'View the full Suave colour range below. Quarter, Half, Double and Triple colour shades are available on request.',
    'On screen colours may differ to actual samples, therefore use as a reference guide only and please obtain a sample of the product before making a final selection.',
  ],
  downloads: [
    'Download Suave Colour Guide (A3 / A4, double-sided)',
    "Download Suave 'Black White' texture map (seamless pattern)",
  ],
  actions: [
    { label: 'Order 5 Free Samples' },
    { label: 'Purchase a Sample Box · $350' },
  ],
  notes: [
    'All samples are in a medium polish and medium traditional texture at 90 x 150mm.',
    'As time and care goes into making our samples, we will happily collect or welcome their return once no longer needed.',
    'Please allow up to 2–3 weeks for made to order samples.',
  ],
  colours: COLOURS,
}

function SuaveColourRange() {
  return <ColourRange data={data} />
}

export default SuaveColourRange
