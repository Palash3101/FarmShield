import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DiseaseDiagnosis.css';

function DiseaseDiagnosis() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/detect-disease/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  return (
    <div className="disease-diagnosis">
      <h1>Disease Diagnosis</h1>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Submit</button>
      {result && (
        <div>
          <h2>Result: {result.disease}</h2>
          <p>{result.recommendations}</p>
        </div>
      )}
    </div>
  );
}

export default DiseaseDiagnosis;
