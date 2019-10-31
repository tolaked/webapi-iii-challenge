const router = require("./users/userRouter");

const express = require("express");

const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

server.use("/api/users", router);

server.listen(3000, () => console.log("App running on port 3000"));

module.exports = server;
