import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Tableaudebord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex ">
      <nav
        className={`${
          isSidebarOpen ? "w-80" : "w-16"
        }    h-screen bg-light transition-width duration-600 fixed top-0 left-0 z-50`}
      >
        <div className="flex items-center mt-m1 justify-between  p-4 bg-purple-600 ">
          <i
            className={`material-icons text-white text-3xl ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            dashboard
          </i>
          <a
            href="/home"
            className={`text-xl  no-underline font-bold text-white ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            Tableau de Bord
          </a>
          <button className="text-2xl text-white " onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`mt-6 space-y-2 ${isSidebarOpen ? "block" : "hidden"}`}>
          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa fa-receipt text-xl mr-4"></i>
            <a
              href="/commandes"
              className="block no-underline text-black font-bold  "
            >
              Commandes
            </a>
          </div>
          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa fa-box text-xl mr-4"></i>
            <a
              href="/produits"
              className="block no-underline text-black font-bold "
            >
              Produits
            </a>
          </div>

          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa fa-user text-xl mr-4"></i>
            <a
              href="/utilisateurs"
              className="block no-underline text-black font-bold  "
            >
              Utilisateurs
            </a>
          </div>

          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa-solid fa-chart-simple text-xl mr-4"></i>
            <a
              href="/statistiques"
              className="block no-underline text-black font-bold "
            >
              Statistiques
            </a>
          </div>
          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa-solid fa-newspaper text-xl mr-4"></i>
            <a
              href="/articles"
              className="block no-underline text-black font-bold "
            >
              Articles
            </a>
          </div>

          <div className="flex items-center p-4 hover:bg-purple-300">
            <i className="fa fa-cogs text-xl mr-4"></i>
            <a
              href="/parametres"
              className="block no-underline text-black font-bold "
            >
              Paramètres
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Tableaudebord;
