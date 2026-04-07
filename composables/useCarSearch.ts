import type { Car, CarFilters, CarSearchResult } from '~/types'

export const useCarSearch = () => {
  const results = ref<Car[]>([])
  const total = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const totalPages = ref(1)

  const search = async (filters: CarFilters = {}) => {
    loading.value = true
    error.value = null
    try {
      const query = new URLSearchParams()
      Object.entries(filters).forEach(([key, val]) => {
        if (val !== undefined && val !== null && val !== '') {
          if (Array.isArray(val)) {
            val.forEach(v => query.append(key, v))
          } else {
            query.append(key, String(val))
          }
        }
      })
      const data = await $fetch<CarSearchResult>(`/api/cars?${query.toString()}`)
      results.value = data.cars
      total.value = data.total
      currentPage.value = data.page
      totalPages.value = data.totalPages
    } catch (e) {
      error.value = 'Failed to load cars. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return { results, total, loading, error, currentPage, totalPages, search }
}
