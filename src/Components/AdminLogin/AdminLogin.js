import { useState } from "react";
import "./adminlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(""); // Clear username error when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear password error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setLoginError("");

    if (!validateUsername(username)) {
      setUsernameError("Username is required");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    axios
      .post("http://localhost:3000/createAdminlogin", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Login failed. Please try again.");
      });

    // Clear input fields after submitting
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login Form</h2>

            <div className="form-group">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="input-field"
              />
              <label className="input-label">Username</label>
              {usernameError && <div className="error">{usernameError}</div>}
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
              />
              <label className="input-label">Password</label>
              {passwordError && <div className="error">{passwordError}</div>}
            </div>

            <div className="forgot-password">
              <a href="/">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="error">{loginError}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
