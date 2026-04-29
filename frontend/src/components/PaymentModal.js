import { useState } from "react";

export default function PaymentModal({ onClose, onSuccess }) {
  const [status, setStatus] = useState("idle");

  const handlePayment = () => {
    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
      if (onSuccess) onSuccess(); // notify parent
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-[350px] shadow-lg">

        <h2 className="text-xl font-bold mb-4">Payment</h2>

        {status === "idle" && (
          <>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Expiry Date"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full border p-2 mb-4 rounded"
            />

            <button
              onClick={handlePayment}
              className="bg-green-600 text-white w-full py-2 rounded"
            >
              Pay Now
            </button>
          </>
        )}

        {status === "processing" && (
          <p className="text-center">Processing Payment...</p>
        )}

        {status === "success" && (
          <div className="text-center">
            <h3 className="text-green-600 font-bold">
              Payment Successful ✅
            </h3>
            <button
              onClick={onClose}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}