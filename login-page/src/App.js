import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import AiScribe from './AiScribe'; // Import the AiScribe component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aiscribe" element={<AiScribe />} />
      </Routes>
    </Router>
  );
}

export default App;
