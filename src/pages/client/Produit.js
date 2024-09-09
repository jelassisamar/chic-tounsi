import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CardProduit from "../../components/CardProduit";
import ProduitData from "../../Data/Produitdata.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Filtre from "../../components/Filtre";

const Produit = () => {
  const { categorie } = useParams();
  const [produits, setProduits] = useState([]);
  const [donneesFiltres, setDonneesFiltres] = useState({
    marque: [],
    statut: [],
  });
  const [filters, setFilters] = useState({
    marques: [],
    statuts: [],
    prix: [0, 219000],
  });

  const filterData = {
    yeux: {
      marque: ["ESSENCE", "ARTDECO", "REVOLUTION"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    levres: {
      marque: ["ESSENCE", "ARTDECO", "REVOLUTION"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    ongles: {
      marque: ["ESSENCE", "TITANIA", "ARTDECO"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    cheveux: {
      marque: ["ENERGIE FRUIT", "BEURER", "APOTHICA"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    soin: {
      marque: ["SVR", "KAÏNA COSMETICS", "ZYNIA", "ENERGIE FRUIT"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
  };

  useEffect(() => {
    const filteredProduits = ProduitData.filter(
      (produit) => produit.categorie === categorie
    );

    setProduits(filteredProduits);

    if (filterData[categorie]) {
      setDonneesFiltres(filterData[categorie]);
    } else {
      setDonneesFiltres({
        marque: [],
        statut: [],
      });
    }
  }, [categorie]);

  const applyFilters = produits.filter((produit) => {
    const isMarqueMatch =
      filters.marques.length === 0 || filters.marques.includes(produit.marque);
    const isStatutMatch =
      filters.statuts.length === 0 || filters.statuts.includes(produit.statut);
    const isPriceMatch =
      parseInt(produit.prix, 10) >= filters.prix[0] &&
      parseInt(produit.prix, 10) <= filters.prix[1];
    return isMarqueMatch && isStatutMatch && isPriceMatch;
  });

  const handleFilterChange = useCallback((type, value, checked) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (type === "prix") {
        updatedFilters[type] = value;
      } else {
        if (checked) {
          updatedFilters[type].push(value);
        } else {
          updatedFilters[type] = updatedFilters[type].filter(
            (item) => item !== value
          );
        }
      }
      return updatedFilters;
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 p-4">
            <Filtre
              donneesFiltres={donneesFiltres}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="md:w-3/4 p-4">
            <h1 className="text-2xl font-bold mb-4">
              Produits pour {categorie}
            </h1>
            <div>
              <div className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-4">PRODUITS EN PROMO</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {produits
                    .filter((produit) => produit.statut === "Promo")
                    .map((produit) => (
                      <CardProduit key={produit.id} produit={produit} />
                    ))}
                </div>
              </div>
              <div className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-4">NOS AUTRES PRODUITS</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {applyFilters.map((produit) => (
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

export default Produit;
