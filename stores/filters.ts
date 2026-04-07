import { defineStore } from 'pinia'
import type { CarFilters } from '~/types'

export const useFiltersStore = defineStore('filters', () => {
  const filters = ref<CarFilters>({
    condition: 'all',
    sortBy: 'relevance',
    page: 1,
    limit: 12,
  })

  const setFilter = <K extends keyof CarFilters>(key: K, value: CarFilters[K]) => {
    filters.value = { ...filters.value, [key]: value, page: 1 }
  }

  const clearFilters = () => {
    filters.value = { condition: 'all', sortBy: 'relevance', page: 1, limit: 12 }
  }

  const activeCount = computed(() => {
    let count = 0
    const f = filters.value
    if (f.condition && f.condition !== 'all') count++
    if (f.make) count++
    if (f.model) count++
    if (f.yearMin || f.yearMax) count++
    if (f.priceMin || f.priceMax) count++
    if (f.bodyType?.length) count++
    if (f.fuelType?.length) count++
    if (f.transmission?.length) count++
    if (f.province) count++
    return count
  })

  return { filters, setFilter, clearFilters, activeCount }
})
