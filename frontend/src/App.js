import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/index";
import BookingForm from "./components/BookingForm";
import RoomCard from "./components/RoomCard";
import Userlogin from "./pages/User/Userlogin";
import Adminlogin from "./pages/Admin/Adminlogin";
import Dashboard from "./pages/Admin/Dashboard";
import ManageRooms from "./pages/Admin/ManageRooms";
import ApproveBookings from "./pages/Admin/ApproveBookings";
import Reports from "./pages/Admin/Reports";
import UserDashboard from "./pages/User/UserDashboard";
import Register from "./pages/User/Register";
import Rooms from "./pages/User/Rooms";
import ForgotPassword from "./pages/User/ForgotPassword";
import ResetPassword from "./pages/User/ResetPassword";
import Home from "./pages/Home";
import MyBookings from "./pages/User/MyBookings";
import NewBooking from "./pages/Booking/NewBooking";
import BookingDetails from "./pages/Booking/BookingDetails";
import BookingHistory from "./pages/Booking/BookingHistory";

function App() {
  const location = useLocation();

  // ❌ Navbar should NOT show on these pages
  const hideNavbarRoutes = [
    "/user",
    "/rooms",
    "/mybookings",
    "/newbooking",
    "/bookingdetails",
    "/bookinghistory",
    "/admin/dashboard",
    "/admin/rooms",
    "/admin/bookings",
    "/admin/reports"
  ];

  return (
    <>
      {/* ✅ Show Navbar only if NOT in dashboard pages */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Index />} />

        {/* Auth */}
        <Route path="/login/user" element={<Userlogin />} />
        <Route path="/login/admin" element={<Adminlogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* User */}
         <Route path="/home"element={<Home/>}/>
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/mybookings" element={<MyBookings />} />

        {/* Booking */}
        <Route path="/newbooking" element={<NewBooking />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/rooms" element={<ManageRooms />} />
        <Route path="/admin/bookings" element={<ApproveBookings />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Components */}
        <Route path="/components/bookingform" element={<BookingForm />} />
        <Route path="/components/roomcard" element={<RoomCard />} />
      </Routes>
    </>
  );
}

export default App;