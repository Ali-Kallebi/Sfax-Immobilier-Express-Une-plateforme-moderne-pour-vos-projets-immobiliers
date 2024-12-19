import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Accueil from "./component/accueil";
import Contact from "./component/contact";
import Offre from "./component/offre";
import Bien from "./component/bien";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Offre" element={<Offre />} />
        <Route path="/Bien" element={<Bien />} />
        {/* Redirection par défaut */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
