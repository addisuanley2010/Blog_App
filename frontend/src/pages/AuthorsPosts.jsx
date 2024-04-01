import React ,{useState} from "react";

import PostView from "../utl/PostView";
import dummyData from "../utl/dummyData";
const AuthorsPosts = () => {
  const [post, setpost] = useState(dummyData)
  return (
    <div className="   max-md:mt-12 mt-16 pt-2  px-3 ">
      {post.length > 0 ? (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 gap-x-0">
          {post.map(
            ({
              postId,
              catagory,
              title,
              description,
              authorId,
              thumnbinal,
            }) => (
              <PostView
                postId={postId}
                authorId={authorId}
                catagory={catagory}
                title={title}
                description={description}
                thumnbinal={thumnbinal}
              />
            )
          )}
        </div>
      ) : (
        <div className="py-8 md:p-12 justify-center flex ">No Posts Found!</div>
      )}
    </div>
  );
};





export default AuthorsPosts