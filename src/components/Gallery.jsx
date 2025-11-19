import Section from './Section'

const images = [
  'https://images.unsplash.com/photo-1548369946-840fb4dc9f09?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541976076758-347942db197d?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541438632-bb322f84dc85?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=2070&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <Section id="galeria" className="bg-white">
      <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Galería</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg shadow">
            <img src={src} alt="Restaurante Salvatore" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </Section>
  )
}
