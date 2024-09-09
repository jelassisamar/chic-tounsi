import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Accueil from "./pages/client/Accueil";
import Compte from "./pages/client/Compte";
import Boutique from "./pages/client/Boutique";
import Contact from "./pages/client/Contact";
import Apropos from "./pages/client/Apropos";
import Favoris from "./pages/client/Favoris";
import Pannier from "./pages/client/Pannier";
import Produits from "./pages/client/Produits";
import DetailsProduit from "./pages/client/DetailsProduit";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/compte" element={<Compte />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/pannier" element={<Pannier />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/produits/:id" element={<DetailsProduit />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
