import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Livraison = () => {
  const [suivi, setSuivi] = useState([
    {
      id: 1,
      date: "2024-07-21",
      prixTotal: "$150.00",
      statut: "Expédié",
      livraisonAttendue: "2024-08-10",
      jourExpedition: "2024-07-20",
    },
    {
      id: 2,
      date: "2024-07-22",
      prixTotal: "$200.00",
      statut: "En cours",
      livraisonAttendue: "2024-08-12",
      jourExpedition: null,
    },
  ]);

  const handleAnnulerCommande = (id) => {
    const commande = suivi.find((track) => track.id === id);
    if (commande.statut === "Expédié" || commande.statut === "Annulé") {
      return;
    }

    if (window.confirm("Êtes-vous sûr de vouloir annuler cette commande ?")) {
      setSuivi(
        suivi.map((track) =>
          track.id === id ? { ...track, statut: "Annulé" } : track
        )
      );
    }
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8 px-4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Suivi de Livraison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-yellow-100 text-gray-600 text-center border-t border-b">
                <th className="py-2 px-4 border-r  border-l">Date</th>
                <th className="py-2 px-4 border-r">Prix Total</th>
                <th className="py-2 px-4 border-r">Statut</th>
                <th className="py-2 px-4 border-r">Livraison Attendue</th>
                <th className="py-2 px-4 border-r">Jour d'Expédition</th>
                <th className="py-2 px-4 border-r">Actions</th>
              </tr>
            </thead>
            <tbody>
              {suivi.map((track) => (
                <tr key={track.id} className="text-center border-t border-b">
                  <td className="py-2 px-4 border-r border-l">{track.date}</td>
                  <td className="py-2 px-4 border-r">{track.prixTotal}</td>
                  <td className="py-2 px-4 border-r">
                    <span
                      className={`font-medium ${
                        track.statut === "Annulé"
                          ? "text-red-600"
                          : track.statut === "En cours"
                          ? "text-yellow-600"
                          : track.statut === "Expédié"
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {track.statut}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-r">
                    {track.livraisonAttendue}
                  </td>
                  <td className="py-2 px-4 border-r">
                    {track.jourExpedition || "Non Expédié"}
                  </td>
                  <td className="py-2 px-4 border-r flex space-x-2">
                    {track.statut !== "Expédié" &&
                      track.statut !== "Annulé" && (
                        <button
                          onClick={() => handleAnnulerCommande(track.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                          Annuler la Commande
                        </button>
                      )}
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

export default Livraison;
