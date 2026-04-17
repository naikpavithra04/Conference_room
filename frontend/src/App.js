import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Userlogin from "./pages/User/Userlogin";
import Home from "./pages/Home";
import Adminlogin from "./pages/Admin/Adminlogin";
import Dashboard from "./pages/Admin/Dashboard";
import ManageRooms from "./pages/Admin/ManageRooms";
import ApproveBookings from "./pages/Admin/ApproveBookings";
import Reports from "./pages/Admin/Reports";
import UserDashboard from "./pages/User/UserDashboard";
import Register from "./pages/User/Register";
import Rooms from "./pages/User/Rooms";
import MyBookings from "./pages/User/MyBookings";
import NewBooking from "./pages/Booking/NewBooking";
import BookingDetails from "./pages/Booking/BookingDetails";
import BookingHistory from "./pages/Booking/BookingHistory";
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/navbar"element={<Navbar/>} />

        <Route path="/login/admin" element={<Adminlogin />} />


        {/* User */}
        
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login/user" element={<Userlogin />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/register" element={<Register/>} />
        {/* Admin */}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/rooms" element={<ManageRooms />} />
        <Route path="/admin/bookings" element={<ApproveBookings />} />
        <Route path="/admin/reports" element={<Reports />} />

        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/bookinghistory" element={<BookingHistory />} />
        <Route path="/newbooking" element={<NewBooking />} />

      </Routes>
  
  );
}

export default App;