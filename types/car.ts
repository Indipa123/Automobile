import type { Dealer } from './dealer'

export interface CarLocation {
  province: string
  district: string
  city: string
  lat?: number
  lng?: number
}

export type CarCondition = 'new' | 'used' | 'reconditioned'
export type BodyType = 'sedan' | 'suv' | 'hatchback' | 'pickup' | 'van' | 'coupe' | 'convertible' | 'minivan' | 'electric'
export type FuelType = 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'cng'
export type TransmissionType = 'automatic' | 'manual' | 'cvt' | 'dsg'
export type DriveType = 'fwd' | 'rwd' | 'awd' | '4wd'
export type DealRating = 'great' | 'good' | 'fair' | 'overpriced'

export interface Car {
  id: string
  slug: string
  title: string
  make: string
  model: string
  variant: string
  year: number
  condition: CarCondition
  bodyType: BodyType
  price: number
  negotiable: boolean
  mileage: number
  fuelType: FuelType
  transmission: TransmissionType
  engineCC: number
  horsepower: number
  torque?: number
  color: string
  seats: number
  driveType: DriveType
  features: string[]
  images: string[]
  location: CarLocation
  dealer?: Dealer
  dealerId?: string
  sellerType: 'dealer' | 'private'
  dealRating: DealRating
  marketValue: number
  safetyRating: number
  posted: string
  views: number
  featured: boolean
  description?: string
  fuelConsumption?: string
  tankCapacity?: number
  length?: number
  width?: number
  height?: number
  wheelbase?: number
  kerbWeight?: number
  topSpeed?: number
}

export interface CarFilters {
  condition?: CarCondition | 'all'
  make?: string
  model?: string
  dealerId?: string
  yearMin?: number
  yearMax?: number
  priceMin?: number
  priceMax?: number
  bodyType?: BodyType[]
  fuelType?: FuelType[]
  transmission?: TransmissionType[]
  mileageMax?: number
  province?: string
  color?: string
  seats?: number
  driveType?: DriveType[]
  features?: string[]
  dealerRating?: number
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'newest' | 'mileage'
  page?: number
  limit?: number
}

export interface CarSearchResult {
  cars: Car[]
  total: number
  page: number
  totalPages: number
}
