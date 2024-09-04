import React, { useState } from 'react';
import '../styling/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: 'Nikkitha Muzawar Fathima ',
    age: 69,
    sex: 'Female',
    height: 175,
    weight: 70 ,
  });

  const [newHeight, setNewHeight] = useState('');
  const [newWeight, setNewWeight] = useState('');

  const updateProfile = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      height: newHeight ? parseInt(newHeight) : prevProfile.height,
      weight: newWeight ? parseInt(newWeight) : prevProfile.weight,
    }));

    setNewHeight('');
    setNewWeight('');
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="username">{profile.username}</h1>
        <div className="user-icon">
          <img src="https://via.placeholder.com/100" alt="User Icon" />
        </div>
      </div>
      <div className="profile-info">
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Sex:</strong> {profile.sex}</p>
        <p><strong>Height:</strong> {profile.height} cm</p>
        <p><strong>Weight:</strong> {profile.weight} kg</p>
      </div>
      <div className="input-section">
        <label htmlFor="new-height">Prescription:</label>
        <input
          type="text"
          id="new-height"
          value={newHeight}
          onChange={(e) => setNewHeight(e.target.value)}
          placeholder="Enter date of Prescription Issue"
        />

        <label htmlFor="new-weight">Medical Report:</label>
        <input
          type="text"
          id="new-weight"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          placeholder="Enter date of Medical Report Issue"
        />

        <button onClick={updateProfile}>Update Profile</button>
      </div>
    </div>
  );
};

export default Profile;
