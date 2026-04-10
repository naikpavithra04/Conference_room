import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>

    <link to="/login/user">User Login</link>

  <link to="/login/admin">Admin Login</link>
      <p>View available rooms</p>
      <p>Book conference room</p>
      <p>Check booking history</p>
    </div>
  );
};

export default Home;