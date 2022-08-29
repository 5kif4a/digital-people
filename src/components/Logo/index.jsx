import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="logo">
      <LogoIcon />
      <h2>Digital People</h2>
    </div>
  );
};

export default Logo;
