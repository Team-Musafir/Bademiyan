import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TravelPackages from './components/Packages'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TravelPackages/>
      <Footer />
    </main>
  )
}

export default App