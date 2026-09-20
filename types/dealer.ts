export interface DealerReview {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  vehiclePurchased?: string
  verifiedBuyer?: boolean
}

export interface Dealer {
  id: string
  name: string
  logo: string
  bannerImage?: string
  province: string
  district?: string
  address: string
  phone: string
  whatsapp: string
  email?: string
  website?: string
  rating: number
  reviewCount: number
  listingCount: number
  specialization: string[]
  verified: boolean
  lat: number
  lng: number
  description?: string
  established?: number
  openHours?: string
  openingHours?: {
    weekdays: string
    saturday: string
    sunday: string
  }
  services?: string[]
  badges?: string[]
  reviewsList?: DealerReview[]
  showroomImages?: string[]
  socialMedia?: {
    facebook?: string
    instagram?: string
  }
}

