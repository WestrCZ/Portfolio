import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nProvider } from "./i18n/I18nProvider.jsx";
import "./index.css";

// Easter egg: a small AppSec-flavored greeting for anyone poking around in
// DevTools. Runs exactly once, as this module is only evaluated once when
// the app boots.
console.log(
  "%c[SEC_AUDIT] Welcome, Security Researcher!\n%cAnalyzing the app architecture? If you find any vulnerability, feel free to reach out!",
  "color: #ff9d00; font-size: 15px; font-weight: bold;",
  "color: #cbd5e1; font-size: 12px;"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
