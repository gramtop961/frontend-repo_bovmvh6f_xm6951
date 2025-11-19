export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-xl">Salvatore</h3>
          <p className="mt-3 text-slate-400">Cocina italiana tradicional con toques artesanos, desde 1995.</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-100">Contacto</h4>
          <p className="mt-2 text-slate-300">C/ Miguel Ángel Blanco, 26, 33013 Oviedo</p>
          <p className="mt-1 text-slate-300">Tel: 985 25 65 78</p>
          <p className="mt-1 text-slate-300">info@restaurantesalvatore.es</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-100">Horario</h4>
          <p className="mt-2 text-slate-300">Mar-Dom: 13:00-16:00 · 20:00-24:00</p>
          <p className="mt-1 text-slate-300">Lunes cerrado salvo festivos</p>
        </div>
        <div>
          <h4 className="font-medium text-slate-100">Síguenos</h4>
          <div className="mt-2 flex gap-3 text-slate-300">
            <a className="hover:text-white" href="#">Instagram</a>
            <a className="hover:text-white" href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} Salvatore. Todos los derechos reservados.</div>
    </footer>
  )
}
