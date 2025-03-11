import React from "react";
import { useTranslation } from "react-i18next";
import "./hobbie-section.scss";
import icon from "../../../../../assets/icons/hobbie-icon.png";

export const HobbieSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hobbie-section">
      <div className="hobbie-section__title">
        <img src={icon} />
        <h2>{t("experience.hobbie.title")}</h2>
      </div>
      <p>{t("experience.hobbie.description")}</p>
    </div>
  );
};
