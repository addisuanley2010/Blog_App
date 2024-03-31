import React from "react";
import avatar1 from "../assets/avatar1.jpg";
const PostDetail = () => {
  const dummyData = {
    postId: "1",
    catagory: "education",
    title: "quality educations for all ",
    description:
      " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
    authorId: "1",
    thumnbinal: avatar1,
  };
  return (
    <div className=" max-md:mt-12 mt-16 pt-2  px-3 ">
      <div className="flex justify-between items-center  lg:px-40 md:px-16">
        <div className="bg-gray-50 px-2 rounded-lg hover:bg-gray-900 hover:text-white flex items-center justify-start gap-1 transition-colors duration-300 max-sm:flex max-sm:flex-col ">
          <img
            src={dummyData.thumnbinal}
            alt=""
            className="rounded-full h-8 md:h-12 md:w-12 cursor-pointer"
            onClick={() => {
              alert("hello my bro how are you?");
            }}
          />
          <div className="text-xs flex flex-col items-center justify-center ">
            <p className="font-semibold "> Addisu Anley</p>
            <p className="max-sm:hidden"> posted on {dummyData.authorId}</p>
          </div>
        </div>
        <div className=" gap-x-2 flex p-2 max-sm:px-1 max-sm:gap-x-1 max-sm:text-xs">
          <button className="bg-sky-500 px-3 rounded-lg py-1 hover:bg-sky-700 hover:text-white ">
            edit
          </button>
          <button className="bg-red-500 px-3 rounded-lg py-1 hover:bg-red-700 hover:text-white">
            delete
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:px-40 md:px-16 pb-4 relative">
        <img
          src={dummyData.thumnbinal}
          className=" w-full lg:w-96 rounded-lg lg:h-96 z-12"
          alt=""
        />
        <button className="font-semibold bg-gray-100 px-2 py-1 hover:bg-gray-950 hover:text-white  italic border-2 rounded-lg text-xs md:text-lg transition-colors duration-500 absolute bottom-2 right-2">
              {dummyData.catagory}
            </button>
      </div>

      <div className="flex justify-center lg:px-48 xl:px:60 md:px-16 flex-col ">
        <span className="border-b-4 pt-0 mb-2"></span>

        <p>{dummyData.description}</p>
        .................................................
        
          quo. Sed blanditiis optio, ab modi laboriosam excepturi neque pariatur
          similique suscipit exercitationem sapiente quod tempore illo
          inventore, deleniti consequuntur officiis dolores voluptates. Esse
          aspernatur temporibus, natus dolorem dolor voluptates odit voluptas
          doloremque, doloribus perferendis exercitationem ab harum fugit
          perspiciatis qui recusandae minus, possimus ipsum earum deleniti
          dignissimos eaque fugiat! Quasi temporibus odit deleniti adipisci
          minima similique corrupti at! Expedita eligendi perferendis dolore,
          alias doloremque consectetur velit consequuntur, cupiditate quae ex
     
      </div>
    </div>
  );
};

export default PostDetail;
