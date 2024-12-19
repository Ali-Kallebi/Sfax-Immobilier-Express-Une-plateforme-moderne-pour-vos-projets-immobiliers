import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // Assurez-vous de pointer vers le bon fichier App.js

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App /> {/* Charge le composant App avec les routes */}
  </React.StrictMode>
);
