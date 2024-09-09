import React from "react";

import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";

import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";

const Apropos = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="container flex pl-20 mx-80 my-4 items-center ">
        <div className="w-100 mx-8 ">
          <img src="images/logo2.png" alt="logo" />
        </div>
        <div className="mx-2">
          <p className="text-gray-400 ">QUI SOMMES NOUS ?</p>
          <h1>À Propos de CHIC TOUNSI</h1>
          <p className="mr-20">
            Découvrez Chic Tounsi, la boutique en ligne dédiée aux produits
            cosmétiques et de soins. Nous proposons une large sélection de
            produits de qualité pour répondre à tous vos besoins de beauté et de
            bien-être. Profitez de nos conseils et astuces pour prendre soin de
            vous au quotidien. Chic Tounsi, c'est l'élégance et le chic au
            service de votre beauté.
            <br />
            Explorez notre vaste collection de cosmétiques, allant des produits
            de maquillage aux soins de la peau, en passant par des traitements
            capillaires spécialisés. Nous proposons uniquement des produits
            testés et approuvés par des experts pour garantir leur efficacité et
            leur sécurité.
          </p>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Apropos;
