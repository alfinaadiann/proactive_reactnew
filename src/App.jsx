import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HariIni from './pages/HariIni';
import TugasSelesai from './pages/TugasSelesai';
import Login from './pages/masuk';
import Daftar from './pages/daftar';
import ForgotPassword from './pages/forgot_password';
import Verifikasi from './pages/verifikasi';
import Kalender from './pages/Kalender';
import Kolaborasi from './pages/Kolaborasi';
import Mendatang from './pages/Mendatang';

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
      </Routes>
      {/* Komponen footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
