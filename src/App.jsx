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
    <BrowserRouter>
      {/* Komponen yang tampil di semua halaman */}
      <Navbar />
      <Routes>
        {/* Route untuk setiap halaman */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/ProPage" element={<ProPage />} />
        <Route path="/AboutProActive" element={<AboutProActive />} />
        <Route path="/FiturPage" element={<FiturPage />} />
        <Route path="/HariIni" element={<HariIni />} />
        <Route path="/TugasSelesai" element={<TugasSelesai />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifikasi" element={<Verifikasi />} />
      </Routes>
      {/* Komponen footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
