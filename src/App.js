import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Countries from './countries';
import About from './about';
import Alert from './alert';
import Footer from './footer';
import logo from './assets/Logo.png';
import HomePage from './homePage';
import Contact from './contact';

function App() {
  return <div className='main'>
    <div>
      <Alert/>
      <Router>
        <div className='header'>
          <nav>
            <Link to ="/" className="navItem">Home</Link>
            <Link to ="/about" className="navItem">About us</Link>
            <Link to = "/countries" className="navItem">Search tour</Link>
            <Link to ="/contact" className="navItem">Contact</Link>
          </nav>
          <img src={logo} className='logo' alt='logo'/>
          <div className='icons'>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src='https://img.icons8.com/?size=100&id=60459&format=png&color=000000' className='iconH' alt='iconFB'/></a>
            <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src='https://img.icons8.com/?size=100&id=32292&format=png&color=000000'className='iconH' alt='iconInsta'/></a>
            <a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><img src='https://img.icons8.com/?size=100&id=16712&format=png&color=000000' className='iconH' alt='iconWA'/></a>
            <img src='https://img.icons8.com/?size=100&id=92&format=png&color=000000' className='iconH' alt='iconLink'/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/countries" element={<Countries/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  <Footer/>
  </div>
}

export default App;
