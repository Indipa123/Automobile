import type { ExpertReview } from '~/types'

const mockReviews: ExpertReview[] = [
  {
    id: 'r1', slug: 'toyota-prius-2022-review', carMake: 'Toyota', carModel: 'Prius', carYear: 2022,
    carImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=450&fit=crop&auto=format',
    expertName: 'Kasun Rathnayake', expertPhoto: '', expertTitle: 'Senior Automotive Editor',
    overallScore: 88,
    ratings: { performance: 80, comfort: 90, safety: 95, fuelEconomy: 96, value: 85, reliability: 92 },
    pros: ['Outstanding fuel economy', 'Smooth hybrid drivetrain', 'Spacious interior', 'Excellent safety ratings'],
    cons: ['Firm ride over rough roads', 'Polarizing exterior design', 'No physical volume knob'],
    summary: 'The 2022 Prius continues to set the benchmark for fuel efficiency in its segment. A practical, eco-friendly choice for Sri Lankan commuters.',
    published: '2024-11-10T09:00:00Z', readTime: 8,
  },
  {
    id: 'r2', slug: 'honda-vezel-2023-review', carMake: 'Honda', carModel: 'Vezel', carYear: 2023,
    carImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=450&fit=crop&auto=format',
    expertName: 'Dilini Perera', expertPhoto: '', expertTitle: 'Road Test Editor',
    overallScore: 91,
    ratings: { performance: 88, comfort: 92, safety: 95, fuelEconomy: 90, value: 88, reliability: 94 },
    pros: ['Powerful e:HEV system', 'Premium interior quality', 'Excellent safety tech', 'Efficient fuel use'],
    cons: ['Premium price tag', 'Limited cargo space in Z variant', 'Touch screen can be laggy'],
    summary: 'The 2023 Vezel raises the bar for compact SUVs in Sri Lanka. Honda\'s e:HEV hybrid system delivers a winning combination of performance and efficiency.',
    published: '2024-12-01T09:00:00Z', readTime: 10,
  },
  {
    id: 'r3', slug: 'kia-ev6-2023-review', carMake: 'Kia', carModel: 'EV6', carYear: 2023,
    carImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=450&fit=crop&auto=format',
    expertName: 'Ruwan Fernando', expertPhoto: '', expertTitle: 'EV Specialist',
    overallScore: 95,
    ratings: { performance: 97, comfort: 93, safety: 96, fuelEconomy: 100, value: 87, reliability: 90 },
    pros: ['Blistering performance', '800V ultra-fast charging', 'Best-in-class range (515km)', 'Stunning design'],
    cons: ['High price tag', 'Limited charging infrastructure in Sri Lanka', 'Firm suspension'],
    summary: 'The Kia EV6 is a game-changer for Sri Lanka\'s EV market. Despite infrastructure challenges, it offers the most compelling electric experience available.',
    published: '2024-12-15T09:00:00Z', readTime: 12,
  },
  {
    id: 'r4', slug: 'bmw-3-series-2021-review', carMake: 'BMW', carModel: '3 Series', carYear: 2021,
    carImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=450&fit=crop&auto=format',
    expertName: 'Kasun Rathnayake', expertPhoto: '', expertTitle: 'Senior Automotive Editor',
    overallScore: 90,
    ratings: { performance: 93, comfort: 88, safety: 92, fuelEconomy: 75, value: 82, reliability: 88 },
    pros: ['Thrilling driving dynamics', 'Premium interior', 'Powerful engine lineup', 'Advanced technology'],
    cons: ['High running costs in Sri Lanka', 'Expensive spare parts', 'Firm ride'],
    summary: 'The BMW 3 Series remains the driver\'s benchmark in its class. If you can handle the running costs, it offers an unmatched driving experience.',
    published: '2024-10-20T09:00:00Z', readTime: 9,
  },
]

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let filtered = [...mockReviews]
  const limit = Number(query.limit) || 10
  return { reviews: filtered.slice(0, limit), total: filtered.length }
})
