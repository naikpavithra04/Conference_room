import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = await loginUser({ email, password });

      if (data.user.role === "admin") {
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
      <h3>Login</h3>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;