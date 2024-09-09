import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProduitData from "../../Data/Produitdata.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Alert from "../../components/Alert";
const Favoris = () => {
  const produits = ProduitData.filter((produit) => produit.favoris === "oui");

  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="container mx-auto my-8">
        <div className="w-full md:w-4/4 p-4">
          <h1 className="text-2xl font-bold mb-4">Votre liste de souhaits</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
            {produits.map((produit) => (
              <div>
                <div className=" bg-gray-100  mb-2">
                  <button className="fa fa-close text-xl mx-2"></button>
                  <button className=" text-xl">Retirer</button>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden w-70 relative">
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
                    <button
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal-${produit.id}`}
                    >
                      Ajouter au panier
                    </button>
                    <Alert produit={produit} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Favoris;
