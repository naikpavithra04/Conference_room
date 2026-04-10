import BASE_URL from "./base";

/* ================= LOGIN ================= */

export const loginUser = async (data) => {
  const res = await API.post("/users/login", data);
  return res.data;
};

/* ================= REGISTER ================= */

export const registerUser = async (data) => {
  const res = await API.post("/users/register", data);
  return res.data;
};

/* ================= GET ROOMS ================= */

export const getRooms = async () => {
  const res = await API.get("/users/rooms");
  return res.data;
};

/* ================= BOOK ROOM ================= */

export const bookRoom = async (data) => {
  const res = await API.post("/booking/create", data);
  return res.data;
};

/* ================= MY BOOKINGS ================= */

export const getMyBookings = async () => {
  const res = await API.get("/booking/my");
  return res.data;
};

/* ================= PAYMENT ================= */

export const makePayment = async (data) => {
  const res = await API.post("/payment/pay", data);
  return res.data;
};

/* ================= NOTIFICATIONS ================= */

export const getNotifications = async () => {
  const res = await API.get("/notification");
  return res.data;
};