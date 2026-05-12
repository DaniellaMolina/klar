import { Link } from 'react-router-dom'
import logo from '../assets/klar-logo.png'

export default function WorkerRegister() {
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
          profesionales
        </p>

        <h2 className="font-['DM_Serif_Display'] text-5xl md:text-7xl mb-8">
          Trabajá con KLAR.
        </h2>

        <p className="text-white/50 text-lg max-w-2xl mb-12 leading-relaxed">
          Registrate para ofrecer servicios de limpieza en Montevideo.
          Revisaremos tu perfil antes de activar tu cuenta.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-[40px] p-8 bg-white/[0.03]">
            <h3 className="text-2xl mb-8">Datos personales</h3>

            <div className="space-y-5">
              <input className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Nombre completo" />
              <input className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Cédula de identidad" />
              <input className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Teléfono" />
              <input className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none" placeholder="Email" />
            </div>
          </div>

          <div className="border border-white/10 rounded-[40px] p-8 bg-white/[0.03]">
            <h3 className="text-2xl mb-8">Perfil laboral</h3>

            <div className="space-y-5">
              <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white">
                <option>Experiencia en limpieza</option>
                <option>Menos de 1 año</option>
                <option>1 a 3 años</option>
                <option>Más de 3 años</option>
              </select>

              <select className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 text-white">
                <option>Zona principal</option>
                <option>Pocitos</option>
                <option>Centro</option>
                <option>Cordón</option>
                <option>Malvín</option>
                <option>Carrasco</option>
              </select>
              

              <input
  type="text"
  maxLength="12"
  placeholder="Número de RUT (12 dígitos)"
  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
/>

                <div className="border border-white/10 rounded-2xl p-5 bg-black">

                <p className="text-white mb-4">
                    ¿Contás con certificado de buena conducta emitido por el Ministerio del Interior?
                </p>

                <div className="flex gap-6">

                    <label className="flex items-center gap-2 text-white/60">
                    <input type="radio" name="conducta" />
                    Sí
                    </label>

                    <label className="flex items-center gap-2 text-white/60">
                    <input type="radio" name="conducta" />
                    No
                    </label>

                </div>

                </div>
              <textarea
                placeholder="Contanos brevemente tu experiencia"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none min-h-32"
              />

              <button className="w-full bg-white text-black py-4 rounded-full hover:opacity-80 transition duration-300">
                Enviar solicitud
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}