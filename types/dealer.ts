export interface Dealer {
  id: string
  name: string
  logo: string
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
  socialMedia?: {
    facebook?: string
    instagram?: string
  }
}
