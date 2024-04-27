// FeedbackManagement.js

import React, { useState } from 'react';
import './FeedbackManagement.css'

function FeedbackManagement() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Function to handle collecting feedback
  const collectFeedback = (feedbackData) => {
    setFeedbacks([...feedbacks, feedbackData]);
  };

  return (
    <div>
      <h2>Feedback Management</h2>
      <form onSubmit={collectFeedback}>
        <label>Feedback:</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>{feedback}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackManagement;
