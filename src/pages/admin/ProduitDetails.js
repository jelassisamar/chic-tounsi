import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import produitData from "../../Data/Produitdata.json";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import { Button, Modal, Form } from "react-bootstrap";
import avis from "../../Data/Avis.json";

const ProduitDetails = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [images, setImages] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    nom: "",
    categorie: "",
    type: "",
    prix: "",
    description: "",
  });
  const [tempProduct, setTempProduct] = useState({});
  const [productReviews, setProductReviews] = useState([]);

  useEffect(() => {
    const currentProduct = produitData.find((p) => p.id === parseInt(id));
    if (currentProduct) {
      setProduit(currentProduct);
      setImages(
        Array.from(
          { length: parseInt(currentProduct.Count) },
          (_, index) => `${currentProduct.images}/${index + 1}.jpg`
        )
      );
      setEditedProduct({
        nom: currentProduct.nom,
        categorie: currentProduct.categorie,
        type: currentProduct.type,
        prix: currentProduct.prix,
        description: currentProduct.description,
      });
      setTempProduct({
        nom: currentProduct.nom,
        categorie: currentProduct.categorie,
        type: currentProduct.type,
        prix: currentProduct.prix,
        description: currentProduct.description,
      });
    } else {
      console.error("Produit non trouvé");
    }
  }, [id]);

  useEffect(() => {
    if (produit) {
      const reviews = avis
        .flatMap((a) => a.avis)
        .filter((review) => review.id === parseInt(id));
      setProductReviews(reviews);
    }
  }, [produit, id]);

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (selectedImage) {
      setImages([...images, selectedImage]);
      setSelectedImage(null);
      setShowImageModal(false);
    }
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    setEditedProduct({ ...tempProduct });
    setShowEditModal(false);
  };

  const handleTempProductChange = (e) => {
    const { name, value } = e.target;
    setTempProduct({ ...tempProduct, [name]: value });
  };

  const handleDeleteReview = (index) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet avis ?")) {
      const newReviews = productReviews.filter((_, i) => i !== index);
      setProductReviews(newReviews);
    }
  };

  if (!produit) return <p>Chargement...</p>;

  return (
    <div className="h-screen flex flex-col ">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-6 mx-auto max-w-6xl bg-white shadow-lg rounded-lg mt-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Détails du produit
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {editedProduct.nom}
            </h3>
            <p className="text-lg text-gray-700">
              <strong className="font-medium">Catégorie:</strong>{" "}
              {editedProduct.categorie}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium">Type:</strong>{" "}
              {editedProduct.type}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium">Prix:</strong>{" "}
              {editedProduct.prix} TND
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium">Description:</strong>{" "}
              {editedProduct.description}
            </p>
            <Button
              variant="primary"
              onClick={() => setShowEditModal(true)}
              className="mt-4"
            >
              Modifier les détails
            </Button>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Images:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-60 h-60 object-cover rounded-lg shadow-md"
                    />
                    <Button
                      variant="danger"
                      className="absolute top-2 right-2"
                      onClick={() => handleDeleteImage(index)}
                    >
                      Supprimer
                    </Button>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                onClick={() => setShowImageModal(true)}
                className="mt-6"
              >
                Ajouter une image
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Avis des clients:
            </h4>
            <div className="space-y-4">
              {productReviews.length === 0 ? (
                <p>Aucun avis pour ce produit.</p>
              ) : (
                productReviews.map((review, index) => (
                  <div key={index} className="border p-4 rounded-md shadow-md">
                    <p className="text-lg font-semibold">
                      Auteur: {review.auteur}
                    </p>
                    <p className="mt-2">Commentaire: {review.commentaire}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Email: {review.email}
                    </p>
                    <Button
                      variant="danger"
                      className="mt-2"
                      onClick={() => handleDeleteReview(index)}
                    >
                      Supprimer
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier les détails du produit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditProduct}>
              <Form.Group controlId="formNom">
                <Form.Label>Nom du produit</Form.Label>
                <Form.Control
                  type="text"
                  name="nom"
                  value={tempProduct.nom || ""}
                  onChange={handleTempProductChange}
                />
              </Form.Group>
              <Form.Group controlId="formCategorie">
                <Form.Label>Catégorie</Form.Label>
                <Form.Control
                  type="text"
                  name="categorie"
                  value={tempProduct.categorie || ""}
                  onChange={handleTempProductChange}
                />
              </Form.Group>
              <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={tempProduct.type || ""}
                  onChange={handleTempProductChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrix">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  type="text"
                  name="prix"
                  value={tempProduct.prix || ""}
                  onChange={handleTempProductChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={tempProduct.description || ""}
                  onChange={handleTempProductChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enregistrer les modifications
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleAddImage}>
              <Form.Group controlId="formFile">
                <Form.Label>Choisir une image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Prévisualisation"
                    className="mt-2 w-32 h-32 object-cover"
                  />
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Ajouter l'image
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ProduitDetails;
