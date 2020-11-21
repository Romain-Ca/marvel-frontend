import React from "react";
import "./index.css";

const ComicDescription = ({ comic }) => {
  return (
    <>
      <p>{comic.results[0].title}</p>
      <div>
        <img
          src={`${comic.results[0].thumbnail.path}.${comic.results[0].thumbnail.extension}`}
          alt={comic.results[0].title}
        />
      </div>
      <div>
        <p>{comic.results[0].description}</p>
      </div>
    </>
  );
};

export default ComicDescription;
