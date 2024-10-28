import React, { useState } from 'react';
import { changePassword } from '../../service/APIFunction'; // Nhập hàm API
import './PasswordChangeForm.css';
import { useNavigate } from 'react-router-dom';

const PasswordChangeForm = () => {
  const [oldPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message
    setSuccessMessage(''); // Reset success message

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu mới
    if (newPassword === confirmNewPassword) {
      try {
        const passwordData = {
          oldPassword,
          newPassword,
          confirmNewPassword
        };
        console.log("pwda",passwordData)
        const response = await changePassword(passwordData); // Gọi hàm API
        setSuccessMessage(response.message || 'Thay đổi mật khẩu thành công!'); // Hiển thị thông báo thành công
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          navigate('/');
      }, 3000);
      } catch (error) {
        setErrorMessage(error.message || 'Có lỗi xảy ra. Vui lòng thử lại.'); // Hiển thị thông báo lỗi
      }
    } else {
      setErrorMessage('Mật khẩu mới và xác nhận mật khẩu mới không khớp.'); // Hiển thị lỗi khi mật khẩu không khớp
    }
  };

  return (
    <div className="password-change-form-container my-5">
      <form onSubmit={handleSubmit}>
        <label>
          Mật khẩu hiện tại:
          <input
            type="password"
            value={oldPassword}
            onChange={handleChangeCurrentPassword}
            required
          />
        </label>
        <br />
        <label>
          Mật khẩu mới:
          <input
            type="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            required
          />
        </label>
        <br />
        <label>
          Xác nhận mật khẩu mới:
          <input
            type="password"
            value={confirmNewPassword}
            onChange={handleChangeConfirmPassword}
            required
          />
        </label>
        <br />
        <button type="submit">Thay Đổi Mật Khẩu</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Hiển thị thông báo lỗi */}
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Hiển thị thông báo thành công */}
    </div>
  );
};

export default PasswordChangeForm;
