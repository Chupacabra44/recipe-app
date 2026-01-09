import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(-1); //to go one back to the page
    localStorage.setItem("user", JSON.stringify(user));
    setUser("");
    setEmail("");
  };

  return (
    <div className="loginWrapper">
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => setUser(event.target.value)}
              type="text"
              id="name"
              value={user}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="name"
              value={email}
            />
          </div>

          <button type="submt">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
