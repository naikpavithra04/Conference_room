import BASE_URL from "./base";

export const getNotifications = async (email) => {
  const res = await fetch(`${BASE_URL}/notifications?email=${email}`);
  return res.json();
};