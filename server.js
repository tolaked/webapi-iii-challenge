const router = require("./users/userRouter");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
// server.use(logger());
server.use("/api/users", router);
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

server.listen(3000, () => console.log("App running on port 3000"));

function logger(req, res, next) {
  // const { method, url } = req;
  // const date = new Date();
  // console.log(`[${date.toTimeString()}] ${method.toUpperCase()} to ${url}`);
  // console.log("Hey logger here");
  next();
}

module.exports = server;
