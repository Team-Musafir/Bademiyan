import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Tours from './pages/Tours';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import IncredibleOdishaTour from './pages/tourpages/IncredibleOdisha';
import NorthBengalTour from './pages/tourpages/NorthBengalSikkim';
import InternationalTours from './pages/tourpages/InternationalTours';
import IslandOfIndia from './pages/tourpages/IslandOfIndia';
import NorthIndiaTours from './pages/tourpages/NorthIndiaTours';
import SouthIndiaTours from './pages/tourpages/SouthIndiaTours';
import WesternIndiaTours from './pages/tourpages/WesternIndiaTours';
import ScrollToTop from './components/ScrolltoTop';
import DestinationPage from './pages/IncredibleOdisha';
import NorthBengalSikkim from './pages/NorthBengalSikkim';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour/incredible-odisha" element={<IncredibleOdishaTour />} />
        <Route path="/tour/north-bengal-sikkim" element={<NorthBengalTour />} />
        <Route path="/tour/international-tours" element={<InternationalTours />} />
        <Route path="/tour/island-of-india" element={<IslandOfIndia />} />
        <Route path="/tour/north-india" element={<NorthIndiaTours />} />
        <Route path="/tour/south-india" element={<SouthIndiaTours />} />
        <Route path="/tour/western-india" element={<WesternIndiaTours />} />
        <Route path="/tour/incredible-odisha/:packageRoute" element={<DestinationPage />} />
        <Route path="/tour/north-bengal-sikkim/:packageRoute" element={<NorthBengalSikkim />} />
        {/* from here needed change for alll */}
        <Route path="/tour/international-tours/:packageRoute" element={<DestinationPage />} />
        <Route path="/tour/island-of-india/:packageRoute" element={<DestinationPage />} />
        <Route path="/tour/north-india/:packageRoute" element={<DestinationPage />} />
        <Route path="/tour/south-india/:packageRoute" element={<DestinationPage />} />
        <Route path="/tour/western-india/:packageRoute" element={<DestinationPage />} />
      </Routes>
    </Router>
  );
}

export default App;