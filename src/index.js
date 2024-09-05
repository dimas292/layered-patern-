const express = require("express");
require("dotenv").config();
const {createProduct , getProductByID}= require('./product/layer.controller')


const app = express();

const PORT = process.env.PORT;

// midleware to handle requst body
app.use(express.json())

app.post("/api/users", createProduct);

app.get("/api/users/:id", getProductByID)

app.listen(PORT, () => {
  console.log("server running at port : " + PORT);
});
