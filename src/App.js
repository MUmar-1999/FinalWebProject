import React from 'react';
import './App.css';
import Header from './components/Header';
import Prices from './components/Prices';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Sign from './components/Sign';
import SignUp from './components/SignUp';
import Addrv from './components/Addrv';
import Allrv from './components/Allrv';
import Edit from './components/Edit';


 function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Header />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Sign-in" element={<Sign />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/add" element={<Addrv />} />
          <Route path="/view" element={<Allrv />} />
          <Route path="/edit/:id" element={<Edit />} />
        
        </Routes>
      </Router>
  </div>
  );
}

export default App;