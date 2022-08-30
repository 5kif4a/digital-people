import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="icon"></div>

      <h2>Digital People</h2>
    </Link>
  );
};

export default Logo;
