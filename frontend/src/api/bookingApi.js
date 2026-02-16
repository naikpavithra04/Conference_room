import BASE_URL from "./base";

export const createBooking = async (bookingData) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  return res.json();
};

export const getMyBookings = async () => {
  const res = await fetch(`${BASE_URL}/bookings/my`);

  return res.json();
};

export const getBookingById = async (id) => {
  const res = await fetch(`${BASE_URL}/bookings/${id}`);

  return res.json();
};
