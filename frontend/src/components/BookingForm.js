import React, { useState } from "react";

const BookingForm = ({ roomId, onSubmit }) => {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      roomId,
      date,
      timeSlot,
      status: "Pending",
    };

    onSubmit(bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Time Slot</label>
        <select
          className="form-control"
          required
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          <option value="">Select Slot</option>
          <option>09:00 AM - 11:00 AM</option>
          <option>11:00 AM - 01:00 PM</option>
          <option>02:00 PM - 04:00 PM</option>
          <option>04:00 PM - 06:00 PM</option>
        </select>
      </div>

      <button className="btn btn-success">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;