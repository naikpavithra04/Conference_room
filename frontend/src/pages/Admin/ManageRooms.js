import React, { useEffect, useState } from "react";
import {
  getAllRooms,
  addRoom,
  updateRoom,
  deleteRoom,
} from "../../api/adminApi";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    name: "",
    capacity: "",
    location: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await updateRoom(editId, form);
        alert("Room Updated");
      } else {
        await addRoom(form);
        alert("Room Added");
      }

      setForm({ name: "", capacity: "", location: "" });
      setEditId(null);
      fetchRooms();
    } catch (err) {
      alert("Error saving room");
    }
  };

  const handleEdit = (room) => {
    setForm({
      name: room.name,
      capacity: room.capacity,
      location: room.location,
    });
    setEditId(room._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteRoom(id);
      alert("Room Deleted");
      fetchRooms();
    } catch (err) {
      alert("Delete Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Manage Rooms</h3>

      {/* ADD / EDIT ROOM FORM */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Room Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) =>
            setForm({ ...form, capacity: e.target.value })
          }
        />

        <input
          className="form-control mb-2"
          placeholder="Location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        <button className="btn btn-primary">
          {editId ? "Update Room" : "Add Room"}
        </button>
      </form>

      {/* ROOM LIST */}
      {rooms.map((room) => (
        <div key={room._id} className="card mb-2 shadow-sm">
          <div className="card-body">
            <h5>{room.name}</h5>
            <p>Capacity: {room.capacity}</p>
            <p>Location: {room.location}</p>

            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEdit(room)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(room._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageRooms;
