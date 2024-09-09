import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import produitData from "../../Data/Produitdata.json";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Rechercher = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rechercher?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query") || "";
    setSearchQuery(query);

    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filteredResults = produitData.filter((produit) => {
        const nom = produit.nom ? produit.nom.toLowerCase() : "";
        const categorie = produit.categorie
          ? produit.categorie.toLowerCase()
          : "";
        const type = produit.type ? produit.type.toLowerCase() : "";

        return (
          nom.includes(lowercasedQuery) ||
          categorie.includes(lowercasedQuery) ||
          type.includes(lowercasedQuery)
        );
      });
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [location.search]);

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center">Résultats de recherche</h2>
          <div className="flex-1 mx-4 ml-20 mb-4">
            <form
              className="relative d-flex align-items-center flex-grow"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Rechercher ..."
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
                    Nom
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {results.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center">
                      Aucun résultat trouvé.
                    </td>
                  </tr>
                ) : (
                  results.map((produit) => (
                    <tr key={produit.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {produit.nom}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {produit.categorie}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {produit.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {produit.prix} TND
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={produit.image}
                          alt={produit.nom}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link
                          to={`/produit-details/${produit.id}`}
                          className="ml-2"
                        >
                          <Button variant="secondary">Voir</Button>
                        </Link>
                      </td>
                    </tr>
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

export default Rechercher;
