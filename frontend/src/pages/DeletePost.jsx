import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const DeletePost = () => {
    const { currentUser } = useContext(UserContext);

  const token = currentUser?.token;
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);


  return <div className=" max-md:mt-12 mt-16 pt-2  px-3 ">DeletePost</div>;
};

export default DeletePost;
