import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/main.css'; // Ensure this path is correct
import sampleImage1 from '../assets/sample-image1.png'; 
import sampleImage2 from '../assets/sample-image2.png'; 
import sampleImage3 from '../assets/sample-image3.png'; 
import { FaBars, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Calendar from './Calander';

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSymptomsClick = () => {
    navigate('/aiscribe');
  };

  const slides = [
    {
      id: 1,
      title: 'REPORT YOUR SYMPTOMS',
      description: 'We will connect you with a doctor in a short while',
      image: sampleImage1,
      onClick: handleSymptomsClick
    },
    {
      id: 2,
      title: 'DELIVER MEDICINES HOME',
      description: 'Deliver medicines to your doorstep',
      image: sampleImage2,
      onClick: () => alert("Navigating to diagnosis page...")
    },
    {
      id: 3,
      title: 'PHARMACY NEAR ME',
      description: 'Find Pharmacies Near me',
      image: sampleImage3,
      onClick: () => alert("Navigating to follow-up page...")
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Auto-slide every 7 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="App">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
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

      <div className="slider-container">
        <FaArrowLeft className="slider-arrow left-arrow" onClick={goToPrevious} />
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`image-text-container ${index === currentIndex ? 'active' : ''}`}
            onClick={slide.onClick}
            style={{
              display: index === currentIndex ? 'flex' : 'none'
            }}
          >
            <div className="text-side">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <div className="image-side">
              <img src={slide.image} alt="Sample" />
            </div>
          </div>
        ))}
        <FaArrowRight className="slider-arrow right-arrow" onClick={goToNext} />
      </div>

      <div className="calendar-container">
        <h2>Book Your Appointment: AUGUST 2024</h2>
        <Calendar />
      </div>
    </div>
  );
}

export default Main;
