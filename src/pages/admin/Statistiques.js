import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import produitData from "../../Data/Produitdata.json";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Statistiques = () => {
  const revenusSemaine = 12000;
  const nombreCommandesSemaine = 75;
  const nombreVisiteursSemaine = 2000;

  const barChartData = {
    labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Revenus Mensuels",
        data: [5000, 6000, 7000, 8000, 5500, 6500],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Nombre de Commandes",
        data: [30, 45, 60, 70, 50, 65],
        fill: false,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const pieChartData = {
    labels: ["Yeux", "Lèvres", "Ongles", "Cheveux", "Soin"],
    datasets: [
      {
        label: "Répartition des Ventes par Catégorie",
        data: [15, 35, 20, 10, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const topProductIds = [1, 2, 3];
  const topProducts = produitData.filter((product) =>
    topProductIds.includes(product.id)
  );

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center mb-4">Statistiques de Vente</h2>

          <div className="row mb-4">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center bg-gradient-to-r from-red-200 via-red-300 to-red-400">
                  <h5 className="card-title">Visiteurs de la Semaine</h5>
                  <p className="card-text display-4">
                    {nombreVisiteursSemaine}
                  </p>
                  <p>diminuer par 5%</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
                  <h5 className="card-title">Revenus de la Semaine</h5>
                  <p className="card-text display-4">${revenusSemaine}</p>
                  <p>augmenté par 3%</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body text-center bg-gradient-to-r from-green-200 via-green-300 to-green-400">
                  <h5 className="card-title">Commandes de la Semaine</h5>
                  <p className="card-text display-4">
                    {nombreCommandesSemaine}
                  </p>
                  <p>augmenté par 2%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    Répartition des Ventes par Catégorie cette Semaine
                  </h5>
                  <Pie
                    data={pieChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Ventes par Catégorie" },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Top 3 Produits de la Semaine</h5>
                  <div className="row">
                    {topProducts.map((product) => (
                      <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.nom}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.nom}</h5>
                            <p className="card-text">Prix: {product.prix}</p>
                            <p className="card-text">
                              Nombre de Ventes: {product.sales || 0}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Revenus Mensuels</h5>
                  <Bar
                    data={barChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Revenus par Mois" },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Nombre de Commandes Mensuelles</h5>
                  <Line
                    data={lineChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "Commandes par Mois" },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
