import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/userApi";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });
      console.log("DATA:", data);

      if (!data.user) {
        alert("Invalid credentials");
        return;
      }

      if (data.user.role !== "user") {
        alert("Access denied! Not a user");
        return;
      }

      // ✅ Store login info (IMPORTANT for logout later)
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/user");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h3>User Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />

        <button className="btn btn-primary">User Login</button>
      </form>

      {/* ✅ Register */}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

      {/* ✅ Forgot Password */}
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default UserLogin;