import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Import compenents
import FavIcons from "../../components/FavIcons";

const ComicDetails = ({ comics }) => {
  return (
    <section className="main-container">
      <h1>OUR COMICS LIST</h1>
      <div className="comics-container">
        <div className="comics-list">
          {comics.results.map((comics, index) => {
            const id = comics.id;
            return (
              <div key={index} className="comics-card">
                <Link to={`/comics/${id}`}>
                  <div className="picture-container">
                    <img
                      className="comics-picture"
                      src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                      alt={comics.title}
                    />
                  </div>
                </Link>

                <p>{comics.title}</p>
                <FavIcons comics={comics} />
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
