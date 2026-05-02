import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">
          Capacity: {room.capacity} <br />
          Location: {room.location}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/booking/new/${room._id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;