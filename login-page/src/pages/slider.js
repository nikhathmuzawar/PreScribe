import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/main.css';
import { FaBars } from 'react-icons/fa';
import Calendar from './Calander';

import sampleImage1 from '../assets/sample-image1.png';
import sampleImage2 from '../assets/sample-image2.png';
import sampleImage3 from '../assets/sample-image3.png';
import '../styling/slider.css';

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSymptomsClick = () => {
    navigate('/aiscribe');
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const containers = [
    {
      title: "REPORT YOUR SYMPTOMS",
      description: "We will connect you with a doctor in a short while",
      image: sampleImage1,
      handleClick: handleSymptomsClick,
    },
    {
      title: "DELIVER MEDICINES HOME",
      description: "Get all your meds delivered right to your doorstep",
      image: sampleImage2,
      handleClick: () => alert('Find a Doctor Clicked'),
    },
    {
      title: "PHARMACY'S NEAR ME",
      description: "Find all the Pharmacy's near you!",
      image: sampleImage3,
      handleClick: () => alert('Book an Appointment Clicked'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [containers.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + containers.length) % containers.length);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the Profile page
  };

  return (
    <div className="App">
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      {menuOpen && (
        <div className="utilities-menu">
          <ul>
            <li onClick={handleProfileClick}>Profile</li>
            <li>Pharmacy's Near Me</li>
            <li>Hospital's Near Me</li>
            <li>Medicine Delivery</li>
            <li>First Aid</li>
          </ul>
        </div>
      )}
      <div className="slideshow-container">
        <div className="image-text-container" onClick={containers[currentIndex].handleClick}>
          <div className="text-side">
            <h2>{containers[currentIndex].title}</h2>
            <p>{containers[currentIndex].description}</p>
          </div>
          <div className="image-side">
            <img src={containers[currentIndex].image} alt={containers[currentIndex].title} />
          </div>
        </div>
        <button className="nav prev" onClick={handlePrev}>&#10094;</button>
        <button className="nav next" onClick={handleNext}>&#10095;</button>
      </div>

      <div className="calendar-container">
        <h1>Book Your Appointment: AUGUST 2024</h1>
        <Calendar />
      </div>
    </div>
  );
}

export default Main;
