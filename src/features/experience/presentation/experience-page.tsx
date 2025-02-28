import React from "react";
import { JobItem } from "./components/job-item/job-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";
import { AndroidFloat } from "./components/logos/android-float";

export const ExperiencePage: React.FC = () => {
  return (
    <>
      <div className="experience">
        <BaseTimeline />
        <TimelineBranch className="experience__item">
          <JobItem />
        </TimelineBranch>
        <TimelineBranch className="experience__item item-1">
          <AndroidFloat />
          <JobItem />
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          <JobItem />
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          <JobItem />
        </TimelineBranch>
        <TimelineBranch className="experience__item">
          <JobItem />
        </TimelineBranch>
      </div>
    </>
  );
};
