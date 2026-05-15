import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);

  const [newRoom, setNewRoom] = useState({
    name: "",
    capacity: "",
    location: "",
    price: ""
  });

  // ✅ EDIT STATE
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch(`${BASE_URL}/rooms`);
      const data = await res.json();

      setRooms(data);

    } catch (err) {
      alert("Failed to load rooms");
    }
  };

  const handleChange = (e) => {
    setNewRoom({
      ...newRoom,
      [e.target.name]: e.target.value
    });
  };

  /* ================= ADD ROOM ================= */

  const handleAddRoom = async () => {

    if (
      !newRoom.name ||
      !newRoom.capacity ||
      !newRoom.location ||
      !newRoom.price
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      // ✅ UPDATE ROOM
      if (editingId) {

        const res = await fetch(
          `${BASE_URL}/rooms/${editingId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newRoom)
          }
        );

        const updatedRoom = await res.json();

        setRooms((prev) =>
          prev.map((room) =>
            room._id === editingId
              ? updatedRoom
              : room
          )
        );

        alert("Room updated successfully");

        setEditingId(null);

      } else {

        // ✅ ADD ROOM
        const res = await fetch(
          `${BASE_URL}/rooms`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newRoom)
          }
        );

        const data = await res.json();

        setRooms((prev) => [
          ...prev,
          data
        ]);

        alert("Room added successfully");
      }

      // RESET FORM
      setNewRoom({
        name: "",
        capacity: "",
        location: "",
        price: ""
      });

    } catch (err) {
      alert("Error saving room");
    }
  };

  /* ================= DELETE ROOM ================= */

  const handleDelete = async (id) => {
    try {

      await fetch(
        `${BASE_URL}/rooms/${id}`,
        {
          method: "DELETE"
        }
      );

      setRooms((prev) =>
        prev.filter(
          (room) => room._id !== id
        )
      );

    } catch (err) {
      alert("Error deleting room");
    }
  };

  /* ================= EDIT ROOM ================= */

  const handleEdit = (room) => {

    setEditingId(room._id);

    setNewRoom({
      name: room.name,
      capacity: room.capacity,
      location: room.location,
      price: room.price
    });
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>
        🏨 Manage Rooms
      </h2>

      {/* FORM CARD */}
      <div style={styles.card}>

        <h3 style={styles.cardTitle}>
          {editingId
            ? "Update Room"
            : "Add New Room"}
        </h3>

        <div style={styles.formGrid}>

          <input
            style={styles.input}
            name="name"
            placeholder="Room Name"
            value={newRoom.name}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="capacity"
            placeholder="Capacity"
            value={newRoom.capacity}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="location"
            placeholder="Location"
            value={newRoom.location}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            name="price"
            placeholder="Price"
            value={newRoom.price}
            onChange={handleChange}
          />

        </div>

        <button
          style={styles.button}
          onClick={handleAddRoom}
        >
          {editingId
            ? "Update Room"
            : "+ Add Room"}
        </button>

      </div>

      {/* TABLE CARD */}
      <div style={styles.card}>

        <h3 style={styles.cardTitle}>
          Room List
        </h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Capacity</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>

            {rooms.map((room) => (
              <tr
                key={room._id}
                style={styles.row}
              >

                <td style={styles.td}>
                  {room.name}
                </td>

                <td style={styles.td}>
                  {room.capacity}
                </td>

                <td style={styles.td}>
                  {room.location}
                </td>

                <td style={styles.td}>
                  ₹{room.price}
                </td>

                <td style={styles.td}>

                  {/* EDIT BUTTON */}
                  <button
                    style={styles.editBtn}
                    onClick={() =>
                      handleEdit(room)
                    }
                  >
                    Edit
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    style={styles.deleteBtn}
                    onClick={() =>
                      handleDelete(room._id)
                    }
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRooms;

/* ---------- STYLES ---------- */

const styles = {
  page: {
    padding: "30px",
    background: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "Arial"
  },

  title: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#222"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow:
      "0 4px 15px rgba(0,0,0,0.08)"
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600"
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, 1fr)",
    gap: "10px",
    marginBottom: "15px"
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none"
  },

  button: {
    padding: "10px 15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #ddd",
    color: "#555"
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #eee"
  },

  row: {
    transition: "0.2s"
  },

  editBtn: {
    padding: "6px 10px",
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "8px"
  },

  deleteBtn: {
    padding: "6px 10px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};