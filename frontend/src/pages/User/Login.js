import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser } from "../../api/userApi";

const Login = () => {

  const { role } = useParams(); // user or admin

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginUser({ email, password });

      if (data.user.role !== role) {
        alert("Access denied!");
        return;
      }

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }

    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="container mt-5">

      <h3>
        {role === "admin" ? "Admin Login" : "User Login"}
      </h3>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className={
            role === "admin"
              ? "btn btn-danger"
              : "btn btn-primary"
          }
        >
          {role === "admin" ? "Admin Login" : "User Login"}
        </button>

      </form>

    </div>
  );
};

export default Login;