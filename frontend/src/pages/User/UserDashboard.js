import { AuthContext } from "../../context/AuthContext"; // ✅ FIXED PATH
import { useNavigate } from "react-router-dom";
import "../../styles/Dashboard.css";
import React, { useContext } from "react";
    const UserDashboard = () => { 
      const navigate = useNavigate(); 
      const { logout } = useContext(AuthContext);
       return ( <div className="dashboard"> {/* Main Content */} 
       <div className="main full"> {/* Topbar with Navigation */} 
        <div className="topbar"> 
          <h2 className="logo-text">CRB</h2>
           <div className="top-nav"> 
            <span onClick={() => navigate("/home")}>Home</span> 
            <span onClick={() => navigate("/about")}>About</span> 
            <span onClick={() => navigate("/rooms")}>Rooms</span>
             <span onClick={() => navigate("/mybookings")}>Room Bookings</span>
              </div> 
              <button
  className="btn btn-danger btn-sm"
  onClick={() => {
    logout();
    navigate("/");
  }}
>
  Logout
</button>
              </div> {/* Hero Section */}
               <div className="dashboard-hero">
                 <div className="glass-card">
                   <h1>Luxury Meeting Rooms</h1>
                    <p>Book high-end spaces for your professional meetings</p>
                     <button onClick={() => navigate("/rooms")}> Explore Rooms </button>
                      </div> 
                      </div> 
                      </div> 
                      </div>
                       ); };
 export default UserDashboard;