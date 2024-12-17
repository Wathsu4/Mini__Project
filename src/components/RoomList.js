import React from "react";

const rooms = [
  { id: 1, type: "Single Room", price: "$100 per night" },
  { id: 2, type: "Double Room", price: "$150 per night" },
  { id: 3, type: "Suite", price: "$300 per night" },
];

function RoomList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id} style={{ marginBottom: "10px" }}>
            <b>{room.type}</b> - {room.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
