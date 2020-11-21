import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";

const FavIcons = ({ character, comics }) => {
  const [favToken, setFavToken] = useState(false);
  return (
    <span className="bolt-container">
      <FontAwesomeIcon
        className="bolt"
        icon="bolt"
        onClick={() => {
          if (character) {
            Cookie.set(`characterToken${character.id}`, character.id, {
              path: "/",
            });
            setFavToken(true);
          } else {
            Cookie.set(`comicToken${comics.id}`, comics.id, {
              path: "/",
            });
            setFavToken(true);
          }

          console.log(favToken);
        }}
      />
    </span>
  );
};

export default FavIcons;
