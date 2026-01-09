import { useEffect } from "react";
import "./Header.css";

const Header = ({
  query,
  setQuery,
  selectedMeal,
  setSelectedMeal,
  mealTypes,
  getData,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="headerWrapper">
      <h1>Recipe App</h1>
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
          <select
            name="mealType"
            id="mealType"
            value={selectedMeal}
            onChange={(event) => setSelectedMeal(event.target.value)}
          >
            {mealTypes.map((mealType, index) => (
              <option value={mealType} key={index}>
                {mealType}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
