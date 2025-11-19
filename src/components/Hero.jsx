import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-28 sm:pt-40 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="max-w-2xl text-white"
        >
          <p className="uppercase tracking-[0.2em] text-sm/6 text-slate-200">Oviedo · Asturias</p>
          <h1 className="mt-3 font-serif text-5xl sm:text-6xl">Salvatore</h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200">Cocina italiana tradicional en el corazón de Oviedo.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#reservas" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Reservar mesa</a>
            <a href="#carta" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition">Ver carta</a>
          </div>
          <p className="mt-8 text-slate-200/90">C/ Miguel Ángel Blanco, 26, 33013 Oviedo · 985 25 65 78</p>
        </motion.div>
      </div>
    </section>
  )
}
