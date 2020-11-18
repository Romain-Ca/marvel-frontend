import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components

const Home = () => {
  // Création de la requête
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3100/");
      console.log(response);
    };
  });

  return <div>yoyo</div>;
};

export default Home;
