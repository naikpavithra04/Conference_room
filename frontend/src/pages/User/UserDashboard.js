import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="container mt-5">

      <h2>User Dashboard</h2>

      <div className="list-group mt-4">

        <Link className="list-group-item" to="/rooms">
          View Rooms
        </Link>

        <Link className="list-group-item" to="/mybookings">
          My Bookings
        </Link>

      </div>
    </div>
  );
};

export default UserDashboard;