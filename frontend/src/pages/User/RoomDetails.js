import React from "react";

const RoomDetails = () => {

  return (

    <div className="container mt-5">

      <div className="card shadow-lg p-4">

        <h2 className="text-primary mb-4">
          Room Details
        </h2>

        {/* ROOM INFO */}
        <div className="mb-4">

          <h4>Conference Room</h4>

          <p>
            Spacious room suitable for meetings,
            presentations, workshops and team discussions.
          </p>

        </div>

        {/* ROOM RULES & TERMS */}
        <div className="mt-4 p-4 border rounded bg-light">

          <h4 className="mb-3 text-primary">
            Room Usage Rules & Terms
          </h4>

          <ul className="list-group">

            <li className="list-group-item">
              ⏰ Booking amount is valid for
              <strong> 1 hour duration only.</strong>
            </li>

            <li className="list-group-item">
              ⏳ Users can use the room only during
              their selected booked time slot.
            </li>

            <li className="list-group-item">
              ➕ If you want to extend your booking,
              you must book the room again and make
              a separate payment.
            </li>

            <li className="list-group-item">
              ❌ Once a room is booked,
              <strong> cancellation is not allowed.</strong>
            </li>

            <li className="list-group-item">
              🚫 Do not damage any room property,
              furniture, projector, AC, or equipment.
            </li>

            <li className="list-group-item">
              🧹 Please maintain cleanliness
              and leave the room properly after use.
            </li>

            <li className="list-group-item">
              🔇 Maintain discipline and avoid
              unnecessary noise inside the room.
            </li>

            <li className="list-group-item">
              ⚠️ Any misuse or damage may result
              in penalty charges or booking restrictions.
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default RoomDetails;