import React, { useState } from "react";
import { Link } from "react-router-dom";
const PostView = ({
  postId,
  authorId,
  catagory,
  title,
  description,
  thumnbinal,
}) => {
  return (
    <div className="flex flex-col bg-white md:m-2 rounded-xl p-2 ">
      <img
        src={thumnbinal}
        alt="content not found"
        className=" w-full rounded-xl hover:scale-105 duration-500 "
      />
      <Link to={`post/${postId}`} className="p-3 bg-gray-50 border-b-2 w-full">
        <span className="italic font-semibold  p-2">
          {title.length > 20 ? title.substr(0, 20) + "..." : title}
        </span>
      </Link>
      <span>
        {description.length > 200
          ? description.substr(0, 200) + "..."
          : description}
      </span>
      <div className="flex justify-between px-1 items-center">
        <Link to={`/posts/users/${authorId}`}>
          <div className="bg-gray-50 px-2 rounded-lg hover:bg-gray-900 hover:text-white flex items-center justify-center gap-1 transition-colors duration-300 ">
            <img
              src={thumnbinal}
              alt=""
              className="rounded-full h-8 md:h-12 md:w-12 cursor-pointer"
            />
            <div className="text-xs flex flex-col items-center justify-center ">
              <p className="font-semibold"> by addisu Anley</p>
              <p> posted on {authorId}</p>
            </div>
          </div>
        </Link>

        <Link to={`/posts/catagories/${catagory}`}>
          <button className="font-semibold bg-gray-100 px-2 py-1 hover:bg-gray-950 hover:text-white  italic border-2 rounded-lg text-xs md:text-lg transition-colors duration-500">
            {catagory}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostView;
