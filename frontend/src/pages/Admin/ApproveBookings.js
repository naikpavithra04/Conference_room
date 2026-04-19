import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";

const ApproveBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings`);

      if (!res.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const approveBooking = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/approve`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Approval failed");
      }

      // ✅ update UI without full reload
      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "approved" } : b
        )
      );
    } catch (err) {
      console.error(err);
      alert("Approval failed");
    }
  };

  const rejectBooking = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/reject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Rejection failed");
      }

      // ✅ update UI without full reload
      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "rejected" } : b
        )
      );
    } catch (err) {
      console.error(err);
      alert("Rejection failed");
    }
  };

  // ✅ loading state
  if (loading) {
    return <h3 className="text-center mt-5">Loading bookings...</h3>;
  }

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
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No bookings found
              </td>
            </tr>
          ) : (
            bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.email}</td>
                <td>{b.roomId}</td>
                <td>{b.date}</td>

                {/* ✅ colored status */}
                <td>
                  <span
                    className={
                      b.status === "approved"
                        ? "text-success"
                        : b.status === "rejected"
                        ? "text-danger"
                        : "text-warning"
                    }
                  >
                    {b.status}
                  </span>
                </td>

                <td>
                  {/* ✅ disable if already processed */}
                  <button
                    className="btn btn-success me-2"
                    disabled={b.status !== "pending"}
                    onClick={() => approveBooking(b._id)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-danger"
                    disabled={b.status !== "pending"}
                    onClick={() => rejectBooking(b._id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveBookings;