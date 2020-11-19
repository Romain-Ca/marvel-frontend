import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

//import components
import CharacterDetails from "../components/CharacterDetails";

const Characters = ({ apiUrl }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const requestUrl = `${apiUrl}characters`;

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);
        setCharacters(response.data.data);
        // console.log(response.data.data);
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
      <CharacterDetails characters={characters} />
    </>
  );
};

export default Characters;
