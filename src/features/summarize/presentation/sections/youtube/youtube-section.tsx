import React from "react";
import { useTranslation } from "react-i18next";
import "./youtube-section.scss";
import youtubeIcon from "../../../../../assets/icons/youtube-icon.png";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

export const YoutubeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="youtube-section summarize-section" data-hover={true}>
      <div className="summarize-section__title summarize-section__title--right">
        <img
          className="summarize-section__image summarize__icon"
          src={youtubeIcon}
        />
        <h2>{t("experience.youtube.title")}</h2>
      </div>

      <p>{t("experience.youtube.description")}</p>
      <LiteYouTubeEmbed
        id="AaGEkTtCnP0"
        title="Welcome to Pub Dev Videos"
        noCookie={true}
        poster="mqdefault"
        wrapperClass="youtube-section__video"
        iframeClass="youtube-section__video--video"
        activatedClass="youtube-section__video--activated"
        playerClass="youtube-section__video--icon"
      />
    </div>
  );
};
