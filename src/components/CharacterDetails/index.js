import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";

// Import compenents
import FavIcons from "../../components/FavIcons";

const CharacterDetails = ({ characters }) => {
  return (
    <section className="main-container">
      <h1>OUR CHARACTERS LIST</h1>
      <div className="character-container">
        <div className="character-list">
          {characters.results.map((character, index) => {
            return (
              <div key={index} className="character-card">
                <div className="picture-container">
                  <img
                    className="character-picture"
                    src={
                      character.thumbnail.path ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                        ? NotFound
                        : `${character.thumbnail.path}.${character.thumbnail.extension}`
                    }
                    alt={character.name}
                  />
                </div>
                <p>{character.name}</p>
                <FavIcons />
              </div>
            );
          })}

          {/* Fin du map */}
        </div>
      </div>
      <nav className="pagination-container"></nav>
    </section>
  );
};
export default CharacterDetails;
