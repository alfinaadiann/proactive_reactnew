import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HariIni from './pages/HariIni';
import TugasSelesai from './pages/TugasSelesai';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HariIni" element={<HariIni />} />
        <Route path="/TugasSelesai" element={<TugasSelesai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;