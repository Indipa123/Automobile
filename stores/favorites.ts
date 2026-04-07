import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const savedCars = ref<string[]>([])

  const toggleFavorite = (carId: string) => {
    const idx = savedCars.value.indexOf(carId)
    if (idx > -1) {
      savedCars.value.splice(idx, 1)
    } else {
      savedCars.value.push(carId)
    }
  }

  const isFavorited = (carId: string) => savedCars.value.includes(carId)

  const count = computed(() => savedCars.value.length)

  return { savedCars, toggleFavorite, isFavorited, count }
})
