import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  if (!state) {
    return <h3>Invalid Access</h3>;
  }

  const { roomId, date, time } = state;

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // 👉 Navigate to success page with booking data
      navigate("/payment-success", {
        state: { roomId, date, time }
      });

    }, 2000);
  };

  return (
    <div className="container mt-5">
      <h3>Payment</h3>

      <input className="form-control mb-3" placeholder="Card Number" />
      <input className="form-control mb-3" placeholder="Expiry Date" />
      <input className="form-control mb-3" placeholder="CVV" />

      <button className="btn btn-primary" onClick={handlePayment}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default PaymentPage;