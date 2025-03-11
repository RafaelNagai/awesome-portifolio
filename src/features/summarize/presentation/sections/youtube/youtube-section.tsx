import React from "react";
import { useTranslation } from "react-i18next";
import "./youtube-section.scss";
import youtubeIcon from "../../../../../assets/icons/youtube-icon.png";

export const YoutubeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="youtube-section summarize-section">
      <div className="summarize-section__title summarize-section__title--right">
        <img className="summarize-section__image" src={youtubeIcon} />
        <h2>{t("experience.youtube.title")}</h2>
      </div>

      <p>{t("experience.youtube.description")}</p>
      <iframe
        className="youtube-section__video"
        src="https://www.youtube.com/embed/AaGEkTtCnP0"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
