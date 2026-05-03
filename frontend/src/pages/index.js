import React from "react";
import "../index.css";

const Index = () => {
  
  return (
    <div
  className="index-hero"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="index-overlay">
        <div className="index-content">
          <h1>Conference Room Booking</h1>
          <p>Book your perfect meeting space with ease</p>
        </div>
      </div>
    </div>
  );
};

export default Index;