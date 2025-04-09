import React from "react";
import { useTranslation } from "react-i18next";
import "./hobbie-section.scss";
import icon from "../../../../../assets/icons/hobbie-icon.webp";
import skyrimImage from "../../../../../assets/hobbies/skyrim-icon.webp";
import lolImage from "../../../../../assets/hobbies/lol-icon.webp";
import valorantImage from "../../../../../assets/hobbies/valorant-icon.webp";

export const HobbieSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hobbie-section summarize-section">
      <div className="summarize-section__title summarize-section__title--right">
        <img
          className="summarize-section__image summarize__icon"
          src={icon}
          alt=""
        />
        <h2>{t("experience.hobbie.title")}</h2>
      </div>
      <p>{t("experience.hobbie.description")}</p>

      <div className="hobbie-section__list">
        <p className="hobbie-section__bookcover hobbie-section__hobbie--4">
          Hobbies
        </p>
        <img
          className="hobbie-section__hobbie hobbie-section__hobbie--3"
          src={skyrimImage}
          alt="Skyrim"
        />
        <img
          className="hobbie-section__hobbie hobbie-section__hobbie--2"
          src={lolImage}
          alt="League of Legends"
        />
        <img
          className="hobbie-section__hobbie hobbie-section__hobbie--1"
          src={valorantImage}
          alt="Valorant"
        />
      </div>
    </div>
  );
};
