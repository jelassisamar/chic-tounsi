import React from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Carousel from "../../components/Carousel";
import CardProduit from "../../components/CardProduit";
import ProduitData from "../../Data/Produitdata.json";

const Accueil = () => {
  const renderProducts = (statut) => {
    const filteredProducts = ProduitData.filter(
      (produit) => produit.statut === statut
    ).slice(0, 4);

    return filteredProducts.map((produit) => (
      <div className="col-md-3" key={produit.id}>
        <CardProduit produit={produit} />
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Carousel />

      <div className="container mx-auto my-8">
        <div className="container mx-auto my-8">
          <h1 className="text-2xl font-bold mb-4">NOUVEAUX PRODUITS</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderProducts("Nouveau")}
          </div>
        </div>

        <div className="container mx-auto my-8">
          <h1 className="text-2xl font-bold mb-4">PRODUITS EN PROMO</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderProducts("Promo")}
          </div>
        </div>

        <div className="container mx-auto my-8">
          <h1 className="text-2xl font-bold mb-4">MEILLEURES VENTES</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderProducts("Top Ventes")}
          </div>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Accueil;
