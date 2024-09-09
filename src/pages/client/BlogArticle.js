import React from "react";
import { useParams } from "react-router-dom";
import articles from "../../Data/Articles.json";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Chatbot from "../../components/Chatbot";
const BlogArticle = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="container mx-40 my-10">
        <h1 className=" ml-10 text-2xl font-bold mb-4">{article.titre}</h1>
        <div className="container flex  my-8">
          <div className="w-1/3 mr-10 ml-40">
            <p className="text-gray-600 mb-2">
              Par {article.auteur} le{" "}
              {new Date(article.datePublication).toLocaleDateString()}
            </p>
            <img
              src={article.image}
              alt={article.titre}
              className="w-full h-96  object-cover mb-4 rounded"
            />
          </div>
          <div className="w-1/3 ml-10">
            <p className="text-gray-800">{article.contenu}</p>
          </div>
        </div>
      </div>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default BlogArticle;
