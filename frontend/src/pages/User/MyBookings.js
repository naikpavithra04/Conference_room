import React, { useState } from "react";
import { getMyBookings } from "../../api/userApi";

const MyBookings = () => {

  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    const data = await getMyBookings(email);
    setBookings(data);
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

        {bookings.map((b) => (
          <div key={b._id} className="card mt-2 p-3">

            <h5>Room {b.roomId.roomNumber}</h5>
            <p>Date: {b.date}</p>
            <p>Status: {b.status}</p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyBookings;