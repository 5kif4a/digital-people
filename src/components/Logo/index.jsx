import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import "./styles.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <LogoIcon />

      <h2>Digital People</h2>
    </Link>
  );
};

export default Logo;
