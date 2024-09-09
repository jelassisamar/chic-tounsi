import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rechercher?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="shadow-md z-40 flex items-center p-4 ml-16">
      <img src="/images/logo.png" alt="Logo" className="h-10 w-auto mx-4" />

      <div className="flex-1 mx-4 ml-20">
        <form
          className="relative d-flex align-items-center flex-grow"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Rechercher ..."
            className="w-full px-4 py-2 border rounded-3xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="position-absolute end-0 top-0 bottom-0 px-3 d-flex align-items-center justify-content-center rounded-3xl text-gray-500 bg-purple-600"
          >
            <i className="text-white fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="relative mx-4">
        <Link to="/notifications">
          <i className="fas fa-bell text-2xl text-black"> </i>
        </Link>

        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          3
        </span>
      </div>
      <Link to="/parametres" className="flex items-center no-underline ">
        <p className="mr-4 text-black font-bold  ">John Doe</p>
        <img
          src="/images/user.png"
          alt="User"
          className="h-10 w-10 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Admin;
