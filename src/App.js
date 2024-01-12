import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tickets from './Tickets';
import Parking from './Parking';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/parking">Parking</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route path="/parking" element={<Parking/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
