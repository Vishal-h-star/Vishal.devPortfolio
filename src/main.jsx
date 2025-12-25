import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import  ModeProvider  from "./Context/ModeContext.jsx";
import App from "./App/App.jsx";
import { ModeProvider } from "./Context/ModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ModeProvider>
          <App/>
      </ModeProvider>
  
  </StrictMode>
);
