import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProduitData from "../../Data/Produitdata.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
import Alert from "../../components/Alert";
import CardProduit from "../../components/CardProduit";

const Details = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const thumbnailListRef = useRef(null);

  useEffect(() => {
    const produitTrouve = ProduitData.find((p) => p.id === parseInt(id));
    setProduit(produitTrouve);
  }, [id]);

  if (!produit) return <p>Chargement...</p>;

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleScrollLeft = () => {
    if (thumbnailListRef.current) {
      thumbnailListRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (thumbnailListRef.current) {
      thumbnailListRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddReview = () => {
    if (newReview.trim() && userName.trim() && userEmail.trim()) {
      setReviews([
        ...reviews,
        { name: userName, review: newReview, email: userEmail },
      ]);
      setNewReview("");
      setUserName("");
      setUserEmail("");
    }
  };

  const imageCount = produit.Count;
  const images = Array.from(
    { length: imageCount },
    (_, index) => `${produit.images}/${index + 1}.jpg`
  );

  const renderProducts = (type) => {
    const filteredProducts = ProduitData.filter(
      (produit) => produit.type === type && produit.id !== parseInt(id)
    ).slice(0, 4);

    return filteredProducts.map((produit) => (
      <div className="col-md-3" key={produit.id}>
        <CardProduit produit={produit} />
      </div>
    ));
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="container mx-auto my-8 px-8">
        <div className="flex flex-wrap justify-center">
          <div className="w-w1 m-2 flex flex-col items-center">
            <div className="product-cover mb-4">
              {images && images.length > 0 && (
                <img
                  className="main-image w-80 h-80 object-cover"
                  src={images[selectedImage]}
                  alt={produit.nom}
                />
              )}
            </div>

            <div className="thumbnail-container flex items-center mt-4">
              <button
                className="scroll-btn scroll-left text-3xl bg-transparent border-none cursor-pointer"
                onClick={handleScrollLeft}
              >
                &#8249;
              </button>
              <div
                className="thumbnail-list flex overflow-x-auto scroll-smooth mx-2 scrollbar-hide"
                ref={thumbnailListRef}
              >
                {images &&
                  images.map((image, index) => (
                    <img
                      key={index}
                      className={`thumbnail w-24 h-24 mx-2 cursor-pointer object-cover ${
                        index === selectedImage ? "border-2 border-black" : ""
                      }`}
                      src={image}
                      alt={`Miniature ${index + 1}`}
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
              </div>
              <button
                className="scroll-btn scroll-right text-3xl bg-transparent border-none cursor-pointer"
                onClick={handleScrollRight}
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="w-w1 bg-purple-100 p-4  flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">
              {produit.marque}
              <br />
              {produit.nom}
            </h1>
            <hr className="border-t-2 border-black my-4 w-full" />

            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-4 text-xl font-bold">
                Quantité :
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 p-2 border rounded-md"
              />

              <p className="text-xl mr-4 ml-10">
                Total : {produit.prix * quantity} TND
              </p>
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${produit.id}`}
              >
                Ajouter au panier
              </button>
              <Alert produit={produit} />
            </div>
            <hr className="border-t-2 border-black my-4 w-full" />
            <h2 className="font-bold text-xl">Description du produit :</h2>

            <p className="mt-4">{produit.description}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <section className="w-full mt-8 p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Ajouter un avis</h2>
            <p className="text-gray-500 mb-2">
              Votre adresse e-mail ne sera pas publiée. Les champs obligatoires
              sont indiqués avec <span className="text-mycolor">*</span>
            </p>
            <label className="text-gray-500 block mb-1">
              Votre Avis <span className="text-mycolor">*</span>
            </label>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Écrivez votre avis ici..."
              className="w-full p-2 border rounded-md mb-4"
              required
            />
            <label className="text-gray-500 block mb-1">
              Votre Nom <span className="text-mycolor">*</span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              required
            />
            <label className="text-gray-500 block mb-1">
              Votre E-mail <span className="text-mycolor">*</span>
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
              required
            />
            <button
              onClick={handleAddReview}
              className="bg-mycolor text-white p-2 rounded mt-2"
            >
              Soumettre
            </button>
          </section>

          <section className="reviews w-full mt-8 mx-2 p-4 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Avis</h2>
            {reviews.length > 0 ? (
              <ul>
                {reviews.map((review, index) => (
                  <li key={index} className="border-b p-2">
                    <p className="font-bold">{review.name}</p>
                    <p className="border-2">{review.review}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucun avis pour le moment.</p>
            )}
          </section>
        </div>

        <div className="flex flex-wrap justify-center">
          <h1 className="text-2xl font-bold mb-4">PRODUITS SIMILAIRES</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {renderProducts(produit.type)}
          </div>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Details;
