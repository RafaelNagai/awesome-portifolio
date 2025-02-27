import React from "react";
import "./job-item.scss";

type Props = {
  className?: string;
};
export const JobItem: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`job-card ${className}`}>
      <h2>JOB TITLE</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        voluptates magni quaerat fugiat rem. Iste voluptatem laudantium, ab at
        vitae impedit ullam molestias inventore nemo natus! Ratione ducimus
        neque enim.
      </p>
      <div className="job-card__skills">
        <div className="job-card__skill">Flutter</div>
        <div className="job-card__skill">Android</div>
        <div className="job-card__skill">iOS</div>
        <div className="job-card__skill">Agile</div>
      </div>
    </div>
  );
};
