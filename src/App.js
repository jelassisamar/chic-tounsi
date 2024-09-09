import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//client
import Accueil from "./pages/client/Accueil";
import Compte from "./pages/client/Compte";
import Boutique from "./pages/client/Boutique";
import Contact from "./pages/client/Contact";
import Apropos from "./pages/client/Apropos";
import Favoris from "./pages/client/Favoris";
import Pannier from "./pages/client/Pannier";
import Produit from "./pages/client/Produit";
import Details from "./pages/client/Details";
import Commande from "./pages/client/Commande";
import Checkout from "./pages/client/Checkout";
import Adresse from "./pages/client/Adresse";
import Livraison from "./pages/client/Livraison";
import DetailsCompte from "./pages/client/DetailsCompte";
import Connexion from "./pages/client/Connexion";
import Inscription from "./pages/client/Inscription";
import Result from "./pages/client/Result";
import Blog from "./pages/client/Blog";
import BlogArticle from "./pages/client/BlogArticle";

//admin
import Home from "./pages/admin/Home";
import Produits from "./pages/admin/Produits";
import ProduitDetails from "./pages/admin/ProduitDetails";
import Rechercher from "./pages/admin/Rechercher";
import Notifications from "./pages/admin/Notifications";
import Commandes from "./pages/admin/Commandes";
import CommandeEtat from "./pages/admin/CommandeEtat";
import CommandeDetail from "./pages/admin/CommandeDetail";
import Statistiques from "./pages/admin/Statistiques";
import Parametres from "./pages/admin/Parametres";
import Utilisateurs from "./pages/admin/Utilisateurs";
import RechercherCommande from "./pages/admin/RechercherCommande";
import Articles from "./pages/admin/Articles";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          //client
          <Route path="/search" element={<Result />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/pannier" element={<Pannier />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/adresses" element={<Adresse />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/details" element={<DetailsCompte />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/produit/:categorie" element={<Produit />} />
          <Route path="/produits/:id" element={<Details />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/actualités" element={<Blog />} />
          <Route path="/article/:id" element={<BlogArticle />} />
          //Admin
          <Route path="/home" element={<Home />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produit-details/:id" element={<ProduitDetails />} />
          <Route path="/rechercher" element={<Rechercher />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/commandes" element={<Commandes />} />
          <Route path="/commandes/:etat" element={<CommandeEtat />} />
          <Route path="/commande-detail/:id" element={<CommandeDetail />} />
          <Route path="/statistiques" element={<Statistiques />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/recherchercommande" element={<RechercherCommande />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
