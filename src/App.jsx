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
import PilgrimageTours from './pages/tourpages/PilgrimageTours';
import NorthIndiaTours from './pages/tourpages/NorthIndiaTours';
import SouthIndiaTours from './pages/tourpages/SouthIndiaTours';
import WesternIndiaTours from './pages/tourpages/WesternIndiaTours';
import NorthEastIndiaTours from './pages/tourpages/NorthEastIndiaTours';
import HeritageTours from './pages/tourpages/HeritageTours';
import AdventureTours from './pages/tourpages/AdventureTours';


import ScrollToTop from './components/ScrolltoTop';

import NorthBengalSikkim from './pages/endpage/NorthBengalSikkim';
import IslandPackage from './pages/endpage/IslandOfIndia';
import InternationalPackage from './pages/endpage/InternationalTours';
import NorthIndiaPackage from './pages/endpage/NorthIndiaTours';
import WesternIndiaPackage from './pages/endpage/WesternIndiaTours';
import SouthIndiaTrips from './pages/endpage/SouthIndiaTours';
import NorthEastIndiaTrips from './pages/endpage/NorthEastIndiaTours';
import DestinationPage from './pages/endpage/IncredibleOdisha';

import FloatingEnquiryButton from './components/FloatingEnquiryButton';

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

        // parent page

        <Route path="/tours/incredible-odisha" element={<IncredibleOdishaTour />} />
        <Route path="/tours/north-bengal-sikkim" element={<NorthBengalTour />} />
        <Route path="/tours/international-tours" element={<InternationalTours />} />
        <Route path="/tours/island-of-india" element={<IslandOfIndia />} />
        <Route path="/tours/north-india" element={<NorthIndiaTours />} />
        <Route path="/tours/south-india" element={<SouthIndiaTours />} />
        <Route path="/tours/western-india" element={<WesternIndiaTours />} />
        <Route path="/tours/pilgrimage-tours" element={<PilgrimageTours />} />
        <Route path="/tours/north-east-india-tours" element={<NorthEastIndiaTours />} />
        <Route path="/tours/heritage-tours" element={<HeritageTours />} />
        <Route path="/tours/adventure-tours" element={<AdventureTours />} />

        
        //INternal page
        <Route path="/tours/incredible-odisha/:packageRoute" element={<DestinationPage/>} />
        <Route path="/tours/northeast-india/:packageRoute" element={<NorthEastIndiaTrips/>} />
        <Route path="/tours/north-bengal-sikkim/:packageRoute" element={<NorthBengalSikkim />} />
        <Route path="/tours/island-of-india/:packageRoute" element={<IslandPackage/>} />
        <Route path="/tours/international-tours/:packageRoute" element={<InternationalPackage/>} />
        <Route path="/tours/north-india/:packageRoute" element={<NorthIndiaPackage/>} />
        <Route path="/tours/western-india/:packageRoute" element={<WesternIndiaPackage/>} />
        <Route path="/tours/south-india/:packageRoute" element={<SouthIndiaTrips/>} />
      </Routes>
       <FloatingEnquiryButton />
    </Router>
  );
}

export default App;