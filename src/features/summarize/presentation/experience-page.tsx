import React from "react";
import { TimelineItem } from "./components/timeline/timeline-item/timeline-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { useTranslation } from "react-i18next";
import { directionFade, FadeInOut } from "../../../core/components/fade/fade";
import { YoutubeSection } from "./sections/youtube/youtube-section";
import { ExperienceSection } from "./sections/experience/experience-section";
import { EducationSection } from "./sections/education/education-section";

export const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();

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
          <FadeInOut direction={directionFade.left}>
            <ExperienceSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.right}>
            <YoutubeSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.left}>
            <EducationSection />
          </FadeInOut>
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
