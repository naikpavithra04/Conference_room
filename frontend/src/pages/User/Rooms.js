import React, { useEffect, useState } from "react";
import { getRooms } from "../../api/userApi";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Available Rooms</h3>

      {rooms.map((room) => (
        <div key={room._id} className="card p-3 mb-3">
          <h5>{room.name}</h5>
          <p>Capacity: {room.capacity}</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.href = `/newbooking?roomId=${room._id}`}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Rooms;