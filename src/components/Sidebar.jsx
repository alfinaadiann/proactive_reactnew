import "../styles/Sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        alt="User Profile Picture"
        height="80"
        src="https://i.pinimg.com/564x/d7/d0/13/d7d013aa4c1ee9bc96fc8ee329467d34.jpg"
        width="80"
      />
      <h2>Profil Saya</h2>
      <NavLink to="/HariIni"><i className="fas fa-calendar-day"></i> Hari Ini</NavLink>
      <a href="mendatang.html"><i className="fas fa-calendar-alt"></i> Mendatang</a>
      <NavLink to="/TugasSelesai"><i className="fas fa-check"></i> Tugas Selesai</NavLink>
      <a href="#"><i className="fas fa-calendar"></i> Kalender</a>
      <a href="pomodoro.html"><i className="fas fa-clock"></i> Waktu</a>
      <a href="kolaborasi.html"><i className="fas fa-users"></i> Kolaborasi</a>
    </div>
  );
};

export default Sidebar;