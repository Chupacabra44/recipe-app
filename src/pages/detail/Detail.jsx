import { useLocation } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { state } = useLocation();
  const { strMeal, strMealThumb, strInstructions, strCategory } = state;

  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
    .map((i) => ({
      ingredient: state[`strIngredient${i}`]?.trim(),
      measure: state[`strMeasure${i}`]?.trim(),
    }))
    .filter((item) => item.ingredient);

  console.log(ingredients);

  return (
    <div className="detailWrapper">
      <div className="imgWrapper">
        <h1>{strMeal}</h1>
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <h3>INGREDIENTS</h3>
      <div className="ingredientsWrapper">
        <p className="category">Category: {strCategory}</p>
        {ingredients.map((item, index) => (
          <div className="ingredients" key={index}>
            <p>{item.ingredient}</p>
            <p>{item.measure}</p>
          </div>
        ))}
        <p className="instructions">{strInstructions}</p>
      </div>
    </div>
  );
};

export default Detail;
