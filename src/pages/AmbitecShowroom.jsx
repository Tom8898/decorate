import ProjectDetail from '../components/ProjectDetail'
import showroomImg from '../assets/3_ See the new Ambitec showroom .webp'

const data = {
  name: 'Ambitec Showroom',
  subtitle: 'Mt Roskill, Auckland · Design & Build by Ambitec',
  heroImage: showroomImg,
  category: 'Commercial',
  categoryTo: '/commercial',
  intro: [
    'Bold in colour and rich in texture, our Mt Roskill showroom was designed to demonstrate not only how materials shape the experience of a space, but how craft and imperfection add depth and meaning.',
    'Divided into three distinct spaces, each combining textured ceilings or walls with joinery elements, the showroom showcases the breadth of application possibilities and the flexibility of our finishes. The plaster finishes are presented at scale, allowing clients to experience how light and texture interweave and how subtle shifts in tone influence the result.',
    'To ground the space in a familiar architectural language, we applied Abodo Vulcan panelling in Straw on the central ceiling, Forte Loft flooring in Brooklyn throughout, Terrazzo stone in The Graduate for mid-century accents, and Aalto in Baltic Sea and Court Shoe to complement the bold Suave render on the ceilings.',
    'Visitors can explore the full range of Ambitec plaster products, browse our colour libraries, and select samples for their projects, with options to customise colours and refine finishes to suit specific design needs.',
  ],
  finishes: [
    { name: 'Suave Two-tone Misty White/Illusion' },
    { name: 'SuaveStone Oatmeal' },
    { name: 'Suave Deep Copper' },
    { name: 'Duro Dover White' },
    { name: 'Suave Palm Green' },
    { name: 'Suave Mottled Lead/Gravel Grey' },
  ],
  specs: [
    [
      'Products',
      'Ambitec Suave Polished Plaster | SuaveStone Polished Plaster | Tierrafino Clay Plaster',
    ],
    ['Application', 'Walls, ceilings and cabinetry'],
    [
      'Colours',
      'Deep Copper | Palm Green | Misty White/Illusion | Gravel Grey | Oatmeal | Dover White',
    ],
    [
      'Finish',
      'Medium grade polish with penetrating sealer on dark colours, surface sealer on joinery',
    ],
    ['Design & Build', 'Ambitec'],
    ['Photography', 'Stephanie Creagh'],
  ],
}

function AmbitecShowroom() {
  return <ProjectDetail data={data} />
}

export default AmbitecShowroom
