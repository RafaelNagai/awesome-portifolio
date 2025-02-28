import React from "react";
import { JobItem } from "./components/job-item/job-item";
import "./experience-page.scss";
import { BaseTimeline, TimelineBranch } from "./components/timeline/timeline";

export const ExperiencePage: React.FC = () => {
  return (
    <div className="experience">
      <BaseTimeline />
      <TimelineBranch className="experience__item">
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
      <TimelineBranch className="experience__item">
        <JobItem />
      </TimelineBranch>
    </div>
  );
};
