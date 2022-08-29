import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../components/Logo";
import Section from "../../components/Section";
import SwitchLocale from "../../components/SwitchLocale";
import TGButton from "../../components/TGButton";
import "./styles.scss";

const sections = [
  { title: "awards", text: "awards_text" },
  { title: "services", text: "services_text" },
  { title: "stacks", text: "stacks_text" },
  { title: "products", text: "products_text_1" },
  { title: "", text: "products_text_2" },
  { title: "", text: "products_text_3" },
  { title: "", text: "products_text_4" },
  { title: "", text: "products_text_5" },
  { title: "", text: "products_text_6" },
  { title: "", text: "products_text_7" },
  { title: "", text: "products_text_8" },
];

const Detailed = () => {
  const prefix = useId();
  const { t } = useTranslation();

  return (
    <div className="detailed">
      <div className="detailed__content">
        <Logo />

        <div className="detailed__switch-locale-wrapper">
          <SwitchLocale />
        </div>

        <div className="grid">
          {sections.map((section, index) => (
            <Section
              key={`${prefix}-${index}`}
              title={t(section.title)}
              text={t(section.text)}
            />
          ))}

          <div className="btn">
            <TGButton text={t("letsgo")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
