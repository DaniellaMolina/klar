export type UserRole = 'client' | 'worker' | 'admin'

export type BookingStatus =
  | 'pending'
  | 'accepted'
  | 'declined'
  | 'cancelled'
  | 'completed'

export type BookingFrequency = 'once' | 'weekly' | 'biweekly'

export type Booking = {
  id: string
  clientId: string
  workerId?: string
  serviceType: string
  date: string
  startTime: string
  duration: number
  frequency: BookingFrequency
  status: BookingStatus
  address: string
  extras: string[]
  price: number
}
