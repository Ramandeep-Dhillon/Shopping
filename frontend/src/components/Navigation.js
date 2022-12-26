import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navi = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
        <img alt = 'logo' 
        className = 'logo'
        src='https://i.ebayimg.com/images/g/e5AAAOSwnpNg698~/s-l1600.jpg' />

      {
      
      auth ? (
        <ul className="navi-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>{" "}
          </li>
        </ul>
      ) : (
        <ul className="navi-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navi;
