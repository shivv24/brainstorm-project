// AdminDashboard.js

//import React, { useState, useEffect } from 'react';
import React from 'react';
import './AdminDashboard.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ParticipantManagement from './ParticipantManagement';
import TrainingSchedule from './TrainingSchedule';
//import AttendanceTracker from './AttendanceTracker';
import FeedbackManagement from './FeedbackManagement';
import ProgressTracker from './ProgressTracker';

function AdminDashboard() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/participants">Participant Management</Link>
            </li>
            <li>
              <Link to="/schedule">Training Schedule</Link>
            </li>
            <li>
              <Link to="/attendance">Attendance Tracker</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback Management</Link>
            </li>
            <li>
              <Link to="/progress">Progress Tracker</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/participants">
            <ParticipantManagement />
          </Route>
          <Route path="/schedule">
            <TrainingSchedule />
          </Route>
          <Route path="/feedback">
            <FeedbackManagement />
          </Route>
          <Route path="/progress">
            <ProgressTracker />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AdminDashboard;
