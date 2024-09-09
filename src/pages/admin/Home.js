import React from "react";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";

const Home = () => {
  const totalSales = 20000;
  const totalUsers = 150;
  const totalOrders = 75;
  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center text-2xl font-bold mb-4">
            Tableau de Bord Administratif
          </h2>

          <div className="row justify-content-center mb-4">
            <div className="col-md-4 mb-4 ">
              <div
                className="card text-black "
                style={{ borderColor: "#4a90e2" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Commandes</h5>
                  <p className="card-text">Total des commandes: 150</p>
                  <a
                    href="/commandes"
                    className="no-underline text-black p-2 rounded bg-a "
                  >
                    Voir les commandes
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 ">
              <div
                className="card text-black "
                style={{ borderColor: "#5bc0de" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Produits</h5>
                  <p className="card-text">Total des produits: 75</p>
                  <a
                    href="/produits"
                    className="no-underline text-black p-2 rounded bg-b "
                  >
                    Voir les produits
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-md-4 mb-4">
              <div
                className="card text-black"
                style={{ borderColor: "#f0ad4e" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Utilisateurs</h5>
                  <p className="card-text">Total des utilisateurs: 30</p>
                  <a
                    href="/utilisateurs"
                    className="no-underline text-black p-2 rounded bg-c "
                  >
                    Voir les utilisateurs
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="card text-black"
                style={{ borderColor: "#5cb85c" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Statistiques</h5>
                  <p className="card-text">Statistiques de la semaine</p>
                  <a
                    href="/statistiques"
                    className="no-underline text-black p-2 rounded bg-d "
                  >
                    Voir les statistiques
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-center text-xl font-semibold mb-4">
            Résumé des Statistiques
          </h3>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div
                className="card text-white"
                style={{ backgroundColor: "#5cb85c" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Ventes Totales</h5>
                  <p className="card-text display-4">${totalSales}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="card text-white "
                style={{ backgroundColor: "#FF6F61" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Utilisateurs Totals</h5>
                  <p className="card-text display-4">{totalUsers}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="card text-white "
                style={{ backgroundColor: "#008080" }}
              >
                <div className="card-body">
                  <h5 className="card-title">Commandes Totales</h5>
                  <p className="card-text display-4">{totalOrders}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
