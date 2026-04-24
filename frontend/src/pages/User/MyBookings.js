import React, { useState, useEffect } from "react";
import { getMyBookings } from "../../api/bookingApi";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);
  const [loadingDone, setLoadingDone] = useState(false); // ✅ track display

  const navigate = useNavigate();

  // ✅ Get logged-in user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please login first");
      navigate("/login/user");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const loadBookings = async () => {
    if (!user?.email) {
      alert("User email not found");
      return;
    }

    try {
      const data = await getMyBookings(user.email);

      setBookings(data);
      setLoadingDone(true); // ✅ trigger redirect later

    } catch (err) {
      console.error("ERROR:", err);
      alert(err.message);
    }
  };

  // ✅ Handle delayed navigation AFTER rendering
  useEffect(() => {
    if (loadingDone && bookings.length >= 0) {
      const timer = setTimeout(() => {
        navigate("/user"); // your dashboard route
      }, 3000); // ⏳ 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [loadingDone, bookings, navigate]);

  return (
    <div className="container mt-5">
      <h2>My Bookings</h2>

      <input
        className="form-control mt-3"
        value={user?.email || ""}
        disabled
      />

      <button className="btn btn-success mt-3" onClick={loadBookings}>
        Load Bookings
      </button>

      <div className="mt-4">
        {Array.isArray(bookings) && bookings.length > 0 ? (
          bookings.map((b) => (
            <div key={b._id} className="card mt-2 p-3">
              <h5>Room {b.room?.roomNumber || "N/A"}</h5>
              <p>Date: {b.date}</p>
              <p>Time: {b.time}</p>
              <p>Status: {b.status}</p>
            </div>
          ))
        ) : (
          loadingDone && <p>No bookings found</p>
        )}
      </div>

      {/* ✅ Optional message */}
      {loadingDone && (
        <p className="text-success mt-3">
          Redirecting to dashboard in 3 seconds...
        </p>
      )}
    </div>
  );
};

export default MyBookings;