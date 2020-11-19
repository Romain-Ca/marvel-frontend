import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

// Import Components

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // Création de la requête
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/comics");
        console.log(response.data);
        setData(response.data);
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
      type="Puff"
      color="#2cb1ba"
      height={90}
      width={90}
    />
  ) : (
    <>
      <div>Yoyo</div>
      <div>{data.attributionHTML} </div>
    </>
  );
};

export default Home;
