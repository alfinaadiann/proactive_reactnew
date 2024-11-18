import React, { useState } from "react";
import '../styles/profil.css';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "Jane Doe",
    username: "janedoe",
    email: "janedoe@gmail.com",
    phone: "081234567890",
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditToggle = () => {
    if (isEditable) {
      alert("Perubahan telah disimpan.");
    }
    setIsEditable(!isEditable);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePasswordChange = () => {
    // Logika mengganti kata sandi
    alert("Kata sandi Anda telah diperbarui.");
    setShowPasswordModal(false);
  };

  const handleDeleteAccount = () => {
    // Logika menghapus akun
    alert("Akun Anda telah dihapus.");
    setShowDeleteModal(false);
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src=".img/profil.png"
          alt="User Profile Picture"
        />
        <h2>Profil Saya</h2>
        <a href="hari ini.html">
          <i className="fas fa-calendar-day" style={{ marginRight: "8px" }}></i> Hari Ini
        </a>
        <a href="mendatang.html">
          <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i> Mendatang
        </a>
        <a href="tugas selesai.html">
          <i className="fas fa-check" style={{ marginRight: "8px" }}></i> Tugas Selesai
        </a>
        <a href="#">
          <i className="fas fa-calendar" style={{ marginRight: "8px" }}></i> Kalender
        </a>
        <a href="pomodoro.html">
          <i className="fas fa-clock" style={{ marginRight: "8px" }}></i> Waktu
        </a>
        <a href="kolaborasi.html">
          <i className="fas fa-users" style={{ marginRight: "8px" }}></i> Kolaborasi
        </a>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <img src=".img/Profil.png" alt="Profile Picture" />
          <h2>{formData.fullname}</h2>
          <p>{formData.email}</p>
          <form>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "100%" }}>
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                  readOnly={!isEditable}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label>Nama Pengguna</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  readOnly={!isEditable}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "100%" }}>
                <label>E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  readOnly={!isEditable}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label>No. Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  readOnly={!isEditable}
                />
              </div>
            </div>

            <div className="button-container">
              <button type="button" className="edit-button" onClick={handleEditToggle}>
                {isEditable ? "Simpan" : "Edit"}
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={() => setShowDeleteModal(true)}
              >
                Hapus Akun
              </button>
            </div>
            <button
              type="button"
              className="edit-button"
              style={{ width: "100%", marginTop: "10px" }}
              onClick={() => setShowPasswordModal(true)}
            >
              Ganti Kata Sandi
            </button>
          </form>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="modal" onClick={() => setShowPasswordModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowPasswordModal(false)}>
              &times;
            </span>
            <h2>Ganti Kata Sandi</h2>
            <input type="password" placeholder="Kata Sandi Lama" />
            <input type="password" placeholder="Kata Sandi Baru" />
            <input type="password" placeholder="Konfirmasi Kata Sandi Baru" />
            <button onClick={handlePasswordChange}>Ganti Kata Sandi</button>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="modal" onClick={() => setShowDeleteModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowDeleteModal(false)}>
              &times;
            </span>
            <h2>Hapus Akun</h2>
            <p>
              Tindakan ini dapat mengakibatkan riwayat tugasmu terhapus permanen.
              Apakah Anda yakin?
            </p>
            <input type="password" placeholder="Masukkan Password" />
            <button onClick={handleDeleteAccount}>Hapus Akun</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
