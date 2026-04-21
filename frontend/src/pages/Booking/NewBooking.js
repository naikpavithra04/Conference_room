import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { createBooking } from "../../api/bookingApi";

const NewBooking = () => {
  const query = new URLSearchParams(useLocation().search);
  const roomId = query.get("roomId");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState(""); // ✅ added

  const handleBooking = async () => {
    try {
      const res = await createBooking({
        roomId,
        date,
        time,
        email, // ✅ important
      });

      if (res.message === "Room booked successfully") {
        alert("Room booked successfully");
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

      {/* ✅ Email input */}
      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

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

      <button className="btn btn-success" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default NewBooking;