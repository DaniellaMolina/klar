import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/klar-logo.png'

export default function Booking() {
  const [confirmed, setConfirmed] = useState(false)
  const [service, setService] = useState('Limpieza regular')
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])

  const [visibleMonth, setVisibleMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  )

  const [formData, setFormData] = useState({
    selectedDate: null,
    time: '',
    zone: '',
    notes: '',
    frequency: 'once',
  })

  const services = {
    'Limpieza regular': { price: '$ 1.500', duration: 3 },
    'Limpieza profunda': { price: '$ 2.500', duration: 4 },
    Oficinas: { price: '$ 3.000', duration: 4 },
    Mudanza: { price: '$ 3.500', duration: 4 },
    'Limpieza final de obra': { price: '$ 4.500', duration: 4 },
    'Home organization': { price: '$ 2.000', duration: 2 },
  }

  const frequencyLabels = {
    once: 'Única vez',
    weekly: 'Semanal',
    biweekly: 'Quincenal',
    monthly: 'Mensual',
  }

  const openingHour = 8
  const closingHour = 21
  const serviceDuration = services[service].duration

  const availableStartTimes = Array.from(
    { length: (closingHour - openingHour) * 2 + 1 },
    (_, index) => {
      const totalMinutes = openingHour * 60 + index * 30
      const hour = String(Math.floor(totalMinutes / 60)).padStart(2, '0')
      const minute = String(totalMinutes % 60).padStart(2, '0')
      return `${hour}:${minute}`
    },
  ).filter((time) => {
    const [hours, minutes] = time.split(':').map(Number)
    const endTimeInHours = hours + minutes / 60 + serviceDuration
    return endTimeInHours <= closingHour
  })

  const calculateEndTime = () => {
    if (!formData.time) return 'A definir'

    const [hours, minutes] = formData.time.split(':').map(Number)
    const date = new Date()
    date.setHours(hours + services[service].duration)
    date.setMinutes(minutes)

    return date.toLocaleTimeString('es-UY', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const startDayOfMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
    1,
  ).getDay()

  const daysInMonth = new Date(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth() + 1,
    0,
  ).getDate()

  const monthLabel = visibleMonth.toLocaleDateString('es-UY', { month: 'long' })

  const isRecurringMarked = (date) => {
    if (!formData.selectedDate) return false
    if (date < formData.selectedDate) return false

    const diffInDays = Math.floor(
      (date - formData.selectedDate) / (1000 * 60 * 60 * 24),
    )

    if (formData.frequency === 'weekly') return diffInDays % 7 === 0
    if (formData.frequency === 'biweekly') return diffInDays % 14 === 0
    if (formData.frequency === 'monthly') return diffInDays === 0
    return diffInDays === 0
  }

  const calendarDays = [
    ...Array.from({ length: startDayOfMonth }, (_, index) => ({
      key: `empty-${index}`,
      isEmpty: true,
    })),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1
      const date = new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth(),
        day,
      )
      date.setHours(0, 0, 0, 0)

      return {
        key: date.toISOString(),
        day,
        date,
        isEmpty: false,
        isDisabled: date < today,
      }
    }),
  ]

  const handlePrevMonth = () => {
    const previousMonth = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() - 1,
      1,
    )
    if (previousMonth < new Date(today.getFullYear(), today.getMonth(), 1)) return
    setVisibleMonth(previousMonth)
  }

  const handleConfirmBooking = () => {
    const bookingRequest = {
      service,
      date: formData.selectedDate ? formData.selectedDate.toISOString() : null,
      time: formData.time,
      endTime: calculateEndTime(),
      zone: formData.zone,
      notes: formData.notes,
      frequency: formData.frequency,
      duration: services[service].duration,
      price: services[service].price,
      status: 'pending',
    }

    console.log('Booking request:', bookingRequest)
    setConfirmed(true)
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-5">
          <img src={logo} alt="KLAR" className="w-16" />
          <h1 className="text-xl tracking-[12px] font-light">KLAR</h1>
        </Link>

        <Link
          to="/login"
          className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Ingresar
        </Link>
      </nav>

      <section className="px-10 md:px-20 py-20">
        <p className="uppercase tracking-[6px] text-white/40 text-xs mb-6">
          reserva
        </p>

        <h2 className="font-['DM_Serif_Display'] text-5xl md:text-7xl mb-12">
          Reservá tu limpieza.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-[40px] p-8 bg-white/[0.03]">
            <h3 className="text-2xl mb-8">Datos del servicio</h3>

            <div className="space-y-5">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white"
              >
                <option>Limpieza regular</option>
                <option>Limpieza profunda</option>
                <option>Oficinas</option>
                <option>Mudanza</option>
                <option>Limpieza final de obra</option>
                <option>Home organization</option>
              </select>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen((prev) => !prev)}
                  className="w-full text-left bg-black border border-white/10 rounded-2xl px-5 py-4 text-white transition hover:border-white/40"
                >
                  {formData.selectedDate
                    ? formData.selectedDate.toLocaleDateString('es-UY', {
                        day: '2-digit',
                        month: 'long',
                      })
                    : 'Seleccionar fecha'}
                </button>

                {isCalendarOpen && (
                  <div className="border border-white/10 rounded-3xl p-4 sm:p-5 bg-black/70 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="px-3 py-1 rounded-lg border border-white/20 transition hover:border-white/50 hover:bg-white/5"
                      >
                        ←
                      </button>

                      <p className="capitalize text-base sm:text-lg tracking-wide">
                        {monthLabel}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setVisibleMonth(
                            new Date(
                              visibleMonth.getFullYear(),
                              visibleMonth.getMonth() + 1,
                              1,
                            ),
                          )
                        }
                        className="px-3 py-1 rounded-lg border border-white/20 transition hover:border-white/50 hover:bg-white/5"
                      >
                        →
                      </button>
                    </div>

                    <div className="grid grid-cols-7 text-center text-xs sm:text-sm text-white/55 mb-3">
                      {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(
                        (label, index) => (
                          <span key={`${label}-${index}`}>{label}</span>
                        ),
                      )}
                    </div>

                    <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                      {calendarDays.map((item) => {
                        if (item.isEmpty) {
                          return <span key={item.key} className="h-10 sm:h-11" />
                        }

                        const isRecurring = isRecurringMarked(item.date)

                        return (
                          <button
                            key={item.key}
                            type="button"
                            disabled={item.isDisabled}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                selectedDate: item.date,
                              }))
                              setIsCalendarOpen(false)
                            }}
                            className={`h-10 sm:h-11 rounded-lg border text-sm transition-all duration-200 ${
                              isRecurring
                                ? 'bg-[#d8b98c] text-black border-[#d8b98c] shadow-[0_0_0_1px_rgba(216,185,140,0.35)]'
                                : 'border-white/10'
                            } ${
                              item.isDisabled
                                ? 'opacity-30 cursor-not-allowed'
                                : 'hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5'
                            }`}
                          >
                            {item.day}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="border border-white/10 rounded-2xl p-4">
                  <p className="text-white/70 text-sm mb-3">Frecuencia</p>

                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(frequencyLabels).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, frequency: value }))
                        }
                        className={`rounded-xl border px-3 py-2 text-sm transition ${
                          formData.frequency === value
                            ? 'bg-[#d8b98c] text-black border-[#d8b98c]'
                            : 'border-white/15 text-white hover:border-white/40'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <select
                value={formData.time}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white"
              >
                <option value="">Seleccionar horario de comienzo</option>
                {availableStartTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <select
                value={formData.zone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    zone: e.target.value,
                  }))
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white"
              >
                <option value="">Seleccionar barrio</option>
                <option>Pocitos</option>
                <option>Punta Carretas</option>
                <option>Parque Rodó</option>
                <option>Centro</option>
                <option>Cordón</option>
                <option>Tres Cruces</option>
                <option>Malvín</option>
                <option>Buceo</option>
                <option>Carrasco</option>
                <option>La Blanqueada</option>
                <option>Villa Biarritz</option>
                <option>Prado</option>
                <option>Ciudad Vieja</option>
                <option>Unión</option>
                <option>Jacinto Vera</option>
                <option>Sayago</option>
                <option>Aguada</option>
                <option>Palermo</option>
                <option>Capurro</option>
                <option>Cerro</option>
              </select>

              <textarea
                placeholder="Comentarios adicionales"
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: e.target.value,
                  }))
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none min-h-32"
              />
            </div>
          </div>

          <div className="border border-white/10 rounded-[40px] p-8 bg-white/[0.03] h-fit">
            <h3 className="text-2xl mb-8">Resumen</h3>

            <div className="space-y-5 text-white/50">
              <div className="flex justify-between gap-6">
                <span>Servicio</span>
                <span className="text-white text-right">{service}</span>
              </div>

              <div className="flex justify-between">
                <span>Duración</span>
                <span className="text-white">{services[service].duration} horas</span>
              </div>

              <div className="flex justify-between">
                <span>Frecuencia</span>
                <span className="text-white">{frequencyLabels[formData.frequency]}</span>
              </div>

              <div className="flex justify-between">
                <span>Fecha inicial</span>
                <span className="text-white">
                  {formData.selectedDate
                    ? formData.selectedDate.toLocaleDateString('es-UY', {
                        day: '2-digit',
                        month: 'long',
                      })
                    : 'A definir'}
                </span>
              </div>

              {formData.frequency === 'weekly' && (
                <p className="text-xs text-white/60">Se repetirá semanalmente</p>
              )}
              {formData.frequency === 'biweekly' && (
                <p className="text-xs text-white/60">Se repetirá cada 15 días</p>
              )}
              {formData.frequency === 'monthly' && (
                <p className="text-xs text-white/60">Se repetirá mensualmente</p>
              )}

              <div className="flex justify-between">
                <span>Comienzo</span>
                <span className="text-white">{formData.time || 'A definir'}</span>
              </div>

              <div className="flex justify-between">
                <span>Finalización</span>
                <span className="text-white">{calculateEndTime()}</span>
              </div>

              <div className="flex justify-between">
                <span>Barrio</span>
                <span className="text-white">{formData.zone || 'A definir'}</span>
              </div>

              <div className="flex justify-between border-t border-white/10 pt-5">
                <span>Desde</span>
                <span className="text-white">{services[service].price}</span>
              </div>
            </div>

            <button
              onClick={handleConfirmBooking}
              className="w-full bg-white text-black py-4 rounded-full mt-10 hover:opacity-80 transition duration-300"
            >
              Confirmar reserva
            </button>

            {confirmed && (
              <div className="mt-6 border border-white/10 rounded-2xl p-5 bg-white/[0.04]">
                <p className="text-white">Tu solicitud fue recibida.</p>
                <p className="text-white/40 text-sm mt-2">
                  Próximamente te contactaremos para confirmar la disponibilidad.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
