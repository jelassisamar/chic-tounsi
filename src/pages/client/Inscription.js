import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Inscription = () => {
  const navigate = useNavigate();

  const handleRedirectToAccount = () => {
    navigate(`/compte`);
  };

  const handleRedirectToLogin = () => {
    navigate(`/connexion`);
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="flex mx-40 align-items-center">
        <div className="w-2/5">
          <h1 className="mt-4 text-xl font-bold">S'INSCRIRE</h1>
          <form className="max-w-md mx-auto mt-4 p-5 ">
            <label htmlFor="fullname" className="block mb-1 font-bold">
              Nom complet : <span className="text-mycolor">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre nom complet..."
              required
            />
            <label htmlFor="email" className="block mb-1 font-bold">
              E-mail : <span className="text-mycolor">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre e-mail..."
              required
            />
            <label htmlFor="phone" className="block mb-1 font-bold">
              Téléphone : <span className="text-mycolor">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre numéro de téléphone..."
              required
            />
            <label htmlFor="password" className="block mb-1 font-bold">
              Mot de passe : <span className="text-mycolor">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 mb-5 border border-gray-300 rounded"
              placeholder="Entrez votre mot de passe..."
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-mycolor hover:bg-yellow-500 text-white font-bold rounded"
              onClick={handleRedirectToAccount}
            >
              S'inscrire
            </button>
          </form>
        </div>

        <div className="mx-4">
          <h1 className="text-center">OU</h1>
          <hr />
        </div>

        <div className="ml-20 w-2/5">
          <h1 className="text-xl font-bold">Connexion</h1>
          <p>
            L'inscription à ce site vous permet d'accéder à l'état et à
            l'historique de vos commandes. Il vous suffit de remplir les champs
            ci-dessous et nous vous créerons un nouveau compte en un rien de
            temps. Nous ne vous demanderons que les informations nécessaires
            pour rendre le processus d'achat plus rapide et plus facile.
          </p>

          <button
            onClick={handleRedirectToLogin}
            type="button"
            className="w-full p-2 mt-4 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded"
          >
            Se connecter
          </button>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Inscription;
