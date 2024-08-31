import React, { useState } from 'react';
import './AiScribe.css'; // Make sure to create this CSS file for styling

function AiScribe() {
  const [symptoms, setSymptoms] = useState('');

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Symptoms:', symptoms);
  };

  return (
    <div className="ai-scribe-container">
      <h1>AI Scribe</h1>
      <textarea
        placeholder="Enter your symptoms"
        className="symptoms-input"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button className="appointment-button" onClick={handleButtonClick}>
        Find me an appointment
      </button>
    </div>
  );
}

export default AiScribe;
