import React from "react";
import "./index.css";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search-section">
      <div className="search-container">
        <form className="form-container">
          <input
            className="input-search"
            type="text"
            placeholder="What are you looking for ?"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
