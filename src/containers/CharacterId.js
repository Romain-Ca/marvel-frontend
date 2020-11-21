import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

// Import components
import CharacterDescription from "../components/CharacterDescription";

const CharacterId = ({ apiUrl }) => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log("======> Id du Character", id);
  const requestUrl = `${apiUrl}characters/${id}`;

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);

        // console.log("CONSOLE", response.data.data);
        setCharacter(response.data.data);

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
      <CharacterDescription character={character.results[0]} />
    </>
  );
};

export default CharacterId;
