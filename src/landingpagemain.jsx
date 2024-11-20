import React from 'react';
import Navbar from "./components/navbar.jsx";
import LandingPage from './components/landingpage.jsx';
import ProPage from './components/propage.jsx';
import AboutProActive from './components/aboutproactive.jsx';
import FiturPage from './components/fiturpage.jsx';
import Footer from './components/footer.jsx';

//ini buat manggil landing page//
function landingpagemain() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <ProPage />
      <AboutProActive />
      <FiturPage />
      <Footer />
    </div>
    
  );
}

export default landingpagemain;
