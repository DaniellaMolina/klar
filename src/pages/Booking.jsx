import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/klar-logo.png'

export default function Booking() {
  const [confirmed, setConfirmed] = useState(false)
  const [service, setService] = useState('Limpieza regular')

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
  })
  const startDayOfMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1).getDay()
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate()
  const monthLabel = visibleMonth.toLocaleDateString('es-UY', { month: 'long' })

  const calendarDays = [
    ...Array.from({ length: startDayOfMonth }, (_, index) => ({ key: `empty-${index}`, isEmpty: true })),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1
      const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), day)
      date.setHours(0, 0, 0, 0)

      return {
        key: date.toISOString(),
        day,
        date,
        isEmpty: false,
        isDisabled: date < today,
        isSelected:
          formData.selectedDate && date.toDateString() === formData.selectedDate.toDateString(),
      }
    }),
  ]

  const handlePrevMonth = () => {
    const previousMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1)
    if (previousMonth < new Date(today.getFullYear(), today.getMonth(), 1)) return
    setVisibleMonth(previousMonth)
  }


  const services = {
    'Limpieza regular': {
      price: '$ 1.500',
      duration: 3,
    },
    'Limpieza profunda': {
      price: '$ 2.500',
      duration: 4,
    },
    Oficinas: {
      price: '$ 3.000',
      duration: 4,
    },
    Mudanza: {
      price: '$ 3.500',
      duration: 4,
    },
    'Limpieza final de obra': {
      price: '$ 4.500',
      duration: 4,
    },
    'Home organization': {
      price: '$ 2.000',
      duration: 2,
    },
  }

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

              <div className="border border-white/10 rounded-2xl p-4 bg-black">
                <div className="flex items-center justify-between mb-4">
                  <button type="button" onClick={handlePrevMonth} className="px-3 py-1 rounded-lg border border-white/20">←</button>
                  <p className="capitalize text-lg">{monthLabel}</p>
                  <button
                    type="button"
                    onClick={() => setVisibleMonth(new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1))}
                    className="px-3 py-1 rounded-lg border border-white/20"
                  >
                    →
                  </button>
                </div>
                <div className="grid grid-cols-7 text-center text-xs text-white/50 mb-2">
                  {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((label, index) => (
                    <span key={`${label}-${index}`}>{label}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((item) => {
                    if (item.isEmpty) {
                      return <span key={item.key} className="h-10" />
                    }

                    return (
                      <button
                        key={item.key}
                        type="button"
                        disabled={item.isDisabled}
                        onClick={() => setFormData({ ...formData, selectedDate: item.date })}
                        className={`h-10 rounded-lg border text-sm transition ${
                          item.isSelected
                            ? 'bg-white text-black border-white'
                            : 'border-white/10 hover:border-white/50'
                        } ${item.isDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                        {item.day}
                      </button>
                    )
                  })}
                </div>
              </div>

          <select
            value={formData.time}
            onChange={(e) =>
              setFormData({
                ...formData,
                time: e.target.value,
              })
            }
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white"
          >
            <option value="">Seleccionar horario de comienzo</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="10:00">10:00</option>
            <option value="10:30">10:30</option>
            <option value="11:00">11:00</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
          </select>

              <select
                value={formData.zone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    zone: e.target.value,
                  })
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
                  setFormData({
                    ...formData,
                    notes: e.target.value,
                  })
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
                <span>Fecha</span>

                <span className="text-white">
                  {formData.selectedDate
                    ? formData.selectedDate.toLocaleDateString('es-UY', {
                      day: '2-digit',
                      month: 'long',
                    })
                    : 'A definir'}
                </span>
              </div>

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
              onClick={() => setConfirmed(true)}
              className="w-full bg-white text-black py-4 rounded-full mt-10 hover:opacity-80 transition duration-300"
            >
              Confirmar reserva
            </button>

            {confirmed && (
              <div className="mt-6 border border-white/10 rounded-2xl p-5 bg-white/[0.04]">
                <p className="text-white">
                  Tu solicitud fue recibida.
                </p>
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
