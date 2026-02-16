import React from "react";
import RoomCard from "../components/RoomCard";

const Home = () => {
  const rooms = [
    { _id: "1", name: "Conference Hall A", capacity: 50, location: "Block 1" },
    { _id: "2", name: "Meeting Room B", capacity: 20, location: "Block 2" },
  ];

  return (
    <div className="container mt-5">
      <h2>Available Rooms</h2>
      {rooms.map((room) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>
  );
  return (
    <div className="container mt-5">
      <h2>Welcome to Conference Booking System</h2>
      <p>Book conference rooms easily and efficiently.</p>
    </div>
  );
};

export default Home;
