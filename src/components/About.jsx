import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"/>
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Sobre nosotros</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">Desde 1995, Salvatore Bellavista ha compartido su pasión por la cocina italiana en Oviedo. Nuestra filosofía combina recetas tradicionales con técnicas artesanas, poniendo en valor el producto de calidad, las masas de fermentación lenta y las salsas elaboradas a fuego suave.</p>
          <p className="mt-4 text-slate-700 leading-relaxed">En Salvatore encontrarás un ambiente cercano y elegante, donde cada plato está pensado para disfrutar sin prisas: antipasti clásicos, pastas frescas, pizzas de horno y postres caseros.</p>
        </div>
      </div>
    </Section>
  )
}
