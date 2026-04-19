import React from "react";
import { Link } from "react-router-dom";
import { Home, BedDouble, ClipboardList } from "lucide-react";

const UserDashboard = () => {
  const cards = [
    {
      title: "View Rooms",
      icon: <BedDouble className="w-6 h-6" />,
      link: "/rooms",
    },
    {
      title: "My Bookings",
      icon: <ClipboardList className="w-6 h-6" />,
      link: "/mybookings",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Home /> User Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 flex items-center gap-4"
            >
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                {card.icon}
              </div>
              <span className="text-lg font-medium">{card.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;