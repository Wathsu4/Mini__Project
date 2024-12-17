import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#4CAF50", padding: "10px" }}>
      <h2 style={{ color: "white" }}>Hotel Management System</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/booking" style={{ color: "white" }}>
          Book a Room
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
