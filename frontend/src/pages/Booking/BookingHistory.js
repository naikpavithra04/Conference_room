import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const { bookings } = useContext(BookingContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h3>My Booking History</h3>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div key={index} className="card mb-3">
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
        ))
      )}
    </div>
  );
};

export default BookingHistory;