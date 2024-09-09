import React from "react";

import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";

import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="container flex pl-20 ml-80 mr-80 mt-4 items-center  ">
        <div className="ml-20">
          <h1>Contacter-nous</h1>
          <p>
            Remplissez notre formulaire et nous vous contacterons dans les 24
            heures.
          </p>
          <form className="items-center">
            <div className="flex flex-col  ">
              <label>Votre nom</label>
              <input
                type="text"
                name="nom"
                className="border-2 m-2 p-2 "
                required
              />
            </div>

            <div className="flex flex-col  ">
              <label>Votre email</label>
              <input
                type="email"
                name="email"
                className="border-2 m-2 p-2 "
                required
              />
            </div>

            <div className="flex flex-col  ">
              <label>Objet</label>
              <input
                type="text"
                name="objet"
                className="border-2 m-2 p-2 "
                required
              />
            </div>

            <div className="flex flex-col ">
              <label>Votre message</label>

              <textarea
                name="message"
                className="border-2 m-2 p-2 "
                required
              ></textarea>
            </div>
            <button className="w-20 bg-mycolor border-2 border-gray-500 m-2">
              ENVOYER
            </button>
          </form>
        </div>
        <div className="w-90 ml-40 ">
          <div className="flex items-center my-2">
            <div className="mx-8">
              <i className="fa fa-phone text-3xl"></i>
            </div>
            <div>
              <p className="font-bold text-xl">Apelez-nous :</p>
              <p className="text-mycolor font-bold text-md "> 12345678</p>
            </div>
          </div>

          <div className="flex items-center my-2">
            <div className="mx-8">
              <i class="fa fa-envelope  text-3xl"></i>
            </div>
            <div>
              <p className="font-bold text-xl">Envoyez-nous un e-mail :</p>
              <p className="text-mycolor font-bold text-md ">
                contact@chichtounsi.tn
              </p>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Contact;
