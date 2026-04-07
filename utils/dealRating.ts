import type { DealRating } from '~/types'

export const getDealRating = (price: number, marketValue: number): DealRating => {
  const diff = ((marketValue - price) / marketValue) * 100
  if (diff >= 10) return 'great'
  if (diff >= 3) return 'good'
  if (diff >= -5) return 'fair'
  return 'overpriced'
}

export const dealRatingLabel: Record<DealRating, string> = {
  great: 'Great Deal',
  good: 'Good Deal',
  fair: 'Fair Price',
  overpriced: 'Overpriced',
}

export const dealRatingColor: Record<DealRating, string> = {
  great: 'bg-emerald-500 text-white',
  good: 'bg-blue-500 text-white',
  fair: 'bg-amber-500 text-white',
  overpriced: 'bg-red-500 text-white',
}

export const dealRatingDescription = (price: number, marketValue: number): string => {
  const diff = marketValue - price
  if (diff > 0) {
    return `Rs. ${new Intl.NumberFormat('en-LK').format(diff)} below market`
  }
  if (diff < 0) {
    return `Rs. ${new Intl.NumberFormat('en-LK').format(Math.abs(diff))} above market`
  }
  return 'At market price'
}
