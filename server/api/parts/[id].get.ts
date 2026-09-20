import { mockParts } from '~/server/utils/mockParts'

export default defineEventHandler((event) => {
  const { id } = event.context.params || {}
  const part = mockParts.find(p => p.id === id || p.slug === id)
  if (!part) {
    setResponseStatus(event, 404)
    return { error: 'Automobile product not found' }
  }
  return { part }
})
