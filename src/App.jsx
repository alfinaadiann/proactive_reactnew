import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HariIni from './pages/HariIni';
import TugasSelesai from './pages/TugasSelesai';
import Kolaborasi from './pages/Kolaborasi';
import Mendatang from './pages/Mendatang';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HariIni" element={<HariIni />} />
        <Route path="/TugasSelesai" element={<TugasSelesai />} />
        <Route path="/Kolaborasi" element={<Kolaborasi />} />
        <Route path="/Mendatang" element={<Mendatang />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;