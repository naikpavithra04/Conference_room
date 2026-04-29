import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../../api/bookingApi";
import PaymentModal from "../../components/PaymentModal";

const NewBooking = () => {
  const query = new URLSearchParams(useLocation().search);
  const roomId = query.get("roomId");

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState(null);

  // ✅ NEW: control payment modal
  const [showPayment, setShowPayment] = useState(false);

  // ✅ Get logged-in user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please login first");
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  // ❌ OLD: removed direct booking from button
  // ✅ NEW: booking only happens AFTER payment success
  const handleBookingAfterPayment = async () => {
    if (!user) {
      alert("Unauthorized user");
      return;
    }

    try {
      const res = await createBooking({
        roomId,
        date,
        time,
        email: user.email,
        userId: user._id,
        paymentStatus: "paid", // ✅ optional but good
      });

      if (res.message === "Room booked successfully") {
        alert("Booking Confirmed 🎉");
        navigate("/user");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Book Room</h3>

      <input
        type="date"
        className="form-control mb-3"
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="form-control mb-3"
        onChange={(e) => setTime(e.target.value)}
      />

      {/* ✅ CHANGED BUTTON */}
      <button
        className="btn btn-success"
        onClick={() => {
          if (!date || !time) {
            alert("Please select date and time");
            return;
          }
          setShowPayment(true); // 👉 open payment modal
        }}
      >
        Proceed to Payment
      </button>

      {/* ✅ PAYMENT MODAL */}
      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            handleBookingAfterPayment(); // 👉 book after payment
          }}
        />
      )}
    </div>
  );
};

export default NewBooking;