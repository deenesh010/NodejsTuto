const express = require("express");
const productController = require("../controller/product");
const routr = express.Router();

routr
  .post("/products", productController.createProduct)
  .get("/products", productController.getProduct)
  .get("/products/:id", productController.getProductid)
  .put("/products/:id", productController.upateId);

exports.routr = routr;
