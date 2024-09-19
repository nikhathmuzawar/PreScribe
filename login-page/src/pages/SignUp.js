import React, { useState } from 'react';
import '../styling/SignUp.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    sex: '',
    height: '',
    allergies: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Properly initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.age) formErrors.age = 'Age is required';
    if (!formData.weight) formErrors.weight = 'Weight is required';
    if (!formData.sex) formErrors.sex = 'Sex is required';
    if (!formData.height) formErrors.height = 'Height is required';
    if (!formData.termsAccepted) formErrors.termsAccepted = 'You must accept the terms and conditions';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      navigate('/main'); // Navigate after successful validation
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        {errors.weight && <p className="error">{errors.weight}</p>}

        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.sex && <p className="error">{errors.sex}</p>}

        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        {errors.height && <p className="error">{errors.height}</p>}

        <label htmlFor="allergies">Mention Any Allergies (if any):</label>
        <input
          type="text"
          id="allergies"
          name="weight"
          value={formData.allergies}
          onChange={handleChange}
        />

        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}

        <button type="submit">Sign Up</button> 
      </form>
    </div>
  );
}

export default App;
