import React from "react";
import { createRoot } from "react-dom/client";
import DeskLight from "./screens/DeskLight/DeskLight";

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <DeskLight />
    </React.StrictMode>
  );
}
