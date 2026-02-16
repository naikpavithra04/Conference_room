import React, { useEffect, useState } from "react";
import { getMyBookings } from "../../api/bookingApi";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getMyBookings();
      setBookings(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h3>My Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="card mb-3">
            <div className="card-body">
              <p>Date: {booking.date}</p>
              <p>Time: {booking.timeSlot}</p>
              <p>Status: {booking.status}</p>

              <button
                className="btn btn-info btn-sm"
                onClick={() =>
                  navigate(`/booking/details/${booking._id}`)
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingHistory;
