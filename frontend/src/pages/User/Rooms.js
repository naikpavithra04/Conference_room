import React, { useEffect, useState } from "react";
import { getRooms, bookRoom } from "../../api/userApi";

const Rooms = () => {

  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const data = await getRooms();
    setRooms(data);
  };

  const handleBooking = async (roomId) => {
    await bookRoom({
      roomId,
      name,
      email,
      date,
    });

    alert("Booking request sent");
  };

  return (
    <div className="container mt-5">

      <h2>Available Rooms</h2>

      <input
        className="form-control mt-3"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mt-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control mt-2"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="mt-4">

        {rooms.map((room) => (
          <div key={room._id} className="card mt-3 p-3">

            <h4>Room {room.roomNumber}</h4>
            <p>Type: {room.type}</p>
            <p>Price: ₹{room.price}</p>

            <button
              className="btn btn-primary"
              onClick={() => handleBooking(room._id)}
            >
              Book Room
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Rooms;