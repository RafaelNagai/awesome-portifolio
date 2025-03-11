import React from "react";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { directionFade, FadeInOut } from "../../../core/components/fade/fade";
import { YoutubeSection } from "./sections/youtube/youtube-section";
import { ExperienceSection } from "./sections/experience/experience-section";
import { EducationSection } from "./sections/education/education-section";
import { LanguageSection } from "./sections/language/language-section";
import { HobbieSection } from "./sections/hobbie/hobbie-section";

export const ExperiencePage: React.FC = () => {
  return (
    <section>
      <div className="summarize">
        <BaseTimeline />
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.left}>
            <ExperienceSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item summarize__item--youtube">
          <FadeInOut direction={directionFade.right}>
            <YoutubeSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item summarize__item--education">
          <FadeInOut direction={directionFade.left}>
            <EducationSection />
          </FadeInOut>
        </TimelineBranch>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.right}>
            <LanguageSection />
          </FadeInOut>
        </TimelineBranch>
        <div className="summarize__item summarize__item--spacing"></div>
        <TimelineBranch className="summarize__item">
          <FadeInOut direction={directionFade.right}>
            <HobbieSection />
          </FadeInOut>
        </TimelineBranch>
      </div>
    </section>
  );
};
