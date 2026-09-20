import { mockDealers } from '~/server/utils/mockDealers'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  let filtered = [...mockDealers]

  if (query.province) {
    filtered = filtered.filter(d => d.province.toLowerCase() === String(query.province).toLowerCase())
  }

  if (query.specialization) {
    filtered = filtered.filter(d =>
      d.specialization.some(s => s.toLowerCase().includes(String(query.specialization).toLowerCase()))
    )
  }

  return { dealers: filtered, total: filtered.length }
})
