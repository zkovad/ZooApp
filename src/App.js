import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tickets from './Tickets';
import Parking from './Parking';

function App() {
  return (
    <Router>
      <div>


        
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
    visibility: 'collapse'
  },  

  '@media only screen and (max-width: 600px)': {
    nav: {
      visibility: 'visible'
    }
  }
}

export default App;
