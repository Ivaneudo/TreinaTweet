import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.js";

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error ("A classe não existe.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
