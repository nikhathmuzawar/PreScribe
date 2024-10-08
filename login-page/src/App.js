import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/slider';
import AiScribe from './pages/AiScribe';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Doc from './pages/Doc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aiscribe" element={<AiScribe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Doc" element={<Doc />} />
      </Routes>
    </Router>
  );
}

export default App;
