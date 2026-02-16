import BASE_URL from "./base";

export const getNotifications = async () => {
  const res = await fetch(`${BASE_URL}/notifications`);
  return res.json();
};
