//Entry point in Node.js application - Connects Express and MonogoDB(Backend and database)
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const express = require("express");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const router = express.Router();
const app = express();
const path = require("path");

dotenv.config();

//Connect MongoDB database
mongoose.connect(
  process.env.Mongo_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use("/images", express.static(path.join(__dirname, "public/images")));

//Middleware
app.use(express.json());
app.use(multer());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

app.use("api/auth", authRoute);
app.use("api/users", userRoute);
app.use("api/post", postRoute);
app.use("api/conversations", conversationRoute);
app.use("api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is listening at port 8800");
});
