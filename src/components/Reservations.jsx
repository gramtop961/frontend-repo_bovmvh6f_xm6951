import { Phone } from 'lucide-react'
import Section from './Section'

export default function Reservations() {
  return (
    <Section id="reservas" className="bg-slate-50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Reservas</h2>
          <p className="mt-4 text-slate-700">Las reservas se realizan exclusivamente por teléfono. Llámanos y estaremos encantados de ayudarte a elegir la mejor mesa.</p>
          <a href="tel:985256578" className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">
            <Phone size={18} /> Llamar ahora · 985 25 65 78
          </a>
          <p className="mt-4 text-sm text-slate-600">Horario: Martes a Domingo de 13:00 a 16:00 y de 20:00 a 24:00; lunes cerrado salvo festivos.</p>
        </div>

        <form className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Nombre</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Personas</label>
              <input type="number" min="1" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Fecha</label>
              <input type="date" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Hora</label>
              <input type="time" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Teléfono</label>
              <input type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Tu teléfono" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Comentarios</label>
              <textarea rows="3" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Alergias, peticiones especiales..."></textarea>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">Este formulario no confirma la reserva. Por favor, llama al 985 25 65 78 para asegurar tu mesa.</p>
          <button type="button" onClick={() => alert('Para confirmar, llámanos al 985 25 65 78')} className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition w-full">Enviar solicitud</button>
        </form>
      </div>
    </Section>
  )
}
