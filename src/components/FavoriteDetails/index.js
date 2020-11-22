import React from "react";
import "./index.css";
import NotFound from "../../images/notfound.jpg";
import FavIcons from "../FavIcons";

const FavoriteDetails = ({ characters, comics, cookies }) => {
  return (
    <section className="main-container">
      <h1>YOUR FAVORITES</h1>
      <div className="padding-container">
        <h2>My characters</h2>
        <div className="favorites-list">
          {characters.results.map((character, index) => {
            console.log(cookies.indexOf(`${character.id}`));
            return (
              <>
                {cookies.indexOf(`${character.id}`) !== -1 && (
                  <div index={index} className="favorites-container">
                    <div className="characters-container">
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
                    <div className="chara-name">{character.name}</div>
                    <FavIcons character={character} />
                  </div>
                )}
              </>
            );
          })}
        </div>

        <h2>My comics</h2>
        <div className="favorites-list">
          {comics.results.map((comic, index) => {
            console.log(cookies.indexOf(`${comic.id}`));
            return (
              <>
                {cookies.indexOf(`${comic.id}`) !== -1 && (
                  <div className="favorites-container">
                    <div index={index} className="comics-container">
                      <img
                        className="chara-picture"
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                    </div>
                    <div className="chara-name">{comic.title}</div>
                    <FavIcons comics={comics} />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FavoriteDetails;
