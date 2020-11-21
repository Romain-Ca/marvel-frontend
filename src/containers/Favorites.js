import React, { useState, useEffect } from "react";
import FavIcons from "../components/FavIcons";
import axios from "axios";
import Loader from "react-loader-spinner";
import FavoriteDetails from "../components/FavoriteDetails";

const Favorites = ({ apiUrl }) => {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const requestUrlCharacter = `${apiUrl}characters`;
  const requestUrlComics = `${apiUrl}comics`;
  //   Requête axios character
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
    <Loader
      className="loader"
      type="Bars"
      color="#EF1E22"
      height={90}
      width={90}
    />
  ) : (
    <>
      <FavoriteDetails characters={characters} comics={comics} />
    </>
  );
};

export default Favorites;
