import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import commandeData from "../../Data/CommandeData.json";
import produitData from "../../Data/Produitdata.json";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";

const RechercherCommande = () => {
  const [searchParams] = useSearchParams();
  const [commandes, setCommandes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      const filteredCommandes = commandeData.filter((commande) => {
        const orderCode = commande.orderCode || "";
        const customer = commande.client || "";
        return (
          orderCode.toLowerCase().includes(query.toLowerCase()) ||
          customer.toLowerCase().includes(query.toLowerCase())
        );
      });

      const commandesAvecDetails = filteredCommandes.map((commande) => {
        const productsWithDetails = commande.products.map((product) => {
          const productDetails = produitData.find(
            (p) => p.id === product.productId
          );
          return {
            ...product,
            productDetails,
          };
        });
        return {
          ...commande,
          products: productsWithDetails,
        };
      });

      setCommandes(commandesAvecDetails);
    }
  }, [searchParams]);

  const handleVoirClick = (commandeId) => {
    navigate(`/commande-detail/${commandeId}`);
  };

  const [searchQuery, setSearchQuery] = useState("");

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
          <h2 className="text-center">Résultats de Recherche</h2>
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
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code Commande
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom du Produit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantité
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix Unitaire
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Adresse
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commandes.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center">
                      Aucun résultat trouvé.
                    </td>
                  </tr>
                ) : (
                  commandes.map((commande) => (
                    <React.Fragment key={commande.id}>
                      {commande.products.map((prod, index) => (
                        <tr key={`${commande.id}-${index}`}>
                          {index === 0 && (
                            <td
                              rowSpan={commande.products.length}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {commande.orderCode}
                            </td>
                          )}
                          {index === 0 && (
                            <td
                              rowSpan={commande.products.length}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {commande.client}
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap">
                            {prod.productDetails
                              ? prod.productDetails.nom
                              : "Produit Non Trouvé"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {prod.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {prod.productDetails
                              ? `${prod.productDetails.prix} TND`
                              : "N/A"}
                          </td>
                          {index === 0 && (
                            <td
                              rowSpan={commande.products.length}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {commande.address}
                            </td>
                          )}
                          {index === 0 && (
                            <td
                              rowSpan={commande.products.length}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              <button
                                onClick={() => handleVoirClick(commande.id)}
                                className="btn btn-secondary"
                              >
                                Voir
                              </button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechercherCommande;
