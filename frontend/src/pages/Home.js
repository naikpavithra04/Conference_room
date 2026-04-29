import React from "react";
// import { Link } from "react-router-dom"; // keep only if you use it

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">📅 Conference Room Booking</h1>
        <div className="space-x-3">
          <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg">
            User Login
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            Admin Login
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Welcome to <br /> Conference Room Booking
          </h2>
          <p className="text-gray-600">
            Easily book and manage your meeting rooms with just a few clicks.
          </p>
        </div>

        <div className="relative w-full max-w-md mt-6 md:mt-0">
  <img
    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    alt="Conference Room"
    className="w-full h-auto object-cover rounded-2xl"
  />
  <div className="absolute inset-0 bg-black/20 rounded-2xl hover:bg-black/10 transition"></div>
</div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-10">
        <FeatureCard
          icon="📂"
          title="View Rooms"
          desc="Explore all available conference rooms with details."
          button="View Rooms"
        />
        <FeatureCard
          icon="📅"
          title="Book Easily"
          desc="Reserve rooms quickly for your meetings and events."
          button="Book a Room"
        />
        <FeatureCard
          icon="⏱"
          title="Booking History"
          desc="Track all your past and upcoming bookings."
          button="View History"
        />
      </section>

      {/* Help Section */}
      <section className="mx-10 my-10 bg-purple-100 p-6 rounded-xl flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg">Need Help?</h3>
          <p className="text-gray-600">
            Contact the administrator for any assistance.
          </p>
        </div>
        <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg">
          Contact Admin
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Conference Room Booking System. All rights reserved.
      </footer>

    </div>
  );
}

function FeatureCard({ icon, title, desc, button }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
        {button} →
      </button>
    </div>
  );
}