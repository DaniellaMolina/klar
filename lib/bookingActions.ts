import { mockBookings } from './mockData'
import type { Booking } from './types'

const bookings: Booking[] = [...mockBookings]

export const getBookingsByClient = (clientId: string) =>
  bookings.filter((booking) => booking.clientId === clientId)

export const getPendingBookings = () =>
  bookings.filter((booking) => booking.status === 'pending')

export const getAcceptedBookingsByWorker = (workerId: string) =>
  bookings.filter(
    (booking) => booking.workerId === workerId && booking.status === 'accepted',
  )

export const acceptBooking = (bookingId: string, workerId: string) => {
  const booking = bookings.find((item) => item.id === bookingId)
  if (!booking || booking.status !== 'pending') return null

  booking.status = 'accepted'
  booking.workerId = workerId
  return booking
}

export const declineBooking = (bookingId: string) => {
  const booking = bookings.find((item) => item.id === bookingId)
  if (!booking || booking.status !== 'pending') return null

  booking.status = 'declined'
  return booking
}
