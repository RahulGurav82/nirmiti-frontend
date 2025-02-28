import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import HealthTips from './pages/HealthTips';
import FirstAid from './pages/FirstAid';
import Hospitals from './pages/Hospitals';
import LoginRegisterModal from './components/LoginRegisterModal'; // Import the modal
import './styles/App.css';
import Profile from './pages/Profile';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(true);

  // Close the modal when the user logs in or registers
  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {showAuthModal && (
          <LoginRegisterModal
            onClose={() => setShowAuthModal(false)}
            onAuthSuccess={handleAuthSuccess}
          />
        )}
      </div>
    </Router>
  );
}

export default App;