import { getPendingBookings } from '../../../lib/bookingActions'

export default function WorkerRequestsPage() {
  const pendingBookings = getPendingBookings()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-6">Worker Requests</h1>
      <ul className="space-y-3">
        {pendingBookings.map((booking) => (
          <li key={booking.id} className="border border-white/10 rounded-xl p-4">
            {booking.serviceType} · {booking.date} · {booking.startTime}
          </li>
        ))}
      </ul>
    </main>
  )
}
