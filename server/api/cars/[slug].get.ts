import { mockCars } from '~/server/utils/mockCars'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const car = mockCars.find((c) => c.slug === slug)

  if (!car) {
    throw createError({ statusCode: 404, message: 'Car not found' })
  }

  // Add extra images for detail page
  const carWithImages = {
    ...car,
    images: [
      car.images[0],
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=450&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=450&fit=crop&auto=format',
    ],
  }

  return carWithImages
})
