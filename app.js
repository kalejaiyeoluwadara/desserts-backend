require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<H1>Dessert Backend</H1>");
});
const start = async () => {
  try {
    app.listen(3000, () => {
      console.log(`Listening on port ${port}.`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
