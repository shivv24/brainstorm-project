// ProgressTracker.js

import React, { useState } from 'react';
import './ProgressTracker.css'

function ProgressTracker() {
  const [progress, setProgress] = useState([]);

  // Function to handle tracking progress
  const trackProgress = (progressData) => {
    setProgress([...progress, progressData]);
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <button onClick={() => trackProgress('Some progress data')}>Track Progress</button>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressTracker;
