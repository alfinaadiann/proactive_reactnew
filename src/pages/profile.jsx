import React, { useState, useEffect } from "react";
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

  // Load data dari localStorage saat komponen dimuat
  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleEditToggle = () => {
    if (isEditable) {
      // Simpan data ke localStorage
      localStorage.setItem("profileData", JSON.stringify(formData));
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
    localStorage.removeItem("profileData"); // Hapus data dari localStorage
    setShowDeleteModal(false);
  };

  return (
    <div className="profile">
      <Sidebar />

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-card">
          <img src="https://i.pinimg.com/564x/d7/d0/13/d7d013aa4c1ee9bc96fc8ee329467d34.jpg" alt="Profile Picture" />
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
