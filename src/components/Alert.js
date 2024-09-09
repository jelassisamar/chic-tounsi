import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Alert = ({ produit }) => {
  return (
    <div
      className="modal fade"
      id={`exampleModal-${produit.id}`}
      tabIndex="-1"
      aria-labelledby={`exampleModalLabel-${produit.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-rose-300 text-white">
            <h5 className="modal-title">
              Produit ajouté au panier avec succès
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>
          <div className="modal-body">
            <div className="flex justify-center">
              <img
                className="main-image w-24 h-24 object-cover"
                src={produit.image}
                alt={produit.nom}
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold mb-2">{produit.marque}</h1>
                <h2 className="text-lg mb-2">{produit.nom}</h2>
                <h1 className="text-xl text-red-500 font-bold mb-4">
                  {produit.prix} DT
                </h1>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              className="inline-block no-underline bg-white text-pink-500 px-4 py-2 rounded-md shadow-md hover:bg-pink-100 transition duration-300"
              href="/"
            >
              Continuer vos achats
            </a>
            <a
              href="/pannier"
              className="inline-block no-underline bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 transition duration-300"
            >
              Finaliser la commande
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
