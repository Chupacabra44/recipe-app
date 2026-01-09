import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav className="navWrapper">
      <div>
        <Link to="/">
          <i>{"<OAK/>"}</i>
          <span>Recipe</span>
        </Link>
      </div>

      <div className={show ? "linkWrapper show" : "linkWrapper"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>

      <div onClick={toggleMenu} className="burgerMenu">
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
