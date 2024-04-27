// ParticipantManagement.js

import React, { useState } from 'react';
import './ParticipantManagement.css'

function ParticipantManagement() {
  const [participants, setParticipants] = useState([]);

  // Function to handle participant registration
  const handleRegistration = (participantData) => {
    setParticipants([...participants, participantData]);
  };

  return (
    <div>
      <h2>Participant Management</h2>
      <form onSubmit={handleRegistration}>
        <label>Name:</label>
        <input type="text" />
        <button type="submit">Register</button>
      </form>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantManagement;
