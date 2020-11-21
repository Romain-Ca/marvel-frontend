import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";
import Cookie from "js-cookie";

const FavoriteDetails = ({ characters, comics }) => {
  return (
    <section className="main-container">
      <h1>YOUR FAVORITES</h1>
      <div className="favorites-container">
        <h2>My characters</h2>
        {/* Début du .map sur characters */}
        {/* Faire un map sur les cookies ? */}
        {characters.results.map((character, index) => {
          return (
            // console.log("characterToken");
            // console.log(character.id);
            // if (Cookie.get(`characterToken${character.id}`) === character.id) {}
            <div index={index} className="characters-container">
              <img
                className="chara-picture"
                src={
                  character.thumbnail.path ===
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                    ? NotFound
                    : `${character.thumbnail.path}.${character.thumbnail.extension}`
                }
                alt={character.name}
              />
            </div>
          );
        })}

        {/* Fin du map */}
        <h2>My comics</h2>
        {/* Début du map sur comics */}
        <div className="comic-container"></div>
        {/* Fin du map */}
      </div>
    </section>
  );
};

export default FavoriteDetails;
