import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await fetch(`${BASE_URL}/rooms`);
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load rooms");
    }
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
          {Array.isArray(rooms) &&
            rooms.map((room) => (
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