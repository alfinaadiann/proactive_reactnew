import React from "react";
import '../styles/daftar.css'; // Pastikan stylesheet sesuai dengan struktur folder Anda

const Login = () => {
  const login = () => {
    // Fungsi login dapat disesuaikan di sini
    alert("Login function triggered!");
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
          <h1>Selamat datang</h1>
          <p>Silahkan login terlebih dahulu untuk memulai</p>

          <form id="login-form">
            <label htmlFor="login-email">E-mail</label>
            <input type="email" id="login-email" name="email" placeholder="E-mail" required />

            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" name="password" placeholder="Password" required />

            <a href="/forgot_password.html" className="forgot-password">
              Lupa Password?
            </a>

            <button type="button" className="login-button" onClick={login}>
              Login
            </button>
          </form>

          <p className="register-link">
            Belum punya akun? <a href="/daftar.html">Daftar disini</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
