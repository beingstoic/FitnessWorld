import React from "react";
import HeaderComponent from "./Components/HeaderComponent";
import About from "./Pages/About";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
