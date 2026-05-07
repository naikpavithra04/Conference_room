export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-12 px-6">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Conference Room Booking System
          </h1>

          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            A smart and seamless platform for booking conference,
            meeting, and training rooms with secure online payment,
            real-time availability, and premium facilities.
          </p>
        </div>

        {/* ABOUT SECTION */}
        <div className="grid md:grid-cols-2 gap-8 p-10">

          <div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              About Our Platform
            </h2>

            <p className="text-gray-700 leading-8 text-lg">
              Our Conference Room Booking System helps users easily
              reserve professional spaces for meetings, workshops,
              training sessions, interviews, and business discussions.
              
              The platform provides an efficient room scheduling
              experience with transparent pricing, secure payment,
              and real-time booking management.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
                <span className="text-2xl">✅</span>
                <p>Easy room booking process</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
                <span className="text-2xl">💳</span>
                <p>Secure online UPI payment</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
                <span className="text-2xl">⏰</span>
                <p>Real-time slot availability</p>
              </div>

              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-xl">
                <span className="text-2xl">🏢</span>
                <p>Modern conference and training rooms</p>
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-center items-center">
           <img
  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop"
  alt="Modern Workspace"
  className="rounded-3xl shadow-xl h-[420px] object-cover"
/>
          </div>

        </div>

        {/* FEATURES */}
        <div className="bg-slate-50 py-12 px-8">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">
            Premium Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-3">
                Smart Scheduling
              </h3>
              <p className="text-gray-600 leading-7">
                Book conference rooms based on available dates and
                time slots without conflicts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-3">
                Modern Facilities
              </h3>
              <p className="text-gray-600 leading-7">
                Rooms are equipped with WiFi, AC, projector,
                comfortable seating, and presentation support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3">
                Secure Payments
              </h3>
              <p className="text-gray-600 leading-7">
                Safe and easy UPI payment integration with
                instant booking confirmation.
              </p>
            </div>

          </div>
        </div>


        {/* CONTACT SECTION */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-14 px-8 text-center rounded-b-3xl">

          <h2 className="text-4xl font-bold mb-8">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="text-xl font-semibold mb-2">
                Address
              </h3>
              <p>
                Conference Booking Center,
                Business Park,
                Bangalore, India
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-semibold mb-2">
                Phone
              </h3>
              <p>+91 9876543210</p>
              <p>+91 9123456780</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>
              <p>support@conferencebooking.com</p>
              <p>helpdesk@conferencebooking.com</p>
            </div>

          </div>

          <p className="mt-10 text-sm opacity-80">
            © 2026 Conference Room Booking System. All Rights Reserved.
          </p>

        </div>

      </div>
    </div>
  );
}
