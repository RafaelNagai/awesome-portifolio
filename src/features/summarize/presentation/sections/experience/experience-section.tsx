import React from "react";
import { useTranslation } from "react-i18next";
import "./experience-section.scss";
import experienceIcon from "../../../../../assets/icons/experience-icon.webp";

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="experience-section summarize-section">
      <div className="summarize-section__title">
        <img
          className="summarize-section__image summarize__icon"
          src={experienceIcon}
          alt=""
        />
        <h2>{t("experience.job.title")}</h2>
      </div>
      <p>{t("experience.job.description")}</p>

      <div>
        <div className="experience-section__area">
          <h3 className="experience-section__title-area">
            {t("experience.job.area.mobile.title")}
          </h3>
          <div className="experience-section__skills">
            <p className="experience-section__skill">
              {t("experience.job.area.mobile.skills.flutter")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.mobile.skills.xamarin")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.mobile.skills.kotlin")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.mobile.skills.swift")}
            </p>
          </div>
        </div>
        <div className="experience-section__area">
          <h3 className="experience-section__title-area">
            {t("experience.job.area.frontend.title")}
          </h3>
          <div className="experience-section__skills">
            <p className="experience-section__skill">
              {t("experience.job.area.frontend.skills.react")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.frontend.skills.typescript")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.frontend.skills.javascript")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.frontend.skills.sass")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.frontend.skills.tailwindcss")}
            </p>
          </div>
        </div>
        <div className="experience-section__area">
          <h3 className="experience-section__title-area">
            {t("experience.job.area.backend.title")}
          </h3>
          <div className="experience-section__skills">
            <p className="experience-section__skill">
              {t("experience.job.area.backend.skills.csharp")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.backend.skills.dotNetCore")}
            </p>
          </div>
        </div>
        <div className="experience-section__area">
          <h3 className="experience-section__title-area">
            {t("experience.job.area.others.title")}
          </h3>
          <div className="experience-section__skills">
            <p className="experience-section__skill">
              {t("experience.job.area.others.skills.firebase")}
            </p>
            <p className="experience-section__skill">
              {t("experience.job.area.others.skills.sqlServer")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
