import React from "react";
import "./styles.scss";

const Section = ({ title, text }) => {
  return (
    <div className="section">
      <h3 className="section__title" dangerouslySetInnerHTML={{__html: title}}/>

      <p className="section__text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Section;
