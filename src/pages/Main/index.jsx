import React from "react";
import { useTranslation } from "react-i18next";
import TGButton from "../../components/TGButton";
import "./styles.scss";
import { Link } from "react-router-dom";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main animate__animated animate__fadeIn">
      <div className="main__content">
        <div className="spacer"></div>

        <div className="text">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text") }} />
          <TGButton text={t("telegram")} />
        </div>

        <div className="text_mobile">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text_mobile") }} />
        </div>

        <div className="text_mobile__btn">
          <TGButton text={t("telegram")} disableUnderline />
        </div>

        <div className="info_wrapper">
          <div className="info">
            {i18n.language === "ru" ? (
              <>
                a{" "}
                <Link className="link" to="detailed">
                  {t("here")}
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
                      stroke-width="2"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="263.78125"
                      stroke-dashoffset="263.78125"
                    ></path>
                  </svg>
                </Link>
                {t("info_text")}
              </>
            ) : (
              <>
                {t("info_text")}{" "}
                <Link className="link" to="detailed">
                  {t("here")}
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
                      stroke-width="2"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="263.78125"
                      stroke-dashoffset="263.78125"
                    ></path>
                  </svg>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
