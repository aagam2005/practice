import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [details, setDetails] = useState('');
  const [resume, setResume] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate', { details });
      setResume(response.data.resume);
    } catch (error) {
      console.error('Error generating resume:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>AI-Powered Resume Builder</h1>
      <textarea
        placeholder="Enter your details here..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        style={{ width: '80%', height: '100px', margin: '10px 0' }}
      ></textarea>
      <br />
      <button onClick={handleGenerate} style={{ padding: '10px 20px' }}>Generate Resume</button>
      <div style={{ marginTop: '20px' }}>
        <h2>Your Resume:</h2>
        <pre style={{ textAlign: 'left', margin: 'auto', width: '80%', background: '#f4f4f4', padding: '10px' }}>
          {resume}
        </pre>
      </div>
    </div>
  );
}

export default App;

