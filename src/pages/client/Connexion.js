import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Connexion = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate(`/compte`);
  };
  const handleClick2 = () => {
    navigate(`/inscription`);
  };
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="flex mx-40 align-items-center">
        <div className="w-2/5">
          <h1 className=" mt-4 text-xl font-bold">SE CONNECTER</h1>
          <form className="max-w-md mx-auto mt-4 p-5  ">
            <label htmlFor="username" className="block mb-1 font-bold">
              Identifiant ou e-mail <span className="text-mycolor">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre nom d'utilisateur"
            />
            <label htmlFor="password" className="block mb-1 font-bold">
              Mot de passe <span className="text-mycolor">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre mot de passe"
            />
            <button
              onClick={() => handleClick1()}
              type="submit"
              className="w-full p-2 bg-mycolor hover:bg-yellow-500 text-white font-bold rounded"
            >
              Connexion
            </button>
          </form>
        </div>
        <div>
          <h1 className="mx-4">OU</h1>
          <hr />
        </div>

        <div className=" ml-20 w-2/5">
          <h1>Login </h1>
          <p>
            L'inscription à ce site vous permet d'accéder à l'état et à
            l'historique de vos commandes. Il vous suffit de remplir les champs
            ci-dessous et nous vous créerons un nouveau compte en un rien de
            temps. Nous ne vous demanderons que les informations nécessaires
            pour rendre le processus d'achat plus rapide et plus facile.
          </p>

          <button
            onClick={() => handleClick2()}
            type="button"
            className="w-full p-2 mt-4 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded"
          >
            Inscription
          </button>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Connexion;
