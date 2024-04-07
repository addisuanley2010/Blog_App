import React, { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaPeopleArrows, FaPodcast } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import avatar7 from '../assets/avatar7.jpg'
const MobileNav = ({ setmobile }) => {
  const toggle = () => {
    setmobile(false);
  };
  const { currentUser } = useContext(UserContext);
  const name  = currentUser?.name;
  return (
    <div className=" flex items-start justify-center max-md:mt-10 mt-16 pt-2 z-50  px-3 fixed mx-0 top-0 left-0 right-0 bottom-0 bg-gray-950 text-white rounded-xl sm:hidden ">
      {currentUser?.id && (
        <ul className="flex space-y-8 items-center text-lg flex-col  text-white pt-12">
          <span className=" flex items-center gap-x-4 w-full">
            <img src={avatar7} alt="no" className="bg-white rounded-full w-8 h-8" />
            <Link to={"/profile/1"} onClick={toggle}>
              {name}
            </Link>
          </span>
          <span className=" flex items-center gap-x-4 w-full">
            <FaPodcast className="w-8 h-8" />
            <Link to={"/create"} onClick={toggle}>
              Create Post
            </Link>
          </span>
          <span className="  flex items-center gap-x-4 w-full">
            <FaPeopleArrows className="w-8 h-8" />
            <Link to={"/authors"} onClick={toggle}>
              Authors
            </Link>
          </span>
          <span className=" flex items-center gap-x-4 w-full">
            <AiOutlineLogout className="w-8 h-8" />
            <Link to={"/logout"} onClick={toggle}>
              logout
            </Link>
          </span>
        </ul>
      )}
      {!currentUser?.id && (
        <ul className="flex space-y-8 items-center text-lg flex-col  text-white pt-12">
          <span className="  flex items-center gap-x-4 w-full">
            <FaPeopleArrows className="w-8 h-8" />
            <Link to={"/authors"} onClick={toggle}>
              Authors
            </Link>
          </span>
          <span className=" flex items-center gap-x-4 w-full">
            <AiOutlineLogout className="w-8 h-8" />
            <Link to={"/login"} onClick={toggle}>
              Login
            </Link>
          </span>
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
