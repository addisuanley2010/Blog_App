import React, { useState } from "react";
import {Link} from'react-router-dom'
const PostView = ({ dummyData }) => {

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 ">
      {dummyData.map((data) => (
        <div className="flex flex-col bg-white md:m-2 rounded-xl p-2 ">
          <img
            src={data.thumnbinal}
            alt="content not found"
            className=" w-full rounded-xl hover:scale-105 duration-500 "
          />
          <Link to={`post/${data.postId}`} className='p-3 bg-gray-50 border-b-2 w-full'>
         
          <span className="italic font-semibold  p-2">
             {data.title.length > 20
              ? data.title.substr(0, 20) + "..."
              : data.title}
          </span>
           </Link >
          <span>
            {data.description.length > 200
              ? data.description.substr(0, 200) + "..."
              : data.description}
          </span>
          <div className="flex justify-between px-1 items-center">
            <div className="bg-gray-50 px-2 rounded-lg hover:bg-gray-900 hover:text-white flex items-center justify-center gap-1 transition-colors duration-300 ">
              <img
                src={data.thumnbinal}
                alt=""
                className="rounded-full h-8 md:h-12 md:w-12 cursor-pointer"
                onClick={() => {
                  alert("hello my bro how are you?");
                }}
              />
              <div className="text-xs flex flex-col items-center justify-center ">
                <p className="font-semibold"> by addisu Anley</p>
                <p> posted on {data.authorId}</p>
              </div>
            </div>
            <button className="font-semibold bg-gray-100 px-2 py-1 hover:bg-gray-950 hover:text-white  italic border-2 rounded-lg text-xs md:text-lg transition-colors duration-500">
              {data.catagory}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostView;
