import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouter } from "./app/AppRouter";
import "./styles/global.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Moneywise could not find its application root.");
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
