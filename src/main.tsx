import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntroductionPage } from "./features/introduction/presentation/introduction-page";
import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntroductionPage />
  </StrictMode>
);
