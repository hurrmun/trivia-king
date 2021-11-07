//* Dependencies
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
//? Controllers
const testController = require("./controllers/testController");
//
//

//* Config
// const PASSWORD = anFbOQsQYv1M45Uw;
const app = express();
const port = process.env.PORT ?? 3001;

const MONGODB_URI =
  process.env.MONGODB_URI ?? `mongodb://localhost:27017/trivia`;
const db = mongoose.connection;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  },
  () => {
    console.log("mongo cloud connection established");
  }
);
// ERROR / SUCCESS
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));
//! change database host to atlas mongodb database @Qai
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose..." + MONGODB_URI);
});

//* Middleware
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
//? Middleware for controllers
app.use("/api/test", testController);
//
//

//* Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//* Start Server to listen
app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
