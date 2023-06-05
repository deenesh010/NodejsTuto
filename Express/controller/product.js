const fs = require("fs");
const data = JSON.parse(fs.readFileSync("../Express/data.json"));
const products = data.products;

//create POST /products
// didn't work
// CREATE
exports.createProduct = (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
};
// READ
exports.getProduct = (req, res) => {
  res.json(products);
};
exports.getProductid = (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
};

//UPDATE
exports.upateId = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
};
