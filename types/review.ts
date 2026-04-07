export interface ExpertReview {
  id: string
  slug: string
  carMake: string
  carModel: string
  carYear: number
  carImage: string
  expertName: string
  expertPhoto: string
  expertTitle: string
  overallScore: number
  ratings: {
    performance: number
    comfort: number
    safety: number
    fuelEconomy: number
    value: number
    reliability: number
  }
  pros: string[]
  cons: string[]
  summary: string
  content?: string
  published: string
  readTime: number
}

export interface UserReview {
  id: string
  carId: string
  userId: string
  userName: string
  userAvatar?: string
  overallRating: number
  ratings: {
    performance: number
    comfort: number
    safety: number
    fuelEconomy: number
    value: number
  }
  title: string
  content: string
  pros: string[]
  cons: string[]
  ownership: string
  helpful: number
  published: string
  verified: boolean
}

export interface RatingBreakdown {
  average: number
  total: number
  distribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}
