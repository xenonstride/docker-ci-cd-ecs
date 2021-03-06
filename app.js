const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Github CI/CD with AWS ECS</h1>");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
