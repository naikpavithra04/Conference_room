
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="hero-section text-center p-5 shadow-sm">
        <h1 className="fw-bold">Welcome to Conference Room Booking</h1>
        <p className="text-muted mt-3">
          Easily book and manage your meeting rooms with just a few clicks.
        </p>



        <div className="mt-4 text-center">
  <Link
    to="/login/user"
    className="btn btn-primary btn-lg px-4"
    style={{ marginRight: "20px" }}
  >
    User Login
  </Link>

  <Link
    to="/login/admin"
    className="btn btn-outline-danger btn-lg px-4"
  >
    Admin Login
  </Link>
</div>
      </div>

      {/* Features Section */}
      <div className="row mt-5 text-center">

        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100">
            <div className="card-body">
              <h5 className="card-title">View Rooms</h5>
              <p className="card-text">
                Explore all available conference rooms with details.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100">
            <div className="card-body">
              <h5 className="card-title">Book Easily</h5>
              <p className="card-text">
                Reserve rooms quickly for your meetings and events.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card custom-card h-100">
            <div className="card-body">
              <h5 className="card-title">Booking History</h5>
              <p className="card-text">
                Track all your past and upcoming bookings.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;