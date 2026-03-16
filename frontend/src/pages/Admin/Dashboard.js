import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <div className="list-group mt-4">

        <Link className="list-group-item" to="/admin/rooms">
          Manage Rooms
        </Link>

        <Link className="list-group-item" to="/admin/bookings">
          Approve Bookings
        </Link>

        <Link className="list-group-item" to="/admin/reports">
          View Reports
        </Link>

      </div>
    </div>
  );
};

export default Dashboard;