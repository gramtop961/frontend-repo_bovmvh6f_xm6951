import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import Reservations from './components/Reservations'
import Location from './components/Location'
import Footer from './components/Footer'
import FX from './components/FX'

function App() {
  return (
    <div className="font-[var(--font-manrope)] bg-white text-slate-900">
      <FX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Reservations />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
