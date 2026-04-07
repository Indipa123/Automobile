export const useGeolocation = () => {
  const lat = ref<number | null>(null)
  const lng = ref<number | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const getLocation = () => {
    if (!navigator.geolocation) {
      error.value = 'Geolocation is not supported by your browser'
      return
    }
    loading.value = true
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat.value = position.coords.latitude
        lng.value = position.coords.longitude
        loading.value = false
      },
      (err) => {
        error.value = err.message
        loading.value = false
      }
    )
  }

  return { lat, lng, error, loading, getLocation }
}
