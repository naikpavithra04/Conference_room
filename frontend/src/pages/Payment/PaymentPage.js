import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {

  const { state } = useLocation();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [upiId, setUpiId] = useState("");

  if (!state) {
    return <h3>Invalid Access</h3>;
  }

  const {
    roomId,
    date,
    time,
    amount
  } = state;

  const handlePayment = () => {

    // ✅ UPI Validation
    if (!upiId || !upiId.includes("@")) {
      alert("Please enter valid UPI ID");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigate("/payment-success", {
        state: {
          roomId,
          date,
          time,
          amount
        }
      });

    }, 2000);
  };

  return (
    <div className="container mt-5">

      <div className="card shadow-lg p-4">

        <h2 className="text-center text-primary mb-4">
          UPI Payment
        </h2>

        {/* Amount Box */}
        <div className="bg-success text-white p-4 rounded mb-4">

          <p className="mb-1">
            Amount to Pay
          </p>

          <h1>
            ₹{amount}
          </h1>

        </div>

        {/* UPI INPUT */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter UPI ID (example@upi)"
          value={upiId}
          onChange={(e) =>
            setUpiId(e.target.value)
          }
        />

        {/* PAY BUTTON */}
        <button
          className="btn btn-success"
          onClick={handlePayment}
        >
          {loading
            ? "Processing..."
            : `Pay ₹${amount}`
          }
        </button>

      </div>

    </div>
  );
};

export default PaymentPage;