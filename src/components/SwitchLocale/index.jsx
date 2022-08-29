import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const SwitchLocale = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const handleClick = () => {
    i18n.changeLanguage(language === 'ru' ? 'en' : 'ru');
  };

  return (
    <button className="switch-locale" onClick={handleClick}>
      {language}
    </button>
  );
};

export default SwitchLocale;
