import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HariIni from './pages/HariIni';
import TugasSelesai from './pages/TugasSelesai';
import Login from './pages/masuk';
import Daftar from './pages/daftar';
import ForgotPassword from './pages/forgot_password';
import Verifikasi from './pages/verifikasi';

function App() {
  return (
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
