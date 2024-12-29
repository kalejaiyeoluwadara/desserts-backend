require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS middleware
const app = express();
const products = require("./routers/products");
const auth = require("./routers/auth");
const users = require("./routers/users");
const orders = require("./routers/order");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const demoUserRoutes = require("./routers/demoUserRoutes");
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(
    "<H1>Desserts API</H1><br/><a href='api/v1/products'>all desserts</a> "
  );
});

// Middleware
app.use(express.json());
app.use("/api/v1", products);
app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);
app.use("/api/v1/orders", orders);
app.use("/api/v1/demousers", demoUserRoutes);
app.use(notFound);
app.use(errorHandlerMiddleWare);

// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Listening on port ${port}.`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
