import type { CarFilters } from '~/types'

export const useFilters = () => {
  const filters = ref<CarFilters>({
    condition: 'all',
    sortBy: 'relevance',
    page: 1,
    limit: 12,
  })

  const setFilter = <K extends keyof CarFilters>(key: K, value: CarFilters[K]) => {
    filters.value[key] = value
    filters.value.page = 1
  }

  const clearFilters = () => {
    filters.value = {
      condition: 'all',
      sortBy: 'relevance',
      page: 1,
      limit: 12,
    }
  }

  const activeFilterCount = computed(() => {
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

  const makes = [
    'Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'BMW',
    'Mercedes-Benz', 'Hyundai', 'Kia', 'Audi', 'Ford', 'Isuzu',
    'Mazda', 'Subaru', 'Volkswagen', 'Peugeot', 'Renault', 'Volvo',
  ]

  const provinces = [
    'Western', 'Central', 'Southern', 'Northern', 'Eastern',
    'North Western', 'North Central', 'Uva', 'Sabaragamuwa',
  ]

  const bodyTypes = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'pickup', label: 'Pickup Truck' },
    { value: 'van', label: 'Van' },
    { value: 'coupe', label: 'Coupe' },
    { value: 'convertible', label: 'Convertible' },
    { value: 'minivan', label: 'Minivan' },
  ]

  return { filters, setFilter, clearFilters, activeFilterCount, makes, provinces, bodyTypes }
}
