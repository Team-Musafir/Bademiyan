import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TravelPackages from './components/Packages'
import Highlights from './components/Highlights'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TravelPackages/>
      <Highlights/>
    </main>
  )
}

export default App