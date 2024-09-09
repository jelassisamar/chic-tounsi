import React from "react";
import articles from "../../Data/Articles.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
const Blog = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Actualités</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <div key={article.id} className="border rounded-lg p-4">
              <img
                src={article.image}
                alt={article.titre}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{article.titre}</h2>
              <p className="text-gray-600 mb-2">
                Par {article.auteur} le{" "}
                {new Date(article.datePublication).toLocaleDateString()}
              </p>
              <p className="text-gray-800">{article.subtitre}</p>
              <a
                href={`/article/${article.id}`}
                className="border-2 w-24 no-underline text-black text-center rounded-md border-mycolor bg-mycolor mt-4 block"
              >
                Lire la suite
              </a>
            </div>
          ))}
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default Blog;
