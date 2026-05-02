import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`/api/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Reset failed");
    }

    alert("Password updated successfully");
  } catch (err) {
    alert(err.message);
  }
};

  return (
    <div>
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;