import React from "react";
import "./styles.scss";

const TGButton = ({ text }) => {
  return (
    <a className="tg-button" href="/">
      {text}
    </a>
  );
};

export default TGButton;
