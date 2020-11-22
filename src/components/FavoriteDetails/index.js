import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";
import Cookie from "js-cookie";

const FavoriteDetails = ({ characters, comics, cookies }) => {
  console.log(cookies);
  console.log(characters);
  console.log(comics);
  return (
    <section className="main-container">
      <h1>YOUR FAVORITES</h1>
      <div className="favorites-container">
        <h2>My characters</h2>

        {characters.results.map((character, index) => {
          console.log(character);
          return (
            <>
              {cookies.indexOf(`${character.id}` !== -1) && (
                <>
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
                  <div className="chara-descritpion"></div>
                  <div className="chara-favorites"></div>
                </>
              )}
            </>
          );
        })}

        <h2>My comics</h2>
        {/* Début du map sur comics */}
        <div className="comic-container"></div>
        {/* Fin du map */}
      </div>
    </section>
  );
};

export default FavoriteDetails;
