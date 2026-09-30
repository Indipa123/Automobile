import { mockCars } from '~/server/utils/mockCars'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filtered = [...mockCars]

  // Filter by condition
  if (query.condition && query.condition !== 'all') {
    filtered = filtered.filter(c => c.condition === query.condition)
  }

  // Filter by make
  if (query.make) {
    filtered = filtered.filter(c => c.make.toLowerCase() === String(query.make).toLowerCase())
  }

  if (query.model) filtered = filtered.filter(c => c.model.toLowerCase().includes(String(query.model).toLowerCase()))
  if (query.registrationStatus) filtered = filtered.filter(c => c.registrationStatus === query.registrationStatus)
  if (query.sellerType) filtered = filtered.filter(c => c.sellerType === query.sellerType)
  if (query.ownershipMax) filtered = filtered.filter(c => c.ownershipCount !== undefined && c.ownershipCount <= Number(query.ownershipMax))
  if (query.yearMin) filtered = filtered.filter(c => c.year >= Number(query.yearMin))
  if (query.yearMax) filtered = filtered.filter(c => c.year <= Number(query.yearMax))
  if (query.province) filtered = filtered.filter(c => c.location.province.toLowerCase() === String(query.province).toLowerCase())
  if (query.mileageMax) filtered = filtered.filter(c => c.mileage <= Number(query.mileageMax))
  if (query.transmission) {
    const values = Array.isArray(query.transmission) ? query.transmission : [query.transmission]
    filtered = filtered.filter(c => values.includes(c.transmission))
  }

  // Filter by bodyType
  if (query.bodyType) {
    const types = Array.isArray(query.bodyType) ? query.bodyType : [query.bodyType]
    filtered = filtered.filter(c => types.includes(c.bodyType))
  }

  // Filter by fuel type
  if (query.fuelType) {
    const types = Array.isArray(query.fuelType) ? query.fuelType : [query.fuelType]
    filtered = filtered.filter(c => types.includes(c.fuelType))
  }

  // Price range
  if (query.priceMin) filtered = filtered.filter(c => c.price >= Number(query.priceMin))
  if (query.priceMax) filtered = filtered.filter(c => c.price <= Number(query.priceMax))

  // Filter by dealerId
  if (query.dealerId) {
    filtered = filtered.filter(c => c.dealerId === String(query.dealerId))
  }

  // Featured only
  if (query.featured === 'true') {
    filtered = filtered.filter(c => c.featured)
  }

  // Search query
  if (query.q) {
    const q = String(query.q).toLowerCase()
    filtered = filtered.filter(c =>
      c.make.toLowerCase().includes(q) ||
      c.model.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q)
    )
  }

  // Sort
  const sortBy = query.sortBy as string
  if (sortBy === 'price_asc') filtered.sort((a, b) => a.price - b.price)
  else if (sortBy === 'price_desc') filtered.sort((a, b) => b.price - a.price)
  else if (sortBy === 'newest') filtered.sort((a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime())
  else if (sortBy === 'mileage') filtered.sort((a, b) => a.mileage - b.mileage)

  const page = Number(query.page) || 1
  const limit = Number(query.limit) || 12
  const total = filtered.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const cars = filtered.slice(start, start + limit).map(({ sellerPhone, ...car }) => car)

  return { cars, total, page, totalPages }
})
