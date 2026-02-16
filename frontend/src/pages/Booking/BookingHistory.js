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
    const data = await getMyBookings();
    setBookings(data);
  };

  return (
    <div className="container mt-5">
      <h3>My Booking History</h3>

      {bookings.map((booking) => (
        <div key={booking._id} className="card mb-3">
          <div className="card-body">
            <p>Date: {booking.date}</p>
            <p>Time: {booking.timeSlot}</p>
            <p>Status: {booking.status}</p>

            <button
              className="btn btn-info btn-sm"
              onClick={() =>
                navigate("/booking/details", { state: { booking } })
              }
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
