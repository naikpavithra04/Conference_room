import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
const handleSubmit = async (e) => {
  e.preventDefault();
console.log("FORM SUBMITTED"); // 👈 ADD THIS
  try {
    const data = await loginUser({ email, password });
    console.log("DATA:", data);

    if (!data.user) {
      alert("Invalid credentials");
      return;
    }

    if (data.user.role !== "admin") {
      alert("Access denied! Not an admin");
      return;
    }

    navigate("/admin/dashboard");

  } catch (error) {
    
    alert(error.message); // ✅ show real backend error
  }
};
  return (
    <div className="container mt-5">
      <h3>Admin Login</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br></br>

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br></br>

        <button className="btn btn-danger">Admin Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;