import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Tours from './pages/Tours';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import TourPage from './pages/TourPages';

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
        <Route path="/tour/:tourSlug" element={<TourPage />} />
      </Routes>
    </Router>
  );
}

export default App;