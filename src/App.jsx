import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import InternationalPackage from './pages/endpage/BhutanTour';
import NorthEastIndiaTrips from './pages/endpage/NorthEastIndiaTours';
import DestinationPage from './pages/endpage/IncredibleOdisha';

import HimalchalTour from './pages/endpage/HimachalTour';
import UttarPradeshTour from './pages/endpage/UttarPradesh';

import FloatingEnquiryButton from './components/FloatingEnquiryButton';
import Hp from './pages/Himachal/Himachal';
import Up from './pages/UttarPradesh/Uttarpradesh';
import Kashmir from './pages/endpage/Kashmir';
import KashmirTrip from './pages/kashmir/Kashmir';
import Rajasthan from './pages/endpage/Rajasthan';
import RajasthanTrip from './pages/Rajasthan/Rajasthan';
import Kerala from './pages/endpage/Kerala';
import KeralaTour from './pages/Kerala/KeralaTour';
import Bhutan from './pages/Bhutan/Bhutan';
import BhutanTour from './pages/endpage/BhutanTour';
import FloatingSocialLinks from './components/FloatingSocialLinks';

// Component to conditionally render FloatingSocialLinks
const ConditionalFloatingSocialLinks = () => {
  const location = useLocation();
  return location.pathname === '/' ? <FloatingSocialLinks /> : null;
};

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

        {/* parent pages */}
        <Route path="/tours/incredible-odisha" element={<IncredibleOdishaTour />} />
        <Route path="/tours/north-bengal-sikkim" element={<NorthBengalTour />} />
        <Route path="/tours/island-of-india" element={<IslandOfIndia />} />
        <Route path="/tours/north-india" element={<NorthIndiaTours />} />
        <Route path="/tours/south-india" element={<SouthIndiaTours />} />
        <Route path="/tours/western-india" element={<WesternIndiaTours />} />
        <Route path="/tours/pilgrimage-tours" element={<PilgrimageTours />} />
        <Route path="/tours/north-east-india-tours" element={<NorthEastIndiaTours />} />
        <Route path="/tours/heritage-tours" element={<HeritageTours />} />
        <Route path="/tours/adventure-tours" element={<AdventureTours />} />

        {/* internal pages */}
        <Route path="/tours/incredible-odisha/:packageRoute" element={<DestinationPage />} />
        <Route path="/tours/northeast-india/:packageRoute" element={<NorthEastIndiaTrips />} />
        <Route path="/tours/north-bengal-sikkim/:packageRoute" element={<NorthBengalSikkim />} />
        <Route path="/tours/island-of-india/:packageRoute" element={<IslandPackage />} />

        {/* international tours */}
        <Route path="/tours/international-tours" element={<InternationalTours />} />
        <Route path="/tours/international-tours/bhutan" element={<BhutanTour/>} />
        <Route path="/tours/international-tours/bhutan/:packageRoute" element={<Bhutan/>} />

        {/* north india */}
        <Route path="/tours/north-india/himachal-pradesh" element={<HimalchalTour />} />
        <Route path="/tours/north-india/uttar-pradesh" element={<UttarPradeshTour />} />
        <Route path="/tours/north-india/kashmir" element={<Kashmir />} />
        <Route path="/tours/north-india/himachal-pradesh/:packageRoute" element={<Hp />} />
        <Route path="/tours/north-india/uttar-pradesh/:packageRoute" element={<Up />} />
        <Route path="/tours/north-india/kashmir/:packageRoute" element={<KashmirTrip/>} />
        <Route path="/tours/north-india/leh-ladakh" element={<HimalchalTour />} />

        {/* rajasthan */}
        <Route path="/tours/western-india/rajasthan" element={<Rajasthan/>} />
        <Route path="/tours/western-india/rajasthan/:packageRoute" element={<RajasthanTrip/>} />

        {/* kerala */}
        <Route path="/tours/south-india/kerala" element={<Kerala/>} />
        <Route path="/tours/south-india/kerala/:packageRoute" element={<KeralaTour/>} />
      </Routes>
      
      <FloatingEnquiryButton />
      <ConditionalFloatingSocialLinks />
    </Router>
  );
}

export default App;