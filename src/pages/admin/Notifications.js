import React from "react";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";

const notifications = [
  {
    id: 1,
    message: "Nouveau produit ajouté : Fond de teint lumineux.",
    date: "2024-08-10",
    status: "info",
  },
  {
    id: 2,
    message: "Le produit XYZ est en rupture de stock.",
    date: "2024-08-09",
    status: "warning",
  },
  {
    id: 3,
    message: "La commande #12345 a été expédiée.",
    date: "2024-08-08",
    status: "success",
  },
  {
    id: 4,
    message: "Nouveau commentaire de client : 'J'adore ce produit !'",
    date: "2024-08-07",
    status: "info",
  },
  {
    id: 5,
    message: "Une nouvelle commande a été passée : #12346.",
    date: "2024-08-06",
    status: "success",
  },
  {
    id: 6,
    message: "Le client a laissé un avis : 'Service rapide et efficace.'",
    date: "2024-08-05",
    status: "info",
  },
  {
    id: 7,
    message: "Rappel : La promotion sur les produits d'été se termine bientôt.",
    date: "2024-08-04",
    status: "warning",
  },
];

const Notifications = () => {
  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center text-2xl font-bold mb-4">Notifications</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {notifications.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center">
                      Aucune notification trouvée.
                    </td>
                  </tr>
                ) : (
                  notifications.map((notification) => (
                    <tr key={notification.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {notification.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {notification.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            notification.status === "info"
                              ? "bg-blue-100 text-blue-800"
                              : notification.status === "warning"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {notification.status.charAt(0).toUpperCase() +
                            notification.status.slice(1) ===
                          "Info"
                            ? "Information"
                            : notification.status.charAt(0).toUpperCase() +
                                notification.status.slice(1) ===
                              "Warning"
                            ? "Avertissement"
                            : "Succès"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
