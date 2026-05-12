import { Link } from 'react-router-dom'
import logo from '../assets/klar-logo.png'

export default function Services() {
const services = [
  {
    title: 'Limpieza regular',
    description: 'Para mantener tu hogar limpio semana a semana.',
    price: 'Desde $1.500',
  },
  {
    title: 'Limpieza profunda',
    description: 'Ideal para limpiezas más completas o espacios muy cargados.',
    price: 'Desde $2.500',
  },
  {
    title: 'Oficinas',
    description: 'Servicio para espacios de trabajo, consultorios y locales.',
    price: 'Desde $3.000',
  },
  {
    title: 'Mudanzas',
    description: 'Limpieza antes o después de mudarte.',
    price: 'Desde $3.500',
  },
  {
    title: 'Limpieza final de obra',
    description: 'Limpieza intensiva luego de reformas, construcciones o trabajos de obra.',
    price: '4 hrs · Desde $4.500',
  },
  {
    title: 'Home organization',
    description: 'Organización premium de vestidores, placares y espacios del hogar.',
    price: '2 hrs · Desde $2.000',
  },
]

  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}

      <nav className="h-24 flex items-center justify-between px-8 md:px-16 border-b border-white/10">

        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="KLAR"
            className="w-12"
          />

          <span className="text-lg tracking-[12px] font-light">
            KLAR
          </span>
        </Link>

        <Link
          to="/booking"
          className="bg-white text-black px-6 py-3 rounded-full hover:opacity-80 transition"
        >
          Reservar
        </Link>

      </nav>

      {/* HERO */}

      <section className="max-w-[1200px] mx-auto px-8 py-24">

        <p className="uppercase tracking-[8px] text-[#d8b98c] text-sm mb-8">
          servicios
        </p>

        <h1 className="font-['DM_Serif_Display'] text-6xl md:text-8xl leading-none mb-10">
          Elegí qué necesita tu hogar.
        </h1>

        <p className="text-white/50 text-xl max-w-2xl mb-16 leading-relaxed">
          Servicios pensados para hogares, oficinas y momentos específicos
          como mudanzas o limpiezas profundas.
        </p>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 gap-6">

          {services.map((service) => (

            <div
              key={service.title}
              className="border border-white/10 rounded-[36px] p-8 bg-white/[0.03] hover:bg-white hover:text-black transition duration-300"
            >

              <span className="text-[#d8b98c] text-4xl">
                ✦
              </span>

              <h2 className="text-3xl mt-10 mb-4">
                {service.title}
              </h2>

              <p className="text-white/50 hover:text-black/60 leading-relaxed mb-8 transition">
                {service.description}
              </p>

              <div className="flex items-center justify-between">

                <p className="text-xl">
                  {service.price}
                </p>

                <Link
                  to="/booking"
                  className="border border-white/20 px-5 py-3 rounded-full hover:bg-black hover:text-white transition"
                >
                  Reservar
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}