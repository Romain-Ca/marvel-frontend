import React from "react";
import "./index.css";

const ComicDescription = ({ comic }) => {
  return (
    <>
      <div className="description-container">
        <div className="col1">
          <img
            src={`${comic.results[0].thumbnail.path}.${comic.results[0].thumbnail.extension}`}
            alt={comic.results[0].title}
          />
        </div>
        <div className="col2">
          <div>
            <p className="name-descritpion">{comic.results[0].title}</p>
          </div>
          <div>
            <span>Description:</span>
            <p className="description-chara">{comic.results[0].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicDescription;
