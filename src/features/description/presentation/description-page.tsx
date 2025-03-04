import { useTranslation } from "react-i18next";
import "./description-page.scss";
import { ProfileDescription } from "./components/profile-description";

export const DescriptionPage = () => {
  const { t } = useTranslation();
  return (
    <section className="description">
      <div className="description__container">
        <ProfileDescription />
        <div className="description__content">
          <h1 className="description__title">RAFAEL NAGAI</h1>
          <p className="description__summary">
            {t("introduction.description")}
          </p>
        </div>
      </div>
    </section>
  );
};
