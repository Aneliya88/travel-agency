import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SearchTour from './SearchTour';
import About from './About';
import Contact from './Contact';
import logo from './assets/Logo.png';
import iconFB from './assets/icons8-facebook-50.png';
import iconInsta from './assets/icons8-instagram-50.png';
import iconLink from './assets/icons8-link-50.png';
import iconWA from './assets/icons8-whatsapp-50.png';
import Alert from './Alert';
import HomePage from './homePage';
import Footer from './Footer';

function App() {
  return <div className='main'>
    <div>
      <Alert />
      <Router>
      <div className='header'>
        <nav>
          <Link className='navItem' to ="/SearchTour">Search Tour</Link>
          <Link className='navItem' to ="/About">About</Link>
          <Link className='navItem' to ="/Contact">Contact</Link>
          <Link className='navItem' to ="/HomePage">Home</Link>
        </nav>
        <img src={logo} className='logo' alt='logo'/>
        <div className='icons'>
          <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={iconFB} className='icon' alt='iconFB'/></a>
          <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><img src={iconInsta} className='icon' alt='iconInsta'/></a>
          <a href='https://www.whatsapp.com/' target='_blank' rel="noreferrer"><img src={iconWA} className='icon' alt='iconWA'/></a>
          <img src={iconLink} className='icon' alt='iconLink'/>
        </div>
        </div>
        <Routes>
          <Route path ="/SearchTour" element={<SearchTour/>}/>
          <Route path ="/About" element={<About/>}/>
          <Route path ="/Contact" element={<Contact/>}/>
          <Route path ="/HomePage" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
    <Footer/>
</div>
}
export default App;
