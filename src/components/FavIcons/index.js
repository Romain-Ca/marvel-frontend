import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";

const FavIcons = ({ character, comics }) => {
  const [favToken, setFavToken] = useState([]);
  return (
    <span className="bolt-container">
      <FontAwesomeIcon
        className="bolt"
        icon="bolt"
        onClick={() => {
          if (character && document.cookie.indexOf(`${character.id}`) === -1) {
            Cookie.set(`${character.id}`, character.id, {
              path: "/",
            });
            setFavToken(true);
          } else if (comics && document.cookie.indexOf(`${comics.id}`) === -1) {
            Cookie.set(`${comics.id}`, comics.id, {
              path: "/",
            });
            setFavToken(true);
          } else if (character) {
            setFavToken(false);
            Cookie.remove(`${character.id}`);
          } else if (comics) {
            setFavToken(false);
            Cookie.remove(`${comics.id}`);
          }

          console.log(favToken);
        }}
      />
    </span>
  );
};

export default FavIcons;
