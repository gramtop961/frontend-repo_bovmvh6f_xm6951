import Section from './Section'

export default function Location() {
  return (
    <Section id="ubicacion" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Dónde estamos</h2>
          <p className="mt-4 text-slate-700">C/ Miguel Ángel Blanco, 26, 33013 Oviedo</p>
          <p className="mt-1 text-slate-700">Teléfono: 985 25 65 78</p>
          <p className="mt-1 text-slate-700">Correo: info@restaurantesalvatore.es</p>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-50 transition">
            <a href="https://maps.google.com/?q=C/+Miguel+Ángel+Blanco,+26,+Oviedo" target="_blank" rel="noreferrer" className="text-slate-900">Abrir en Google Maps</a>
          </div>
        </div>
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
          <iframe
            title="Ubicación Salvatore Oviedo"
            src="https://www.google.com/maps?q=Calle+Miguel+Ángel+Blanco+26,+Oviedo&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
