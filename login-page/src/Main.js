import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './main.css';
import sampleImage from './assets/sample-image.png'; 
import { FaBars } from 'react-icons/fa'; 
import Calendar from './Calander'; 

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSymptomsClick = () => {
    navigate('/aiscribe'); // Navigate to AiScribe page
  };

  return (
    <div className="App">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars/>
      </div>
      {menuOpen && (
        <div className="utilities-menu">
          <ul>
            <li>Profile</li>
            <li>Pharmacy's Near Me</li>
            <li>Hospital's Near Me</li>
            <li>Medicine Delivery</li>
            <li>First Aid</li>
          </ul>
        </div>
      )}
      
      <div className="image-text-container" onClick={handleSymptomsClick}>
        <div className="text-side">
          <h2>REPORT YOUR SYMPTOMS</h2>
          <p>We will connect you with a doctor in a short while</p>
        </div>
        <div className="image-side">
          <img src={sampleImage} alt="Sample" />
        </div>
      </div>

      {/* Container 2: Static Calendar with Utilities Menu */}
      <div className="calendar-container">
        <h2> Book Your Appointment: AUGUST 2024 </h2>
        <Calendar />
      </div>
    </div>
  );
}

export default Main;
