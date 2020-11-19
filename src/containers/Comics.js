import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

// Import Components
import ComicDetails from "../components/ComicDetails";

const Comics = ({ apiUrl }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const requestUrl = `${apiUrl}comics`;

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);
        setComics(response.data.data);
        console.log(response.data.data);
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
      <ComicDetails comics={comics} />
    </>
  );
};

export default Comics;
