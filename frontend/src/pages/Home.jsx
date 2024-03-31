import React from "react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import PostView from "../utl/PostView";

const Home = () => {
  const dummyData = [
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar1,
    },
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar2,
    },
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar1,
    },
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar1,
    },
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar1,
    },

    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar3,
    },
    {
      postId: "1",
      catagory: "education",
      title: "quality educations for all ",
      description:
        " vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto vcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architectovcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architectovcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architectovcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architectovcusantium quas nisi reprehenderit perspiciatis enim iusto laudantiumculpa nulla sequi non, autem labore vel et veniam similique. Isteconsequuntur perspiciatis eum, id dolorem aspernatur vitae neque errorrepudiandae, obcaecati laudantium architecto.",
      authorId: "1",
      thumnbinal: avatar1,
    },
    {
      postId: "1",
      catagory: "education",
      title:
        "quality educations for all  reprehendesequuntur perspiciatis eum ",
      description:
        " vcusantium quas nisi reprehendesequuntur perspiciatis eum, id dolorem aspernatur vitae neque",
      authorId: "1",
      thumnbinal: avatar1,
    },
  ];
  return (
    <div className="   max-md:mt-12 mt-16 pt-2  px-3 ">
      <PostView dummyData={dummyData} />
    </div>
  );
};

export default Home;
