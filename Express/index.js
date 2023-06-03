const fs = require("fs");
const express = require("express");
const server = express();
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

server.use(express.json());

server.use((req, res, next) => {
  console.log(req.get("user-agent"), req.method, req.ip, req.hostname);
  next();
});

server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.get("/products", (req, res) => {
  res.json(products);
});

server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.json(product);
});

//create POST /products
// didn't work
server.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

// Update PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex,1,{...req.body,id})
  res.ststus(201).json();
});

server.listen(5000, () => {
  console.log("on port 5000");
});
