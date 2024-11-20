import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/daftar.css';

const Daftar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const descriptions = [
    "fitur to-do list yang sederhana namun kuat, ProActive mempermudah perencanaan harian hingga pengelolaan proyek besar.",
    "To-do list yang praktis namun bertenaga, ProActive memudahkan pengelolaan dari tugas harian hingga manajemen proyek kompleks.",
    "Dengan fitur to-do list yang intuitif namun andal, ProActive memfasilitasi perencanaan dari aktivitas sehari-hari hingga pengelolaan proyek besar.",
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + descriptions.length) % descriptions.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <div className="pagedaftar">
      <div className="left-section">
        <div className="carousel">
          <button className="arrow left-arrow" onClick={() => changeSlide(-1)}>
            &#10094;
          </button>
          <img src="/img/illustration1.png" alt="Illustration" style={{ display: currentSlide === 0 ? "block" : "none", width: "70%" }} />
          <img src="/img/illustration2.png" alt="Illustration" style={{ display: currentSlide === 1 ? "block" : "none", width: "70%" }} />
          <img src="/img/illustration3.png" alt="Illustration" style={{ display: currentSlide === 2 ? "block" : "none", width: "70%" }} />
          <button className="arrow right-arrow" onClick={() => changeSlide(1)}>
            &#10095;
          </button>
        </div>
        <p className="description">{descriptions[currentSlide]}</p>
      </div>

      <div className="right-section">
        <div className="content">
          <h1 style={{ marginTop: "-30px" }}>Buat akun</h1>
          <p>Silahkan lengkapi data dibawah ini untuk membuat akun</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" name="nama" placeholder="Nama" required />

            <label htmlFor="no-handphone">No.Handphone</label>
            <input type="tel" id="no-handphone" name="noHandphone" placeholder="No.Handphone" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />

            <label htmlFor="konfirmasi-password">Konfirmasi Password</label>
            <input type="password" id="konfirmasi-password" name="konfirmasiPassword" placeholder="Password" required />

            <button type="submit" className="daftar-button">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
