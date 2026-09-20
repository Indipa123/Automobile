import { mockDealers } from '~/server/utils/mockDealers'
import { mockCars } from '~/server/utils/mockCars'

export default defineEventHandler((event) => {
  const { id } = event.context.params || {}
  const dealer = mockDealers.find(d => d.id === id)
  if (!dealer) {
    setResponseStatus(event, 404)
    return { error: 'Dealer not found' }
  }

  // Get all vehicles belonging to this dealer
  const dealerCars = mockCars.filter(c => c.dealerId === id)

  return {
    dealer: {
      ...dealer,
      listingCount: dealerCars.length > 0 ? dealerCars.length : dealer.listingCount,
    },
    cars: dealerCars,
  }
})

