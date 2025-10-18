import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//donde renderizo
const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
