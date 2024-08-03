require("dotenv").config();
const express = require("express");
const app = express();
const products = require("./routers/products");
const auth = require("./routers/auth");
const users = require("./routers/users");
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send(
    "<H1>Desserts API</H1><br/><a href='api/v1/products'>all desserts</a> "
  );
});
app.use(express.json());
app.use("/api/v1", products);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
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
