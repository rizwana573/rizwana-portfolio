import { createRoot } from "react-dom/client";
import App from "./App";
import "./css/index.css";
import "./css/fonts.css";
import "./css/style.css";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
   <ThemeProvider>
    <App />
  </ThemeProvider>
);
