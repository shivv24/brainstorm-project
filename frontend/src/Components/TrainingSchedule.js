// TrainingSchedule.js

import React, { useState } from 'react';
import './TrainingSchedule.css'

function TrainingSchedule() {
  const [schedule, setSchedule] = useState([]);

  // Function to handle adding a new training session
  const addSession = (sessionData) => {
    setSchedule([...schedule, sessionData]);
  };

  return (
    <div>
      <h2>Training Schedule</h2>
      <button onClick={() => addSession({ date: new Date(), topic: 'Topic', location: 'Location' })}>Add Session</button>
      <ul>
        {schedule.map((session, index) => (
          <li key={index}>
            {session.date.toLocaleDateString()} - {session.topic} - {session.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainingSchedule;
