import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../api/base";
import "../../styles/Auth.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1 = email, 2 = otp, 3 = new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ── Step 1: Send OTP ─────────────────────────────────────────────
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("OTP sent to your email ✅");
      setStep(2);
    } catch (err) {
      alert(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 2: Verify OTP ───────────────────────────────────────────
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setStep(3);
    } catch (err) {
      alert(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 3: Reset Password ───────────────────────────────────────
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Password reset successfully ✅");
      navigate("/login/user");
    } catch (err) {
      alert(err.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* Step indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: step >= s ? "#4cafef" : "#ddd",
                color: step >= s ? "#fff" : "#999",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "13px", fontWeight: "600", transition: "0.3s",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Step 1: Enter email */}
        {step === 1 && (
          <>
            <h2>Forgot Password</h2>
            <p>Enter your email to receive an OTP</p>
            <form onSubmit={handleSendOtp} autoComplete="off">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          </>
        )}

        {/* Step 2: Enter OTP */}
        {step === 2 && (
          <>
            <h2>Enter OTP</h2>
            <p>Check your email for a 6-digit code</p>
            <form onSubmit={handleVerifyOtp} autoComplete="off">
              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                maxLength={6}
                required
                onChange={(e) => setOtp(e.target.value)}
                style={{ letterSpacing: "6px", textAlign: "center", fontSize: "20px" }}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
            <p className="auth-footer" style={{ marginTop: "12px" }}>
              <span
                style={{ color: "#4cafef", cursor: "pointer" }}
                onClick={() => setStep(1)}
              >
                ← Back / Resend OTP
              </span>
            </p>
          </>
        )}

        {/* Step 3: New password */}
        {step === 3 && (
          <>
            <h2>New Password</h2>
            <p>Choose a strong new password</p>
            <form onSubmit={handleResetPassword} autoComplete="off">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default ForgotPassword;