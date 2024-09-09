import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Pannier = () => {
  const navigate = useNavigate();
  const handleFinalizeOrder = () => {
    navigate("/checkout");
  };
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ESSENCE GEL SOURCILS",
      price: 16.9,
      quantity: 2,
      image: "images/products/1/1.jpg",
    },
    {
      id: 2,
      name: "ESSENCE MASCARA",
      price: 14.9,
      quantity: 1,
      image: "images/products/1/2.jpg",
    },
  ]);

  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const shippingCost = 7;
  const totalBeforeDiscount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    shippingCost
  );

  const totalPrice = totalBeforeDiscount - discount;

  const validPromoCodes = [
    { code: "PROMO10", discount: 0.1 },
    { code: "PROMO20", discount: 0.2 },
    { code: "FREESHIP", discount: shippingCost },
  ];

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleApplyPromoCode = () => {
    const promo = validPromoCodes.find((p) => p.code === promoCode);
    if (promo) {
      if (promo.discount < 1) {
        setDiscount(totalBeforeDiscount * promo.discount);
      } else {
        setDiscount(promo.discount);
      }
    } else {
      alert("Code promo invalide");
      setDiscount(0);
    }
    setShowPromoInput(false);
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="flex mx-40 mt-8 px-4">
        <div className="mx-8 w-w1 p-4 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Pannier</h1>
          <hr className="border-t-2 border-black my-4" />
          <div className="mt-10">
            {cartItems.length === 0 ? (
              <p>Votre Pannier est vide</p>
            ) : (
              <div className="items-center mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex ml-4">
                      <p className="mx-2 text-xl font-semibold">{item.name}</p>
                      <p className="text-red-500 text-lg">
                        {item.price.toFixed(2)} DT
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-4 p-2 mx-4"
                      >
                        <i className="fa-solid fa-trash cursor-pointer text-gray-600 hover:text-red-500"></i>
                      </button>
                      <div className="flex items-center mt-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-16 p-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mx-8 w-1/3 p-4 shadow-md">
          <div className="mb-4">
            <p className="text-xl font-semibold">
              Nombre d'articles:{" "}
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="text-xl font-semibold">
              Livraison: {shippingCost} TND
            </p>
          </div>
          <p
            className="text-mycolor mb-4 cursor-pointer"
            onClick={() => setShowPromoInput(!showPromoInput)}
          >
            {showPromoInput
              ? "Annuler le code promo"
              : "Vous avez un code promo ?"}
          </p>
          {showPromoInput && (
            <div className="mb-4">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Entrez votre code promo"
              />
              <button
                onClick={handleApplyPromoCode}
                className="bg-mycolor text-white py-2 px-4 rounded hover:bg-mycolor-dark"
              >
                Appliquer
              </button>
            </div>
          )}
          <hr className="border-t-2 border-black my-4" />
          <p className="text-xl font-semibold">Total TTC:</p>
          <p className="text-red-500 text-2xl font-bold mb-4">
            Total: {totalPrice.toFixed(2)} TND
          </p>
          <hr className="border-t-2 border-black my-4" />
          <button
            className="bg-mycolor text-white py-2 px-4 rounded mt-4 w-full hover:bg-mycolor-dark"
            onClick={handleFinalizeOrder}
          >
            Finaliser la commande
          </button>
        </div>
      </div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Pannier;
