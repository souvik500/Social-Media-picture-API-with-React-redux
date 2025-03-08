import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Social Media App</h1>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
