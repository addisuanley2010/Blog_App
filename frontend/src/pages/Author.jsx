import React, { useState } from "react";
import dummyData from "../utl/dummyData";
import { Link } from "react-router-dom";
const Author = () => {
  const [authors, setauthors] = useState(dummyData);
  return (
    <div className=" max-md:mt-12 mt-16 pt-2  px-3">
      {authors.length > 0 ? (
        <div className=" flex-col grid md:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4">
          {authors.map((author) => {
            return (
              <Link to={`/posts/users/${author.authorId}`}>
                <div className="flex border-2 p-2 m-1 rounded-md w-full gap-x-4 italic hover:bg-gray-800 hover:text-white cursor-pointer">
                  <img
                    src={author.thumnbinal}
                    alt=""
                    className="w-12 h-12 rounded-full "
                  />
                  <span>
                    <p>Addisu Anley</p>
                    <p>{author.postId}</p>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="py-8 md:p-12 justify-center flex ">
          No authors Found!
        </div>
      )}{" "}
    </div>
  );
};

export default Author;
