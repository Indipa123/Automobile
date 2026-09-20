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
  const cars = filtered.slice(start, start + limit)

  return { cars, total, page, totalPages }
})
