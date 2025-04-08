import React from "react";
import { useTranslation } from "react-i18next";
import "./education-section.scss";
import educationIcon from "../../../../../assets/icons/education-icon.png";

export const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="education-section summarize-section">
      <div className="summarize-section__title">
        <img className="summarize-section__image" src={educationIcon} />
        <h2>{t("experience.education.title")}</h2>
      </div>
      <p>{t("experience.education.description")}</p>

      <div className="education-item">
        <div className="education-item__title">
          <p>{t("experience.education.option1.title")}</p>
        </div>
        <div className="education-item__info">
          <p className="education-item__where">
            {t("experience.education.option1.from")}
          </p>
          <p className="education-item__period">
            {t("experience.education.option1.period")}
          </p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-item__title">
          <p>{t("experience.education.option2.title")}</p>
        </div>
        <div className="education-item__info">
          <p className="education-item__where">
            {t("experience.education.option2.from")}
          </p>
          <p className="education-item__period">
            {t("experience.education.option2.period")}
          </p>
        </div>
      </div>
    </div>
  );
};
