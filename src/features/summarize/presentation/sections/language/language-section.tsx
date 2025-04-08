import React from "react";
import { useTranslation } from "react-i18next";
import "./language-section.scss";
import icon from "../../../../../assets/icons/language-icon.png";

export const LanguageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="language-section summarize-section">
      <div className="summarize-section__title summarize-section__title--right">
        <img className="summarize-section__image" src={icon} />
        <h2>{t("experience.language.title")}</h2>
      </div>
      <p>{t("experience.language.description")}</p>

      <div className="language-section__languages">
        <p className="language-section__language">
          {t("experience.language.skills.english")}
        </p>
        <div className="language-section__divider"></div>
        <p className="language-section__language">
          {t("experience.language.skills.portuguese")}
        </p>
      </div>
    </div>
  );
};
