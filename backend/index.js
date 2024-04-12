const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const uploadImage =require('./routes/uploadImage')
const { mongodb_url, port } = require("./config");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const { notFound, handleError } = require("./middleware/errorMiddleware");
const authMiddleware = require("./middleware/authMiddleware");

app.use(express.json());
app.use(express.urlencoded());

//default cors policy
app.use(cors());

//custom cors policy
// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/uploads", express.static("backend/uploads"));


app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/",authMiddleware, uploadImage);

app.use(notFound);
app.use(handleError);

mongoose.connect(mongodb_url).then(() => {
  console.log(" application connected to database");
  app.listen(port, () => console.log(` app listening on port ${port}`));
});
