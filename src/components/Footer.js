import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center mb-20 mx-40 bg-white py-1 text-sm h-8 mt-20  ">
        <div className="flex  items-center mr-20">
          <div className="text-5xl text-black block mr-4 ">
            <i className="fa fa-truck"></i>
          </div>
          <div>
            <p className="text-lg font-medium">Livraison 2-3 jours</p>
            <p> Sur toute la tunisie</p>
          </div>
        </div>

        <div className="flex  items-center mr-20">
          <div className="text-5xl text-black block mr-4 ">
            <i className="fa fa-wallet"></i>
          </div>
          <div>
            <p className="text-lg font-medium">Paiment</p>
            <p>Possibiité de paiment à la livraison</p>
          </div>
        </div>

        <div className="flex  items-center mr-20">
          <div className="text-5xl text-black block mr-4 ">
            <i className="fa  fa-headphones /></div>"></i>
          </div>
          <div>
            <p className="text-lg font-medium">2/7 Support </p>
            <p>Chat en direct </p>
          </div>
        </div>

        <div className="flex  items-center mr-20">
          <div className="text-5xl text-black block mr-4 ">
            <i className="fa fa-shield-heart"></i>
          </div>
          <div>
            <p className="text-lg font-medium">100% Safe </p>
            <p>Produits Garanties </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mx-40 bg-white py-1 text-sm h-8 mt-24">
        <div className="">
          <p className="text-lg">INSCRIVEZ VOUS A NOTRE NEWSLETTER</p>

          <p>
            inscrivez-vous pour recevoir toutes les informations sur nos
            derniers arrivages et bénificiez d'un accées exclusif au shopping en
            avant-premiére.
          </p>
        </div>
        <input
          type="email"
          placeholder="Votre adresse de courrier électronique"
          className="w-full p-2 border border-gray-300 rounded-lg "
        />
        <button className="bg-mycolor ml-4 p-2 w-80 ">ABONNEZ-VOUS</button>
      </div>

      <div className="  justify-between items-center mx-40 bg-white  text-sm  mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="ml-30">
            <h3 className="text-lg font-bold mb-2">Cartes acceptées</h3>
            <div className="flex items-center mt-4">
              <img src="/images/cartes.png" alt="cartes" className="h-5 mr-2" />
            </div>
          </div>

          <div className="mx-20">
            <h3 className="text-lg font-bold mb-2">service client</h3>
            <p>(+216)12345678</p>
          </div>

          <div className="mr-30">
            <h3 className="text-lg font-bold mb-2">Horaire d'été</h3>
            <p>Lundi - Vendredi : 8h -12h30 et 13h -15h</p>
            <p>Samedi : 8h - 12h</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">2024 &copy; Chic Tounsi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
