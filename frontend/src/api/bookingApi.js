import axiosInstance from "./axiosInstance";

export const createBooking = async (data) => {
  const response = await axiosInstance.post("/bookings", data);
  return response.data;
};

export const getMyBookings = async () => {
  const response = await axiosInstance.get("/bookings/my");
  return response.data;
};

export const getBookingById = async (id) => {
  const response = await axiosInstance.get(`/bookings/${id}`);
  return response.data;
};
