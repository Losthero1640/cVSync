import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMission from './components/AboutMission';
import Footer from './components/Footer';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Herosection from './components/Herosection';
import EventDetails from './components/EventDetails';
import Services from './components/Services';
import Auth from './components/Auth';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Herosection />} />
        <Route path="/about" element={<AboutMission />} />
        <Route path="/events" element={<EventDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<Auth />} />
        {/* Fallback Route */}
        <Route path="*" element={<Herosection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


// return (
//   <div className="homepage">
//     {/* Header Section */}
//     <div className="header-container">
//       <Header />
//       <div className="auth-button">
//         <Link to="/auth" className="auth-link">Sign Up / Sign In</Link>
//       </div>
//     </div>

//     {/* Hero Section */}
//     <HeroSection />

//     {/* About Mission Section */}
//     <AboutMission />

//     {/* Event Details Section */}
//     <EventDetails />

//     {/* Testimonials Section */}
//     <Testimonials />

//     {/* Footer Section */}
//     <Footer />
//   </div>
// );
