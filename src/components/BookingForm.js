import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book a Room</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        <br />
        <label>Room Type:</label>
        <select name="roomType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
          <option value="Suite">Suite</option>
        </select>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
