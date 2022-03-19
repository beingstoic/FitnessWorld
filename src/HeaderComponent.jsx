import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
export default function HeaderComponent() {
  return (
    <div>
      <div className="navbar ">
        <Link to="/" className="logo">
          <img
            src="https://fitnessworld.ca/content/themes/sn/images/fw-wordmark-blk.png"
            className="bg-img"
            alt=""
          />
        </Link>
        <div className="logo"></div>
        <div className="menu-items">
          <Link to="about" className="menu-item">About us</Link>
          <Link to="contact-us"className="menu-item">Contact us</Link>
        </div>
      </div>
      
      
    </div>
  );
} 
