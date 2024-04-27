// AttendanceTracker.js

import React, { useState } from 'react';
import './AttendanecTracker.css'

function AttendanceTracker() {
  const [attendance, setAttendance] = useState([]);

  // Function to handle recording attendance
  const recordAttendance = (participantId) => {
    setAttendance([...attendance, { participantId, date: new Date() }]);
  };

  return (
    <div>
      <h2>Attendance Tracker</h2>
      <button onClick={() => recordAttendance(1)}>Record Attendance</button>
      <ul>
        {attendance.map((record, index) => (
          <li key={index}>
            Participant ID: {record.participantId} - Date: {record.date.toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceTracker;
