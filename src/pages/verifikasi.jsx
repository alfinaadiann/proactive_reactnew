import React from "react";
import "./daftar.css"; // Gunakan CSS yang sama untuk menyamakan tampilan

const Verifikasi = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk verifikasi kode
    alert("Kode berhasil dikirim!");
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="carousel">
          <button className="arrow left-arrow" onClick={() => alert("Previous slide")}>
            &#10094;
          </button>
          <img src="/illustration1.png" alt="Illustration 1" className="illustration" />
          <img src="/illustration2.png" alt="Illustration 2" className="illustration" style={{ display: "none" }} />
          <img src="/illustration3.png" alt="Illustration 3" className="illustration" style={{ display: "none" }} />
          <button className="arrow right-arrow" onClick={() => alert("Next slide")}>
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
            <img src="/logo.png" alt="ProActive Logo" />
          </div>
          <h1>Kode Verifikasi</h1>
          <p>Masukkan kode yang sudah dikirimkan ke E-mail anda</p>

          <form id="verifikasi-form" onSubmit={handleSubmit}>
            <label htmlFor="kode">Kode Verifikasi</label>
            <input type="text" id="kode" name="kode" placeholder="FXXXXP" required />
            <button type="submit" className="login-button">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verifikasi;
