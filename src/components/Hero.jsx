import { motion } from 'framer-motion'

export default function Hero() {
  const handleMove = (e) => {
    const buttons = document.querySelectorAll('.btn-neo-outline')
    buttons.forEach((btn) => {
      const rect = btn.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      btn.style.setProperty('--x', `${x}%`)
    })
  }

  return (
    <section onMouseMove={handleMove} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-28 sm:pt-40 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="max-w-2xl text-white"
        >
          <p className="uppercase tracking-[0.2em] text-sm/6 text-slate-200">Oviedo · Asturias</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl sheen">Salvatore</h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200">Cocina italiana tradicional en el corazón de Oviedo.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#reservas" className="btn-neo">
              Reservar mesa
            </a>
            <a href="#carta" className="btn-neo-outline">
              Ver carta
            </a>
          </div>
          <p className="mt-8 text-slate-200/90">C/ Miguel Ángel Blanco, 26, 33013 Oviedo · 985 25 65 78</p>
        </motion.div>

        {/* Neon accent lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="pointer-events-none absolute -inset-x-10 bottom-12 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300/80 to-pink-400/0"
        />
      </div>
    </section>
  )
}
