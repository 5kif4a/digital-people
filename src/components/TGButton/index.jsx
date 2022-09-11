import React from "react";
import "./styles.scss";

const TGButton = ({ text }) => {
  return (
    <a
      className={"tg-button"}
      href="https://t.me/digitalppl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <svg
        className="underline"
        width="263.78125"
        height="10"
        viewBox="0 0 263.78125 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="underline__path"
          d="M1,6 Q131.890625,-3 262.78125,3"
          strokeWidth="2"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="263.78125"
          strokeDashoffset="263.78125"
        ></path>
      </svg>
    </a>
  );
};

export default TGButton;
