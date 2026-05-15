import React, { useState, useEffect, useCallback } from "react"; 
import { getMyBookings, cancelBooking } from "../../api/bookingApi"; 
import { useNavigate } from "react-router-dom"; 
 
const STATUS_STYLES = {
  pending: {
    background: "#fef9c3",
    color: "#854d0e",
    border: "1px solid #fde047",
  },

  approved: {
    background: "#dcfce7",
    color: "#166534",
    border: "1px solid #86efac",
  },

  rejected: {
    background: "#fee2e2",
    color: "#991b1b",
    border: "1px solid #fca5a5",
  },

  cancelled: {
    background: "#f3f4f6",
    color: "#6b7280",
    border: "1px solid #d1d5db",
  },
};
 
const MyBookings = () => { 
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [cancellingId, setCancellingId] = useState(null); // tracks which booking is being 
  const navigate = useNavigate(); 
 
  // ── Load bookings on mount ────────────────────────────────────── 
  const fetchBookings = useCallback(async () => { 
    try { 
      const storedUser = JSON.parse(localStorage.getItem("user")); 
      if (!storedUser) { 
        alert("Please login first"); 
        navigate("/login/user"); 
        return; 
      } 
      const data = await getMyBookings(); 
      setBookings(Array.isArray(data) ? data : []); 
    } catch (err) { 
      console.error(err); 
      alert("Failed to load bookings"); 
    } finally { 
      setLoading(false); 
    } 
  }, [navigate]); 
 
  useEffect(() => { 
    fetchBookings(); 
  }, [fetchBookings]); 
 
  // ── Cancel handler 

  const handleCancel = async (bookingId) => { 
    const confirmed = window.confirm( 
      "Are you sure you want to cancel this booking? This cannot be undone." 
    ); 
    if (!confirmed) return; 
 
    setCancellingId(bookingId); 
    try { 
      await cancelBooking(bookingId); 
      // Update status locally — no need to re-fetch 
      setBookings((prev) => 
        prev.map((b) => 
          b._id === bookingId ? { ...b, status: "cancelled" } : b 
        ) 
      ); 
    } catch (err) { 
      alert(err.message || "Cancellation failed"); 
    } finally { 
      setCancellingId(null); 
    } 
  }; 
 
  // ── Render 
  if (loading) { 
    return ( 
      <div style={styles.page}> 
        <p style={{ textAlign: "center", marginTop: "60px", color: "#888" }}> 
          Loading your bookings... 
        </p> 
      </div> 
    ); 
  } 
 
  return ( 
    <div style={styles.page}> 
      {/* Header */} 
      <div style={styles.header}> 
        <button style={styles.backBtn} onClick={() => navigate("/user")}> 
          ← Dashboard 
        </button> 
        <h2 style={styles.title}>My Bookings</h2> 
      </div> 
 
      {/* Empty state */} 
      {bookings.length === 0 ? ( 
        <div style={styles.emptyBox}> 
          <p style={{ fontSize: "40px", margin: "0 0 12px" }}>
📭
</p> 
          <p style={{ color: "#888", fontSize: "16px" }}>No bookings found</p> 
          <button 
            style={styles.exploreBtn} 
            onClick={() => navigate("/rooms")} 
          > 
            Explore Rooms 
          </button> 
        </div> 
      ) : ( 
        <div style={styles.grid}> 
          {bookings.map((b) => { 
            const statusStyle = STATUS_STYLES[b.status] || STATUS_STYLES.pending; 
            const canCancel = b.status === "pending" || b.status === "approved"; 
            const isCancelling = cancellingId === b._id; 
 
            return ( 
              <div key={b._id} style={styles.card}> 
                {/* Card top row: room name + status badge */} 
                <div style={styles.cardTop}> 
                  <h3 style={styles.roomName}> 
 {b.room?.name || "Conference Room"} 
                  </h3> 
                  <span style={{ ...styles.badge, ...statusStyle }}> 
                    {b.status.charAt(0).toUpperCase() + b.status.slice(1)} 
                  </span> 
                </div> 
 
                {/* Details */} 
                <div style={styles.details}> 
                  <div style={styles.detailRow}> 
                    <span style={styles.detailLabel}>📅 Date</span> 
                    <span style={styles.detailValue}>{b.date}</span> 
                  </div> 
                  <div style={styles.detailRow}> 
                    <span style={styles.detailLabel}>⏰Time</span> 
                    <span style={styles.detailValue}>{b.time || "—"}</span> 
                  </div> 
                  <div style={styles.detailRow}> 
                    <span style={styles.detailLabel}>📍Location</span> 
                    <span style={styles.detailValue}> 
                      {b.room?.location || "—"} 
                    </span> 
                  </div> 
                  <div style={styles.detailRow}> 
                    <span style={styles.detailLabel}>💳Payment</span> 
                    <span style={styles.detailValue}> 
                      {b.paymentStatus === "paid" ? "Paid" : "⏳Pending"} 
                    </span> 
                  </div> 
                </div> 
 
                {/* Cancel button */} 
                {canCancel && ( 
                  <button 
                    style={{ 
                      ...styles.cancelBtn, 
                      opacity: isCancelling ? 0.6 : 1, 
                      cursor: isCancelling ? "not-allowed" : "pointer", 
                    }} 
                    disabled={isCancelling} 
                    onClick={() => handleCancel(b._id)} 
                  > 
                    {isCancelling ? "Cancelling..." : "Cancel Booking"} 
                  </button> 
                )} 
 
                {/* Cancelled message */} 
                {b.status === "cancelled" && ( 
                  <p style={styles.cancelledMsg}> 
                    This booking has been cancelled 
                  </p> 
                )} 
              </div> 
            ); 
          })} 
        </div> 
      )} 
    </div> 
  ); 
}; 
const styles = { 
  page: { 
    padding: "30px", 
    background: "#f4f6f8", 
    minHeight: "100vh", 
    fontFamily: "Arial, sans-serif", 
  }, 
  header: { 
    display: "flex", 
    alignItems: "center", 
    gap: "16px", 
    marginBottom: "24px", 
  }, 
  title: { 
    fontSize: "26px", 
    fontWeight: "bold", 
    color: "#111", 
    margin: 0, 
  }, 
  backBtn: { 
    padding: "8px 14px", 
    background: "#fff", 
    border: "1px solid #ddd", 
    borderRadius: "8px", 
    cursor: "pointer", 
    fontSize: "13px", 
    color: "#555", 
  }, 
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
    gap: "20px", 
  }, 
  card: { 
    background: "#fff", 
    borderRadius: "14px", 
    padding: "20px", 
    boxShadow: "0 4px 15px rgba(0,0,0,0.07)", 
    display: "flex", 
    flexDirection: "column", 
    gap: "14px", 
  }, 
  cardTop: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "flex-start", 
    gap: "10px", 
  }, 
  roomName: { 
    fontSize: "16px", 
    fontWeight: "bold", 
    color: "#111", 
    margin: 0, 
  }, 
  badge: { 
    padding: "4px 10px", 
    borderRadius: "20px", 
    fontSize: "12px", 
    fontWeight: "600", 
    whiteSpace: "nowrap", 
  }, 
  details: { 
    display: "flex", 
    flexDirection: "column", 
    gap: "8px", 
  }, 
  detailRow: { 
    display: "flex", 
    justifyContent: "space-between", 
    fontSize: "13px", 
    borderBottom: "1px solid #f1f1f1", 
    paddingBottom: "6px", 
  }, 
  detailLabel: { 
    color: "#888", 
  }, 
  detailValue: { 
    color: "#222", 
    fontWeight: "500", 
  }, 
  cancelBtn: { 
    width: "100%", 
    padding: "10px", 
    background: "#fff", 
    color: "#dc2626", 
    border: "1px solid #dc2626", 
    borderRadius: "8px", 
    fontSize: "14px", 
    fontWeight: "600", 
    transition: "0.2s", 
    marginTop: "4px", 
  }, 
  cancelledMsg: { 
    textAlign: "center", 
    color: "#9ca3af", 
    fontSize: "13px", 
    margin: 0, 
    fontStyle: "italic", 
  }, 
  emptyBox: { 
    textAlign: "center", 
    marginTop: "80px", 
  }, 
  exploreBtn: { 
    marginTop: "16px", 
    padding: "10px 24px", 
    background: "#4cafef", 
    color: "#fff", 
    border: "none", 
    borderRadius: "25px", 
    cursor: "pointer", 
    fontSize: "14px", 
  }, 
};
 
export default MyBookings; 