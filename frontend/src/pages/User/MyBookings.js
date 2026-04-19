import React, { useState } from "react";
import { getMyBookings } from "../../api/userApi";

const MyBookings = () => {

  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
  if (!email) {
    alert("Please enter email");
    return;
  }

  try {
    console.log("Fetching bookings for:", email);

    const data = await getMyBookings(email);

    console.log("API RESPONSE:", data);

    if (!data) {
      alert("No data returned from API");
      return;
    }

    setBookings(data);
  } catch (err) {
    console.error("ERROR:", err);
    alert(err.message);
  }
};
  return (
    <div className="container mt-5">

      <h2>My Bookings</h2>

      <input
        className="form-control mt-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-success mt-3"
        onClick={loadBookings}
      >
        Load Bookings
      </button>

      <div className="mt-4">

       {Array.isArray(bookings) && bookings.length > 0 ? (
  bookings.map((b) => (
    <div key={b._id} className="card mt-2 p-3">
      <h5>Room {b.room?.roomNumber || "N/A"}</h5> {/* ✅ FIX */}
      <p>Date: {b.date}</p>
      <p>Time: {b.time}</p> {/* optional */}
      <p>Status: {b.status}</p>
    </div>
  ))
) : (
  <p>No bookings found</p>
)}

      </div>

    </div>
  );
};

export default MyBookings;