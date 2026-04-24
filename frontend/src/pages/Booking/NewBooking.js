import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../../api/bookingApi";

const NewBooking = () => {
  const query = new URLSearchParams(useLocation().search);
  const roomId = query.get("roomId");

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState(null);

  // ✅ Get logged-in user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please login first");
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleBooking = async () => {
    if (!user) {
      alert("Unauthorized user");
      return;
    }

    try {
      const res = await createBooking({
        roomId,
        date,
        time,
        email: user.email, // ✅ always from logged-in user
        userId: user._id,  // optional but better
      });

      if (res.message === "Room booked successfully") {
        alert("Room booked successfully");
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

      {/* ✅ Show logged-in email (not editable) */}
      {/*<input
        type="email"
        className="form-control mb-3"
        value={user?.email || ""}
        disabled
      />*/}

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