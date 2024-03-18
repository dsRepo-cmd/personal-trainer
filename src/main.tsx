import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AOS from "aos";
import "./index.css";
import ThemeProvider from "./containers/theme-provider/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

AOS.init({
  offset: 50,
  duration: 1500,
  delay: 100,
});
