export const formatMileage = (km: number): string => {
  return `${new Intl.NumberFormat('en-LK').format(km)} km`
}

export const formatMileageShort = (km: number): string => {
  if (km >= 1_000) {
    return `${(km / 1_000).toFixed(0)}K km`
  }
  return `${km} km`
}
