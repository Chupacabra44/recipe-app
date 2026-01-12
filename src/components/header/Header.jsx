import { useEffect } from "react";
import "./Header.css";

const Header = ({
  query,
  setQuery,
  selectedMeal,
  setSelectedMeal,
  category,
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
            name="category"
            id="category"
            value={selectedMeal}
            onChange={(event) => setSelectedMeal(event.target.value)}
          >
            {category.map((categories, index) => (
              <option value={categories} key={index}>
                {categories}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
