import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        
        <Link to={"/"} className="nav__logo">
          <img src={blog1} alt="There is no file at the moment" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to={"/profile"}>Addisu Anley</Link>
          </li>

          <li>
            <Link to={"/create"}>Crate Post</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>logout</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose/>
        </button>
      </div>
    </nav>
  );
};

export default Header;
