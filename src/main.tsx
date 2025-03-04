import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntroductionPage } from "./features/introduction/presentation/introduction-page";
import "./main.scss";
import { ExperiencePage } from "./features/experience/presentation/experience-page";
import "./core/internationalization/i18n";
import { ContactPage } from "./features/contact/presentation/contact-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntroductionPage />
    <ExperiencePage />
    <ContactPage />
  </StrictMode>
);
