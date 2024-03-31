import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobile, setmobile] = useState(false);

  const handleNav = () => {
    setmobile((prevState) => !prevState);
  };
  return (
    <nav>
      {mobile && <MobileNav setmobile={setmobile} />}

      <div className="flex justify-between px-4 pt-1 pb-1  my-0 items-center fixed top-0 right-0 left-0  bg-gray-100 z-50">
        <Link to={"/"} className="">
          <img
            src={blog1}
            alt="There is no file at the moment"
            className="w-10 h-10 md:w-16 md:h-16 rounded-lg shadow-lg"
          />
        </Link>
        {mobile ? (
          <AiOutlineClose onClick={handleNav} className="sm:hidden text-3xl cursor-pointer" />
        ) : (
          <FaBars className="sm:hidden text-3xl cursor-pointer" onClick={handleNav} />
        )}
        <ul className="flex space-x-8  text-lg text-gray-950 font-serif  max-sm:hidden">
          <li>
            <Link to={"/profile/1"}>Addisu Anley</Link>
          </li>

          <li>
            <Link to={"/create"}>Create Post</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
