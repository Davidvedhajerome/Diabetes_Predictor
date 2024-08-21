import axios from 'axios';
import React, { useState } from 'react';
import './Diabetes.css';

function Diabetes() {
  const [formData, setFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''
  });

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:5000/predict', formData)
      .then(response => {
        setResult(response.data.message);
        setError('');
        setSubmitted(true); 
      })
      .catch(error => {
        const errorMsg = error.response?.data?.error || 'Failed to get prediction. Please try again.';
        setError(errorMsg);
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h3>Diabetes Prediction</h3>
      
      {}
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="Pregnancies"
            value={formData.Pregnancies}
            onChange={handleChange}
            placeholder="Number of Pregnancies"
            required
          />
          <input
            type="number"
            name="Glucose"
            value={formData.Glucose}
            onChange={handleChange}
            placeholder="Glucose Level"
            required
          />
          <input
            type="number"
            name="BloodPressure"
            value={formData.BloodPressure}
            onChange={handleChange}
            placeholder="Blood Pressure"
            required
          />
          <input
            type="number"
            name="SkinThickness"
            value={formData.SkinThickness}
            onChange={handleChange}
            placeholder="Skin Thickness"
            required
          />
          <input
            type="number"
            name="Insulin"
            value={formData.Insulin}
            onChange={handleChange}
            placeholder="Insulin Level"
            required
          />
          <input
            type="number"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
            placeholder="BMI"
            required
          />
          <input
            type="number"
            name="DiabetesPedigreeFunction"
            value={formData.DiabetesPedigreeFunction}
            onChange={handleChange}
            placeholder="Diabetes Pedigree Function"
            required
          />
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {(result || error) && (
        <div className={result ? "result" : "error"}>
          <h3>Prediction Result</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{result || error}</p>
        </div>
      )}
    </div>
  );
}

export default Diabetes;
