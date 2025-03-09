import React from "react";
import "./timeline.scss";

export const BaseTimeline: React.FC = () => {
  return <div className="timeline__base" />;
};

type TimelineBranchProps = {
  children: React.ReactNode;
  className?: string;
};
export const TimelineBranch: React.FC<TimelineBranchProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`timeline ${className}`}>
      <div className="timeline__branch" />
      <div className="timeline__content">{children}</div>
    </div>
  );
};
