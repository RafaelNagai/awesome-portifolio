import React from "react";
import "./timeline-item.scss";

type Props = {
  className?: string;
  title: string;
  description: string;
  options: string[];
};
export const TimelineItem: React.FC<Props> = ({
  className = "",
  title,
  description,
  options,
}) => {
  return (
    <div className={`job-card ${className}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="job-card__skills">
        {options.map((option) => (
          <div key={option} className="job-card__skill">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
