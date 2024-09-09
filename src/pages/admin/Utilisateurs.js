import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import usersData from "../../Data/User.json";

const Utilisateurs = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4 mt-20">
        <div className="container mt-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Tableau de Bord Administrateur
          </h2>

          <form onSubmit={handleAddUser} className="mb-4">
            <h3 className="text-lg font-semibold">Ajouter un Utilisateur</h3>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={newUser.name}
              onChange={handleInputChange}
              className="border p-2 rounded mr-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newUser.email}
              onChange={handleInputChange}
              className="border p-2 rounded mr-2"
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Rôle"
              value={newUser.role}
              onChange={handleInputChange}
              className="border p-2 rounded mr-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Ajouter
            </button>
          </form>

          <h3 className="text-lg font-semibold">Liste des Utilisateurs</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center">
                    Aucun utilisateur trouvé.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Utilisateurs;
