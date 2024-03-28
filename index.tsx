import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./src/i18n.ts";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
// @ts-ignore
const root = createRoot(document.getElementById("app"));
root.render(<App />);
if (module.hot) {
  module.hot.accept();
}
