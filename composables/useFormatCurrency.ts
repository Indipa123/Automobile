export const useFormatCurrency = () => {
  const formatLKR = (amount: number): string => {
    if (amount >= 1_000_000) {
      const millions = amount / 1_000_000
      if (Number.isInteger(millions)) {
        return `Rs. ${millions}M`
      }
      return `Rs. ${millions.toFixed(1)}M`
    }
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      maximumFractionDigits: 0,
      currencyDisplay: 'narrowSymbol',
    }).format(amount).replace('LKR', 'Rs.')
  }

  const formatLKRFull = (amount: number): string => {
    return `Rs. ${new Intl.NumberFormat('en-LK').format(amount)}`
  }

  const formatLKRShort = (amount: number): string => {
    if (amount >= 1_000_000) {
      return `Rs. ${(amount / 1_000_000).toFixed(1)}M`
    }
    if (amount >= 1_000) {
      return `Rs. ${(amount / 1_000).toFixed(0)}K`
    }
    return `Rs. ${amount}`
  }

  return { formatLKR, formatLKRFull, formatLKRShort }
}
