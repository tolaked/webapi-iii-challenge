const express = require("express");

const app = express();

app.use(express.json());

app.get("*", (req, res) => {
  res.send("Hello there");
});

app.listen(6000, () => console.log("App running on port 6000"));
