import React, { useState } from "react";
import '../styles/daftar.css';

const Daftar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const illustrations = [
    "public/illustration1.png",
    "public/illustration2.png",
    "public/illustration3.png",
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => (prev + direction + illustrations.length) % illustrations.length);
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="carousel">
          <button className="arrow left-arrow" onClick={() => changeSlide(-1)}>
            &#10094;
          </button>
          {illustrations.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Illustration"
              className="illustration"
              style={{ display: currentSlide === index ? "block" : "none" }}
            />
          ))}
          <button className="arrow right-arrow" onClick={() => changeSlide(1)}>
            &#10095;
          </button>
        </div>
        <p className="description">
          Fitur to-do list yang sederhana namun kuat, ProActive mempermudah perencanaan harian hingga pengelolaan proyek besar.
        </p>
      </div>

      <div className="right-section">
        <div className="content">
          <div className="logo">
            <img src="public/logo.png" alt="ProActive Logo" />
          </div>
          <h1>Buat akun</h1>
          <p>Silahkan lengkapi data dibawah ini untuk membuat akun</p>

          <form id="daftar-form" action="masuk.html" method="post">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" name="nama" placeholder="Nama" />

            <label htmlFor="no-handphone">No. Handphone</label>
            <input type="tel" id="no-handphone" name="noHandphone" placeholder="No. Handphone" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" />

            <label htmlFor="konfirmasi-password">Konfirmasi Password</label>
            <input
              type="password"
              id="konfirmasi-password"
              name="konfirmasiPassword"
              placeholder="Konfirmasi Password"
            />

            <button type="submit" className="daftar-button">
              Daftar
            </button>

            <div className="separator">atau</div>

            <button type="button" className="google-login">
              <img src="/google-icon.png" alt="Google Icon" />
              Lanjutkan dengan Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
