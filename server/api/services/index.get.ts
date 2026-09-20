import { mockServices } from '~/server/utils/mockServices'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  let filtered = [...mockServices]

  // Filter by Type
  if (query.type && query.type !== 'all') {
    filtered = filtered.filter(s => s.type === query.type)
  }

  // Filter by 24/7
  if (query.is24x7 === 'true') {
    filtered = filtered.filter(s => s.is24x7)
  }

  // Filter by District
  if (query.district) {
    const distQuery = String(query.district).toLowerCase()
    filtered = filtered.filter(s => s.district.toLowerCase() === distQuery)
  }

  // Filter by Specialty
  if (query.specialty) {
    const specQuery = String(query.specialty).toLowerCase()
    filtered = filtered.filter(s =>
      s.specializations.some(sp => sp.toLowerCase().includes(specQuery))
    )
  }

  // Search query
  if (query.q) {
    const q = String(query.q).toLowerCase()
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.city.toLowerCase().includes(q) ||
      s.district.toLowerCase().includes(q) ||
      s.specializations.some(sp => sp.toLowerCase().includes(q)) ||
      s.servicesOffered.some(so => so.name.toLowerCase().includes(q))
    )
  }

  return { services: filtered, total: filtered.length }
})
