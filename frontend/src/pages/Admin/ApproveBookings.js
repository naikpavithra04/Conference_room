import React, { useEffect, useState } from "react";
import axios from "axios";

const ApproveBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  const approveBooking = async (id) => {
    await axios.post(`http://localhost:5000/api/admin/approve`, { id });
    alert("Booking Approved");
  };

  const rejectBooking = async (id) => {
    await axios.post(`http://localhost:5000/api/admin/reject`, { id });
    alert("Booking Rejected");
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
          {bookings.map((b) => (
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