import { defineStore } from 'pinia'
import type { Car, CarFilters } from '~/types'

export const useCarsStore = defineStore('cars', () => {
  const cars = ref<Car[]>([])
  const featuredCars = ref<Car[]>([])
  const selectedCar = ref<Car | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const total = ref(0)
  const currentPage = ref(1)
  const totalPages = ref(1)

  const fetchCars = async (filters: CarFilters = {}) => {
    loading.value = true
    error.value = null
    try {
      const query = new URLSearchParams()
      Object.entries(filters).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          if (Array.isArray(val)) {
            val.forEach(v => query.append(key, String(v)))
          } else {
            query.append(key, String(val))
          }
        }
      })
      const data = await $fetch<any>(`/api/cars?${query.toString()}`)
      cars.value = data.cars
      total.value = data.total
      currentPage.value = data.page
      totalPages.value = data.totalPages
    } catch (e) {
      error.value = 'Failed to load cars.'
    } finally {
      loading.value = false
    }
  }

  const fetchFeatured = async () => {
    try {
      const data = await $fetch<any>('/api/cars?featured=true&limit=8')
      featuredCars.value = data.cars
    } catch {}
  }

  const fetchCarBySlug = async (slug: string) => {
    loading.value = true
    try {
      selectedCar.value = await $fetch<Car>(`/api/cars/${slug}`)
    } catch (e) {
      error.value = 'Car not found.'
    } finally {
      loading.value = false
    }
  }

  return {
    cars, featuredCars, selectedCar, loading, error,
    total, currentPage, totalPages,
    fetchCars, fetchFeatured, fetchCarBySlug,
  }
})
