import React from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Commande = () => {
  const commandes = [
    {
      reference: "12345",
      date: "2023-07-01",
      prixTotal: "150.00 DT",
      paiement: "Carte e-dinar",
      statut: "Expédié",
    },
    {
      reference: "67890",
      date: "2023-07-05",
      prixTotal: "200.00 DT",
      paiement: "À la livraison",
      statut: "En traitement",
    },
  ];

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8 px-4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Vos Commandes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-gray-600 text-center border-t border-b">
                <th className="py-2 px-4 border-l border-r">
                  Référence de Commande
                </th>
                <th className="py-2 px-4 border-r">Date</th>
                <th className="py-2 px-4 border-r">Prix Total</th>
                <th className="py-2 px-4 border-r">Paiement</th>
                <th className="py-2 px-4 border-r">Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((commande, index) => (
                <tr key={index} className="text-center border-t border-b">
                  <td className="py-2 px-4 border-r border-l">
                    {commande.reference}
                  </td>
                  <td className="py-2 px-4 border-r">{commande.date}</td>
                  <td className="py-2 px-4 border-r">{commande.prixTotal}</td>
                  <td className="py-2 px-4 border-r">{commande.paiement}</td>
                  <td className="py-2 px-4 border-r">
                    <span
                      className={`font-medium ${
                        commande.statut === "Annulé"
                          ? "text-red-600"
                          : commande.statut === "En traitement"
                          ? "text-yellow-600"
                          : commande.statut === "Expédié"
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {commande.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Commande;
