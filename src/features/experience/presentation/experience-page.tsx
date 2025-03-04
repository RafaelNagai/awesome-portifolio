import React from "react";
import { TimelineItem } from "./components/timeline/timeline-item/timeline-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { Logo1Float } from "./components/logos/logo1-float";
import { useTranslation } from "react-i18next";
import { YoutubeFloat } from "./components/youtube/youtube-float";
import { Logo2Float } from "./components/logos/logo2-float";

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

  const youtubeChannel = (
    <TimelineItem
      title={t("experience.youtube.title")}
      description={t("experience.youtube.description")}
      options={[t("experience.youtube.skills.pubdev")]}
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
    <>
      <div className="experience">
        <BaseTimeline />
        <TimelineBranch className="experience__item item-1">
          <Logo1Float />
          {experienceJob}
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          <YoutubeFloat />
          {youtubeChannel}
        </TimelineBranch>
        <TimelineBranch className="experience__item item-2">
          {education}
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          <Logo2Float />
          {language}
        </TimelineBranch>
        <TimelineBranch className="experience__item item-3">
          {hobbies}
        </TimelineBranch>
      </div>
    </>
  );
};
