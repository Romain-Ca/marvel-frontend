import React from "react";
import "./index.css";

// Import compenents
import FavIcons from "../../components/FavIcons";

const ComicDetails = ({ comics }) => {
  return (
    <section className="main-container">
      <h1>OUR COMICS LIST</h1>
      <div className="comics-container">
        <div className="comics-list">
          {comics.results.map((comics, index) => {
            return (
              <div key={index} className="comics-card">
                <div className="picture-container">
                  <img
                    className="comics-picture"
                    src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                    alt={comics.name}
                  />
                </div>
                <p>{comics.title}</p>
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

export default ComicDetails;
