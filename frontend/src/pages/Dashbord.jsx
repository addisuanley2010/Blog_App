import React, { useState } from "react";
import dummyData from "../utl/dummyData";
import { Link } from "react-router-dom";

const Dashbord = () => {
  const [posts, setposts] = useState(dummyData);
  return (
    <div className=" max-md:mt-12 mt-16 pt-2  px-3 ">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-y-1 border lg:px-28">
          {posts.map((post) => {
            return (
              <div className="flex justify-between max-sm:px-0 max-sm:text-xs px-4 border rounded-md">
                <div className="flex gap-x-2 md:gap-4 items-center max-sm:flex-col max-sm:items-start">
                  <img
                    src={post.thumnbinal}
                    alt="no image here"
                    className="max-sm:h-6 h-12 rounded-md"
                  />
                  <p>
                    {post.title.length > 15
                      ? post.title.substr(0, 22) + "..."
                      : post.title}
                  </p>
                </div>
                <div className="flex max-sm:gap-x-1 gap-x-2 items-center">
                  <Link to={`/post/${post.postId}`}>
                    <button className="hover:bg-sky-700 hover:text-white px-1 py-0.5 rounded-sm  border h-fit bg-sky-400">
                      view
                    </button>
                  </Link>
                  <Link to={`/post/${post.postId}/edit`}>
                    <button className="hover:bg-sky-700 hover:text-white px-1 py-0.5 rounded-sm  border h-fit bg-green-400">
                      edit
                    </button>
                  </Link>
                  <Link to={`/post/${post.postId}/delete`}>
                    <button className="hover:bg-sky-700 hover:text-white px-1 py-0.5 rounded-sm  border h-fit bg-red-400">
                      delete
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-8 md:p-12 justify-center flex ">No Posts Found!</div>
      )}
    </div>
  );
};

export default Dashbord;
