import { Link } from 'react-router-dom'
import logo from '../assets/klar-logo.png'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* NAVBAR */}
      <nav className="h-24 flex items-center justify-between px-8 md:px-16 border-b border-white/10">
        <Link to="/" className="flex items-center gap-5">
          <img src={logo} alt="KLAR" className="w-12" />
          <span className="text-lg tracking-[12px] font-light">KLAR</span>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-white/70">
        <Link to="/servicios" className="hover:text-white transition">
            Servicios
        </Link>
          <a href="#como-funciona" className="hover:text-white transition">Cómo funciona</a>
          <a href="#profesionales" className="hover:text-white transition">Nosotros</a>
          <Link to="/trabajar" className="text-[#d8b98c] hover:text-white transition">
            Trabajá con nosotros
          </Link>
        </div>

        <Link
          to="/login"
          className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Ingresar →
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative grid md:grid-cols-2 min-h-[calc(100vh-96px)] px-8 md:px-16 pt-20 pb-10">

        {/* TEXTO */}
        <div className="flex flex-col justify-center z-10 max-w-2xl">
          <p className="uppercase tracking-[8px] text-[#d8b98c] text-sm mb-8">
            limpieza premium
          </p>

          <h1 className="font-['DM_Serif_Display'] text-6xl md:text-8xl leading-[0.95]">
            Tu hogar
            <br />
            impecable,
            <br />
            sin esfuerzo.
          </h1>

          <p className="text-white/60 text-xl leading-relaxed mt-10 max-w-xl">
            Reservá profesionales verificadas para limpieza del hogar
            de forma simple, moderna y segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-12">
            <Link
              to="/booking"
              className="bg-white text-black px-9 py-4 rounded-full font-medium text-center hover:scale-105 transition duration-300"
            >
              Reservar ahora →
            </Link>

            <a
              href="#como-funciona"
              className="border border-[#d8b98c]/60 text-[#d8b98c] px-9 py-4 rounded-full text-center hover:bg-[#d8b98c] hover:text-black transition duration-300"
            >
              Cómo funciona →
            </a>
          </div>
        </div>

        {/* CELULAR */}
        <div className="relative flex items-center justify-center mt-16 md:mt-0">
          <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full" />

          <div className="relative rotate-[8deg] w-[330px] md:w-[390px] h-[680px] rounded-[55px] border border-white/30 bg-gradient-to-b from-zinc-900 to-black shadow-2xl p-4">
            <div className="w-full h-full rounded-[42px] bg-black border border-white/10 px-8 py-10 overflow-hidden">

              <div className="flex justify-between text-xs text-white mb-8">
                <span>9:41</span>
                <span>●●●</span>
              </div>

              <p className="uppercase tracking-[6px] text-[#d8b98c] text-xs mb-8">
                Klar Premium
              </p>

              <h2 className="font-['DM_Serif_Display'] text-5xl leading-none mb-10">
                Limpieza
                <br />
                moderna.
              </h2>

              <div className="space-y-5">
                <div className="border border-white/10 rounded-3xl p-5 bg-white/[0.04]">
                  <div className="flex items-center gap-5">
                    <span className="text-[#d8b98c] text-3xl">✦</span>
                    <div>
                      <h3 className="text-lg">Profesionales verificadas</h3>
                      <p className="text-white/40 text-sm mt-1">
                        Solo personal de confianza.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 rounded-3xl p-5 bg-white/[0.04]">
                  <div className="flex items-center gap-5">
                    <span className="text-[#d8b98c] text-3xl">▣</span>
                    <div>
                      <h3 className="text-lg">Reservá en minutos</h3>
                      <p className="text-white/40 text-sm mt-1">
                        Rápido, fácil y 100% online.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 rounded-3xl p-5 bg-white/[0.04]">
                  <div className="flex items-center gap-5">
                    <span className="text-[#d8b98c] text-3xl">◇</span>
                    <div>
                      <h3 className="text-lg">Seguridad y confianza</h3>
                      <p className="text-white/40 text-sm mt-1">
                        Tu hogar está en buenas manos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-8 md:px-16 pb-24">
        <div className="grid md:grid-cols-3 border border-white/10 rounded-[30px] bg-white/[0.02] overflow-hidden">

          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-[#d8b98c] text-4xl mb-5">◇</p>
            <h3 className="text-2xl mb-4">Profesionales verificadas</h3>
            <p className="text-white/50">
              Seleccionamos y verificamos cada profesional.
            </p>
          </div>

          <div className="p-10 text-center border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-[#d8b98c] text-4xl mb-5">☆</p>
            <h3 className="text-2xl mb-4">4.9/5 valoración promedio</h3>
            <p className="text-white/50">
              Hogares satisfechos nos recomiendan.
            </p>
          </div>

          <div className="p-10 text-center">
            <p className="text-[#d8b98c] text-4xl mb-5">◷</p>
            <h3 className="text-2xl mb-4">Respuesta en menos de 2 horas</h3>
            <p className="text-white/50">
              Te ayudamos rápido cuando más lo necesitás.
            </p>
          </div>

        </div>
      </section>


        <footer className="border-t border-white/10 mt-10">

        <div className="max-w-[1200px] mx-auto px-8 py-16">

            <div className="flex flex-col md:flex-row justify-between gap-14">

            {/* BRAND */}

            <div className="max-w-sm">

                <div className="flex items-center gap-4 mb-6">

                <img
                    src={logo}
                    alt="KLAR"
                    className="w-10"
                />

                <h2 className="tracking-[10px] text-base">
                    KLAR
                </h2>

                </div>

                <p className="text-white/40 leading-relaxed text-sm">
                Plataforma premium para reservar servicios
                de limpieza en Montevideo.
                </p>

            </div>

            {/* LINKS */}

            <div className="flex gap-16 text-sm">

                <div className="space-y-4">
                <p className="text-white">Empresa</p>

                <div className="space-y-3 text-white/40">
                    <p>Sobre nosotros</p>
                    <p>Cómo funciona</p>
                    <p>Contacto</p>
                </div>
                </div>

                <div className="space-y-4">
                <p className="text-white">Servicios</p>

                <div className="space-y-3 text-white/40">
                    <p>Limpieza regular</p>
                    <p>Limpieza profunda</p>
                    <p>Oficinas</p>
                </div>
                </div>

            </div>

            </div>

            {/* BOTTOM */}

            <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-3 text-white/25 text-xs">

            <p>
                © 2026 KLAR
            </p>

            <p>
                Montevideo · Uruguay
            </p>

            </div>

        </div>

        </footer>
    </main>
  )
}