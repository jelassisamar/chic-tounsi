import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Adresse = () => {
  const [adresses, setAdresses] = useState([
    {
      id: 1,
      nom: "Samar Jlassi",
      adresse: "Beje / Mjez el beb / Argoub / Rue el Kef",
      codePostal: "9070",
      ville: "Mejez El Bab",
      pays: "Tunisie",
      telephone: "58774325",
    },
  ]);
  const [modalOuverte, setModalOuverte] = useState(false);
  const [adresseCourante, setAdresseCourante] = useState(null);

  const handleUpdate = (adresse) => {
    setAdresseCourante(adresse);
    setModalOuverte(true);
  };

  const handleDelete = (id) => {
    setAdresses(adresses.filter((adresse) => adresse.id !== id));
  };

  const handleAddNew = () => {
    setAdresseCourante(null);
    setModalOuverte(true);
  };

  const handleSave = () => {
    if (adresseCourante.id) {
      setAdresses(
        adresses.map((adresse) =>
          adresse.id === adresseCourante.id ? adresseCourante : adresse
        )
      );
    } else {
      setAdresses([
        ...adresses,
        { ...adresseCourante, id: adresses.length + 1 },
      ]);
    }
    setModalOuverte(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdresseCourante({ ...adresseCourante, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Vos Adresses</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adresses.map((adresse) => (
            <div
              key={adresse.id}
              className="bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2">Mon Adresse</h2>
              <p className="text-gray-700 mb-1">{adresse.nom}</p>
              <p className="text-gray-700 mb-1">{adresse.adresse}</p>
              <p className="text-gray-700 mb-1">
                {adresse.codePostal} {adresse.ville}
              </p>
              <p className="text-gray-700 mb-1">{adresse.pays}</p>
              <p className="text-gray-700 mb-4">{adresse.telephone}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleUpdate(adresse)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Mettre à jour
                </button>
                <button
                  onClick={() => handleDelete(adresse.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={handleAddNew}
          className="flex items-center justify-center bg-green-100 p-4 rounded-lg shadow-sm hover:bg-green-200 transition cursor-pointer mt-6"
        >
          <Link to="#" className="text-lg font-medium text-green-700">
            <i className="fas fa-plus mr-2"></i>
            Créer une nouvelle adresse
          </Link>
        </div>
      </div>

      {modalOuverte && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6">
              {adresseCourante?.id
                ? "Mettre à jour l'adresse"
                : "Ajouter une adresse"}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="nom"
                value={adresseCourante?.nom || ""}
                onChange={handleChange}
                placeholder="Nom"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="adresse"
                value={adresseCourante?.adresse || ""}
                onChange={handleChange}
                placeholder="Adresse"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="codePostal"
                value={adresseCourante?.codePostal || ""}
                onChange={handleChange}
                placeholder="Code Postal"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="ville"
                value={adresseCourante?.ville || ""}
                onChange={handleChange}
                placeholder="Ville"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="pays"
                value={adresseCourante?.pays || ""}
                onChange={handleChange}
                placeholder="Pays"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="telephone"
                value={adresseCourante?.telephone || ""}
                onChange={handleChange}
                placeholder="Téléphone"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setModalOuverte(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-gray-600 transition"
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Adresse;
