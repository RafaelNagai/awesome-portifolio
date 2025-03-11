import React from "react";
import { useTranslation } from "react-i18next";
import "./education-section.scss";
import educationIcon from "../../../../../assets/icons/education-icon.png";

export const EducationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="education-section">
      <div className="education-section__title">
        <img src={educationIcon} />
        <h2>{t("experience.education.title")}</h2>
      </div>
      <p>{t("experience.education.description")}</p>

      <div className="education-item">
        <div className="education-item__title">
          <p>Analyses and Development System</p>
        </div>
        <div className="education-item__info">
          <p className="education-item__where">Brazil</p>
          <p className="education-item__period">Jan 2012 - Jun 2014</p>
        </div>
      </div>
      <div className="education-item">
        <div className="education-item__title">
          <p>Web Development</p>
        </div>
        <div className="education-item__info">
          <p className="education-item__where">Canada</p>
          <p className="education-item__period">Jan 2025 - Dec 2026</p>
        </div>
      </div>
    </div>
  );
};
