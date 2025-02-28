import React from "react";
import { TimelineItem } from "./components/timeline/timeline-item/timeline-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { LogoFloat } from "./components/logos/logo-float";
import { useTranslation } from "react-i18next";
import { YoutubeFloat } from "./components/youtube/youtube-float";

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

  return (
    <>
      <div className="experience">
        <BaseTimeline />
        <TimelineBranch className="experience__item item-1">
          <LogoFloat />
          {experienceJob}
        </TimelineBranch>
        <TimelineBranch className="experience__item item-2">
          <YoutubeFloat />
          {youtubeChannel}
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          {experienceJob}
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          {experienceJob}
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          {experienceJob}
        </TimelineBranch>
      </div>
    </>
  );
};
