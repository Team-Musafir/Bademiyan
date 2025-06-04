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

function App() {
  return (
    <Router>
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
        <Route path="/tour/international" element={<InternationalTours />} />
        <Route path="/tour/island-of-india" element={<IslandOfIndia />} />
        <Route path="/tour/north-india" element={<NorthIndiaTours />} />
        <Route path="/tour/south-india" element={<SouthIndiaTours />} />
        <Route path="/tour/western-india" element={<WesternIndiaTours />} />
      </Routes>
    </Router>
  );
}

export default App;