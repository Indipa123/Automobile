export interface LoanCalculation {
  principal: number
  downPayment: number
  loanAmount: number
  annualRate: number
  months: number
  monthlyEMI: number
  totalInterest: number
  totalPayment: number
  amortization: AmortizationEntry[]
}

export interface AmortizationEntry {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export interface Bank {
  id: string
  name: string
  logo: string
  minRate: number
  maxRate: number
  maxTerm: number
  maxFinancing: number
  url: string
}

export interface InsuranceQuote {
  vehicleValue: number
  vehicleYear: number
  usageType: 'personal' | 'commercial'
  estimatedPremium: number
  coverageType: 'third-party' | 'comprehensive'
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  image: string
  category: 'news' | 'review' | 'guide' | 'ev' | 'motorsport'
  author: string
  published: string
  readTime: number
  tags: string[]
  featured: boolean
}
