import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Conference Booking
      </Link>

      <div className="ms-auto">
        {user ? (
          <>
            <span className="text-white me-3">Welcome {user.name}</span>
            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-primary btn-sm me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-success btn-sm" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;