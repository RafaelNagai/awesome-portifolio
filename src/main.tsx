import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntroductionPage } from "./features/introduction/presentation/introduction-page";
import { IterativeBackground } from "./features/iterative-background/presentation/iterative-background";
import icon from "../src/assets/rafael.png";
import "/css/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IterativeBackground sizeCircle={25} src={icon}>
      <IntroductionPage />
    </IterativeBackground>
    <div className="test"></div>
  </StrictMode>
);
