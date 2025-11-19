import Section from './Section'

const menu = {
  Antipasti: [
    { name: 'Bruschetta al pomodoro', desc: 'Pan rústico con tomate, ajo y albahaca', price: '6,50€' },
    { name: 'Caprese', desc: 'Mozzarella fresca, tomate y albahaca', price: '9,50€' },
    { name: 'Carpaccio di manzo', desc: 'Ternera laminada, rúcula y parmesano', price: '12,90€' },
  ],
  Pizzas: [
    { name: 'Margherita', desc: 'Tomate, mozzarella y albahaca', price: '9,50€' },
    { name: 'Prosciutto e funghi', desc: 'Jamón cocido y champiñón', price: '11,50€' },
    { name: 'Diavola', desc: 'Salami picante y mozzarella', price: '11,90€' },
    { name: 'Quattro formaggi', desc: 'Mozzarella, gorgonzola, parmesano y provolone', price: '12,50€' },
  ],
  Pastas: [
    { name: 'Spaghetti alla carbonara', desc: 'Receta tradicional romana', price: '12,90€' },
    { name: 'Tagliatelle alla bolognese', desc: 'Ragú de ternera y cerdo', price: '12,50€' },
    { name: 'Penne all’arrabbiata', desc: 'Salsa de tomate picante', price: '10,90€' },
    { name: 'Ravioli ricotta e spinaci', desc: 'Mantequilla y salvia', price: '13,90€' },
  ],
  Postres: [
    { name: 'Tiramisù', desc: 'Clásico de café y mascarpone', price: '6,50€' },
    { name: 'Panna cotta', desc: 'Con coulis de frutos rojos', price: '5,90€' },
    { name: 'Gelato artigianale', desc: 'Selección de sabores', price: '4,90€' },
  ],
}

export default function MenuSection() {
  return (
    <Section id="carta" className="bg-slate-50">
      <div className="flex items-end justify-between">
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Nuestra carta</h2>
        <a href="#" className="text-slate-600 hover:text-slate-900 underline/50">Descargar carta (PDF)</a>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-12">
        {Object.entries(menu).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-serif text-2xl text-slate-900">{category}</h3>
            <div className="mt-4 divide-y divide-slate-200">
              {items.map((item) => (
                <div key={item.name} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <span className="text-slate-700">{item.price}</span>
                  </div>
                  <p className="text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-600">Los precios y platos pueden variar. Para consultar la carta actualizada, contacta con el restaurante.</p>
    </Section>
  )
}
