import React from "react";
import { useParams } from "react-router-dom";
import produitData from "../../Data/Produitdata.json";
import commandeData from "../../Data/CommandeData.json";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";

const CommandeDetail = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const [commande, setCommande] = React.useState(null);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    const foundCommande = commandeData.find((cmd) => cmd.id === numericId);
    if (foundCommande) {
      const productsWithDetails = foundCommande.products.map((product) => {
        const productDetails = produitData.find(
          (p) => p.id === product.productId
        );
        return { ...product, productDetails };
      });
      setCommande({ ...foundCommande, products: productsWithDetails });
      setStatus(foundCommande.status);
    } else {
      setCommande(null);
    }
  }, [numericId]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
  };

  if (commande === null) return <p>Commande non trouvée ou chargement...</p>;

  const totalPrice = commande.products.reduce((acc, prod) => {
    const productPrice = prod.productDetails ? prod.productDetails.prix : 0;
    return acc + productPrice * prod.quantity;
  }, 0);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-6">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Détails de la Commande</h2>

          <div className="mb-6">
            <p className="text-lg font-semibold">Statut de la Commande :</p>
            <select
              value={status}
              onChange={handleStatusChange}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="ajoutée-aujourdhui">Ajoutée Aujourd'hui</option>
              <option value="en-cours-de-traitement">
                En Cours de Traitement
              </option>
              <option value="en-cours-de-livraison">
                En Cours de Livraison
              </option>
              <option value="livrée">Livrée</option>
            </select>
          </div>

          <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-x-auto">
            <thead>
              <tr className="bg-gray-200 border-b border-gray-300">
                <th className="py-2 px-4 text-left text-gray-600">
                  Nom du Produit
                </th>
                <th className="py-2 px-4 text-left text-gray-600">Quantité</th>
                <th className="py-2 px-4 text-left text-gray-600">
                  Prix Unitaire
                </th>
              </tr>
            </thead>
            <tbody>
              {commande.products.map((prod, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="py-2 px-4">
                    {prod.productDetails
                      ? prod.productDetails.nom
                      : "Produit Non Trouvé"}
                  </td>
                  <td className="py-2 px-4">{prod.quantity}</td>
                  <td className="py-2 px-4">
                    {prod.productDetails
                      ? `${prod.productDetails.prix} TND`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-200 border-t border-gray-300">
                <td className="py-2 px-4 font-bold" colSpan="2">
                  Total
                </td>
                <td className="py-2 px-4 font-bold">
                  {totalPrice.toFixed(2)} TND
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-6">
            <p className="text-lg font-semibold">Adresse de Livraison :</p>
            <p className="mt-2">{commande.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandeDetail;
