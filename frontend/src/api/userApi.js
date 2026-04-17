import BASE_URL from "./base";

/* ================= LOGIN ================= */

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
};

/* ================= REGISTER ================= */

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

/* ================= GET ROOMS ================= */

export const getRooms = async () => {
  const res = await fetch(`${BASE_URL}/users/rooms`);
  return res.json();
};

/* ================= BOOK ROOM ================= */

export const bookRoom = async (data) => {
  const res = await fetch(`${BASE_URL}/users/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

/* ================= MY BOOKINGS ================= */

export const getMyBookings = async (email) => {
  const res = await fetch(`${BASE_URL}/users/bookings/${email}`);

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to load bookings");
  }

  return result;
};
/* ================= PAYMENT ================= */

export const makePayment = async (data) => {
  const res = await fetch(`${BASE_URL}/payment/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

/* ================= NOTIFICATIONS ================= */

export const getNotifications = async () => {
  const res = await fetch(`${BASE_URL}/notification`);
  return res.json();
};