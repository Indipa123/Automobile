export const useFavorites = () => {
  const favoritesStore = useFavoritesStore()

  const savedCars = computed(() => favoritesStore.savedCars)
  const count = computed(() => favoritesStore.savedCars.length)

  const toggleFavorite = (carId: string) => {
    favoritesStore.toggleFavorite(carId)
  }

  const isFavorited = (carId: string) => favoritesStore.isFavorited(carId)

  return { savedCars, count, toggleFavorite, isFavorited }
}
