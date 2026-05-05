import React from "react";
import { Link } from "react-router-dom";
import { Home, BedDouble, ClipboardList, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const cards = [
    {
      title: "Manage Rooms",
      desc: "Add, edit and manage hotel rooms",
      icon: <BedDouble className="w-7 h-7" />,
      link: "/admin/rooms",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Approve Bookings",
      desc: "Approve or reject user bookings",
      icon: <ClipboardList className="w-7 h-7" />,
      link: "/admin/bookings",
      color: "from-green-500 to-green-600"
    },
    {
      title: "View Reports",
      desc: "Analytics and booking insights",
      icon: <BarChart3 className="w-7 h-7" />,
      link: "/admin/reports",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold flex items-center gap-3 text-gray-800">
            <Home className="w-8 h-8 text-blue-600" />
            Admin Dashboard
          </h2>
          <p className="text-gray-500 mt-2">
            Manage your hotel system efficiently
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${card.color} shadow-lg mb-4`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {card.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {card.desc}
              </p>

              <div className="mt-4 text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition">
                Open →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;