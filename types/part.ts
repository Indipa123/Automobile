export type PartCategory =
  | 'spare-parts'
  | 'engine'
  | 'suspension-brakes'
  | 'electrical-lights'
  | 'body-mirrors'
  | 'accessories'
  | 'lubricants-fluids'
  | 'tyres-wheels'
  | 'batteries'

export type PartCondition = 'brand-new-oem' | 'aftermarket' | 'reconditioned' | 'used'

export interface CompatibleVehicle {
  type: string // 'Car', 'SUV', 'Van', 'Motorcycle', 'Truck'
  make: string // e.g. 'Toyota'
  model: string // e.g. 'Prius'
  yearRange: string // e.g. '2016-2023'
  chassisCodes: string[] // e.g. ['ZVW50', 'ZVW51', 'ZVW55']
}

export interface PartSeller {
  id?: string
  name: string
  verified: boolean
  location: string
  phone: string
  whatsapp: string
  rating: number
  storeId?: string
}

export interface Part {
  id: string
  title: string
  slug: string
  partNumber: string
  oemNumber?: string
  brand: string // Denso, KYB, Mobil 1, Bosch, Toyota Genuine, etc.
  category: PartCategory
  categoryLabel: string
  price: number
  originalPrice?: number
  condition: PartCondition
  vehicleType: string // 'Car', 'SUV', 'Van', 'Motorcycle', 'Truck', 'Universal'
  compatibleVehicles: CompatibleVehicle[]
  chassisCodes: string[] // Array of compatible chassis codes e.g. ['ZVW50', 'ZVW52', 'ZVW55']
  inStock: boolean
  stockQuantity: number
  warranty: string
  rating: number
  reviewCount: number
  images: string[]
  description: string
  specifications: Record<string, string>
  seller: PartSeller
  featured?: boolean
  badge?: string // 'OEM Genuine', 'Best Seller', 'Express Delivery', 'Guaranteed Fit'
}

export interface PartFilters {
  vehicleType?: string
  make?: string
  model?: string
  chassis?: string
  category?: string
  condition?: string
  brand?: string
  priceMin?: number
  priceMax?: number
  q?: string
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'rating'
  page?: number
  limit?: number
}
