import type { LoanCalculation, AmortizationEntry } from '~/types'

export const useLoanCalculator = () => {
  const calculateEMI = (principal: number, annualRate: number, months: number): number => {
    const r = annualRate / 12 / 100
    if (r === 0) return principal / months
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
  }

  const calculateLoan = (
    vehiclePrice: number,
    downPaymentPercent: number,
    annualRate: number,
    months: number
  ): LoanCalculation => {
    const downPayment = (vehiclePrice * downPaymentPercent) / 100
    const principal = vehiclePrice - downPayment
    const monthlyEMI = calculateEMI(principal, annualRate, months)
    const totalPayment = monthlyEMI * months
    const totalInterest = totalPayment - principal

    const amortization: AmortizationEntry[] = []
    let balance = principal
    const r = annualRate / 12 / 100

    for (let month = 1; month <= months; month++) {
      const interest = balance * r
      const principalPart = monthlyEMI - interest
      balance -= principalPart
      amortization.push({
        month,
        payment: monthlyEMI,
        principal: principalPart,
        interest,
        balance: Math.max(0, balance),
      })
    }

    return {
      principal,
      downPayment,
      loanAmount: principal,
      annualRate,
      months,
      monthlyEMI,
      totalInterest,
      totalPayment,
      amortization,
    }
  }

  return { calculateEMI, calculateLoan }
}
