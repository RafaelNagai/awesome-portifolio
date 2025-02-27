import React from "react";
import "./sass/introduction.scss";

export const IntroductionPage: React.FC = () => {
  return (
    <div className="introduction">
      <div className="introduction__content">
        <h1 className="introduction__title">Rafael Kenji Sales Nagai</h1>
        <div className="introduction__summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi vel
          quasi tempore laudantium, ipsa quisquam animi officiis aspernatur odio
          impedit earum culpa, nobis suscipit similique eligendi. Nesciunt ab
          iure doloribus.
        </div>
      </div>
      <div className="introduction__image" />
    </div>
  );
};
