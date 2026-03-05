exports.simulatePayment = async (amount) => {
  return { transactionId: "TXN" + Date.now(), amount, status: "success" };
};
