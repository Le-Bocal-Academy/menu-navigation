import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Nav;
