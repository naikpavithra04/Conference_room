import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import NewBooking from "../pages/Booking/NewBooking";
import BookingDetails from "../pages/Booking/BookingDetails";
import BookingHistory from "../pages/Booking/BookingHistory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/booking/new/:roomId" element={<NewBooking />} />
      <Route path="/booking/details" element={<BookingDetails />} />
      <Route path="/booking/history" element={<BookingHistory />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;


