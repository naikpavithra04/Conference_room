import BASE_URL from "./base";

// ✅ Create booking (FIXED URL + TOKEN)
export const createBooking = async (bookingData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/bookings/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // ✅ REQUIRED
    },
    body: JSON.stringify(bookingData),
  });

  return res.json();
};

// ✅ Get logged-in user's bookings (NO email needed anymore)
export const getMyBookings = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/bookings/my`, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ REQUIRED
    },
  });

  return res.json();
};

// (optional) if you actually create this route later
export const getBookingById = async (id) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}`);
  return res.json();
};