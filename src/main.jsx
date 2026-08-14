import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Background from "./assets/components/Background.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Background>
      <App />
    </Background>
  </BrowserRouter>,
);
