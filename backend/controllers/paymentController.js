const Payment = require("../models/Payment");

exports.makePayment = async (req, res) => {
  const payment = await Payment.create(req.body);
  res.json(payment);
};
