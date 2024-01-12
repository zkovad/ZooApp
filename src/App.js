import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tickets from './Tickets';
import Parking from './Parking';

function App() {
  return (
    <Router>
      <div>
        <nav style={styles.nav}>
          <ul>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/parking">Parking</Link>
            </li>
          </ul>
          <hr />
        </nav>

        <Routes>
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route path="/parking" element={<Parking/>} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  nav: {
    display: 'none'
  },  

  '@media only screen and (max-width: 600px)': {
    nav: {
      display: 'block'
    }
  }
}

export default App;
