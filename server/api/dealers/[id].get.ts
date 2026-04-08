import type { Dealer } from '~/types'

const mockDealers: Dealer[] = [
  {
    id: 'd1', name: 'Prima Auto Lanka', logo: '', province: 'Western', district: 'Colombo',
    address: '142 Galle Road, Colombo 04', phone: '+94 11 234 5678', whatsapp: '+94 77 234 5678',
    rating: 4.8, reviewCount: 124, listingCount: 89, specialization: ['New Cars', 'Hybrid'], verified: true,
    lat: 6.887, lng: 79.851, description: 'Authorized Toyota dealer with over 20 years of experience.', established: 2003,
  },
  {
    id: 'd2', name: 'Millennium Motors', logo: '', province: 'Western', district: 'Gampaha',
    address: '28 Negombo Road, Ja-Ela', phone: '+94 11 345 6789', whatsapp: '+94 77 345 6789',
    rating: 4.6, reviewCount: 87, listingCount: 145, specialization: ['Used Cars', 'SUV'], verified: true,
    lat: 7.073, lng: 79.893, established: 2008,
  },
  {
    id: 'd3', name: 'Luxury Auto Gallery', logo: '', province: 'Western', district: 'Colombo',
    address: '56 Duplication Road, Colombo 03', phone: '+94 11 456 7890', whatsapp: '+94 77 456 7890',
    rating: 4.9, reviewCount: 62, listingCount: 34, specialization: ['Luxury', 'BMW', 'Mercedes'], verified: true,
    lat: 6.895, lng: 79.855, established: 2015,
  },
  {
    id: 'd4', name: 'Island Wide Auto', logo: '', province: 'Central', district: 'Kandy',
    address: '78 Peradeniya Road, Kandy', phone: '+94 81 234 5678', whatsapp: '+94 77 567 8901',
    rating: 4.5, reviewCount: 98, listingCount: 112, specialization: ['Used Cars', 'New Cars'], verified: true,
    lat: 7.289, lng: 80.632, established: 2005,
  },
  {
    id: 'd5', name: 'Southern Motors', logo: '', province: 'Southern', district: 'Galle',
    address: '34 Matara Road, Galle', phone: '+94 91 234 5678', whatsapp: '+94 77 678 9012',
    rating: 4.3, reviewCount: 45, listingCount: 67, specialization: ['Used Cars', 'Pickup'], verified: false,
    lat: 6.055, lng: 80.218, established: 2011,
  },
  {
    id: 'd6', name: 'EV Lanka Motors', logo: '', province: 'Western', district: 'Colombo',
    address: '22 Baseline Road, Colombo 09', phone: '+94 11 567 8901', whatsapp: '+94 77 789 0123',
    rating: 4.7, reviewCount: 38, listingCount: 28, specialization: ['Electric', 'Hybrid', 'EV'], verified: true,
    lat: 6.919, lng: 79.863, established: 2020,
  },
]

export default defineEventHandler((event) => {
  const { id } = event.context.params || {}
  const dealer = mockDealers.find(d => d.id === id)
  if (!dealer) {
    setResponseStatus(event, 404)
    return { error: 'Dealer not found' }
  }
  return { dealer }
})
