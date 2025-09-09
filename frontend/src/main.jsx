import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ importa o Tailwind aqui

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
