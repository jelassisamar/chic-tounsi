import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Checkout = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "ESSENCE GEL SOURCILS",
      price: 16.9,
      quantity: 2,
      image: "images/products/1/1.jpg",
      paiment: "Payer en espèces à la livraison",
    },
  ]);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shippingCost = 7;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const orderTotal = subtotal + shippingCost;

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setIsModalOpen(method);
  };
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="flex flex-col md:flex-row mx-40">
        <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg mx-2">
          <h3 className="text-xl font-bold mb-4">Détails de facturation</h3>
          <form>
            <label className="block mb-2">Prénom *</label>
            <input type="text" className="border-2 p-2 w-full mb-4" required />
            <label className="block mb-2">Nom *</label>
            <input type="text" className="border-2 p-2 w-full mb-4" required />
            <label className="block mb-2">Adresse *</label>
            <input type="text" className="border-2 p-2 w-full mb-4" required />
            <label className="block mb-2">Téléphone *</label>
            <input type="tel" className="border-2 p-2 w-full mb-4" required />
            <label className="block mb-2">E-mail *</label>
            <input type="email" className="border-2 p-2 w-full mb-4" required />
            <button
              type="submit"
              className="bg-mycolor text-white py-2 px-4 rounded w-full hover:bg-mycolor-dark"
            >
              Valider
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded-lg mx-2">
          <h3 className="text-2xl font-bold mb-6">Votre commande</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <table className="w-full bg-white border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Produit</th>
                    <th className="py-2 px-4 border-b">Sous-total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover mr-4"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="text-gray-600">
                            Quantité: {item.quantity}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-right text-mycolor">
                      <p>
                        {item.price * item.quantity} <span>TND</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t">
                    <th className="py-2 px-4">Sous-total</th>
                    <td className="py-2 px-4 text-right text-mycolor">
                      <p>
                        {subtotal} <span>TND</span>
                      </p>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <th className="py-2 px-4">Expédition</th>
                    <td className="py-2 px-4 text-right text-mycolor">
                      <p>
                        {shippingCost} <span>TND</span>
                      </p>
                    </td>
                  </tr>
                  <tr className="order-total border-t">
                    <th className="py-2 px-4">Total</th>
                    <td className="py-2 px-4 text-right text-2xl font-bold text-mycolor">
                      <strong>
                        {orderTotal} <span>TND</span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="mt-6">
                <p className="py-2 px-4 font-bold">Paiement:</p>
                <div>
                  <input
                    type="radio"
                    id="cash"
                    name="payment-method"
                    onChange={() => handlePaymentMethodChange("cash")}
                    className="mx-2"
                  />
                  <label htmlFor="cash">à la livraison</label>
                  <input
                    type="radio"
                    id="e-dinar"
                    name="payment-method"
                    onChange={() => handlePaymentMethodChange("e-dinar")}
                    className="mx-2"
                  />
                  <label htmlFor="e-dinar">Carte e-dinar</label>
                  <input
                    type="radio"
                    id="visa"
                    name="payment-method"
                    onChange={() => handlePaymentMethodChange("visa")}
                    className="mx-2"
                  />
                  <label htmlFor="visa">Carte Visa</label>
                  <input
                    type="radio"
                    id="mastercard"
                    name="payment-method"
                    onChange={() => handlePaymentMethodChange("mastercard")}
                    className="mx-2"
                  />
                  <label htmlFor="mastercard">Mastercard</label>
                </div>
                <button
                  type="button"
                  className="bg-mycolor text-white py-2 px-4 rounded mt-4 w-full hover:bg-mycolor-dark"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen === "e-dinar" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Paiement par carte e-dinar
            </h2>
            <form>
              <label className="block mb-2">Numéro de carte *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Date d'expiration *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Code de sécurité *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-mycolor text-white py-2 px-4 rounded w-full hover:bg-mycolor-dark"
              >
                Payer
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen("")}
                className="bg-gray-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-600"
              >
                Fermer
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalOpen === "visa" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Paiement par carte Visa</h2>
            <form>
              <label className="block mb-2">Numéro de carte *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Date d'expiration *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Code de sécurité *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-mycolor text-white py-2 px-4 rounded w-full hover:bg-mycolor-dark"
              >
                Payer
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen("")}
                className="bg-gray-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-600"
              >
                Fermer
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalOpen === "mastercard" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Paiement par Mastercard</h2>
            <form>
              <label className="block mb-2">Numéro de carte *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Date d'expiration *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">Code de sécurité *</label>
              <input
                type="text"
                className="border-2 p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="bg-mycolor text-white py-2 px-4 rounded w-full hover:bg-mycolor-dark"
              >
                Payer
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen("")}
                className="bg-gray-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-600"
              >
                Fermer
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalOpen === "cash" && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Paiement à la livraison</h2>
            <p>Vous avez choisi de payer en espèces à la livraison.</p>
            <button
              type="button"
              onClick={() => setIsModalOpen("")}
              className="bg-gray-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Checkout;
