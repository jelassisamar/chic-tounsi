import React, { useState, useEffect } from "react";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import produitData from "../../Data/Produitdata.json";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Produits = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [produits, setProduits] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    categorie: "",
    type: "",
    prix: "",
    image: "",
  });
  const [currentFilter, setCurrentFilter] = useState("all");

  useEffect(() => {
    setProduits(produitData);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rechercher?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduits([...produits, { id: Date.now(), ...formData }]);
    setFormData({ nom: "", categorie: "", type: "", prix: "", image: "" });
    handleCloseModal();
  };

  const categoryStats = produits.reduce((acc, produit) => {
    acc[produit.categorie] = (acc[produit.categorie] || 0) + 1;
    return acc;
  }, {});

  const categoryColors = {
    levres: "#4a90e2",
    yeux: "#5cb85c",
    ongles: "#f0ad4e",
    cheveux: "#FF6F61",
    soin: "#6A0DAD",
  };

  const filteredProduits =
    currentFilter === "all"
      ? produits
      : produits.filter((produit) => produit.categorie === currentFilter);

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4 ">
        <div className="container mt-4">
          <h2 className="text-center">Produits</h2>
          <div className="flex-1 mx-4 ml-20 mb-4">
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
                className="position-absolute end-0 top-0 bottom-0 px-3 d-flex align-items-center justify-content-center rounded-3xl bg-purple-600"
              >
                <i className="text-white fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="mb-4">
            <Button variant="primary" onClick={handleShowModal}>
              Ajouter un produit
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Ajouter un nouveau produit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formNomProduit">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nom du produit"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formCategorie">
                    <Form.Label>Catégorie</Form.Label>
                    <Form.Control
                      as="select"
                      name="categorie"
                      value={formData.categorie}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      <option value="levres">levres</option>
                      <option value="soin">soin</option>
                      <option value="ongles">ongles</option>
                      <option value="yeux">yeux</option>
                      <option value="cheveux">cheveux</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formTypeProduit">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type de produit"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPrixProduit">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Prix du produit"
                      name="prix"
                      value={formData.prix}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formImageProduit">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="URL de l'image du produit"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Ajouter
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          <h3 className="text-center mb-4">Statistiques par Catégorie</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {Object.entries(categoryStats).map(([categorie, count]) => {
              const color = categoryColors[categorie] || "#000000";

              return (
                <div key={categorie}>
                  <div
                    className="text-white p-4 rounded-lg shadow-md"
                    style={{ backgroundColor: color }}
                  >
                    <h5 className="card-title">{categorie}</h5>
                    <p className="card-text">Nombre de produits: {count}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mb-4">
            <Button
              variant={currentFilter === "all" ? "primary" : "outline-primary"}
              onClick={() => setCurrentFilter("all")}
            >
              Tout
            </Button>
            {Object.keys(categoryColors).map((categorie) => (
              <Button
                key={categorie}
                variant={
                  currentFilter === categorie ? "primary" : "outline-primary"
                }
                onClick={() => setCurrentFilter(categorie)}
                className="ml-2"
              >
                {categorie}
              </Button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Catégorie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProduits.map((produit) => (
                  <tr key={produit.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {produit.nom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {produit.categorie}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {produit.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {produit.prix} TND
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={produit.image}
                        alt={produit.nom}
                        className="w-16 h-16"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        to={`/produits/${produit.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Modifier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;
