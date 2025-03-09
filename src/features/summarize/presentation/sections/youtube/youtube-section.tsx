import React from "react";
import { useTranslation } from "react-i18next";
import "./youtube-section.scss";

export const YoutubeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="youtube-section">
      <h2>{t("experience.youtube.title")}</h2>
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
