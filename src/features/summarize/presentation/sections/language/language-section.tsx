import React from "react";
import { useTranslation } from "react-i18next";
import "./language-section.scss";
import icon from "../../../../../assets/icons/language-icon.png";

export const LanguageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="language-section">
      <div className="language-section__title">
        <h2>{t("experience.language.title")}</h2>
        <img src={icon} />
      </div>
      <p>{t("experience.language.description")}</p>

      <div className="language-section__languages">
        <p className="language-section__language">Portuguese</p>
        <div className="language-section__divider"></div>
        <p className="language-section__language">English</p>
      </div>
    </div>
  );
};
