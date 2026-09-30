import { mockCars } from '~/server/utils/mockCars'
import { mockDealers } from '~/server/utils/mockDealers'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const car = mockCars.find(c => c.slug === slug)
  if (!car) throw createError({ statusCode: 404, message: 'Listing not found' })
  const phone = car.sellerPhone || mockDealers.find(d => d.id === car.dealerId)?.phone
  return { phone: phone || null }
})
