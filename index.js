const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from Node Api module");
});

mongoose
  .connect(
    "mongodb+srv://kapish1233:g05AGz9Ez5mNcI1C@backenddb.xtgom7c.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("server is runnning on port 3000");
    });
  })
  .catch((error) => {
    console.log("connection failed");
  });
