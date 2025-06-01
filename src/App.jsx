import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
// import NotFound from './pages/NotFound'; 
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;