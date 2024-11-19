import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import ProPage from './components/propage';
import AboutProActive from './components/aboutproactive';
import FiturPage from './components/fiturpage';
import Footer from './components/footer';
import HariIni from './pages/HariIni';
import TugasSelesai from './pages/TugasSelesai';

function App() {
  return (
    <div>
    
      <Navbar />
      <LandingPage />
      <ProPage />
      <AboutProActive />
      <FiturPage />
      <Footer />
    </div>
    
    <BrowserRouter>
      <Routes>
        <Route path="/HariIni" element={<HariIni />} />
        <Route path="/TugasSelesai" element={<TugasSelesai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;