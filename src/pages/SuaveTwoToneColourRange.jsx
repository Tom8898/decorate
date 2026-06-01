import ColourRange from '../components/ColourRange'

const swatchModules = import.meta.glob(
  '../assets/suavetwotone_colour_range/*.{webp,jpg,jpeg,png}',
  { eager: true, import: 'default' },
)

const swatchBySlug = {}
for (const filePath in swatchModules) {
  const slug = filePath.split('/').pop().replace(/\.[a-z]+$/i, '')
  swatchBySlug[slug] = swatchModules[filePath]
}

const COLOURS = [
  { name: 'Whitford White / Illusion', code: '1.12 / 1.14', slug: 'whitford-white-illusion-1-12-1-14' },
  { name: 'Almond Petal Light / Almond Petal Dark', code: '7.09 / 7.11', slug: 'almond-petal-light-dark-7-09-7-11' },
  { name: 'Natural White / Grey White', code: '1.04 / 1.10', slug: 'natural-white-grey-white-1-04-1-10' },
  { name: 'Tilt Slab Dark / Tilt Slab Light', code: '10.17 / 10.18', slug: 'tilt-slab-dark-light-10-17-10-18' },
  { name: 'Tilt Slab Dark / Gravel Grey', code: '10.17 / 10.07', slug: 'tilt-slab-dark-gravel-grey-10-17-10-07' },
  { name: 'Beautiful Black / Quartz Zinc', code: '11.03 / 10.15', slug: 'beautiful-black-quartz-zinc-11-03-10-15' },
].map((c) => ({ ...c, image: swatchBySlug[c.slug] }))

const data = {
  title: 'Suave Two-tone Colour Range',
  category: 'Colour Library',
  intro: [
    'Suave Two-tone combines the Suave plaster in two shades to create a cloudy/marbled look that adds extra movement to the polished finish. Typically a light and a dark shade of a similar tone is combined, but any two colour combinations can be created for a bespoke look.',
    'View examples of our two-tone combinations below. On screen colours may differ to actual samples, therefore use as a reference guide only and please obtain a sample of the product before making a final selection.',
  ],
  actions: [{ label: 'Order 5 Free Samples' }],
  notes: [
    'All samples are in a medium polish and medium traditional texture at 90 x 150mm.',
    'As time and care goes into making our samples, we will happily collect or welcome their return once no longer needed.',
    'Please allow up to 2–3 weeks as these are custom samples.',
  ],
  colours: COLOURS,
}

function SuaveTwoToneColourRange() {
  return <ColourRange data={data} />
}

export default SuaveTwoToneColourRange
