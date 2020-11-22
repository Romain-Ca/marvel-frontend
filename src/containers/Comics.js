import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gif from "../images/source.gif";

// Import Components
import ComicDetails from "../components/ComicDetails";
import Search from "../components/Search";

// Import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleRight, faAngleLeft);

const Comics = ({ apiUrl }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Pour la recherche de comics
  const [search, setSearch] = useState("");
  // Pour la pagination
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // On doit passer en query page et title
  const requestUrl = `${apiUrl}comics?page=${page}&title=${search}`;
  // console.log(requestUrl);

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);
        setComics(response.data.data);
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
    <div>
      <img src={Gif} alt="gif" />
    </div>
  ) : (
    <>
      <Search search={search} setSearch={setSearch} />
      <ComicDetails comics={comics} />
      <ReactPaginate
        pageCount={totalPage}
        pageRangeDisplayed={7}
        marginPagesDisplayed={1}
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
        breakLabel={"..."}
        // onPageChange={handleClick}
        containerClassName={"paginate-container"}
        subContainerClassName={"paginate"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Comics;
