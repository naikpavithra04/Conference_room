import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { bookRoom } from "../../api/userApi";

const NewBooking = () => {
  const query = new URLSearchParams(useLocation().search);
  const roomId = query.get("roomId");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    try {
      await bookRoom({ roomId, date, time });
      alert("Room booked successfully");
    } catch (err) {
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

      <button className="btn btn-success" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default NewBooking;