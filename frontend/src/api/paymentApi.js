import BASE_URL from "./base";

export const makePayment = async (paymentData) => {
  const res = await fetch(`${BASE_URL}/payments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  return res.json();
};
