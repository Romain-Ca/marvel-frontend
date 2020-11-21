import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";

const CharacterDescription = ({ character }) => {
  return (
    <>
      <p>{character.name}</p>
      <div>
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
      <div>
        <p>{character.description}</p>
      </div>
    </>
  );
};

export default CharacterDescription;

// Il faudra faire un .map sur comics.map pour le caroussel...
