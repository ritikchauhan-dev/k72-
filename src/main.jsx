import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import Starirs from "./components/common/Stairs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Starirs>
        <App />
      </Starirs>
    </HashRouter>
  </StrictMode>
);
