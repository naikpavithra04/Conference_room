import axiosInstance from "./axiosInstance";

// Existing functions...
export const getAllBookings = async () => {
  const response = await axiosInstance.get("/admin/bookings");
  return response.data;
};

export const updateBookingStatus = async (id, status) => {
  const response = await axiosInstance.put(`/admin/bookings/${id}`, { status });
  return response.data;
};

// ✅ ROOM MANAGEMENT APIs

export const getAllRooms = async () => {
  const response = await axiosInstance.get("/admin/rooms");
  return response.data;
};

export const createRoom = async (data) => {
  const response = await axiosInstance.post("/admin/rooms", data);
  return response.data;
};

export const updateRoom = async (id, data) => {
  const response = await axiosInstance.put(`/admin/rooms/${id}`, data);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await axiosInstance.delete(`/admin/rooms/${id}`);
  return response.data;
};
