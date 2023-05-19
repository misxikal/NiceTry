import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './header'
import Header from './header';
import Information from './information';
import Afisha from './phisha';
import Profile from './Profile';
import Booking from './booking.jsx';
import Events from './events.jsx'
import Accessories from './accessories.jsx';
import Err from './404.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Afisha />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/Accessories" element={<Accessories/>} />
          <Route path="/Err" element={<Err/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;