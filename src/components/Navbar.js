import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white py-1 text-sm h-8 mt-4">
      <div className="flex ml-40">
        <a href="/">
          <img src="/images/logo.png" className="w-24" alt="Logo" />
        </a>
      </div>
      <div className="relative flex flex-col md:flex-row md:items-center">
        <button onClick={toggleMenu} className="md:hidden text-black px-4 py-2">
          <i className="fas fa-bars text-xl"></i>
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row text-lg md:space-x-4 md:mr-4`}
        >
          <li>
            <a
              className="block md:inline mr-4 text-black no-underline hover:text-mycolor"
              href="/"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              className="block md:inline mr-4 text-black no-underline hover:text-mycolor"
              href="/boutique"
            >
              Boutique
            </a>
          </li>
          <li>
            <a
              className="block md:inline mr-4 text-black no-underline hover:text-mycolor"
              href="/a-propos"
            >
              A propos
            </a>
          </li>
          <li>
            <a
              className="block md:inline mr-4 text-black no-underline hover:text-mycolor"
              href="/contact"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              className="block md:inline mr-4 text-black no-underline hover:text-mycolor"
              href="/actualités"
            >
              Actualités
            </a>
          </li>
        </ul>
      </div>
      <div className="flex mr-40">
        <ul className="flex text-lg">
          <li>
            <a
              className="mr-10 hover:text-mycolor last:ml-40 text-black no-underline"
              href="/compte"
            >
              Mon compte
            </a>
          </li>
        </ul>

        <a
          href="/favoris"
          className="relative flex items-center space-x-2 text-gray-800 mr-4"
        >
          <i className="fas fa-heart text-xl"></i>
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-mycolor text-white text-xs font-bold rounded-full">
            <span id="heart-counter">0</span>
          </span>
        </a>
        <a
          href="/pannier"
          className="relative flex items-center space-x-2 text-gray-800"
        >
          <i className="fas fa-shopping-cart text-xl"></i>
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-mycolor text-white text-xs font-bold rounded-full">
            <span id="cart-counter">0</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
