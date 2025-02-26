import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntroductionPage } from "./features/introduction/presentation/introduction-page";
import { IterativeBackground } from "./features/iterative-background/presentation/iterative-background";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IterativeBackground
      sizeCircle={25}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1200px-Concord_Pacific_Master_Plan_Area.jpg"
    >
      <IntroductionPage />
    </IterativeBackground>
  </StrictMode>
);
