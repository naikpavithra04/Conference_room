import { useState } from "react";

export default function PaymentModal({ onClose, onSuccess }) {
  const [status, setStatus] = useState("idle");

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const [error, setError] = useState("");

  const handlePayment = () => {
    if (!card.number || !card.expiry || !card.cvv || !card.name) {
      setError("All fields are required");
      return;
    }

    if (card.number.length < 12) {
      setError("Invalid card number");
      return;
    }

    setError("");
    setStatus("processing");

    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  // 💳 Format card number
  const formatCardNumber = (num) => {
    return num.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-2xl">

        {/* HEADER */}
        <h2 className="text-xl font-bold text-center mb-4">
          Secure Payment
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">
            {error}
          </p>
        )}

        {/* 💳 CARD PREVIEW */}
        {status === "idle" && (
          <>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-xl mb-4 shadow-lg">
              <p className="text-sm opacity-70">Card Number</p>
              <h3 className="text-lg tracking-widest">
                {card.number
                  ? formatCardNumber(card.number)
                  : "**** **** **** 1234"}
              </h3>

              <div className="flex justify-between mt-4 text-sm">
                <div>
                  <p className="opacity-70">Card Holder</p>
                  <p>{card.name || "Your Name"}</p>
                </div>
                <div>
                  <p className="opacity-70">Expires</p>
                  <p>{card.expiry || "MM/YY"}</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <input
              type="text"
              placeholder="Card Holder Name"
              value={card.name}
              onChange={(e) =>
                setCard({ ...card, name: e.target.value })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="text"
              placeholder="Card Number"
              value={card.number}
              onChange={(e) =>
                setCard({
                  ...card,
                  number: e.target.value.replace(/\D/g, ""),
                })
              }
              className="w-full border p-2 mb-3 rounded"
            />

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="MM/YY"
                value={card.expiry}
                onChange={(e) =>
                  setCard({ ...card, expiry: e.target.value })
                }
                className="w-1/2 border p-2 mb-3 rounded"
              />

              <input
                type="password"
                placeholder="CVV"
                value={card.cvv}
                onChange={(e) =>
                  setCard({ ...card, cvv: e.target.value })
                }
                className="w-1/2 border p-2 mb-3 rounded"
              />
            </div>

            <button
              onClick={handlePayment}
              className="bg-gradient-to-r from-green-500 to-green-700 text-white w-full py-2 rounded-lg shadow-md hover:scale-105 transition"
            >
              Pay ₹500
            </button>

            <button
              onClick={onClose}
              className="mt-2 text-sm text-gray-500 w-full"
            >
              Cancel
            </button>
          </>
        )}

        {/* PROCESSING */}
        {status === "processing" && (
          <div className="text-center">
            <p className="mb-3">Processing Payment...</p>
            <div className="animate-spin h-10 w-10 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
          </div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <div className="text-center">
            <h3 className="text-green-600 font-bold text-lg mb-2">
              Payment Successful 🎉
            </h3>

            <div className="bg-gray-100 p-3 rounded text-sm mb-3">
              <p><strong>Transaction ID:</strong> TXN{Date.now()}</p>
              <p><strong>Status:</strong> Paid</p>
              <p><strong>Amount:</strong> ₹500</p>
            </div>

            <button
              onClick={onSuccess}
              className="bg-purple-600 text-white px-4 py-2 rounded w-full"
            >
              Continue
            </button>

            <button
              onClick={onClose}
              className="mt-2 text-sm text-gray-500 w-full"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}