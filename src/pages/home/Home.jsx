import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  // const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState([]);

  // const appId = process.env.REACT_APP_API_ID;
  // const appKey = process.env.REACT_APP_API_KEY;

  //https://developer.edamam.com/edamam-docs-recipe-api - doesn't work like before 2 years

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.meals);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipes);

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;
