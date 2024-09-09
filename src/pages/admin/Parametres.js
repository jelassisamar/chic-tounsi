import React, { useState, useEffect } from "react";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import usersData from "../../Data/User.json";

const Parametres = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foundUser = usersData.find((user) => user.id === 1);
    if (foundUser) {
      setUserInfo({
        name: foundUser.nom,
        email: foundUser.email,
        password: "",
      });
    } else {
      setError("User not found");
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated information:", userInfo);
    alert("Informations mises à jour avec succès !");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4 ">
        <div className="container mt-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Paramètres du Compte
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
            >
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
