import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Compte = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="ml-40 mr-40 flex">
        <div className="w-60  mr-4">
          <h1 className=" m-4 text-xl font-bold mb-6">MON COMPTE</h1>
          <ul>
            <li className="  px-2 p-2 hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="./details">
                Détails du compte
              </a>
            </li>
            <li className=" px-2 p-2 hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="./commande">
                Commandes
              </a>
            </li>

            <li className="  px-2 p-2 hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="./livraison">
                Suivi de livraison
              </a>
            </li>
            <li className="  px-2 p-2 hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="./adresses">
                Adresses
              </a>
            </li>

            <li className="px-2 p-2  hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="./favoris ">
                Liste de souhaits
              </a>
            </li>
            <li className="px-2 p-2  hover:bg-gray-200">
              <a className="no-underline text-black text-lg" href="/">
                Se déconnecter
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto m-4 bg-white shadow-lg rounded-lg">
          <div className="grid  mt-4 mb-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-200 p-6 rounded-lg shadow-md hover:bg-green-300 transition">
              <Link to="/details" className="text-3xl text-black block mb-4 ">
                <i className="fa fa-user"></i>
              </Link>
              <p className="text-lg font-medium">Détails du compte</p>
            </div>
            <div className="bg-pink-200 p-6 rounded-lg shadow-md hover:bg-pink-300 transition ">
              <Link to="/commande" className="text-3xl text-black block mb-4">
                <i className="fa fa-box"></i>
              </Link>
              <p className="text-lg font-medium">Commandes</p>
            </div>
            <div className="bg-orange-200 p-6 rounded-lg shadow-md hover:bg-orange-300 transition">
              <Link to="/livraison" className="text-3xl text-black block mb-4">
                <i className="fa fa-truck"></i>
              </Link>
              <p className="text-lg font-medium">Suivi de livraison </p>
            </div>
            <div className="bg-purple-200 p-6 rounded-lg shadow-md hover:bg-purple-300 transition">
              <Link to="/adresses" className="text-3xl text-black block mb-4">
                <i className="fa fa-address-book"></i>
              </Link>
              <p className="text-lg font-medium">Adresses</p>
            </div>
            <div className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition">
              <Link to="/favoris" className="text-3xl text-black block mb-4">
                <i className="fa fa-heart"></i>
              </Link>
              <p className="text-lg font-medium">Liste de souhaits</p>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg shadow-md hover:bg-yellow-300 transition">
              <Link className="text-3xl text-black block mb-4">
                <i className="fa fa-right-from-bracket"></i>
              </Link>
              <p className="text-lg font-medium">Se déconnecter</p>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Compte;
