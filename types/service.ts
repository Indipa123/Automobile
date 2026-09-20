export type ServiceType = 'garage' | 'service-station' | 'towing' | 'detailing'

export interface ServiceItem {
  name: string
  description?: string
  priceEstimate?: string
  duration?: string
}

export interface TowingDetails {
  flatbed: boolean
  wheelLift: boolean
  heavyDuty: boolean
  baseFare: number // LKR
  perKmFare: number // LKR
  avgResponseMins: number
  expresswayPermit: boolean
  hotline: string
  serviceAreas: string[]
}

export interface ServiceProvider {
  id: string
  name: string
  slug: string
  type: ServiceType
  typeLabel: string
  verified: boolean
  rating: number
  reviewCount: number
  address: string
  city: string
  district: string
  province: string
  phone: string
  emergencyPhone?: string
  whatsapp: string
  openHours: string
  is24x7: boolean
  lat: number
  lng: number
  images: string[]
  specializations: string[] // e.g. ['Hybrid/EV Battery', 'Toyota', 'European Luxury', 'Accident Towing']
  servicesOffered: ServiceItem[]
  description: string
  features: string[] // e.g. ['Warranty Provided', 'Free Diagnosis', 'Express Service', 'Card Payments']
  towingDetails?: TowingDetails
  badge?: string
}

export interface ServiceFilters {
  type?: ServiceType | 'all'
  district?: string
  specialty?: string
  is24x7?: boolean
  q?: string
}
