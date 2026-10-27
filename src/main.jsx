import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Loads Bootstrap's CSS (colors, grids, buttons, spacing)
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //Loads Bootstrap's JavaScript (makes the mobile ☰ menu open and close)
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// injects the React app into index.html
