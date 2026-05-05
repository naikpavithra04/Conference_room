import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NewBooking = () => {
  const query = new URLSearchParams(useLocation().search);
  const roomId = query.get("roomId");

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // ✅ LOGIN CHECK
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please login first");
      navigate("/login/user");
    }
  }, [navigate]);

  const handleProceed = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    // 👉 Pass booking data to payment page
    navigate("/payment", {
      state: { roomId, date, time }
    });
  };

  return (
    <div className="container mt-5">
      <h3>Book Room</h3>

      <input
        type="date"
        className="form-control mb-3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="form-control mb-3"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleProceed}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default NewBooking;