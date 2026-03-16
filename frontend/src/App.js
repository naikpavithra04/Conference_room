import { Routes, Route } from "react-router-dom";

import Login from "./pages/User/Login";
import Dashboard from "./pages/Admin/Dashboard";
import Home from "./pages/Home";
import ManageRooms from "./pages/Admin/ManageRooms";
import ApproveBookings from "./pages/Admin/ApproveBookings";
import Reports from "./pages/Admin/Reports";
function App() {
  return (
    
      <Routes>

        <Route path="/" element={<Login />} />

        {/* User */}
        <Route path="/home" element={<Home />} />

        {/* Admin */}
<Route path="/admin/dashboard" element={<Dashboard />} />
<Route path="/admin/rooms" element={<ManageRooms />} />
<Route path="/admin/bookings" element={<ApproveBookings />} />
<Route path="/admin/reports" element={<Reports />} />
      </Routes>
  
  );
}

export default App;