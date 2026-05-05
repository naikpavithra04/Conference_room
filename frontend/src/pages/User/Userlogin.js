import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import "../../styles/Auth.css";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ✅ Clear fields when page loads
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      if (!data.user) {
        alert("Invalid credentials");
        return;
      }

      if (data.user.role !== "user") {
        alert("Access denied!");
        return;
      }

      // Store login info
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // ✅ Clear form after login
      setEmail("");
      setPassword("");

      navigate("/user");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to continue booking rooms</p>

        {/* ✅ Disable autofill */}
        <form onSubmit={handleSubmit} autoComplete="off">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD FIELD */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <p className="auth-footer">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>

    </div>
  );
};

export default UserLogin;