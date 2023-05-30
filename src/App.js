import React from 'react';
import Home from './components/pages/Home';
import Navbar from "./components/Navbar";
import AboutMe from './components/pages/Aboutme';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Bookappt from './components/pages/Bookappt.js';
import './App.css'
import Hero from './components/Hero.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <>
     <div className="container">
      <div className="content">
  <Router>
    <Link className="link-style" to= "/">
  <h1 >JessBlinks</h1>
    </Link>
      <Navbar/>
     <Routes>

   {/* <Route path="/" component={Home} /> */}
   <Route path = '/AboutMe' element = {<AboutMe/>} />
   <Route path = '/Services' element = {<Services/>} />
   <Route path = '/appointment' element = {<Bookappt/>} />
    <Route path = '/Gallery' element= {<Slideshow/>} />
    <Route path="*" element={<Home />} />
      </Routes>
      </Router>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
