import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tickets from './Tickets';
import Parking from './Parking';
import styled from 'styled-components';

const Nav = styled.nav`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/parking">Parking</Link>
            </li>
          </ul>
        </Nav>

        <Routes>
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route path="/parking" element={<Parking/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
