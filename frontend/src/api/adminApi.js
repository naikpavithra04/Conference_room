import BASE_URL from "./base";

/* ================= BOOKING ================= */

export const getAllBookings = async () => {
  const res = await fetch(`${BASE_URL}/admin/bookings`);
  return res.json();
};

export const updateBookingStatus = async (id, status) => {
  const res = await fetch(`${BASE_URL}/admin/bookings/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return res.json();
};

/* ================= ROOMS ================= */

export const getAllRooms = async () => {
  const res = await fetch(`${BASE_URL}/admin/rooms`);
  return res.json();
};

export const addRoom = async (roomData) => {
  const res = await fetch(`${BASE_URL}/admin/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });

  return res.json();
};

export const updateRoom = async (id, roomData) => {
  const res = await fetch(`${BASE_URL}/admin/rooms/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });

  return res.json();
};

export const deleteRoom = async (id) => {
  const res = await fetch(`${BASE_URL}/admin/rooms/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
