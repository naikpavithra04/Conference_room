import { useState } from "react";
import { makePayment } from "../api/paymentApi";

export default function PaymentModal({
  onClose,
  onSuccess,
  amount,
  bookingId
}) {

  const [status, setStatus] = useState("idle");

  const [upiId, setUpiId] = useState("");

  const [error, setError] = useState("");

  const handlePayment = async () => {

    if (!upiId) {
      setError("Please enter UPI ID");
      return;
    }

    // Simple UPI validation
    if (!upiId.includes("@")) {
      setError("Invalid UPI ID");
      return;
    }

    try {

      setError("");
      setStatus("processing");

      // ✅ Backend payment API
      await makePayment({
        bookingId
      });

      setTimeout(() => {
        setStatus("success");
      }, 2000);

    } catch (err) {
      setError("Payment failed");
      setStatus("idle");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-2xl">

        {/* HEADER */}
        <h2 className="text-2xl font-bold text-center mb-4 text-purple-700">
          UPI Payment
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        {/* PAYMENT FORM */}
        {status === "idle" && (
          <>

            {/* PAYMENT BOX */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 rounded-xl mb-5 shadow-lg">

              <p className="text-sm opacity-80">
                Amount to Pay
              </p>

              <h1 className="text-3xl font-bold mt-1">
                ₹{amount}
              </h1>

              <p className="mt-4 text-sm opacity-80">
                Pay securely using any UPI app
              </p>

            </div>

            {/* UPI INPUT */}
            <input
              type="text"
              placeholder="Enter UPI ID (example@upi)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full border p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* PAY BUTTON */}
            <button
              onClick={handlePayment}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white w-full py-3 rounded-lg shadow-md hover:scale-105 transition"
            >
              Pay ₹{amount}
            </button>

            {/* CANCEL */}
            <button
              onClick={onClose}
              className="mt-3 text-sm text-gray-500 w-full"
            >
              Cancel
            </button>

          </>
        )}

        {/* PROCESSING */}
        {status === "processing" && (
          <div className="text-center">

            <p className="mb-4 text-lg">
              Processing UPI Payment...
            </p>

            <div className="animate-spin h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>

          </div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <div className="text-center">

            <h3 className="text-green-600 font-bold text-2xl mb-3">
              Payment Successful 🎉
            </h3>

            <div className="bg-gray-100 p-4 rounded text-sm mb-4 text-left">

              <p className="mb-2">
                <strong>Transaction ID:</strong>
                {" "}
                TXN{Date.now()}
              </p>

              <p className="mb-2">
                <strong>Status:</strong>
                {" "}
                Paid
              </p>

              <p>
                <strong>Amount:</strong>
                {" "}
                ₹{amount}
              </p>

            </div>

            <button
              onClick={onSuccess}
              className="bg-purple-600 text-white px-4 py-3 rounded-lg w-full hover:bg-purple-700"
            >
              Continue
            </button>

            <button
              onClick={onClose}
              className="mt-3 text-sm text-gray-500 w-full"
            >
              Close
            </button>

          </div>
        )}

      </div>
    </div>
  );
}