import React from "react";
import { Link } from "react-router-dom";
import avatar9 from "../assets/avatar9.jpg";
import PostAuthor from "./PostAuthor";
const PostView = ({
  postId,
  authorId,
  catagory,
  title,
  description,
  thumnbinal,
  updatedAt,
}) => {
  return (
    <div className="flex flex-col bg-white md:m-2 rounded-xl p-2 ">
      <img
        // src={thumnbinal}
        src={avatar9}
        alt={"no content"}
        className=" w-full rounded-xl hover:scale-105 duration-500 "
      />
      <Link to={`/post/${postId}`} className="p-3 bg-gray-50 border-b-2 w-full">
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
          <PostAuthor authorId={authorId} createdAt={updatedAt} />
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
