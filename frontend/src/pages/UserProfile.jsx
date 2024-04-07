import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar3 from "../assets/avatar3.jpg";
import { AiFillBuild, AiFillEdit } from "react-icons/ai";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { currentUser } = useContext(UserContext);

  const [user, setuser] = useState({
    name: currentUser?.name,
    email: currentUser?.email,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  // const [profileImage, setprofileImage] = useState(null);
  const [error, seterror] = useState(false);

  const token = currentUser?.token;

  const email = currentUser?.email;

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const handleInputCahnge = (e) => {
    setuser((prevstate) => {
      return { ...prevstate, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = () => {
    !user.email || !user.password || !user.name || !user.confirmPassword
      ? seterror(true)
      : seterror(false);
    console.log(user);
  };

  return (
    <div className="   max-md:mt-12 mt-16 pt-2  px-3 flex flex-col items-center ">
      <Link
        to={"/mypost"}
        className=" border px-4 py-0 md:py-1 rounded-md hover:bg-gray-900 hover:text-white my-0 md:my-4 italic"
      >
        My Post
      </Link>
      <div className="relative">
        <img
          src={avatar3}
          alt="no image"
          className="rounded-full max-sm:h-16 max-sm:w-16 max-md:mt-2 "
        />
        <AiFillEdit className="h-7 bg-white w-7 border-2 rounded-full absolute left-12 right-0 bottom-0 md:left-20 md:w-10 md:h-10" />
      </div>

      {/* <form action="">
        <input
          type="file"
          accept="png ,jpg ,jpeg"
          name="profileImage"
          onChange={(e) => {
            setprofileImage(e.target.files[0]);
          }}
        />
        <label htmlFor="">
          <AiFillEdit className="h-7 bg-white w-7 border-2 rounded-full absolute left-12 right-0 bottom-0 md:left-20 md:w-10 md:h-10" />
        </label>
        <button>
          <AiFillBuild />
        </button>
      </form> */}
      <div className="flex flex-col">
        <p
          className={`text-red-500 italic text-xs px-16 items-center ${
            !error ? "hidden" : ""
          }`}
        >
          Please , Fill all The Fields!{" "}
        </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInputCahnge}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputCahnge}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="password"
          placeholder="current password"
          name="password"
          value={user.password}
          onChange={handleInputCahnge}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="password"
          placeholder="new passwoord"
          name="newPassword"
          value={user.newPassword}
          onChange={handleInputCahnge}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
        <input
          type="password"
          placeholder=" confirm password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputCahnge}
          className="border-2 h-10 px-4 m-2 rounded-lg "
        />
      </div>
      <button
        className="border bg-gray-800 text-slate-200 italic rounded-md px-4 py-1 mb-4 hover:bg-black hover:text-white hover:scale-105"
        onClick={handleSubmit}
      >
        update profile
      </button>
    </div>
  );
};

export default UserProfile;
