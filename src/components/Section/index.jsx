import React from "react";
import "./styles.scss";
import clsx from "clsx";

const Section = ({ title, titleNoMinHeight, noTextMargin, text, delay }) => {
  return (
    <div
      className="section animate__animated"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3
        className={clsx("section__title", {
          section__title_no_min_height: titleNoMinHeight,
        })}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className={clsx("section__text", {
          section__text_no_margin: noTextMargin,
        })}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Section;
