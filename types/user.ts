export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  location?: string
  role: 'user' | 'dealer' | 'admin'
  verified: boolean
  createdAt: string
  savedCars?: string[]
  activeListings?: number
}

export interface PriceAlert {
  id: string
  userId: string
  make: string
  model: string
  maxPrice: number
  condition?: 'new' | 'used' | 'any'
  email: string
  active: boolean
  createdAt: string
}
