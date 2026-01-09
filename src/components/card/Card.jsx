import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default-image.jpg";
import "./Card.css";

const Card = ({ recipes }) => {
  console.log(recipes);
  const navigate = useNavigate();

  return (
    <div className="card">
      {recipes.map((recipe, index) => {
        const { strMeal, strMealThumb } = recipe;
        return (
          <div key={index} className="cardWrapper">
            <h3>{strMeal}</h3>
            <img
              src={strMealThumb ? strMealThumb : defaultImage}
              alt="strMealThumb"
            />
            <button onClick={() => navigate("detail", { state: recipe })}>
              More Detail
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
