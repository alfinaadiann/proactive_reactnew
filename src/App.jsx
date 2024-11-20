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
import LandingPage from './landingpagemain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HariIni" element={<HariIni />} />
        <Route path="/TugasSelesai" element={<TugasSelesai />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Verifikasi" element={<Verifikasi />} />
        <Route path="/Kalender" element={<Kalender />} />
        <Route path="/Kolaborasi" element={<Kolaborasi />} />
        <Route path="/Mendatang" element={<Mendatang/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
