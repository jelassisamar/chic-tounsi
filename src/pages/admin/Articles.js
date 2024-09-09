import React, { useState } from "react";
import Tableaudebord from "../../components/Tableaudebord";
import Admin from "../../components/Admin";
import articlesData from "../../Data/Articles.json";
const Articles = () => {
  const [articles, setArticles] = useState(articlesData);
  const [editArticle, setEditArticle] = useState(null);
  const [newArticle, setNewArticle] = useState({
    id: "",
    titre: "",
    auteur: "",
    datePublication: "",
    sousTitre: "",
    categorie: "",
    image: "",
    contenu: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewArticle((prev) => ({ ...prev, [name]: value }));
  };

  const addArticle = () => {
    if (newArticle.titre && newArticle.auteur) {
      setArticles([...articles, { ...newArticle, id: articles.length + 1 }]);
      setNewArticle({
        id: "",
        titre: "",
        auteur: "",
        datePublication: "",
        sousTitre: "",
        categorie: "",
        image: "",
        contenu: "",
      });
    }
  };

  const selectArticle = (article) => {
    setEditArticle(article);
  };

  const updateArticle = () => {
    setArticles(
      articles.map((article) =>
        article.id === editArticle.id ? editArticle : article
      )
    );
    setEditArticle(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditArticle((prev) => ({ ...prev, [name]: value }));
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="h-screen flex flex-col">
      <Admin />
      <Tableaudebord />
      <div className="flex-1 p-4">
        <div className="container mt-4">
          <h2 className="text-center text-2xl font-bold mb-4">Articles</h2>

          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4 mb-4" key={article.id}>
                <div className="card w-80 h-auto shadow-lg">
                  <img
                    src={article.image}
                    alt={article.titre}
                    className="card-img-top h-40 object-cover"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-bold">{article.titre}</h5>
                    <p className="card-text text-sm">{article.sousTitre}</p>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => selectArticle(article)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteArticle(article.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h3>
                {editArticle
                  ? "Modifier l'article"
                  : "Ajouter un nouvel article"}
              </h3>
              <form>
                <div className="form-group">
                  <label>Titre</label>
                  <input
                    type="text"
                    name="titre"
                    value={editArticle ? editArticle.titre : newArticle.titre}
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Auteur</label>
                  <input
                    type="text"
                    name="auteur"
                    value={editArticle ? editArticle.auteur : newArticle.auteur}
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Date de publication</label>
                  <input
                    type="date"
                    name="datePublication"
                    value={
                      editArticle
                        ? editArticle.datePublication
                        : newArticle.datePublication
                    }
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Sous-titre</label>
                  <input
                    type="text"
                    name="sousTitre"
                    value={
                      editArticle ? editArticle.sousTitre : newArticle.sousTitre
                    }
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Catégorie</label>
                  <input
                    type="text"
                    name="categorie"
                    value={
                      editArticle ? editArticle.categorie : newArticle.categorie
                    }
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Image (URL)</label>
                  <input
                    type="text"
                    name="image"
                    value={editArticle ? editArticle.image : newArticle.image}
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Contenu</label>
                  <textarea
                    name="contenu"
                    value={
                      editArticle ? editArticle.contenu : newArticle.contenu
                    }
                    onChange={editArticle ? handleEditChange : handleChange}
                    className="form-control"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success mt-2"
                  onClick={editArticle ? updateArticle : addArticle}
                >
                  {editArticle ? "Mettre à jour" : "Ajouter"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
