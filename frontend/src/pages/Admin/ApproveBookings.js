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
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const approveBooking = async (id) => {
    try {
      await fetch(`${BASE_URL}/admin/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });

      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "approved" } : b
        )
      );
    } catch {
      alert("Approval failed");
    }
  };

  const rejectBooking = async (id) => {
    try {
      await fetch(`${BASE_URL}/admin/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });

      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "rejected" } : b
        )
      );
    } catch {
      alert("Rejection failed");
    }
  };

  if (loading) {
    return (
      <div style={styles.loader}>
        Loading bookings...
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>📋 Approve Bookings</h2>

      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Room</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="5" style={styles.empty}>
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b._id} style={styles.row}>
                  <td style={styles.td}>{b.email}</td>
                  <td style={styles.td}>{b.roomId}</td>
                  <td style={styles.td}>
                    {new Date(b.date).toLocaleDateString()}
                  </td>

                  <td style={styles.td}>
                    <span style={getStatusStyle(b.status)}>
                      {b.status}
                    </span>
                  </td>

                  <td style={styles.td}>
                    <button
                      style={{
                        ...styles.btn,
                        ...styles.approveBtn,
                        opacity: b.status !== "pending" ? 0.5 : 1
                      }}
                      disabled={b.status !== "pending"}
                      onClick={() => approveBooking(b._id)}
                    >
                      Approve
                    </button>

                    <button
                      style={{
                        ...styles.btn,
                        ...styles.rejectBtn,
                        marginLeft: "8px",
                        opacity: b.status !== "pending" ? 0.5 : 1
                      }}
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
    </div>
  );
};

export default ApproveBookings;

/* ---------- STYLES ---------- */

const styles = {
  page: {
    padding: "30px",
    background: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111"
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #eee",
    color: "#555"
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #f1f1f1"
  },
  row: {
    transition: "0.2s"
  },
  btn: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px"
  },
  approveBtn: {
    background: "#16a34a",
    color: "#fff"
  },
  rejectBtn: {
    background: "#dc2626",
    color: "#fff"
  },
  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#888"
  },
  loader: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px"
  }
};

/* dynamic status style */
const getStatusStyle = (status) => ({
  padding: "4px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  color: "#fff",
  background:
    status === "approved"
      ? "#16a34a"
      : status === "rejected"
      ? "#dc2626"
      : "#f59e0b"
});