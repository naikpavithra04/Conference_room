import React, { useEffect } from "react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  createBooking
} from "../../api/bookingApi";

const PaymentSuccess = () => {

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {

    const confirmBooking = async () => {

      try {

        const storedUser = JSON.parse(
          localStorage.getItem("user")
        );

        if (!storedUser) {

          alert("Session expired");

          navigate("/login/user");

          return;
        }

        // ✅ Create Booking
        await createBooking({

          roomId: state.roomId,

          date: state.date,

          time: state.time,

          email: storedUser.email,

          userId: storedUser._id,

          paymentStatus: "paid",

        });

      } catch (err) {

        alert("Booking failed");
      }
    };

    if (state) {
      confirmBooking();
    }

  }, [state, navigate]);

  return (
    <div className="container mt-5 text-center">

      <div className="card shadow-lg p-5">

        <h2 className="text-success mb-3">
          Payment Successful ✅
        </h2>

        <h4 className="mb-3">
          Amount Paid: ₹{state?.amount}
        </h4>

        <p>
          Your room booking has been confirmed.
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={() =>
            navigate("/mybookings")
          }
        >
          View My Bookings
        </button>

      </div>

    </div>
  );
};

export default PaymentSuccess;