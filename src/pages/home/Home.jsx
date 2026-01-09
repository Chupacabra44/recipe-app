import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import "./Home.css";
import home from "../../assets/home.svg";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);

  // const appId = process.env.REACT_APP_API_ID;
  // const appKey = process.env.REACT_APP_API_KEY;

  //https://developer.edamam.com/edamam-docs-recipe-api - doesn't work like before 2 years

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.meals || []);
      console.log(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      {!recipes && <img className="homeImg" src={home} alt="home" />}
      {recipes?.length === 0 && <h1>Sorry. Try Another Food Name</h1>}
      {recipes?.length > 0 && <Card recipes={recipes} />}
    </div>
  );
};

export default Home;
