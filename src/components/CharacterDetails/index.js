import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
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
            const id = character.id;
            // console.log(character);
            return (
              <div key={index} className="character-card">
                <Link to={`/character/${id}`}>
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
                </Link>

                <p>{character.name}</p>
                <FavIcons character={character} />
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
