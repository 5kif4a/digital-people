import React from "react";
import Logo from "../Logo";
import SwitchLocale from "../SwitchLocale";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SwitchLocale />
    </header>
  );
};

export default Header;
