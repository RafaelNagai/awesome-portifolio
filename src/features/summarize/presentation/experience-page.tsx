import React from "react";
import { TimelineItem } from "./components/timeline/timeline-item/timeline-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { useTranslation } from "react-i18next";
import { directionFade, FadeInOut } from "../../../core/components/fade/fade";
import { YoutubeSection } from "./sections/youtube/youtube-section";

export const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();

  const experienceJob = (
    <TimelineItem
      title={t("experience.job.title")}
      description={t("experience.job.description")}
      options={[
        t("experience.job.skills.flutter"),
        t("experience.job.skills.android"),
        t("experience.job.skills.ios"),
        t("experience.job.skills.csharp"),
        t("experience.job.skills.react"),
        t("experience.job.skills.sass"),
        t("experience.job.skills.agile"),
        t("experience.job.skills.scrum"),
        t("experience.job.skills.kanban"),
      ]}
    />
  );

  const education = (
    <TimelineItem
      title={t("experience.education.title")}
      description={t("experience.education.description")}
      options={[
        t("experience.education.skills.software"),
        t("experience.education.skills.mobile"),
        t("experience.education.skills.web"),
      ]}
    />
  );

  const language = (
    <TimelineItem
      title={t("experience.language.title")}
      description={t("experience.language.description")}
      options={[
        t("experience.language.skills.english"),
        t("experience.language.skills.portuguese"),
      ]}
    />
  );

  const hobbies = (
    <TimelineItem
      title={t("experience.hobbie.title")}
      description={t("experience.hobbie.description")}
      options={[
        t("experience.hobbie.skills.lol"),
        t("experience.hobbie.skills.valorant"),
        t("experience.hobbie.skills.trpg"),
      ]}
    />
  );

  return (
    <section>
      <div className="summarize">
        <BaseTimeline />
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.left}>{experienceJob}</FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.right}>
            <YoutubeSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.left}>{education}</FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.right}>{language}</FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.left}>{hobbies}</FadeInOut>
        </TimelineBranch>
      </div>
    </section>
  );
};
