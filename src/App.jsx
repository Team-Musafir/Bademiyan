import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TravelPackages from './components/Packages'
import Highlights from './components/Highlights'
import JourneyBanner from './components/Journey'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TravelPackages/>
      <Highlights/>
      <JourneyBanner/>
    </main>
  )
}

export default App