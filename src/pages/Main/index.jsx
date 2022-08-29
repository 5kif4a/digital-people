import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SwitchLocale from "../../components/SwitchLocale";
import TGButton from "../../components/TGButton";
import "./styles.scss";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main">
      <div className="main__content">
        <Logo />

        <div className="main__switch-locale-wrapper">
          <SwitchLocale />
        </div>

        <div className="text">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text") }} />
          <div
            className="text__btn"
          >
            <TGButton text={t("telegram")} />
          </div>
        </div>

        <div className="text_mobile">
          <p dangerouslySetInnerHTML={{ __html: t("main_page_text_mobile") }} />
          <div
            className="text_mobile__btn"
          >
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
