import React from "react";
import { useTranslation } from "react-i18next";
import TGButton from "../../components/TGButton";
import "./styles.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main animate__animated animate__fadeIn">
      <div className="main__content">
        <Header />

        <div className="text">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text") }} />
          <div className="text__btn">
            <TGButton text={t("telegram")} />
          </div>
        </div>

        <div className="text_mobile">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text_mobile") }} />
          <div className="text_mobile__btn">
            <TGButton text={t("telegram")} />
          </div>
        </div>

        <div className="info">
          {i18n.language === "ru" ? (
            <>
              a{" "}
              <Link className="link" to="detailed">
                {t("here")}
              </Link>
              {t("info_text")}
            </>
          ) : (
            <>
              {t("info_text")}{" "}
              <Link className="link" to="detailed">
                {t("here")}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
