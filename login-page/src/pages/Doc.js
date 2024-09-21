import React, { useState } from 'react';
import '../styling/Doc.css';

function App() {
  const [patients, setPatients] = useState([
    { name: "YAMADA TAN JIN", age: 26, sex: "Male", appointmentDate: "04-10-2024" },
    { name: "ELLIPSA SANDERS", age: 25, sex: "Female", appointmentDate: "07-10-2024" },
    { name: "AREANA GREY", age: 40, sex: "Female", appointmentDate: "10-10-2024" }
  ]);

  const [newPatient, setNewPatient] = useState({ name: "", age: "", sex: "", appointmentDate: "" });

  const addPatient = () => {
    if (newPatient.name.trim() && newPatient.age.trim() && newPatient.sex.trim() && newPatient.appointmentDate.trim()) {
      setPatients([...patients, newPatient]);
      setNewPatient({ name: "", age: "", sex: "", appointmentDate: "" });
    }
  };

  const removePatient = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Doctor's Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Appointments</li>
          <li>Settings</li>
        </ul>
      </aside>

      <div className="main-content">
        <h1>Patient List</h1>

        {/* Add Patient Form */}
        <div className="form-container">
          <h2>Add New Patient</h2>
          <input
            type="text"
            placeholder="Patient's Name"
            value={newPatient.name}
            onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Age"
            value={newPatient.age}
            onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sex"
            value={newPatient.sex}
            onChange={(e) => setNewPatient({ ...newPatient, sex: e.target.value })}
          />
          <input
            type="date"
            value={newPatient.appointmentDate}
            onChange={(e) => setNewPatient({ ...newPatient, appointmentDate: e.target.value })}
          />
          <button onClick={addPatient}>Add Patient</button>
        </div>

        {/* Patient List */}
        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Date of Appointment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.sex}</td>
                <td>{patient.appointmentDate}</td>
                <td>
                  <button className="delete-button" onClick={() => removePatient(index)}>
                    Diagnosed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
