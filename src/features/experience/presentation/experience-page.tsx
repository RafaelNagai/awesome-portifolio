import React from "react";
import { JobItem } from "./components/job-item";
import "./experience-page.scss";

export const ExperiencePage: React.FC = () => {
  return (
    <div className="experience">
      <JobItem className="experience__item" />
      <div>a</div>
      <JobItem className="experience__item" />
      <JobItem className="experience__item" />
      <div>a</div>
      <JobItem className="experience__item" />
      <JobItem className="experience__item" />
    </div>
  );
};
