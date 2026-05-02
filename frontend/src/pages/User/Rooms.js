import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRooms } from "../../api/userApi";
import "../../styles/Rooms.css";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      const data = await getRooms();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div className="rooms-container">
      <h2 className="title">Available Rooms</h2>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room._id} className="room-card">

            {/* Image */}
            <div className="image-wrapper">
             <img
  src={
    room.name.toLowerCase().includes("conference")
      ? "https://images.unsplash.com/photo-1590650046871-92c887180603"
      : room.name.toLowerCase().includes("training")
      ? "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
      : "https://images.unsplash.com/photo-1556761175-4b46a572b786"
  }
  alt={room.name}
/>

              {/* Overlay */}
              <div className="overlay">
                <h3>{room.name}</h3>
              </div>
            </div>

            {/* Content */}
            <div className="room-content">
              <p><strong>Capacity:</strong> {room.capacity}</p>

              {/* Amenities (static or from backend later) */}
              <div className="amenities">
                <span>📶 WiFi</span>
                <span>❄️ AC</span>
                <span>📽 Projector</span>
              </div>

              {/* Buttons */}
              <div className="buttons">
                <button
                  className="view-btn"
                  onClick={() => navigate(`/rooms/${room._id}`)}
                >
                  View Details
                </button>

                <button
                  className="book-btn"
                  onClick={() =>
                    navigate(`/newbooking?roomId=${room._id}`)
                  }
                >
                  Book Now
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;