import React, { useState } from 'react';
import '../styling/AiScribe.css'; // Ensure this file exists with appropriate styling

function AiScribe() {
  const [symptoms, setSymptoms] = useState('');
  const [summary, setSummary] = useState([]);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
      });

      if (!response.ok) {
        throw new Error('Failed to summarize symptoms');
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error('Error:', error);
    }
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
      {summary.length > 0 && (
        <div className="summary-output">
          <h2>Summary</h2>
          <ul>
            {summary.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AiScribe;
