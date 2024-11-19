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
import Login from './pages/masuk';
import Daftar from './pages/daftar';
import ForgotPassword from './pages/forgot_password';
import Verifikasi from './pages/verifikasi';

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
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifikasi" element={<Verifikasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
