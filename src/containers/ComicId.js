import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

// Import components
import ComicDescription from "../components/ComicDescription";

const ComicId = ({ apiUrl }) => {
  const [comic, setComic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log("======> Id du comic", id);
  const requestUrl = `${apiUrl}comics/${id}`;

  // Création de la requête Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requestUrl);

        // console.log("CONSOLE", response.data.data);
        setComic(response.data.data);
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
      <ComicDescription comic={comic} />
    </>
  );
};

export default ComicId;
