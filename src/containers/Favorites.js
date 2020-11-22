import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteDetails from "../components/FavoriteDetails";
import Gif from "../images/source.gif";

const Favorites = ({ apiUrl }) => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const requestUrlCharacter = `${apiUrl}characters?page=${page}&name=${search}`;
  // console.log(requestUrlCharacter);
  const requestUrlComics = `${apiUrl}comics?page=${page}&title=${search}`;
  let allCookies = [];
  if (document.cookie && document.cookie !== " ") {
    allCookies.push(document.cookie);
    console.log(allCookies);
  }
  //   Requête axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(requestUrlCharacter);
        // console.log(response1.data.data);
        setCharacters(response1.data.data);
        const response2 = await axios.get(requestUrlComics);
        // console.log(response2.data.data);
        setComics(response2.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div>
      <img src={Gif} alt="gif" />
    </div>
  ) : (
    <>
      {allCookies.map((cookies, ind) => {
        // console.log(cookies);
        return (
          <FavoriteDetails
            index={ind}
            cookies={cookies}
            characters={characters}
            comics={comics}
          />
        );
      })}
    </>
  );
};

export default Favorites;
