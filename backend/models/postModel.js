const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    image: {
      type: String,
      default:'no image uploaded'
    },
  },
  { timestamps: true }
);

const postModel=model("posts",postSchema)

module.exports=postModel;
