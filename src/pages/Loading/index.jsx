import React from "react";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="loading-screen animate__animated animate__fadeIn">
      <div className="loading-screen__logo">
        <div className="loading-screen__img"></div>
        <h1 className="loading-screen__brand">Digital People</h1>
      </div>
    </div>
  );
};

export default Loading;
