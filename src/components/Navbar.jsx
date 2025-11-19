import { useState } from 'react'
import { Menu, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#sobre', label: 'Sobre nosotros' },
    { href: '#carta', label: 'Nuestra carta' },
    { href: '#galeria', label: 'Galería' },
    { href: '#reservas', label: 'Reservas' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-2xl tracking-wide text-slate-900">Salvatore</a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">{item.label}</a>
            ))}
            <a href="#reservas" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
              <Phone size={18} /> Reservar mesa
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="block px-2 py-2 rounded hover:bg-slate-100">{item.label}</a>
            ))}
            <a href="#reservas" className="block px-2 py-2 rounded bg-slate-900 text-white text-center">Reservar mesa</a>
          </div>
        )}
      </div>
    </header>
  )
}
