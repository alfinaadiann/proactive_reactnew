import React from "react";
import "./daftar.css"; // Gunakan CSS yang sama untuk menyamakan tampilan

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk pengiriman email
    alert("Email telah dikirim!");
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
          <h1>Lupa Password</h1>
          <p>Masukkan Email akun anda</p>

          <form id="forgot-password-form" onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="E-mail" required />
            <button type="submit" className="login-button">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
