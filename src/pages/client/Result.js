import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import CardProduit from "../../components/CardProduit";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Filtre from "../../components/Filtre";
import ProduitData from "../../Data/Produitdata.json";

const Result = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const [produits, setProduits] = useState([]);
  const [produitsF1, setProduitsF1] = useState([]);
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
      marque: ["L'OREAL", "MAYBELLINE", "BOURJOIS"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    ongles: {
      marque: ["OPI", "ESSIE", "KIKO"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    cheveux: {
      marque: ["GARNIER", "DOVE", "L'OREAL"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
    soin: {
      marque: ["NIVEA", "VICHY", "LA ROCHE-POSAY"],
      statut: ["Nouveau", "Promo", "Top Ventes"],
    },
  };

  useEffect(() => {
    const filteredProduits = ProduitData.filter(
      (produit) =>
        (produit.nom &&
          produit.nom.toLowerCase().includes(query.toLowerCase())) ||
        (produit.marque &&
          produit.marque.toLowerCase().includes(query.toLowerCase()))
    );
    setProduits(filteredProduits);
    setProduitsF1(filteredProduits);

    const defaultCategorie = "yeux";
    setDonneesFiltres(
      filterData[defaultCategorie] || { marque: [], statut: [] }
    );
  }, [query]);

  const applyFilters = produitsF1.filter((produit) => {
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
          <div className="w-full md:w-3/4 p-4">
            <h1 className="text-2xl font-bold mb-4">
              Résultats de recherche pour "{query}"
            </h1>
            {applyFilters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {applyFilters.map((produit) => (
                  <CardProduit key={produit.id} produit={produit} />
                ))}
              </div>
            ) : (
              <p>Aucun produit ne correspond à votre recherche.</p>
            )}
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Result;
