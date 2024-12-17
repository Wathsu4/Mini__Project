import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomList from "./components/RoomList";
import BookingForm from "./components/BookingForm";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
