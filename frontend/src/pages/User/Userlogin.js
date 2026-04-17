import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    navigate("/user");

  } catch (error) {
   
    alert(error.message); // ✅ show real error
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
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary">User Login</button>
      </form>
      <p>
  Don't have an account? <a href="/register">Register</a>
</p>
    </div>
  );
};

export default UserLogin;