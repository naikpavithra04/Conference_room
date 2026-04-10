import { Routes, Route } from "react-router-dom";

import Login from "./pages/User/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/Home";
import ManageRooms from "./pages/Admin/ManageRooms";
import ApproveBookings from "./pages/Admin/ApproveBookings";
import Reports from "./pages/Admin/Reports";
import UserDashboard from "./pages/User/UserDashboard";
import Rooms from "./pages/User/Rooms";
import MyBookings from "./pages/User/MyBookings";
function App() {
  return (
    
      <Routes>

        <Route path="/login/:role" element={<Login />} />

        {/* User */}
        <Route path="/home" element={<Home />} />
      <Route path="/user" element={<UserDashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Admin */}
<Route path="/admin/dashboard" element={<Dashboard />} />
<Route path="/admin/rooms" element={<ManageRooms />} />
<Route path="/admin/bookings" element={<ApproveBookings />} />
<Route path="/admin/reports" element={<Reports />} />
      </Routes>
  
  );
}

export default App;