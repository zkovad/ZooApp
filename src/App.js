import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tickets from './components/Tickets';
import Parking from './components/Parking';
import styled from 'styled-components';
import MobileParking from './components/MobileParking';

const Nav = styled.nav`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const ParkingView = styled.div`
  display: block;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Nav>
          <MobileParking/>
        </Nav>

        <Routes>
          <Route exact path="/tickets" element={<Tickets/>} />
          <Route path="/parking" element={<ParkingView><Parking/></ParkingView>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
