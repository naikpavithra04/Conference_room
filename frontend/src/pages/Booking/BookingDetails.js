import React from "react";
import { useLocation } from "react-router-dom";

const BookingDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return <div className="container mt-5">No Booking Found</div>;
  }

  const { booking } = state;

  return (
    <div className="container mt-5">
      <h3>Booking Details</h3>
      <p><strong>Room:</strong> {booking.roomId}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.timeSlot}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
};

export default BookingDetails;