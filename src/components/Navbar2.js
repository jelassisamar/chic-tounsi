import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <div className="mb-4 d-flex align-items-center mr-30 ml-40 bg-white py-1 text-sm h-8 mt-4">
      <div className="flex mr-2 w-20">
        <div className="relative group">
          <button className="bg-mycolor text-black text-xl p-2 rounded d-flex align-items-center">
            <i className="fa fa-bars m-1"></i>Catégories
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20 w-60">
            <ul className="p-2">
              <li>
                <Link
                  to="/produit/yeux"
                  className="block no-underline p-2 text-gray-700 hover:bg-gray-200 hover:text-blue-800 transition-colors duration-200 rounded-md"
                >
                  Yeux
                </Link>
              </li>
              <li>
                <Link
                  to="/produit/levres"
                  className="block no-underline p-2 text-gray-700 hover:bg-gray-200 hover:text-blue-800 transition-colors duration-200 rounded-md"
                >
                  Lèvres
                </Link>
              </li>
              <li>
                <Link
                  to="/produit/ongles"
                  className="block no-underline p-2 text-gray-700 hover:bg-gray-200 hover:text-blue-800 transition-colors duration-200 rounded-md"
                >
                  Ongles
                </Link>
              </li>
              <li>
                <Link
                  to="/produit/cheveux"
                  className="block no-underline p-2 text-gray-700 hover:bg-gray-200 hover:text-blue-800 transition-colors duration-200 rounded-md"
                >
                  Cheveux
                </Link>
              </li>
              <li>
                <Link
                  to="/produit/soin"
                  className="block no-underline p-2 text-gray-700 hover:bg-gray-200 hover:text-blue-800 transition-colors duration-200 rounded-md"
                >
                  Soin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ml-4 d-flex p-10 flex-grow align-items-center">
        <form
          onSubmit={handleSearch}
          className="relative d-flex align-items-center flex-grow"
        >
          <input
            type="search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Recherche de produits ..."
            className="form-control p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            name="search-submit"
            className="position-absolute end-0 top-0 bottom-0 px-3 d-flex align-items-center justify-content-center text-gray-500 bg-mycolor"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar2;
