import React, { useState } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";

const PaymentPage = () => {

  const { state } = useLocation();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  // ✅ PAYMENT METHOD
  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  // UPI
  const [upiId, setUpiId] =
    useState("");

  // CARD
  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  // NET BANKING
  const [bankName, setBankName] =
    useState("");

  if (!state) {
    return <h3>Invalid Access</h3>;
  }

  const {
    roomId,
    date,
    time,
    amount
  } = state;

  /* ================= PAYMENT ================= */

  const handlePayment = () => {

    // ✅ UPI VALIDATION
    if (
      paymentMethod === "upi"
    ) {
      if (
        !upiId ||
        !upiId.includes("@")
      ) {
        alert(
          "Please enter valid UPI ID"
        );
        return;
      }
    }

    // ✅ CARD VALIDATION
    if (
      paymentMethod === "card"
    ) {
      if (
        !cardNumber ||
        !cardName ||
        !expiry ||
        !cvv
      ) {
        alert(
          "Please fill card details"
        );
        return;
      }
    }

    // ✅ NET BANKING VALIDATION
    if (
      paymentMethod === "netbanking"
    ) {
      if (!bankName) {
        alert(
          "Please select bank"
        );
        return;
      }
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      navigate(
        "/payment-success",
        {
          state: {
            roomId,
            date,
            time,
            amount,
            paymentMethod
          }
        }
      );

    }, 2000);
  };

  return (
    <div className="container mt-5">

      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "600px",
          margin: "auto",
          borderRadius: "15px"
        }}
      >

        <h2 className="text-center text-primary mb-4">
          Payment Gateway
        </h2>

        {/* AMOUNT BOX */}
        <div className="bg-success text-white p-4 rounded mb-4">

          <p className="mb-1">
            Amount to Pay
          </p>

          <h1>
            ₹{amount}
          </h1>

        </div>

        {/* PAYMENT OPTIONS */}
        <div className="mb-4">

          <h5 className="mb-3">
            Select Payment Method
          </h5>

          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(
                e.target.value
              )
            }
          >
            <option value="upi">
              UPI
            </option>

            <option value="card">
              Credit / Debit Card
            </option>

            <option value="netbanking">
              Net Banking
            </option>

            <option value="cash">
              Cash Payment
            </option>
          </select>

        </div>

        {/* ================= UPI ================= */}

        {paymentMethod === "upi" && (

          <div className="mb-3">

            <input
              type="text"
              className="form-control"
              placeholder="Enter UPI ID (example@upi)"
              value={upiId}
              onChange={(e) =>
                setUpiId(
                  e.target.value
                )
              }
            />

          </div>
        )}

        {/* ================= CARD ================= */}

        {paymentMethod === "card" && (

          <div>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                )
              }
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) =>
                setCardName(
                  e.target.value
                )
              }
            />

            <div className="row">

              <div className="col">

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) =>
                    setExpiry(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="col">

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) =>
                    setCvv(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>
        )}

        {/* ================= NET BANKING ================= */}

        {paymentMethod === "netbanking" && (

          <div className="mb-3">

            <select
              className="form-select"
              value={bankName}
              onChange={(e) =>
                setBankName(
                  e.target.value
                )
              }
            >

              <option value="">
                Select Bank
              </option>

              <option>
                SBI
              </option>

              <option>
                HDFC
              </option>

              <option>
                ICICI
              </option>

              <option>
                Axis Bank
              </option>

            </select>

          </div>
        )}

        {/* ================= CASH ================= */}

        {paymentMethod === "cash" && (

          <div className="alert alert-warning">

            Pay directly at hotel reception
            during check-in.

          </div>
        )}

        {/* PAY BUTTON */}

        <button
          className="btn btn-success w-100 mt-3"
          onClick={handlePayment}
        >

          {loading
            ? "Processing..."
            : `Pay ₹${amount}`}

        </button>

      </div>
    </div>
  );
};

export default PaymentPage;