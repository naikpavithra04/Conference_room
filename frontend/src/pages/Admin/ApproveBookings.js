import React, { useEffect, useState } from "react";
import { getAllBookings, updateBookingStatus } from "../../api/adminApi";

const ApproveBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getAllBookings();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateBookingStatus(id, status);

      // Update UI instantly
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      alert("Failed to update booking");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Approve / Reject Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5>Room: {booking.room?.name}</h5>
              <p>User: {booking.user?.name}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.timeSlot}</p>
              <p>
                Status:{" "}
                <strong
                  className={
                    booking.status === "Approved"
                      ? "text-success"
                      : booking.status === "Rejected"
                      ? "text-danger"
                      : "text-warning"
                  }
                >
                  {booking.status}
                </strong>
              </p>

              {booking.status === "Pending" && (
                <>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() =>
                      handleStatusChange(booking._id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      handleStatusChange(booking._id, "Rejected")
                    }
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ApproveBookings;
