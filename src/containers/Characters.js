import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import components
import CharacterDetails from "../components/CharacterDetails";
import Search from "../components/Search";

// Import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleRight, faAngleLeft);

const Characters = ({ apiUrl }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Pour la recherche de personnage
  const [search, setSearch] = useState("");
  // Pour la pagination
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // On doit passer en query page et name
  const requestUrl = `${apiUrl}characters?page=${page}&name=${search}`;
  // console.log(requestUrl);

  const handleClick = (event) => {
    setPage(event.selected + 1);
  };

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);
        setCharacters(response.data.data);
        // console.log(response.data.data);
        setTotalPage(Math.ceil(Number(response.data.data.total) / 100));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search]);

  return isLoading ? (
    <Loader
      className="loader"
      type="Bars"
      color="#EF1E22"
      height={90}
      width={90}
    />
  ) : (
    <>
      <Search search={search} setSearch={setSearch} />
      <CharacterDetails characters={characters} />
      <ReactPaginate
        pageCount={totalPage}
        pageRangeDisplayed={7}
        marginPagesDisplayed={1}
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
        breakLabel={"..."}
        onPageChange={handleClick}
        containerClassName={"paginate-container"}
        subContainerClassName={"paginate"}
        activeClassName={"active"}
        // Plein d'autes options de className à chécker sur la doc
      />
    </>
  );
};

export default Characters;
