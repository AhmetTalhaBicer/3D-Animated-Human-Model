import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "./context/CharacterAnimations";
import "@mantine/core/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>
);
