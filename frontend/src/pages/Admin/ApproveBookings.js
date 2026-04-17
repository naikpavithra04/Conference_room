import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";

const ApproveBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings`);
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load bookings");
    }
  };

  const approveBooking = async (id) => {
    try {
      await fetch(`${BASE_URL}/admin/approve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      alert("Booking Approved");
      fetchBookings(); // 🔥 refresh list
    } catch (err) {
      alert("Approval failed");
    }
  };

  const rejectBooking = async (id) => {
    try {
      await fetch(`${BASE_URL}/admin/reject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      alert("Booking Rejected");
      fetchBookings(); // 🔥 refresh list
    } catch (err) {
      alert("Rejection failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Approve Bookings</h2>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>User</th>
            <th>Room</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(bookings) &&
            bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.user?.name}</td>
                <td>{b.room?.name}</td>
                <td>{b.date}</td>
                <td>{b.status}</td>
                <td>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => approveBooking(b._id)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => rejectBooking(b._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveBookings;