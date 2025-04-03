import React from "react";
import { createRoot } from "react-dom/client";
import DeskLight from "./screens/DeskLight/DeskLight";
import { WalletProvider } from "./WalletProvider"; // Import WalletProvider

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement).render(
    <WalletProvider> {/* Wrap the entire app */}
      <React.StrictMode>
        <DeskLight />
      </React.StrictMode>
    </WalletProvider>
  );
}
