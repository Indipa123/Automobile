import { mockParts } from '~/server/utils/mockParts'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filtered = [...mockParts]

  // Filter by Vehicle Type
  if (query.vehicleType && query.vehicleType !== 'all') {
    const vType = String(query.vehicleType).toLowerCase()
    filtered = filtered.filter(p =>
      p.vehicleType.toLowerCase() === vType ||
      p.vehicleType.toLowerCase() === 'universal' ||
      p.compatibleVehicles.some(cv => cv.type.toLowerCase() === vType || cv.type.toLowerCase() === 'universal')
    )
  }

  // Filter by Make
  if (query.make) {
    const makeQuery = String(query.make).toLowerCase()
    filtered = filtered.filter(p =>
      p.vehicleType.toLowerCase() === 'universal' ||
      p.compatibleVehicles.some(cv => cv.make.toLowerCase().includes(makeQuery) || cv.make.toLowerCase() === 'all makes')
    )
  }

  // Filter by Model
  if (query.model) {
    const modelQuery = String(query.model).toLowerCase()
    filtered = filtered.filter(p =>
      p.vehicleType.toLowerCase() === 'universal' ||
      p.compatibleVehicles.some(cv => cv.model.toLowerCase().includes(modelQuery) || cv.model.toLowerCase().includes('universal'))
    )
  }

  // Filter by Chassis / VIN
  if (query.chassis) {
    const chassisQuery = String(query.chassis).trim().toUpperCase()
    filtered = filtered.filter(p =>
      p.chassisCodes.includes('ALL') ||
      p.chassisCodes.some(c => c.toUpperCase().includes(chassisQuery) || chassisQuery.includes(c.toUpperCase()))
    )
  }

  // Filter by Category
  if (query.category && query.category !== 'all') {
    filtered = filtered.filter(p => p.category === query.category)
  }

  // Filter by Condition
  if (query.condition && query.condition !== 'all') {
    filtered = filtered.filter(p => p.condition === query.condition)
  }

  // Filter by Brand
  if (query.brand) {
    const brandQuery = String(query.brand).toLowerCase()
    filtered = filtered.filter(p => p.brand.toLowerCase().includes(brandQuery))
  }

  // Price range
  if (query.priceMin) filtered = filtered.filter(p => p.price >= Number(query.priceMin))
  if (query.priceMax) filtered = filtered.filter(p => p.price <= Number(query.priceMax))

  // Search query
  if (query.q) {
    const q = String(query.q).toLowerCase()
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.partNumber.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.oemNumber && p.oemNumber.toLowerCase().includes(q)) ||
      p.chassisCodes.some(c => c.toLowerCase().includes(q))
    )
  }

  // Sorting
  const sortBy = query.sortBy as string
  if (sortBy === 'price_asc') filtered.sort((a, b) => a.price - b.price)
  else if (sortBy === 'price_desc') filtered.sort((a, b) => b.price - a.price)
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating)

  const total = filtered.length
  return { parts: filtered, total }
})
