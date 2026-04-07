export const formatPrice = (amount: number): string => {
  return `Rs. ${new Intl.NumberFormat('en-LK').format(amount)}`
}

export const formatPriceShort = (amount: number): string => {
  if (amount >= 1_000_000) {
    return `Rs. ${(amount / 1_000_000).toFixed(1)}M`
  }
  if (amount >= 1_000) {
    return `Rs. ${(amount / 1_000).toFixed(0)}K`
  }
  return `Rs. ${amount}`
}

export const priceDiff = (actual: number, market: number): number => {
  return market - actual
}
