import React from "react";
import { useTranslation } from "react-i18next";
import TGButton from "../../components/TGButton";
import "./styles.scss";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="main animate__animated animate__fadeIn">
      <div className="main__content">
        <div className="spacer"></div>

        <div className="text">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text") }} />
          <TGButton text={t("channel")} />
        </div>

        <div className="text_mobile">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text_mobile") }} />
        </div>

        <div className="text_mobile__btn">
          <TGButton text={t("channel")} disableUnderline />
        </div>

        <div className="info_wrapper">
          <div className="info">
            {t("info_text")}{" "}
            <a className="link" href="https://t.me/Alxvasilevv">
              {t("telegram")}
              <svg
                className="link__underline"
                width="263.78125"
                height="10"
                viewBox="0 0 263.78125 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="link__underline__path"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
