import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../../components/BookingForm";
import { createBooking } from "../../api/bookingApi";

const NewBooking = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const handleBookingSubmit = async (data) => {
    try {
      await createBooking(data);
      alert("Booking Request Sent!");
      navigate("/booking/history");
    } catch (error) {
      alert("Booking Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>New Booking</h3>
      <BookingForm roomId={roomId} onSubmit={handleBookingSubmit} />
    </div>
  );
};

export default NewBooking;
