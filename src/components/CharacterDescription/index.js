import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";

const CharacterDescription = ({ character }) => {
  console.log(character);
  return (
    <>
      <div className="description-container">
        <div className="col1">
          <img
            src={
              character.thumbnail.path ===
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ? NotFound
                : `${character.thumbnail.path}.${character.thumbnail.extension}`
            }
            alt={character.name}
          />
        </div>
        <div className="col2">
          <div>
            <p className="name-descritpion">{character.name}</p>
          </div>
          <div>
            <span>Description:</span>
            <p className="description-chara">{character.description}</p>
          </div>
          <div>
            <span>Comic(s):</span>
            <p className="comics-list"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDescription;
