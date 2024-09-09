import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import { Link } from "react-router-dom";

const Commandes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/recherchercommande?query=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };
  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center">Liste des commandes</h2>

          <div className="mb-4">
            <form
              className="relative d-flex align-items-center flex-grow"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 border rounded-3xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="position-absolute end-0 top-0 bottom-0 px-3 d-flex align-items-center justify-content-center rounded-3xl text-gray-500 bg-purple-600"
              >
                <i className="text-white fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/commandes/commandes-a-traiter-passees-aujourdhui"
              className="mt-4 rounded p-10 h-40 bg-red-100 mx-4 flex items-center no-underline text-black font-bold "
            >
              <i className="fas fa-calendar-day text-4xl text-red-600 mr-4"></i>
              <span>Commandes à Traiter Passées Aujourd'hui</span>
            </Link>

            <Link
              to="/commandes/commande-en-cours-de-traitement"
              className="mt-4 rounded p-10 h-40 bg-yellow-100 mx-4 flex items-center no-underline text-black font-bold"
            >
              <i className="fas fa-cogs text-4xl text-yellow-600 mr-4"></i>
              <span>Commande en Cours de Traitement</span>
            </Link>

            <Link
              to="/commandes/commande-en-cours-de-livraison"
              className="mt-4 rounded p-10 h-40 bg-blue-100 mx-4 flex items-center no-underline text-black font-bold"
            >
              <i className="fas fa-shipping-fast text-4xl text-blue-600 mr-4"></i>
              <span>Commande en Cours de Livraison</span>
            </Link>

            <Link
              to="/commandes/commande-delivree"
              className="mt-4 rounded p-10 h-40 bg-green-100 mx-4 flex items-center no-underline text-black font-bold"
            >
              <i className="fas fa-check-circle text-4xl text-green-600 mr-4"></i>
              <span>Commande Délivrée</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandes;
