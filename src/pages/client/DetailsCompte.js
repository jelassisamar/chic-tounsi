import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const DetailsCompte = () => {
  const [detailsUtilisateur, setDetailsUtilisateur] = useState({
    nomUtilisateur: "JohnDoe",
    email: "johndoe@example.com",
    motDePasse: "motdepasse123",
    adresse: "123 Rue Exemple",
    telephone: "123456789",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailsUtilisateur({
      ...detailsUtilisateur,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Détails de l'utilisateur sauvegardés :", detailsUtilisateur);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8 px-4 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6">
          Gestion du Compte Utilisateur
        </h2>
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nomUtilisateur"
                className="block text-lg font-medium mb-2"
              >
                Nom d'utilisateur :
              </label>
              <input
                id="nomUtilisateur"
                name="nomUtilisateur"
                type="text"
                value={detailsUtilisateur.nomUtilisateur}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email :
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={detailsUtilisateur.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="motDePasse"
                className="block text-lg font-medium mb-2"
              >
                Mot de passe :
              </label>
              <input
                id="motDePasse"
                name="motDePasse"
                type="password"
                value={detailsUtilisateur.motDePasse}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="telephone"
                className="block text-lg font-medium mb-2"
              >
                Téléphone :
              </label>
              <input
                id="telephone"
                name="telephone"
                type="text"
                value={detailsUtilisateur.telephone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            onClick={handleSave}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Enregistrer les Modifications
          </button>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">
              Modifications Enregistrées
            </h3>
            <p>Vos modifications ont été enregistrées avec succès.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <Chatbot />
      <Footer />
    </div>
  );
};

export default DetailsCompte;
