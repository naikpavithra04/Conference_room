import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm";

const NewBooking = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const handleBookingSubmit = (data) => {
    console.log("Booking Data:", data);

    // Later replace with axios call
    alert("Booking Request Sent Successfully!");
    navigate("/booking/history");
  };

  return (
    <div className="container mt-5">
      <h3>New Booking</h3>
      <BookingForm roomId={roomId} onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default NewBooking;