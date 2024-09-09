import React, { useState } from "react";
import Alert from "./Alert";
const CardProduit = ({ produit }) => {
  const [isFavori, setIsFavori] = useState(produit.favoris === "oui");

  const toggleFavori = () => {
    setIsFavori((prevState) => !prevState);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-60 relative ">
      <a href={`/produits/${produit.id}`}>
        <img
          src={produit.image}
          alt={produit.nom}
          className="w-40 h-48 mx-10 object-cover"
        />
      </a>
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          <a
            href={`/produits/${produit.id}`}
            className="text-black no-underline"
          >
            {produit.marque}
          </a>
        </h2>
        <h2 className="text-lg font-semibold">
          <a
            href={`/produits/${produit.id}`}
            className="text-black no-underline"
          >
            {produit.nom}
          </a>
        </h2>
        <p className="text-mycolor font-bold">{produit.prix} TND</p>
        {produit.originalprix && (
          <p className="text-gray-700 text-base line-through text-red-500">
            {produit.originalprix} TND
          </p>
        )}
        {produit.discount && (
          <p className="text-green-500 text-base">
            {produit.discount} de réduction
          </p>
        )}

        <button
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal-${produit.id}`}
        >
          Ajouter au panier
        </button>
        <Alert produit={produit} />
        <button
          onClick={toggleFavori}
          className={`fa ${
            isFavori ? "fa-solid fa-heart" : "fa-regular fa-heart"
          } text-3xl m-2 absolute top-2 right-2 ${
            isFavori ? "text-red-500" : "text-gray-500"
          } focus:outline-none`}
        ></button>
      </div>
    </div>
  );
};

export default CardProduit;
