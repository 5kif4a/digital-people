import React from "react";
import "./styles.scss";

const TGButton = ({ text }) => {
  return (
    <a
      className="tg-button"
      href="https://t.me/digitalppl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default TGButton;
