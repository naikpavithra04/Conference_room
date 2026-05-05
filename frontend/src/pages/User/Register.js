import React, { useState, useEffect } from "react";
import { registerUser } from "../../api/userApi";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Auth.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ Clear form when page loads
  useEffect(() => {
    setForm({
      name: "",
      email: "",
      password: "",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered Successfully");

      // ✅ Clear form after success
      setForm({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login/user");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join and start booking your rooms</p>

        {/* ✅ Disable autofill */}
        <form onSubmit={handleSubmit} autoComplete="off">

          <input
            placeholder="Full Name"
            type="text"
            value={form.name}
            autoComplete="off"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Email Address"
            type="email"
            value={form.email}
            autoComplete="off"
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            placeholder="Password"
            type="password"
            value={form.password}
            autoComplete="new-password"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Register</button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login/user">Login</Link>
        </p>
      </div>

    </div>
  );
};

export default Register;