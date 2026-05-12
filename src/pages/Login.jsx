export default function Login() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md border border-white/10 rounded-[40px] p-10 bg-white/[0.03]">

        <h1 className="font-['DM_Serif_Display'] text-5xl mb-10">
          Ingresar
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <button className="w-full bg-white text-black py-4 rounded-2xl mt-4">
            Continuar
          </button>

        </div>

      </div>

    </div>
  )
}