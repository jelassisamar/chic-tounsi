import React, { useState, useEffect } from "react";
import CardProduit from "../../components/CardProduit";
import ProduitData from "../../Data/Produitdata.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";

import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Boutique = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    setProduits(ProduitData);
  }, []);
  const renderProducts = (statut) => {
    const filteredProducts = ProduitData.filter(
      (produit) => produit.statut === statut
    ).slice(0, 4);

    return filteredProducts.map((produit) => (
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        key={produit.id}
      >
        <CardProduit produit={produit} />
      </div>
    ));
  };
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap">
          <div className="md:w-4/4 p-4">
            <h1 className="text-2xl font-bold mb-4">Nos Produits</h1>
            <div>
              <div className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-4">PRODUITS EN PROMO</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {renderProducts("Promo")}
                </div>
              </div>
              <div className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-4">NOS AUTRES PRODUITS</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {produits.map((produit) => (
                    <CardProduit key={produit.id} produit={produit} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Boutique;
