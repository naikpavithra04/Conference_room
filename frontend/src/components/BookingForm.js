import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

const BookingForm = ({ roomId, onSubmit }) => {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  // 👉 Called AFTER payment success
  const handleFinalBooking = () => {
    const bookingData = {
      roomId,
      date,
      timeSlot,
      status: "Confirmed", // ✅ after payment
    };

    onSubmit(bookingData);

    alert("Booking Successful 🎉"); // ✅ NOW YOU WILL SEE THIS
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !timeSlot) {
      alert("Please select date and time");
      return;
    }

    // 👉 Open payment instead of booking directly
    setShowPayment(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Time Slot</label>
          <select
            className="form-control"
            required
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option value="">Select Slot</option>
            <option>09:00 AM - 11:00 AM</option>
            <option>11:00 AM - 01:00 PM</option>
            <option>02:00 PM - 04:00 PM</option>
            <option>04:00 PM - 06:00 PM</option>
          </select>
        </div>

        <button className="btn btn-success">
          Proceed to Payment
        </button>
      </form>

      {/* PAYMENT MODAL */}
      {showPayment && (
        <PaymentModal
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            handleFinalBooking(); // ✅ FIX HERE
          }}
        />
      )}
    </>
  );
};

export default BookingForm;