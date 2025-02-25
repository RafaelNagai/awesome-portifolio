import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntroductionPage } from "./features/introduction/presentation/introduction-page";
import { IterativeBackground } from "./features/iterative-background/presentation/iterative-background";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IterativeBackground />
  </StrictMode>
);
