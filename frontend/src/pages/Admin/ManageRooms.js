import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await axios.get("http://localhost:5000/api/rooms");
    setRooms(res.data);
  };

  return (
    <div className="container mt-5">
      <h2>Manage Rooms</h2>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.name}</td>
              <td>{room.capacity}</td>
              <td>{room.location}</td>
              <td>{room.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRooms;